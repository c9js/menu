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
/*┌────────────────────────────┐
  │ Возвращает список статусов │
  └────────────────────────────┘*/
/*┌──────────────────────────────┐
  │ Проверяет доступность файлов │
  └──────────────────────────────┘*/
    getStatusList(files, status) {
    // Проходим по списку файлов
        return Promise.allSettled(
        // Получаем статус файла
            files.map(file => fs.access(file))
        )
        
    // Добавляем в список путь к файлу
        .then(list => list.filter((file, i) => file.path = files[i]))
        
    // Проверяем список статусов
        .then((files) => {
        // Проверяем статус
            return files.filter(file => file.status == status)
            
        // Сохраняем путь
            .map(file => file.path)
        })
        
    // Возвращает список файлов
        .then((files) => {
            if (files.length) {
                return Promise.reject(error.join('\n'));
                return this.error($.text `error:access`, ...errorFiles);
            }
        })
    }
    
/*┌─────────────────────────────────────────────┐
  │ Проверяет доступ к файлам (откуда копируем) │
  └─────────────────────────────────────────────┘*/
    byAccess=f=>{
    // Получаем список файлов (откуда копируем)
        let files = Object.entries(PATH_FILES).map(file => path.join(
            process.argv[1], '..', '..',
            path.basename(process.argv[1]), file[0]
        ));
        
    // Получаем список статусов
        return this.getStatusList(files, 'rejected')
        
    // Выводим список недоступных файлов
    // Выводим список существующих файлов
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
  │ Проверяет доступ к файлам (куда копируем) │
  └───────────────────────────────────────────┘*/
    toAccess=f=>{
    // Получаем список файлов (куда копируем)
        let files = Object.entries(PATH_FILES).map(file => path.join(
            process.cwd(), file[1]
        ));
        
    // Получаем список статусов
        return this.getStatusList(files, 'fulfilled')
        
    // Обрабатываем ответ
        .then(files => files.length && this.error)
        
    // Копируем файлы
        .then(e => {
            _='good'
        })
        
    // Выводи сообщение об ошибке
        .catch(this.catch)
    }
    
/*┌────────────────────┐
  │ Обрабатывает ответ │
  └────────────────────┘*/
    response(errorFiles) {
        if (errorFiles.length) {
            return this.error($.text `error:exists`, ...errorFiles);
        }
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
