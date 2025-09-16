# style/ban-tslint-comment

Правило `ban-tslint-comment` из набора `style` контролирует аспект «Ban Tslint Comment». Оно помогает избегать проблем в коде, связанных с требованием «ban tslint comment», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/ban-tslint-comment.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/ban-tslint-comment выполняется.

```js
function examplePassingStyle() {
  // Требование «ban tslint comment» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/ban-tslint-comment сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «ban tslint comment» нарушено.
  return false;
}
```
