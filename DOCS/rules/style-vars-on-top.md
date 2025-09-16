# style/vars-on-top

Правило `vars-on-top` из набора `style` контролирует аспект «Vars On Top». Оно помогает избегать проблем в коде, связанных с требованием «vars on top», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/vars-on-top.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/vars-on-top выполняется.

```js
function examplePassingStyle() {
  // Требование «vars on top» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/vars-on-top сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «vars on top» нарушено.
  return false;
}
```
