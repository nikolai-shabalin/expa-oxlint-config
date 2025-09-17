# correctness/no-unused-vars

Запрещает неиспользуемые переменные, функции и параметры функций.

## Описание

Неиспользуемые переменные обычно являются результатом незавершённого рефакторинга и занимают место в коде. Они также могут привести к путанице при чтении кода.

## Проблемные примеры

```javascript
// Неиспользуемая переменная
var unusedVar = 42;
var usedVar = 10;
console.log(usedVar);

// Неиспользуемая функция
function unusedFunction() {
    return 'never called';
}

function usedFunction() {
    return 'called somewhere';
}
usedFunction();

// Неиспользуемые параметры
function processData(data, unusedParam, anotherUnused) {
    return data.map(x => x * 2);
}

// Неиспользуемые переменные в деструктуризации
const {name, unusedAge, unusedEmail} = user;
console.log(name);

// Неиспользуемый импорт
import {usedFunction, unusedFunction} from './utils';
usedFunction();
```

## Правильные примеры

```javascript
// Все переменные используются
var usedVar = 10;
console.log(usedVar);

// Функция используется
function processData(data) {
    return data.map(x => x * 2);
}
const result = processData([1, 2, 3]);

// Только нужные свойства в деструктуризации
const {name} = user;
console.log(name);

// Или используйте rest для игнорирования
const {name, ...rest} = user;
console.log(name, rest);

// Только нужные импорты
import {usedFunction} from './utils';
usedFunction();
```

## Исключения

### Параметры функций с подчёркиванием

Параметры, начинающиеся с подчёркивания, игнорируются:

```javascript
// Разрешено - подчёркивание указывает на намеренно неиспользуемый параметр
function processData(data, _unusedCallback) {
    return data.map(x => x * 2);
}

// Полезно в колбэках
array.map((item, _index, _array) => item.name);
```

### Rest параметры

```javascript
// Разрешено - rest параметры могут быть неиспользуемыми
function myFunction(a, b, ...rest) {
    return a + b;
}

// Полезно для переопределения методов
class Child extends Parent {
    method(required, ...args) { // args может быть неиспользован
        return super.method(required);
    }
}
```

### Переменные для побочных эффектов

```javascript
// Используйте void для указания намеренного игнорирования
import './polyfill'; // побочный эффект
void unusedExpression; // намеренно игнорируется

// Или комментарий eslint-disable
var unusedVar = getValue(); // eslint-disable-line no-unused-vars
```

## Конфигурация

```json
{
    "rules": {
        "no-unused-vars": ["error", {
            "vars": "all",
            "args": "after-used",
            "ignoreRestSiblings": false,
            "argsIgnorePattern": "^_",
            "varsIgnorePattern": "^_"
        }]
    }
}
```

### Опции:

- **vars**: `"all"` проверяет все переменные, `"local"` только локальные
- **args**: `"after-used"` игнорирует неиспользуемые аргументы после последнего используемого
- **ignoreRestSiblings**: `true` игнорирует неиспользуемые переменные в rest деструктуризации
- **argsIgnorePattern**: регулярное выражение для игнорирования параметров
- **varsIgnorePattern**: регулярное выражение для игнорирования переменных

## Полезные паттерны

```javascript
// Используйте деструктуризацию с rest для извлечения нужных свойств
const {password, ...publicUser} = user;
sendToClient(publicUser); // password исключён

// Явно обозначайте неиспользуемые параметры
const handleClick = (_event) => {
    doSomething();
};

// Используйте TypeScript для типизации неиспользуемых параметров
function callback(data: Data, _context?: Context): void {
    processData(data);
}
```