// Тестовый файл для проверки конфигурации oxlint
// Цель: намеренно спровоцировать максимум правил из групп:
// correctness, suspicious, style, perf, pedantic, restriction, nursery, react

// 1. Стиль, педантичность, подозрительный код
function badStyleFunction() {
  var oldVar = "var usage";
  let unused = "unused variable";
  console.log("console usage");

  if (true) {
    return "unnecessary block for single return";
  }

  // Магические числа и лишние шаблонные строки
  for (let index = 0; index < 5; index++) {
    console.log(`${index}`);
  }

  // Присваивание внутри условия, нестрогое сравнение
  let a = 0;
  if ((a = 1) == 1) {
    a = a + 0; // бесполезная операция
  }
}

// 2. React компонент с проблемами
import React, { useEffect, useState } from 'react';

function TestComponent({ props }) {
  const [count, setCount] = useState(0);
  // Создание хэндлеров в рендере, инлайн-стили, отсутствие alt/type
  return (
    <div>
      <img src="test.jpg" />
      <button onClick={() => setCount(count + 1)}>Кнопка</button>
      <button>Без type</button>
      <ul>
        {["a", "b", "c"].map((item, i) => (
          <li key={i} onClick={() => {}}>{item}</li>
        ))}
      </ul>
      <div style={{ color: 'red' }}>Inline style</div>
      <div dangerouslySetInnerHTML={{ __html: '<span>html</span>' }} />
    </div>
  );
}

// 3. JavaScript функции с потенциальными проблемами
function typeScriptIssues() {
  let dynamic = {};
  dynamic.someProperty = "dynamic";

  // Неиспользуемые параметры
  function unusedParams(paramA, paramB, paramC) {
    return paramA;
  }

  // Лишний await
  async function badAsync() {
    return await Promise.resolve("no need to await");
  }

  // Сравнение с NaN, parseInt без radix
  const value = '10';
  if (NaN === value) {
    console.log('never');
  }
  const parsed = parseInt(value);
  return { dynamic, parsed };
}

// 4. Проблемы с производительностью
function performanceIssues() {
  const arr = [1, 2, 3, 4, 5];

  // Неэффективные цепочки
  const doubledFiltered = arr.map(x => x * 2).filter(x => x > 5);

  // Сортировка с некорректным компаратором
  arr.sort((a, b) => a > b);

  // Создание объектов/функций на каждом рендере
  return <div style={{ margin: 0 }} onClick={() => console.log(doubledFiltered)} />;
}

// 5. Проблемы безопасности
function securityIssues(userInput, value) {
  // Использование eval и alert
  eval("console.log('danger')");
  alert('warn');

  // innerHTML без санитизации
  document.getElementById('test').innerHTML = userInput;

  // Нестрогое сравнение
  if (value == null) {
    console.log('loose equality');
  }
}

// 6. Проблемы с доступностью
function accessibilityIssues() {
  return (
    <div>
      <button>Кнопка без типа</button>
      <img src="image.jpg" />
      <div role="button" onClick={() => {}}>Не кнопка</div>
      <a href="#" onClick={(e) => { e.preventDefault(); }}>Ссылка без href</a>
    </div>
  );
}

// 7. Проблемы с тестами (если используется Jest)
describe('Test suite', () => {
  it('should work', () => {
    expect(something).toBe(true);
    // Вложенные тесты
    test('nested test', () => {
      // вложенные тесты
    });
  });
});

// 8. Проблемы с модулями
export default function() {
  // анонимный default export
}

// 9. Проблемы с async/await
async function asyncIssues() {
  try {
    const result = await fetch('/api');
    return result.json();
  } catch (error) {
    // пустой catch
  }
}

// 10. Проблемы с массивами и объектами
function arrayObjectIssues() {
  const arr = [1, 2, 3];
  const obj = { a: 1, b: 2 };

  // Неэффективные операции
  const result = arr.map(x => x * 2).filter(x => x > 2);

  // Мутация объектов и delete
  obj.c = 3;
  delete obj.a;

  // Распаковка в цикле
  for (let i = 0; i < arr.length; i++) {
    const clone = { ...obj };
    console.log(clone);
  }
  return result;
}

// 11. Проблемы с регулярными выражениями
function regexIssues() {
  const regex = /[a-z]/;
  const badRegex = /[a-zA-Z0-9]/;
  const suspicious = /[.]/; // лишний класс
  return { regex, badRegex, suspicious };
}

// 12. Проблемы с классами
class TestClass {
  constructor() {
    this.method = this.method.bind(this);
  }

  method() {
    return "test";
  }

  // Дублирующийся метод
  method() {
    return "duplicate";
  }
}

// 13. Проблемы с функциями
function functionIssues() {
  function noReturn() {
    console.log("no return");
  }

  function unused() {
    return "unused";
  }

  function badRecursion(n) {
    return badRecursion(n - 1);
  }

  // Теневание переменных
  let shadow = 1;
  function inner() {
    let shadow = 2;
    return shadow;
  }
  return { inner, shadow };
}

// 14. Проблемы с переменными
function variableIssues() {
  let x = 1;
  // let x = 2;

  let y;
  console.log(y);

  // Глобальная переменная без объявления
  globalVar = "bad";
}

// 15. Проблемы с циклами
function loopIssues() {
  // Бесконечный цикл (с ранним выходом)
  while (true) {
    break;
  }

  // for...in с массивом
  const arr = [1, 2, 3];
  for (let i in arr) {
    console.log(i);
  }

  // Цикл с бесполезным continue
  for (let j = 0; j < 3; j++) {
    if (j < 10) {
      continue;
    }
    console.log(j);
  }
}

// Nursery/experimental: optional chaining не по месту, ноль как индекс
function nurseryIssues(obj) {
  // Использование опц. цепочки для заведомо определённого
  const length = "abc"?.length;
  const maybe = obj?.[0];
  return { length, maybe };
}

export { TestComponent, typeScriptIssues, performanceIssues, securityIssues, accessibilityIssues, asyncIssues, arrayObjectIssues, regexIssues, TestClass, functionIssues, variableIssues, loopIssues, nurseryIssues };
