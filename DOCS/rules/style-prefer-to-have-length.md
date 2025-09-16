# style/prefer-to-have-length

Правило `prefer-to-have-length` из набора `style` контролирует аспект «Prefer To Have Length». Оно помогает избегать проблем в коде, связанных с требованием «prefer to have length», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-to-have-length.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-to-have-length выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer to have length» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-to-have-length сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer to have length» нарушено.
  return false;
}
```
