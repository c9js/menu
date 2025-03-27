/*▄──────────────────▄
  █                  █
  █  Список модулей  █
  █                  █
  ▀──────────────────▀*/
let prompts = require('@inquirer/prompts');

/*▄────────────────────▄
  █                    █
  █  Model: None       █
  █  • Никто (логика)  █
  █                    █
  ▀────────────────────▀*/
$.Model.None = class {
/*┌───────┐
  │ Clear │
  └───────┘*/
    clear=f=>{
    // Переходим в начало
        process.stdout.write('\x1B[1;1H');
        
    // Сбрасываем цвет
        process.stdout.write('\x1B[0m');
        
    // Добавляем пробел
        process.stdout.write(' ');
        
    // Удаляем все после текущей позиции
        process.stdout.write('\x1B[J');
        
    // Удалеяем пробел
        process.stdout.write('\b');
    }
    
/*┌──────┐
  │ None │
  └──────┘*/
    none=async f=>{
        const answer = await prompts.select({
        // Вопрос
            message: 'Выберите файл:',
            
        // Значение по умолчанию
            default: 'yarn',
            
        // Список файлов
            choices: [
            // Разделитель
                new prompts.Separator('zzzzz'),
                {
                    name: 'npm',
                    value: 'npm',
                    description: 'npm is the most popular package manager',
                },
                
                {
                    name: 'yarn',
                    value: 'yarn',
                    description: 'yarn is an awesome package manager',
                },
                
            // Разделитель
                new prompts.Separator(),
                
                {
                    name: 'jspm',
                    value: 'jspm',
                    disabled: true,
                },
                
                {
                    name: 'pnpm',
                    value: 'pnpm',
                    disabled: '(pnpm is not available)',
                },
            ]
        });
        _=answer
    }
};
