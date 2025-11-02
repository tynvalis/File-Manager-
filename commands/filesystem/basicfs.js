import { createReadStream } from 'node:fs';
import { writeFile, rename, rm } from 'node:fs/promises';
import { resolve as resolvePath, join } from 'node:path';

export const cat = async (currentPath, filePath) => {
    const fullPath = resolvePath(currentPath, filePath);
    try {
        const readableStream = createReadStream(fullPath, 'utf-8');
        readableStream.pipe(process.stdout);
        await new Promise(resolve => readableStream.on('end', () => {
            console.log(); 
            resolve();
        }));
    } catch {
        console.log('Operation failed');
    }
};

export const add = async (currentPath, fileName) => {
    try {
        await writeFile(join(currentPath, fileName), '', { flag: 'wx' });
    } catch {
        console.log('Operation failed');
    }
};

export const rn = async (currentPath, oldFile, newFile) => {
    try {
        await rename(resolvePath(currentPath, oldFile), resolvePath(currentPath, newFile));
    } catch {
        console.log('Operation failed');
    }
};

export const remove = async (currentPath, file) => {
    try {
        await rm(resolvePath(currentPath, file));
    } catch {
        console.log('Operation failed');
    }
};