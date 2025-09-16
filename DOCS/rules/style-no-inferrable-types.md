# style/no-inferrable-types

Правило `no-inferrable-types` из набора `style` контролирует аспект «No Inferrable Types». Оно помогает избегать проблем в коде, связанных с требованием «no inferrable types», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-inferrable-types.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-inferrable-types выполняется.

```js
function examplePassingStyle() {
  // Требование «no inferrable types» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-inferrable-types сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no inferrable types» нарушено.
  return false;
}
```
