# style/default-case-last

Правило `default-case-last` из набора `style` контролирует аспект «Default Case Last». Оно помогает избегать проблем в коде, связанных с требованием «default case last», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/default-case-last.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/default-case-last выполняется.

```js
function examplePassingStyle() {
  // Требование «default case last» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/default-case-last сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «default case last» нарушено.
  return false;
}
```
