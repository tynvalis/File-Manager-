const args = process.argv.slice(2);
const usernameArg = args.find(arg => arg.startsWith('--username='));
const username = usernameArg ? usernameArg.split('=')[1] : 'Anonymous';

let currentDirectory = homedir();

console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently in ${currentDirectory}`);


const rl = createInterface({
 input: process.stdin,
 output: process.stdout,
 prompt: '> '
});

rl.prompt();

rl.on('line', async (line) => {
 const [command, ...args] = line.trim().split(' ');

 switch (command) {
 
 default:
 console.log('Invalid input');
 break;
 }

 console.log(`You are currently in ${currentDirectory}`);
 rl.prompt();
}).on('close', () => {
 console.log(`Thank you for using File Manager, ${username}, goodbye!`);
 process.exit(0);
});