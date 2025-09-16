# nursery/no-undef

Правило `no-undef` из набора `nursery` контролирует аспект «No Undef». Оно помогает избегать проблем в коде, связанных с требованием «no undef», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-undef.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило nursery/no-undef выполняется.

```js
function examplePassingNursery() {
  // Требование «no undef» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило nursery/no-undef сигнализирует о проблеме.

```js
function exampleFailingNursery() {
  // Требование «no undef» нарушено.
  return false;
}
```
