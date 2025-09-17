# no-useless-constructor

Запрещает ненужные конструкторы. ES2015 предоставляет конструктор по умолчанию для классов, поэтому пустые конструкторы или конструкторы, которые только делегируют родительскому классу, являются ненужными.

## Проблемные примеры

```javascript
class A {
  constructor() {
    // пустой конструктор
  }
}

class B extends A {
  constructor(...args) {
    super(...args); // только делегирование
  }
}

class C {
  constructor() {
    super(); // только вызов super без аргументов
  }
}
```

## Корректные примеры

```javascript
class A {
  // конструктор по умолчанию предоставляется автоматически
}

class B extends A {
  // конструктор по умолчанию автоматически вызывает super()
}

class C extends A {
  constructor(name) {
    super();
    this.name = name; // выполняет дополнительную работу
  }
}

class D {
  constructor() {
    this.property = 'value'; // инициализирует свойства
  }
}
```