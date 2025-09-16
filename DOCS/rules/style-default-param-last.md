# style/default-param-last

Правило `default-param-last` из набора `style` контролирует аспект «Default Param Last». Оно помогает избегать проблем в коде, связанных с требованием «default param last», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/default-param-last.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/default-param-last выполняется.

```js
function examplePassingStyle() {
  // Требование «default param last» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/default-param-last сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «default param last» нарушено.
  return false;
}
```
