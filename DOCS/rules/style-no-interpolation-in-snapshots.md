# style/no-interpolation-in-snapshots

Правило `no-interpolation-in-snapshots` из набора `style` контролирует аспект «No Interpolation In Snapshots». Оно помогает избегать проблем в коде, связанных с требованием «no interpolation in snapshots», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-interpolation-in-snapshots.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-interpolation-in-snapshots выполняется.

```js
function examplePassingStyle() {
  // Требование «no interpolation in snapshots» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-interpolation-in-snapshots сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no interpolation in snapshots» нарушено.
  return false;
}
```
