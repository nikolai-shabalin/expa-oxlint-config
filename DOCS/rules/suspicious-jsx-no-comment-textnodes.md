# suspicious/jsx-no-comment-textnodes

Правило `jsx-no-comment-textnodes` из набора `suspicious` контролирует аспект «Jsx No Comment Textnodes». Оно помогает избегать проблем в коде, связанных с требованием «jsx no comment textnodes», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/jsx-no-comment-textnodes.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/jsx-no-comment-textnodes выполняется.

```js
function examplePassingSuspicious() {
  // Требование «jsx no comment textnodes» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/jsx-no-comment-textnodes сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «jsx no comment textnodes» нарушено.
  return false;
}
```
