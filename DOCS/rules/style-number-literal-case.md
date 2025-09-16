# style/number-literal-case

Правило `number-literal-case` из набора `style` контролирует аспект «Number Literal Case». Оно помогает избегать проблем в коде, связанных с требованием «number literal case», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/number-literal-case.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/number-literal-case выполняется.

```js
function examplePassingStyle() {
  // Требование «number literal case» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/number-literal-case сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «number literal case» нарушено.
  return false;
}
```
