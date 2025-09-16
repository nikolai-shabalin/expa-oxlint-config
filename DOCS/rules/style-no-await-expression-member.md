# style/no-await-expression-member

Правило `no-await-expression-member` из набора `style` контролирует аспект «No Await Expression Member». Оно помогает избегать проблем в коде, связанных с требованием «no await expression member», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-await-expression-member.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-await-expression-member выполняется.

```js
function examplePassingStyle() {
  // Требование «no await expression member» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-await-expression-member сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no await expression member» нарушено.
  return false;
}
```
