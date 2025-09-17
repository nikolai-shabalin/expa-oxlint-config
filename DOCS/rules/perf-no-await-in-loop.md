# perf/no-await-in-loop

Запрещает использование await внутри циклов для улучшения производительности.

## Описание

Использование await внутри циклов может привести к последовательному выполнению асинхронных операций, что значительно замедляет выполнение кода. Вместо этого следует использовать Promise.all() или Promise.allSettled() для параллельного выполнения.

## Проблемные примеры

```javascript
// Последовательное выполнение - медленно
async function processItems(items) {
    const results = [];
    for (const item of items) {
        const result = await processItem(item); // Ждёт каждую операцию
        results.push(result);
    }
    return results;
}

// В цикле while
async function example() {
    let i = 0;
    while (i < 10) {
        await delay(100); // Каждая итерация ждёт предыдущую
        i++;
    }
}

// В цикле for
async function example2() {
    for (let i = 0; i < items.length; i++) {
        await fetch(`/api/item/${items[i].id}`);
    }
}
```

## Правильные примеры

```javascript
// Параллельное выполнение - быстро
async function processItems(items) {
    const promises = items.map(item => processItem(item));
    const results = await Promise.all(promises);
    return results;
}

// Или с Promise.allSettled для обработки ошибок
async function processItemsSafely(items) {
    const promises = items.map(item => processItem(item));
    const results = await Promise.allSettled(promises);
    return results.map(result => 
        result.status === 'fulfilled' ? result.value : null
    );
}

// Если нужна последовательность, используйте reduce
async function processSequentially(items) {
    return items.reduce(async (previousPromise, item) => {
        const results = await previousPromise;
        const result = await processItem(item);
        return [...results, result];
    }, Promise.resolve([]));
}

// Для простых случаев без await в цикле
function processSync(items) {
    return items.map(item => processItem(item)); // Возвращает массив промисов
}
```

## Когда отключать

Это правило можно отключить, если:
- Вам действительно нужно последовательное выполнение операций
- Параллельное выполнение может перегрузить систему (например, API с ограничением запросов)
- Результат каждой итерации зависит от предыдущей

```javascript
// Пример, когда последовательность важна
async function transferMoney(transactions) {
    for (const transaction of transactions) {
        await processTransaction(transaction); // Каждая транзакция должна завершиться
    }
}
```