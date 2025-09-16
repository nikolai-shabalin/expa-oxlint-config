# style/prefer-object-has-own

Правило `prefer-object-has-own` из набора `style` контролирует аспект «Prefer Object Has Own». Оно помогает избегать проблем в коде, связанных с требованием «prefer object has own», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-object-has-own.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-object-has-own выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer object has own» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-object-has-own сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer object has own» нарушено.
  return false;
}
```
