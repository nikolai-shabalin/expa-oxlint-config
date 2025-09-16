# correctness/no-aria-hidden-on-focusable

Правило `no-aria-hidden-on-focusable` из набора `correctness` контролирует аспект «No Aria Hidden On Focusable». Оно помогает избегать проблем в коде, связанных с требованием «no aria hidden on focusable», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-aria-hidden-on-focusable.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-aria-hidden-on-focusable выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no aria hidden on focusable» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-aria-hidden-on-focusable сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no aria hidden on focusable» нарушено.
  return false;
}
```
