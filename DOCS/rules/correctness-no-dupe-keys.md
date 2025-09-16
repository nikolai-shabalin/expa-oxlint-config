# correctness/no-dupe-keys

Правило `no-dupe-keys` из набора `correctness` контролирует аспект «No Dupe Keys». Оно помогает избегать проблем в коде, связанных с требованием «no dupe keys», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-dupe-keys.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-dupe-keys выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no dupe keys» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-dupe-keys сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no dupe keys» нарушено.
  return false;
}
```
