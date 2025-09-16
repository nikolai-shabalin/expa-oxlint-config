# correctness/no-useless-backreference

Правило `no-useless-backreference` из набора `correctness` контролирует аспект «No Useless Backreference». Оно помогает избегать проблем в коде, связанных с требованием «no useless backreference», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-useless-backreference.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-useless-backreference выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no useless backreference» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-useless-backreference сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no useless backreference» нарушено.
  return false;
}
```
