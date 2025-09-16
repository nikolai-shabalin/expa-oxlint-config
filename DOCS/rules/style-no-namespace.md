# style/no-namespace

Правило `no-namespace` из набора `style` контролирует аспект «No Namespace». Оно помогает избегать проблем в коде, связанных с требованием «no namespace», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-namespace.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-namespace выполняется.

```js
function examplePassingStyle() {
  // Требование «no namespace» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-namespace сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no namespace» нарушено.
  return false;
}
```
