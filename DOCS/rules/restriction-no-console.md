# no-console

Запрещает использование методов объекта `console`. В production коде операторы console могут считаться нежелательными и должны быть удалены или заменены на соответствующие системы логирования.

## Проблемные примеры

```javascript
console.log('Debug message');

console.error('Error occurred');

console.warn('Warning message');

console.info('Info message');

console.debug('Debug info');
```

## Корректные примеры

```javascript
// Используйте систему логирования
import logger from './logger';

logger.info('Info message');
logger.error('Error occurred');
logger.debug('Debug message');

// Или условное логирование
if (process.env.NODE_ENV === 'development') {
  console.log('Debug message');
}

// Исключения для определенных случаев
/* eslint-disable no-console */
console.error('Critical error that should always be shown');
/* eslint-enable no-console */
```