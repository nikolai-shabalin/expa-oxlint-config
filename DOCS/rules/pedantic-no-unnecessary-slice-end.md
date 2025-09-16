# pedantic/no-unnecessary-slice-end

Правило `no-unnecessary-slice-end` из набора `pedantic` контролирует аспект «No Unnecessary Slice End». Оно помогает избегать проблем в коде, связанных с требованием «no unnecessary slice end», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unnecessary-slice-end.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-unnecessary-slice-end выполняется.

```js
function examplePassingPedantic() {
  // Требование «no unnecessary slice end» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-unnecessary-slice-end сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no unnecessary slice end» нарушено.
  return false;
}
```
