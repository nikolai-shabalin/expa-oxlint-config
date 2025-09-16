# style/no-mutable-exports

Правило `no-mutable-exports` из набора `style` контролирует аспект «No Mutable Exports». Оно помогает избегать проблем в коде, связанных с требованием «no mutable exports», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-mutable-exports.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-mutable-exports выполняется.

```js
function examplePassingStyle() {
  // Требование «no mutable exports» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-mutable-exports сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no mutable exports» нарушено.
  return false;
}
```
