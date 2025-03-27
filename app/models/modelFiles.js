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
/*┌──────────────────────────────┐
  │ Проверяет доступность файлов │
  └──────────────────────────────┘*/
    getAccess(files, status) {
    // Проходим по списку файлов
        return Promise.allSettled(
        // Получаем статус файла
            files.map(file => fs.access(file))
        )
        
    // Добавляем в список путь к файлу
        .then(list => list.filter((file, i) => file.path = files[i]))
        
    // Проверяем список статусов
        .then((files) => {
        // Проверяем статус файла
            return files.filter(file => file.status == status)
            
        // Сохраняем путь
            .map(file => file.path)
        });
    }
    
/*┌────────────────────────────────────────────────────────┐
  │ Возвращает список недоступных файлов (откуда копируем) │
  └────────────────────────────────────────────────────────┘*/
    byAccess=f=>{
    // Получаем список файлов (откуда копируем)
        let files = Object.entries(PATH_FILES).map(file => path.join(
            process.argv[1], '..', '..',
            path.basename(process.argv[1]), file[0]
        ));
        
    // Возвращаем список недоступных файлов
        return this.getAccess(files, 'rejected');
    }
    
/*┌───────────────────────────────────────────────────────────┐
  │ Возвращает список уже существующих файлов (куда копируем) │
  └───────────────────────────────────────────────────────────┘*/
    toAccess=f=>{
    // Получаем список файлов (куда копируем)
        let files = Object.entries(PATH_FILES).map(file => path.join(
            process.cwd(), file[1]
        ));
        
    // Возвращаем список уже существующих файлов
        return this.getAccess(files, 'fulfilled');
    }
};
