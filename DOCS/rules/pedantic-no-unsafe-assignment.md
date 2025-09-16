# pedantic/no-unsafe-assignment

Правило `no-unsafe-assignment` из набора `pedantic` контролирует аспект «No Unsafe Assignment». Оно помогает избегать проблем в коде, связанных с требованием «no unsafe assignment», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unsafe-assignment.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-unsafe-assignment выполняется.

```js
function examplePassingPedantic() {
  // Требование «no unsafe assignment» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-unsafe-assignment сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no unsafe assignment» нарушено.
  return false;
}
```
