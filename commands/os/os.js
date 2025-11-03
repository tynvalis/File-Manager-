import { EOL, cpus, homedir, userInfo, arch } from 'node:os';

export const getOsInfo = (flag) => {
    switch (flag) {
        case '--EOL':
            console.log(JSON.stringify(EOL));
            break;
        case '--cpus':
            const cpuData = cpus();
            console.log(`Overall amount of CPUS: ${cpuData.length}`);
            console.table(cpuData.map(c => ({ model: c.model, clock_rate_GHz: c.speed / 1000 })));
            break;
        case '--homedir':
            console.log(homedir());
            break;
        case '--username':
            console.log(userInfo().username);
            break;
        case '--architecture':
            console.log(arch());
            break;
        default:
            console.log('Invalid input');
    }
};