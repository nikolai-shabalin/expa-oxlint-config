# correctness/no-new-native-nonconstructor

Правило `no-new-native-nonconstructor` из набора `correctness` контролирует аспект «No New Native Nonconstructor». Оно помогает избегать проблем в коде, связанных с требованием «no new native nonconstructor», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-new-native-nonconstructor.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-new-native-nonconstructor выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no new native nonconstructor» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-new-native-nonconstructor сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no new native nonconstructor» нарушено.
  return false;
}
```
