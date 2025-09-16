# pedantic/no-lonely-if

Правило `no-lonely-if` из набора `pedantic` контролирует аспект «No Lonely If». Оно помогает избегать проблем в коде, связанных с требованием «no lonely if», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-lonely-if.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-lonely-if выполняется.

```js
function examplePassingPedantic() {
  // Требование «no lonely if» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-lonely-if сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no lonely if» нарушено.
  return false;
}
```
