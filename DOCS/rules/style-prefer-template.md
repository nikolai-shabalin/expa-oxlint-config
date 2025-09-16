# style/prefer-template

Правило `prefer-template` из набора `style` контролирует аспект «Prefer Template». Оно помогает избегать проблем в коде, связанных с требованием «prefer template», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-template.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-template выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer template» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-template сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer template» нарушено.
  return false;
}
```
