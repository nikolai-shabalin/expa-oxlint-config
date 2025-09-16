# style/switch-case-braces

Правило `switch-case-braces` из набора `style` контролирует аспект «Switch Case Braces». Оно помогает избегать проблем в коде, связанных с требованием «switch case braces», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/switch-case-braces.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/switch-case-braces выполняется.

```js
function examplePassingStyle() {
  // Требование «switch case braces» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/switch-case-braces сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «switch case braces» нарушено.
  return false;
}
```
