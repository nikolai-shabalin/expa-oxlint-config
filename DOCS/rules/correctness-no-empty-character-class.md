# correctness/no-empty-character-class

Правило `no-empty-character-class` из набора `correctness` контролирует аспект «No Empty Character Class». Оно помогает избегать проблем в коде, связанных с требованием «no empty character class», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-empty-character-class.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-empty-character-class выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no empty character class» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-empty-character-class сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no empty character class» нарушено.
  return false;
}
```
