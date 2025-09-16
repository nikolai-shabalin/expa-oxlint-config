# style/no-multi-str

Правило `no-multi-str` из набора `style` контролирует аспект «No Multi Str». Оно помогает избегать проблем в коде, связанных с требованием «no multi str», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-multi-str.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-multi-str выполняется.

```js
function examplePassingStyle() {
  // Требование «no multi str» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-multi-str сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no multi str» нарушено.
  return false;
}
```
