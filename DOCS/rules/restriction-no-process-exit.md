# restriction/no-process-exit

Правило `no-process-exit` из набора `restriction` контролирует аспект «No Process Exit». Оно помогает избегать проблем в коде, связанных с требованием «no process exit», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-process-exit.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-process-exit выполняется.

```js
function examplePassingRestriction() {
  // Требование «no process exit» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-process-exit сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no process exit» нарушено.
  return false;
}
```
