# nursery/no-return-in-finally

Правило `no-return-in-finally` из набора `nursery` контролирует аспект «No Return In Finally». Оно помогает избегать проблем в коде, связанных с требованием «no return in finally», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-return-in-finally.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило nursery/no-return-in-finally выполняется.

```js
function examplePassingNursery() {
  // Требование «no return in finally» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило nursery/no-return-in-finally сигнализирует о проблеме.

```js
function exampleFailingNursery() {
  // Требование «no return in finally» нарушено.
  return false;
}
```
