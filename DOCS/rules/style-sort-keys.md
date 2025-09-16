# style/sort-keys

Правило `sort-keys` из набора `style` контролирует аспект «Sort Keys». Оно помогает избегать проблем в коде, связанных с требованием «sort keys», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/sort-keys.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/sort-keys выполняется.

```js
function examplePassingStyle() {
  // Требование «sort keys» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/sort-keys сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «sort keys» нарушено.
  return false;
}
```
