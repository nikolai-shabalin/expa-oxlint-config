# style/prefer-strict-equal

Правило `prefer-strict-equal` из набора `style` контролирует аспект «Prefer Strict Equal». Оно помогает избегать проблем в коде, связанных с требованием «prefer strict equal», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-strict-equal.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-strict-equal выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer strict equal» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-strict-equal сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer strict equal» нарушено.
  return false;
}
```
