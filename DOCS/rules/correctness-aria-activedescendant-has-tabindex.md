# correctness/aria-activedescendant-has-tabindex

Правило `aria-activedescendant-has-tabindex` из набора `correctness` контролирует аспект «Aria Activedescendant Has Tabindex». Оно помогает избегать проблем в коде, связанных с требованием «aria activedescendant has tabindex», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/aria-activedescendant-has-tabindex.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/aria-activedescendant-has-tabindex выполняется.

```js
function examplePassingCorrectness() {
  // Требование «aria activedescendant has tabindex» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/aria-activedescendant-has-tabindex сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «aria activedescendant has tabindex» нарушено.
  return false;
}
```
