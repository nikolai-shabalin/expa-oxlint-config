# suspicious/react-in-jsx-scope

Правило `react-in-jsx-scope` из набора `suspicious` контролирует аспект «React In Jsx Scope». Оно помогает избегать проблем в коде, связанных с требованием «react in jsx scope», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/react-in-jsx-scope.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/react-in-jsx-scope выполняется.

```js
function examplePassingSuspicious() {
  // Требование «react in jsx scope» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/react-in-jsx-scope сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «react in jsx scope» нарушено.
  return false;
}
```
