# style/prefer-each

Правило `prefer-each` из набора `style` контролирует аспект «Prefer Each». Оно помогает избегать проблем в коде, связанных с требованием «prefer each», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-each.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-each выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer each» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-each сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer each» нарушено.
  return false;
}
```
