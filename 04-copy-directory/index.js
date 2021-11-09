const { copyFile, mkdir, rm, readdir } = require('fs/promises');
const path = require('path');

const dirPath = path.join(__dirname, 'files');
const dirPathCopy = `${dirPath}-copy`;

async function delDir(src) {
    await rm(src, {force: true, recursive: true});
}

async function copyDir(src, dest) {

    await delDir(dest);

    await mkdir(dest, { recursive: true });

    const dirFiles = await readdir(src, {withFileTypes: true});

    dirFiles.forEach((item) => {
        
        if (item.isFile() === true) {
            copyFile(`${src}/${item.name}`, `${dest}/${item.name}`);
            console.log(`${item.name} was copied`);
            
        } else if (item.isDirectory() === true) {
            copyDir(`${src}/${item.name}`, `${dest}/${item.name}`);
        }
    })

}

copyDir(dirPath, dirPathCopy);
