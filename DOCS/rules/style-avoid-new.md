# style/avoid-new

Правило `avoid-new` из набора `style` контролирует аспект «Avoid New». Оно помогает избегать проблем в коде, связанных с требованием «avoid new», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/avoid-new.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/avoid-new выполняется.

```js
function examplePassingStyle() {
  // Требование «avoid new» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/avoid-new сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «avoid new» нарушено.
  return false;
}
```
