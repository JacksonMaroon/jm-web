#!/usr/bin/env node
/**
 * Google Instant Indexing API Script
 *
 * This script notifies Google to immediately crawl and index updated URLs.
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to Google Cloud Console (https://console.cloud.google.com)
 * 2. Create a new project or select existing one
 * 3. Enable "Web Search Indexing API" (Indexing API)
 * 4. Create a Service Account:
 *    - Go to IAM & Admin > Service Accounts
 *    - Create new service account
 *    - Download JSON key file
 * 5. Go to Google Search Console (https://search.google.com/search-console)
 *    - Select your property (jacksonmaroon.com)
 *    - Go to Settings > Users and permissions
 *    - Add the service account email as Owner
 * 6. Set environment variable:
 *    export GOOGLE_APPLICATION_CREDENTIALS="/path/to/service-account-key.json"
 *    Or for Vercel: Add the key content as GOOGLE_SERVICE_ACCOUNT_KEY env var
 *
 * Usage:
 *   node scripts/index-urls.mjs                    # Index all sitemap URLs
 *   node scripts/index-urls.mjs --url https://...  # Index specific URL
 *   node scripts/index-urls.mjs --type URL_DELETED # Notify of URL removal
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuration
const SITE_URL = 'https://jacksonmaroon.com';
const INDEXING_API_ENDPOINT = 'https://indexing.googleapis.com/v3/urlNotifications:publish';

// URLs to index (from sitemap)
const URLS_TO_INDEX = [
  `${SITE_URL}/`,
  `${SITE_URL}/about`,
  `${SITE_URL}/thoughts/nexo`,
  `${SITE_URL}/thoughts/ai`,
];

/**
 * Get access token using service account credentials
 */
async function getAccessToken(credentials) {
  const jwt = createJWT(credentials);

  return new Promise((resolve, reject) => {
    const postData = new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    }).toString();

    const options = {
      hostname: 'oauth2.googleapis.com',
      path: '/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.access_token) {
            resolve(response.access_token);
          } else {
            reject(new Error(`Token error: ${JSON.stringify(response)}`));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

/**
 * Create JWT for Google OAuth2
 */
function createJWT(credentials) {
  const header = {
    alg: 'RS256',
    typ: 'JWT'
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600
  };

  const base64Header = base64urlEncode(JSON.stringify(header));
  const base64Payload = base64urlEncode(JSON.stringify(payload));
  const signatureInput = `${base64Header}.${base64Payload}`;

  const crypto = await import('crypto');
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(signatureInput);
  const signature = sign.sign(credentials.private_key, 'base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');

  return `${signatureInput}.${signature}`;
}

/**
 * Base64 URL encode
 */
function base64urlEncode(str) {
  return Buffer.from(str)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

/**
 * Notify Google Indexing API about a URL
 */
async function indexUrl(accessToken, url, type = 'URL_UPDATED') {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      url: url,
      type: type // URL_UPDATED or URL_DELETED
    });

    const urlObj = new URL(INDEXING_API_ENDPOINT);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          resolve({ url, status: res.statusCode, response });
        } catch (e) {
          resolve({ url, status: res.statusCode, response: data });
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

/**
 * Load service account credentials
 */
function loadCredentials() {
  // Try environment variable first (for Vercel/CI)
  if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
    try {
      return JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
    } catch (e) {
      console.error('Failed to parse GOOGLE_SERVICE_ACCOUNT_KEY:', e.message);
    }
  }

  // Try GOOGLE_APPLICATION_CREDENTIALS file path
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    try {
      const content = fs.readFileSync(process.env.GOOGLE_APPLICATION_CREDENTIALS, 'utf-8');
      return JSON.parse(content);
    } catch (e) {
      console.error('Failed to load credentials file:', e.message);
    }
  }

  // Try local credentials file
  const localPath = path.join(__dirname, '..', 'google-credentials.json');
  if (fs.existsSync(localPath)) {
    try {
      const content = fs.readFileSync(localPath, 'utf-8');
      return JSON.parse(content);
    } catch (e) {
      console.error('Failed to load local credentials:', e.message);
    }
  }

  return null;
}

/**
 * Main function
 */
