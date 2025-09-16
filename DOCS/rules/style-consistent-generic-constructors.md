# style/consistent-generic-constructors

Правило `consistent-generic-constructors` из набора `style` контролирует аспект «Consistent Generic Constructors». Оно помогает избегать проблем в коде, связанных с требованием «consistent generic constructors», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/consistent-generic-constructors.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/consistent-generic-constructors выполняется.

```js
function examplePassingStyle() {
  // Требование «consistent generic constructors» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/consistent-generic-constructors сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «consistent generic constructors» нарушено.
  return false;
}
```
