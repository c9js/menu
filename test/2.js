#!/usr/bin/env node
/*────────────────────────────────────────────────────────────────────────────────────────────────*/

Object.defineProperties(global,{__:{set:v=>process.exit(_=v)},_:{set:console.log}});
Object.defineProperty(global, '$', {value:{}});

/*────────────────────────────────────────────────────────────────────────────────────────────────*/

let fs = require('fs').promises;
let path = require('path');
[
    ['assets/gitignore', '.gitignore']
].forEach(async (file) => {
    let source = path.join(process.argv[1], '../..', '45cbac4f54690161', file[0]);
    let target = path.join(file[1]);
    _=source
    _=target
    _=''
    
// Файл-источник не найден
    // if (!fs.existsSync(source)) {
        // console.log([source, 'Ошибка! Файл не найден!'].join('\n'));
        // return;
    // }
    
// Цельевой-файл уже существует
    if (fs.access(target)) {
        _=await fs.access(target)
        console.log([target, 'Ошибка! Файл уже существует!'].join('\n'));
        return;
    }
    
// Файл успешно скопирован
    // fs.copyFileSync(source, target, fs.constants.COPYFILE_EXCL);
    // console.log([target, 'Файл успешно скопирован!'].join('\n'));
});


let files = [
    './assets/.gitignore'
];

// Выбраны все файлы
    if (process.argv[2] == '.') {
        // _=[process.argv[2], process.argv[3]]
    }
    
// Файлы не выбраны
    else {
        // _=[process.argv[2], process.argv[3]]
    }
    