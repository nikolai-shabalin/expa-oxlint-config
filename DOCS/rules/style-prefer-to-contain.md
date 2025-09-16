# style/prefer-to-contain

Правило `prefer-to-contain` из набора `style` контролирует аспект «Prefer To Contain». Оно помогает избегать проблем в коде, связанных с требованием «prefer to contain», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-to-contain.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-to-contain выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer to contain» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-to-contain сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer to contain» нарушено.
  return false;
}
```
