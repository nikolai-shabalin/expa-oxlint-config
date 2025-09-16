# style/guard-for-in

Правило `guard-for-in` из набора `style` контролирует аспект «Guard For In». Оно помогает избегать проблем в коде, связанных с требованием «guard for in», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/guard-for-in.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/guard-for-in выполняется.

```js
function examplePassingStyle() {
  // Требование «guard for in» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/guard-for-in сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «guard for in» нарушено.
  return false;
}
```
