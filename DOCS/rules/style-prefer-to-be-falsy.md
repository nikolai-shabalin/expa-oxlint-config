# style/prefer-to-be-falsy

Правило `prefer-to-be-falsy` из набора `style` контролирует аспект «Prefer To Be Falsy». Оно помогает избегать проблем в коде, связанных с требованием «prefer to be falsy», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-to-be-falsy.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-to-be-falsy выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer to be falsy» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-to-be-falsy сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer to be falsy» нарушено.
  return false;
}
```
