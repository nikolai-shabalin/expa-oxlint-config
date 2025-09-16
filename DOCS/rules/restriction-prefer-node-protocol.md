# restriction/prefer-node-protocol

Правило `prefer-node-protocol` из набора `restriction` контролирует аспект «Prefer Node Protocol». Оно помогает избегать проблем в коде, связанных с требованием «prefer node protocol», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-node-protocol.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/prefer-node-protocol выполняется.

```js
function examplePassingRestriction() {
  // Требование «prefer node protocol» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/prefer-node-protocol сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «prefer node protocol» нарушено.
  return false;
}
```
