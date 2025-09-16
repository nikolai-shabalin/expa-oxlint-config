# nursery/no-unreachable

Правило `no-unreachable` из набора `nursery` контролирует аспект «No Unreachable». Оно помогает избегать проблем в коде, связанных с требованием «no unreachable», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unreachable.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило nursery/no-unreachable выполняется.

```js
function examplePassingNursery() {
  // Требование «no unreachable» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило nursery/no-unreachable сигнализирует о проблеме.

```js
function exampleFailingNursery() {
  // Требование «no unreachable» нарушено.
  return false;
}
```
