# style/prefer-global-this

Правило `prefer-global-this` из набора `style` контролирует аспект «Prefer Global This». Оно помогает избегать проблем в коде, связанных с требованием «prefer global this», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-global-this.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-global-this выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer global this» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-global-this сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer global this» нарушено.
  return false;
}
```
