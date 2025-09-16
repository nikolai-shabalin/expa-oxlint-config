# style/prefer-string-trim-start-end

Правило `prefer-string-trim-start-end` из набора `style` контролирует аспект «Prefer String Trim Start End». Оно помогает избегать проблем в коде, связанных с требованием «prefer string trim start end», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-string-trim-start-end.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-string-trim-start-end выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer string trim start end» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-string-trim-start-end сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer string trim start end» нарушено.
  return false;
}
```
