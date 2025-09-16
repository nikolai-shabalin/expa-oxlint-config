# style/prefer-numeric-literals

Правило `prefer-numeric-literals` из набора `style` контролирует аспект «Prefer Numeric Literals». Оно помогает избегать проблем в коде, связанных с требованием «prefer numeric literals», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-numeric-literals.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-numeric-literals выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer numeric literals» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-numeric-literals сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer numeric literals» нарушено.
  return false;
}
```
