import { createInterface } from 'node:readline';
import { homedir } from 'node:os';

import { up, cd, ls } from './commands/filesystem/nav.js';
import { cat, add, rn, remove } from './commands/filesystem/basicfs.js';
import { cp, mv } from './commands/filesystem/streamOps.js';


const getUsername = () => {
    const key = '--username=';
    const user = process.argv.find((arg) => arg.startsWith(key));
    if (!user) {
        console.error('Error: Please provide --username argument!');
        process.exit(1);
    }
    return user.slice(key.length);
};

const runFileManager = async () => {
    const username = getUsername();
    let currentPath = homedir();

    console.log(`Welcome to the File Manager, ${username}!`);

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: `You are currently in ${currentPath}\n> `,
    });

    rl.prompt();

    rl.on('line', async (line) => {
        const [command, ...args] = line.trim().split(' ');

        switch (command) {
            case 'up':
                currentPath = up(currentPath);
                break;
            case 'cd':
                if (args.length) currentPath = await cd(currentPath, args[0]);
                else console.log('Invalid input');
                break;
            case 'ls':
                await ls(currentPath);
                break;
            case 'cat':
                if (args.length) await cat(currentPath, args[0]);
                else console.log('Invalid input');
                break;
            case 'add':
                if (args.length) await add(currentPath, args[0]);
                else console.log('Invalid input');
                break;
            case 'rn':
                if (args.length > 1) await rn(currentPath, args[0], args[1]);
                else console.log('Invalid input');
                break;
            case 'rm':
                if (args.length) await remove(currentPath, args[0]);
                else console.log('Invalid input');
                break;
            case 'cp':
                if (args.length > 1) await cp(currentPath, args[0], args[1]);
                else console.log('Invalid input');
                break;
            case 'mv':
                if (args.length > 1) await mv(currentPath, args[0], args[1]);
                else console.log('Invalid input');
                break;
  
            case '.exit':
                rl.close();
                return;
            default:
                console.log('Invalid input');
        }
        
     
        rl.setPrompt(`You are currently in ${currentPath}\n> `);
        rl.prompt();
    });

    rl.on('close', () => {
        console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
        process.exit(0);
    });
};

runFileManager();