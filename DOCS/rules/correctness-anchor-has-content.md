# correctness/anchor-has-content

Правило `anchor-has-content` из набора `correctness` контролирует аспект «Anchor Has Content». Оно помогает избегать проблем в коде, связанных с требованием «anchor has content», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/anchor-has-content.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/anchor-has-content выполняется.

```js
function examplePassingCorrectness() {
  // Требование «anchor has content» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/anchor-has-content сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «anchor has content» нарушено.
  return false;
}
```
