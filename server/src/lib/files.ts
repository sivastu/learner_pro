import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
    region: process.env.REGION || 'ap-south-1',
    // credentials: {
    //     accessKeyId: process.env.ACCESS_KEY_ID || '',
    //     secretAccessKey: process.env.SECRET_ACCESS_KEY || ''
    // }
});

export const fileUpload = async (file : any) => {
    try {
        if (!file || !file.buffer) {
            throw new Error('Invalid file object. File buffer required.');
        }
        const params = {
            Bucket: process.env.BUCKET_NAME || 'learnerpro',
            Key: file.name,
            Body: file.buffer,
        };
       
        await s3Client.send(new PutObjectCommand(params));
        console.log('File uploaded successfully');
        return {
            ok: true,
            filename: params.Key
        }
    } catch (error) {
        throw new Error('Error uploading file:' + error);
    }
};
