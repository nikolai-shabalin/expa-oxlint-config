# style/operator-assignment

Правило `operator-assignment` из набора `style` контролирует аспект «Operator Assignment». Оно помогает избегать проблем в коде, связанных с требованием «operator assignment», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/operator-assignment.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/operator-assignment выполняется.

```js
function examplePassingStyle() {
  // Требование «operator assignment» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/operator-assignment сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «operator assignment» нарушено.
  return false;
}
```
