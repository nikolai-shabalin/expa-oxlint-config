# style/filename-case

Правило `filename-case` из набора `style` контролирует аспект «Filename Case». Оно помогает избегать проблем в коде, связанных с требованием «filename case», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/filename-case.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/filename-case выполняется.

```js
function examplePassingStyle() {
  // Требование «filename case» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/filename-case сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «filename case» нарушено.
  return false;
}
```
