import AWS from 'aws-sdk';
import dotenv from 'dotenv';

// Load environment variables from .env file in development
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
    throw new Error('AWS credentials not found');
}

if (!process.env.AWS_REGION) {
    throw new Error('AWS region not found');
}

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME || 'turbin3-jcleira';
const BUCKET_PREFIX = process.env.AWS_S3_BUCKET_PREFIX || 'madrug/';

export { s3, BUCKET_NAME, BUCKET_PREFIX };
