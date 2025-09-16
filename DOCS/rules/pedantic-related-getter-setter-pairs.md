# pedantic/related-getter-setter-pairs

Правило `related-getter-setter-pairs` из набора `pedantic` контролирует аспект «Related Getter Setter Pairs». Оно помогает избегать проблем в коде, связанных с требованием «related getter setter pairs», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/related-getter-setter-pairs.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/related-getter-setter-pairs выполняется.

```js
function examplePassingPedantic() {
  // Требование «related getter setter pairs» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/related-getter-setter-pairs сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «related getter setter pairs» нарушено.
  return false;
}
```
