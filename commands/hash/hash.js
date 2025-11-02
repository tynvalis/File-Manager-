import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve as resolvePath } from 'node:path';

export const calculateHash = async (currentPath, filePath) => {
    try {
        const fullPath = resolvePath(currentPath, filePath);
        const readStream = createReadStream(fullPath);
        const hash = createHash('sha256');
        
        readStream.pipe(hash).setEncoding('hex').pipe(process.stdout);
        
        await new Promise(resolve => readStream.on('end', () => {
             console.log(); 
             resolve();
        }));
    } catch {
        console.log('Operation failed');
    }
};