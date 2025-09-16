# style/prefer-string-raw

Правило `prefer-string-raw` из набора `style` контролирует аспект «Prefer String Raw». Оно помогает избегать проблем в коде, связанных с требованием «prefer string raw», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-string-raw.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-string-raw выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer string raw» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-string-raw сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer string raw» нарушено.
  return false;
}
```
