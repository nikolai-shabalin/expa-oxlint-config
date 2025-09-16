# style/prefer-object-from-entries

Правило `prefer-object-from-entries` из набора `style` контролирует аспект «Prefer Object From Entries». Оно помогает избегать проблем в коде, связанных с требованием «prefer object from entries», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-object-from-entries.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-object-from-entries выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer object from entries» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-object-from-entries сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer object from entries» нарушено.
  return false;
}
```
