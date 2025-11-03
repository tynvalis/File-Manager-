import { createReadStream, createWriteStream } from 'node:fs';
import { rm } from 'node:fs/promises';
import { resolve as resolvePath, join, basename } from 'node:path';
import { pipeline } from 'node:stream/promises';

export const cp = async (currentPath, sourceFile, destDir) => {
    try {
        const sourcePath = resolvePath(currentPath, sourceFile);
        const destPath = join(resolvePath(currentPath, destDir), basename(sourcePath));

        const readStream = createReadStream(sourcePath);
        const writeStream = createWriteStream(destPath);
        await pipeline(readStream, writeStream);
    } catch {
        console.log('Operation failed');
    }
};

export const mv = async (currentPath, sourceFile, destDir) => {
     try {
        const sourcePath = resolvePath(currentPath, sourceFile);
        const destPath = join(resolvePath(currentPath, destDir), basename(sourcePath));

        const readStream = createReadStream(sourcePath);
        const writeStream = createWriteStream(destPath);
        
        await pipeline(readStream, writeStream);
        await rm(sourcePath);
    } catch {
        console.log('Operation failed');
    }
};