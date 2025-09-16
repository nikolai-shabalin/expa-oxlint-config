# nursery/no-map-spread

Правило `no-map-spread` из набора `nursery` контролирует аспект «No Map Spread». Оно помогает избегать проблем в коде, связанных с требованием «no map spread», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-map-spread.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило nursery/no-map-spread выполняется.

```js
function examplePassingNursery() {
  // Требование «no map spread» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило nursery/no-map-spread сигнализирует о проблеме.

```js
function exampleFailingNursery() {
  // Требование «no map spread» нарушено.
  return false;
}
```
