# no-await-in-loop

Запрещает использование `await` внутри циклов. Использование `await` в циклах может привести к неэффективному последовательному выполнению асинхронных операций вместо параллельного.

## Проблемные примеры

```javascript
async function processItems(items) {
  for (const item of items) {
    await processItem(item); // последовательная обработка
  }
}

async function fetchData(urls) {
  const results = [];
  for (let i = 0; i < urls.length; i++) {
    results.push(await fetch(urls[i])); // медленно
  }
  return results;
}
```

## Корректные примеры

```javascript
async function processItems(items) {
  const promises = items.map(item => processItem(item));
  await Promise.all(promises); // параллельная обработка
}

async function fetchData(urls) {
  const promises = urls.map(url => fetch(url));
  return Promise.all(promises); // быстрее
}

// Если нужна последовательная обработка
async function processItemsSequentially(items) {
  const results = [];
  for (const item of items) {
    results.push(await processItem(item)); // осознанный выбор
  }
  return results;
}
```