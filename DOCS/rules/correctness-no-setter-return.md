# correctness/no-setter-return

Правило `no-setter-return` из набора `correctness` контролирует аспект «No Setter Return». Оно помогает избегать проблем в коде, связанных с требованием «no setter return», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-setter-return.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-setter-return выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no setter return» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-setter-return сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no setter return» нарушено.
  return false;
}
```
