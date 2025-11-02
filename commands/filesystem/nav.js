import { readdir, stat } from 'node:fs/promises';
import { join, resolve as resolvePath, parse } from 'node:path';
import { existsSync } from 'node:fs';

export const up = (currentPath) => {
    const { root } = parse(currentPath);
    const parentDir = resolvePath(currentPath, '..');
   
    if (currentPath !== root) {
        return parentDir;
    }
    return currentPath;
};

export const cd = async (currentPath, newDir) => {
    const newPath = resolvePath(currentPath, newDir);
    try {
        const stats = await stat(newPath);
        if (stats.isDirectory()) {
            return newPath;
        } else {
            console.log('Operation failed');
            return currentPath;
        }
    } catch {
        console.log('Operation failed');
        return currentPath;
    }
};

export const ls = async (currentPath) => {
    try {
        const items = await readdir(currentPath);
        const content = [];

        for (const item of items) {
            const stats = await stat(join(currentPath, item));
            content.push({
                Name: item,
                Type: stats.isDirectory() ? 'directory' : 'file',
            });
        }

        content.sort((a, b) => {
            if (a.Type === b.Type) return a.Name.localeCompare(b.Name);
            return a.Type === 'directory' ? -1 : 1;
        });

        console.table(content);
    } catch {
        console.log('Operation failed');
    }
};