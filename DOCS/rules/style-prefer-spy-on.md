# style/prefer-spy-on

Правило `prefer-spy-on` из набора `style` контролирует аспект «Prefer Spy On». Оно помогает избегать проблем в коде, связанных с требованием «prefer spy on», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-spy-on.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-spy-on выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer spy on» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-spy-on сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer spy on» нарушено.
  return false;
}
```
