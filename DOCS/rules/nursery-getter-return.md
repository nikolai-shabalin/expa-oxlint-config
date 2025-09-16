# nursery/getter-return

Правило `getter-return` из набора `nursery` контролирует аспект «Getter Return». Оно помогает избегать проблем в коде, связанных с требованием «getter return», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/getter-return.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило nursery/getter-return выполняется.

```js
function examplePassingNursery() {
  // Требование «getter return» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило nursery/getter-return сигнализирует о проблеме.

```js
function exampleFailingNursery() {
  // Требование «getter return» нарушено.
  return false;
}
```
