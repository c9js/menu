/*▄──────────────────▄
  █                  █
  █  Список модулей  █
  █                  █
  ▀──────────────────▀*/
let fs = require('fs').promises;
let path = require('path');

/*▄──────────────────────────▄
  █                          █
  █  Model: Auth             █
  █  • Авторизация (логика)  █
  █                          █
  ▀──────────────────────────▀*/
$.Model.Files = class {
/*┌─────────────────────────────────────────────┐
  │ Проверяем доступ к файлам (откуда копируем) │
  └─────────────────────────────────────────────┘*/
    byAccess=f=>{
    // Получаем список файлов
        let files = Object.entries(PATH_FILES).map(file => path.join(
            process.argv[1], '..', '..',
            path.basename(process.argv[1]),
            file[0]
        ));
        
    // Проходим по списку файлов
        Promise.allSettled(
        // Проверяем доступность
            files.map(file => fs.access(file))
        )
        
    // Получаем список недоступных файлов
        .then(r => r.filter(r => r.status == 'rejected').map(r => r.reason.path))
        
    // Выводим список недоступных файлов
        .then((errorFiles) => {
            if (errorFiles.length) {
                return this.error($.text `error:access`, ...errorFiles);
            }
        })
        
    // Копируем файлы
        .then(e => {
            _='good'
        })
        
    // Выводи сообщение об ошибке
        .catch(this.catch)
    }
    
/*┌───────────────────────────────────────────┐
  │ Проверяем доступ к файлам (куда копируем) │
  └───────────────────────────────────────────┘*/
    toAccess=f=>{
    // Получаем список файлов
        let files = Object.entries(PATH_FILES).map(file => path.join(
            process.cwd(), file[1]
        ));
        
    // Проходим по списку файлов
        Promise.allSettled(
        // Проверяем доступность
            files.map(file => fs.access(file))
        )
        
    // Добавляем путь
        .then(r => r.filter((r, i) => r.path = files[i]))
        
    // Получаем список недоступных файлов
        // .then(r => r.filter(r => r.status == 'fulfilled').map(r => r.reason.path))
        // .then(r => r.map((r, i) => r).filter((r, i) => {
        //     _=[i, r.status]
        // }))
        .then(r => r.filter(r => r.status == 'fulfilled').forEach(r => _=r))
        
    // Выводим список недоступных файлов
        // .then((errorFiles) => {
        //     if (errorFiles.length) {
        //         return this.error($.text `error:access`, ...errorFiles);
        //     }
        // })
        
    // Копируем файлы
        // .then(e => {
        //     _='good'
        // })
        
    // Выводи сообщение об ошибке
        // .catch(this.catch)
    }
    
/*┌─────────────────────────┐
  │ Обрабатывает исключение │
  └─────────────────────────┘*/
    catch(error) {
        _=error
    }
    
/*┌─────────────────────┐
  │ Обрабатывает ошибку │
  └─────────────────────┘*/
    error(...error) {
        return Promise.reject(error.join('\n'));
    }
};
