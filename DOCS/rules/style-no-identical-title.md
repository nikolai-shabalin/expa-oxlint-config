# style/no-identical-title

Правило `no-identical-title` из набора `style` контролирует аспект «No Identical Title». Оно помогает избегать проблем в коде, связанных с требованием «no identical title», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-identical-title.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-identical-title выполняется.

```js
function examplePassingStyle() {
  // Требование «no identical title» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-identical-title сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no identical title» нарушено.
  return false;
}
```
