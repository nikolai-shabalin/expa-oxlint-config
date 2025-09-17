# no-async-promise-executor

Запрещает использование async функций в качестве исполнителей Promise. Async функции уже возвращают Promise, поэтому использование их в качестве исполнителей создает ненужную вложенность и может привести к неожиданному поведению.

## Проблемные примеры

```javascript
const promise = new Promise(async (resolve, reject) => {
  const result = await someAsyncOperation();
  resolve(result);
});

const promise2 = new Promise(async function(resolve, reject) {
  try {
    const data = await fetch('/api/data');
    resolve(data);
  } catch (error) {
    reject(error);
  }
});
```

## Корректные примеры

```javascript
const promise = someAsyncOperation();

const promise2 = (async () => {
  const data = await fetch('/api/data');
  return data;
})();

const promise3 = new Promise((resolve, reject) => {
  someAsyncOperation()
    .then(resolve)
    .catch(reject);
});
```