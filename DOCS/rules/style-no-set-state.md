# style/no-set-state

Правило `no-set-state` из набора `style` контролирует аспект «No Set State». Оно помогает избегать проблем в коде, связанных с требованием «no set state», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-set-state.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-set-state выполняется.

```js
function examplePassingStyle() {
  // Требование «no set state» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-set-state сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no set state» нарушено.
  return false;
}
```
