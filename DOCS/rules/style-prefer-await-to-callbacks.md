# style/prefer-await-to-callbacks

Правило `prefer-await-to-callbacks` из набора `style` контролирует аспект «Prefer Await To Callbacks». Оно помогает избегать проблем в коде, связанных с требованием «prefer await to callbacks», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-await-to-callbacks.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-await-to-callbacks выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer await to callbacks» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-await-to-callbacks сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer await to callbacks» нарушено.
  return false;
}
```
