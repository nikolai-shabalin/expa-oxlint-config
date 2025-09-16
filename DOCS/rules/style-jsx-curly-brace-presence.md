# style/jsx-curly-brace-presence

Правило `jsx-curly-brace-presence` из набора `style` контролирует аспект «Jsx Curly Brace Presence». Оно помогает избегать проблем в коде, связанных с требованием «jsx curly brace presence», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/jsx-curly-brace-presence.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/jsx-curly-brace-presence выполняется.

```js
function examplePassingStyle() {
  // Требование «jsx curly brace presence» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/jsx-curly-brace-presence сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «jsx curly brace presence» нарушено.
  return false;
}
```
