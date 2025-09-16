# style/no-jasmine-globals

Правило `no-jasmine-globals` из набора `style` контролирует аспект «No Jasmine Globals». Оно помогает избегать проблем в коде, связанных с требованием «no jasmine globals», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-jasmine-globals.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-jasmine-globals выполняется.

```js
function examplePassingStyle() {
  // Требование «no jasmine globals» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-jasmine-globals сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no jasmine globals» нарушено.
  return false;
}
```
