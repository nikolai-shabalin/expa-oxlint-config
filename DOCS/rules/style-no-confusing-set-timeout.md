# style/no-confusing-set-timeout

Правило `no-confusing-set-timeout` из набора `style` контролирует аспект «No Confusing Set Timeout». Оно помогает избегать проблем в коде, связанных с требованием «no confusing set timeout», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-confusing-set-timeout.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-confusing-set-timeout выполняется.

```js
function examplePassingStyle() {
  // Требование «no confusing set timeout» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-confusing-set-timeout сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no confusing set timeout» нарушено.
  return false;
}
```
