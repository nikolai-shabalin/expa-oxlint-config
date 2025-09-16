# style/init-declarations

Правило `init-declarations` из набора `style` контролирует аспект «Init Declarations». Оно помогает избегать проблем в коде, связанных с требованием «init declarations», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/init-declarations.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/init-declarations выполняется.

```js
function examplePassingStyle() {
  // Требование «init declarations» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/init-declarations сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «init declarations» нарушено.
  return false;
}
```
