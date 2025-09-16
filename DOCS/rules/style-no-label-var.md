# style/no-label-var

Правило `no-label-var` из набора `style` контролирует аспект «No Label Var». Оно помогает избегать проблем в коде, связанных с требованием «no label var», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-label-var.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-label-var выполняется.

```js
function examplePassingStyle() {
  // Требование «no label var» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-label-var сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no label var» нарушено.
  return false;
}
```
