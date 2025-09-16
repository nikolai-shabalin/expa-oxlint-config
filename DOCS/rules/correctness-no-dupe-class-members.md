# correctness/no-dupe-class-members

Правило `no-dupe-class-members` из набора `correctness` контролирует аспект «No Dupe Class Members». Оно помогает избегать проблем в коде, связанных с требованием «no dupe class members», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-dupe-class-members.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-dupe-class-members выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no dupe class members» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-dupe-class-members сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no dupe class members» нарушено.
  return false;
}
```