async function main() {
  console.log('Google Instant Indexing API\n');

  // Parse command line arguments
  const args = process.argv.slice(2);
  let specificUrl = null;
  let indexType = 'URL_UPDATED';

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--url' && args[i + 1]) {
      specificUrl = args[i + 1];
      i++;
    } else if (args[i] === '--type' && args[i + 1]) {
      indexType = args[i + 1];
      i++;
    }
  }

  const urlsToIndex = specificUrl ? [specificUrl] : URLS_TO_INDEX;

  // Load credentials
  const credentials = loadCredentials();

  if (!credentials) {
    console.log('No credentials found. Running in dry-run mode.\n');
    console.log('To enable indexing, set up credentials as described in this script.\n');
    console.log('URLs that would be indexed:');
    urlsToIndex.forEach(url => console.log(`  - ${url}`));
    console.log(`\nType: ${indexType}`);
    console.log('\nSetup instructions:');
    console.log('1. Create a Google Cloud project');
    console.log('2. Enable the Web Search Indexing API');
    console.log('3. Create a service account and download the JSON key');
    console.log('4. Add the service account email as Owner in Search Console');
    console.log('5. Set GOOGLE_APPLICATION_CREDENTIALS or GOOGLE_SERVICE_ACCOUNT_KEY');
    return;
  }

  console.log(`Service account: ${credentials.client_email}`);
  console.log(`Indexing ${urlsToIndex.length} URL(s)...\n`);

  try {
    // Get access token
    const accessToken = await getAccessToken(credentials);
    console.log('Access token obtained\n');

    // Index each URL
    const results = [];
    for (const url of urlsToIndex) {
      try {
        const result = await indexUrl(accessToken, url, indexType);
        results.push(result);

        if (result.status === 200) {
          console.log(`[OK] ${url}`);
        } else {
          console.log(`[${result.status}] ${url}: ${JSON.stringify(result.response)}`);
        }
      } catch (error) {
        console.log(`[ERROR] ${url}: ${error.message}`);
        results.push({ url, status: 'error', error: error.message });
      }
    }

    // Summary
    console.log('\n--- Summary ---');
    const successful = results.filter(r => r.status === 200).length;
    console.log(`Indexed: ${successful}/${urlsToIndex.length}`);

    if (successful < urlsToIndex.length) {
      console.log('\nNote: Failed requests may be due to quota limits or verification issues.');
      console.log('Check that the service account is added as Owner in Search Console.');
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

// Use dynamic import for crypto to support ESM
async function createJWTAsync(credentials) {
  const crypto = await import('crypto');

  const header = {
    alg: 'RS256',
    typ: 'JWT'
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600
  };

  const base64Header = base64urlEncode(JSON.stringify(header));
  const base64Payload = base64urlEncode(JSON.stringify(payload));
  const signatureInput = `${base64Header}.${base64Payload}`;

  const sign = crypto.createSign('RSA-SHA256');
  sign.update(signatureInput);
  const signature = sign.sign(credentials.private_key, 'base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');

  return `${signatureInput}.${signature}`;
}

// Override getAccessToken to use async JWT creation
async function getAccessTokenAsync(credentials) {
  const jwt = await createJWTAsync(credentials);

  return new Promise((resolve, reject) => {
    const postData = new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    }).toString();

    const options = {
      hostname: 'oauth2.googleapis.com',
      path: '/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.access_token) {
            resolve(response.access_token);
          } else {
            reject(new Error(`Token error: ${JSON.stringify(response)}`));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

// Update main to use async version
async function runIndexing() {
  console.log('Google Instant Indexing API\n');

  // Parse command line arguments
  const args = process.argv.slice(2);
  let specificUrl = null;
  let indexType = 'URL_UPDATED';

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--url' && args[i + 1]) {
      specificUrl = args[i + 1];
      i++;
    } else if (args[i] === '--type' && args[i + 1]) {
      indexType = args[i + 1];
      i++;
    }
  }

  const urlsToIndex = specificUrl ? [specificUrl] : URLS_TO_INDEX;

  // Load credentials
  const credentials = loadCredentials();

  if (!credentials) {
    console.log('No credentials found. Running in dry-run mode.\n');
    console.log('To enable indexing, set up credentials as described in this script.\n');
    console.log('URLs that would be indexed:');
    urlsToIndex.forEach(url => console.log(`  - ${url}`));
    console.log(`\nType: ${indexType}`);
    console.log('\n--- Setup Instructions ---');
    console.log('1. Go to Google Cloud Console (https://console.cloud.google.com)');
    console.log('2. Create a project and enable "Web Search Indexing API"');
    console.log('3. Create a Service Account (IAM & Admin > Service Accounts)');
    console.log('4. Download the JSON key file');
    console.log('5. Go to Google Search Console for jacksonmaroon.com');
    console.log('6. Add the service account email as Owner (Settings > Users)');
    console.log('7. Set one of these environment variables:');
    console.log('   - GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json');
    console.log('   - GOOGLE_SERVICE_ACCOUNT_KEY=\'{"type":"service_account",...}\'');
    return;
  }

  console.log(`Service account: ${credentials.client_email}`);
  console.log(`Indexing ${urlsToIndex.length} URL(s)...\n`);

  try {
    // Get access token
    const accessToken = await getAccessTokenAsync(credentials);
    console.log('Access token obtained\n');

    // Index each URL
    const results = [];
    for (const url of urlsToIndex) {
      try {
        const result = await indexUrl(accessToken, url, indexType);
        results.push(result);

        if (result.status === 200) {
          console.log(`[OK] ${url}`);
        } else {
          console.log(`[${result.status}] ${url}: ${JSON.stringify(result.response)}`);
        }
      } catch (error) {
        console.log(`[ERROR] ${url}: ${error.message}`);
        results.push({ url, status: 'error', error: error.message });
      }
    }

    // Summary
    console.log('\n--- Summary ---');
    const successful = results.filter(r => r.status === 200).length;
    console.log(`Indexed: ${successful}/${urlsToIndex.length}`);

    if (successful < urlsToIndex.length) {
      console.log('\nNote: Failed requests may be due to quota limits or verification issues.');
      console.log('Check that the service account is added as Owner in Search Console.');
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

runIndexing().catch(console.error);
