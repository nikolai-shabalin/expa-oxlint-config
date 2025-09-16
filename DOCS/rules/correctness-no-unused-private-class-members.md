# correctness/no-unused-private-class-members

Правило `no-unused-private-class-members` из набора `correctness` контролирует аспект «No Unused Private Class Members». Оно помогает избегать проблем в коде, связанных с требованием «no unused private class members», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unused-private-class-members.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-unused-private-class-members выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no unused private class members» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-unused-private-class-members сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no unused private class members» нарушено.
  return false;
}
```
