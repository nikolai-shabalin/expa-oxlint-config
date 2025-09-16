# style/jsx-fragments

Правило `jsx-fragments` из набора `style` контролирует аспект «Jsx Fragments». Оно помогает избегать проблем в коде, связанных с требованием «jsx fragments», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/jsx-fragments.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/jsx-fragments выполняется.

```js
function examplePassingStyle() {
  // Требование «jsx fragments» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/jsx-fragments сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «jsx fragments» нарушено.
  return false;
}
```
