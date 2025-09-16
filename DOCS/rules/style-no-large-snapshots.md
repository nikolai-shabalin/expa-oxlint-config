# style/no-large-snapshots

Правило `no-large-snapshots` из набора `style` контролирует аспект «No Large Snapshots». Оно помогает избегать проблем в коде, связанных с требованием «no large snapshots», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-large-snapshots.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-large-snapshots выполняется.

```js
function examplePassingStyle() {
  // Требование «no large snapshots» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-large-snapshots сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no large snapshots» нарушено.
  return false;
}
```
