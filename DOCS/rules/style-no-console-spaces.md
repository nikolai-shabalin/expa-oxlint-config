# style/no-console-spaces

Правило `no-console-spaces` из набора `style` контролирует аспект «No Console Spaces». Оно помогает избегать проблем в коде, связанных с требованием «no console spaces», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-console-spaces.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-console-spaces выполняется.

```js
function examplePassingStyle() {
  // Требование «no console spaces» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-console-spaces сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no console spaces» нарушено.
  return false;
}
```
