import { createReadStream, createWriteStream } from 'node:fs';
import { resolve as resolvePath, basename } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createBrotliCompress, createBrotliDecompress } from 'node:zlib';

export const compress = async (currentPath, sourceFile, destPath) => {
  try {
    const sourceFilePath = resolvePath(currentPath, sourceFile);

    const destFileName = `${basename(sourceFile)}.br`;
    const destFilePath = resolvePath(destPath, destFileName);

    const readStream = createReadStream(sourceFilePath);
    const writeStream = createWriteStream(destFilePath);
    const brotli = createBrotliCompress();

    await pipeline(readStream, brotli, writeStream);
    console.log('File compressed successfully');
  } catch (error) {
    console.log('Operation failed', error.message);
  }
};

export const decompress = async (currentPath, sourceFile, destPath) => {
  try {
    const sourceFilePath = resolvePath(currentPath, sourceFile);

    if (!sourceFile.endsWith('.br')) {
      console.log('Operation failed: Source file is not a .br archive');
      return;
    }

    const destFileName = basename(sourceFile, '.br');
    const destFilePath = resolvePath(destPath, destFileName);

    const readStream = createReadStream(sourceFilePath);
    const writeStream = createWriteStream(destFilePath);
    const brotli = createBrotliDecompress();

    await pipeline(readStream, brotli, writeStream);
    console.log('File decompressed successfully');
  } catch (error) {
    console.log('Operation failed', error.message);
  }
};
