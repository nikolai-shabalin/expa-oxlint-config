# suspicious/no-useless-constructor

Запрещает бесполезные конструкторы классов.

## Описание

Это правило находит конструкторы классов, которые можно безопасно удалить без изменения функциональности класса. Бесполезные конструкторы - это пустые конструкторы или конструкторы, которые только вызывают super() с теми же аргументами.

## Проблемные примеры

```javascript
// Пустой конструктор в обычном классе
class A {
    constructor() {
        // пустой конструктор не нужен
    }
}

// Конструктор только с вызовом super() с теми же аргументами
class B extends A {
    constructor(value) {
        super(value);
    }
}

// Конструктор с super() без аргументов
class C extends A {
    constructor() {
        super();
    }
}

// Конструктор с super() и теми же аргументами в том же порядке
class D extends A {
    constructor(a, b, ...rest) {
        super(a, b, ...rest);
    }
}
```

## Правильные примеры

```javascript
// Класс без конструктора (неявный конструктор)
class A {
    method() {
        return 'A';
    }
}

// Конструктор с дополнительной логикой
class B extends A {
    constructor(value) {
        super(value);
        this.initialized = true; // дополнительная логика
    }
}

// Конструктор с изменёнными аргументами
class C extends A {
    constructor(value) {
        super(value.toUpperCase()); // изменение аргумента
    }
}

// Конструктор с другим количеством аргументов
class D extends A {
    constructor(a, b) {
        super(a); // передаётся только часть аргументов
    }
}

// Конструктор с дополнительными операциями
class E extends A {
    constructor(value) {
        console.log('Creating E'); // дополнительная операция
        super(value);
    }
}
```

## Полезные конструкторы

Следующие конструкторы НЕ считаются бесполезными:

```javascript
// Конструктор с инициализацией свойств
class User {
    constructor(name) {
        this.name = name;
        this.createdAt = new Date();
    }
}

// Конструктор с валидацией
class PositiveNumber {
    constructor(value) {
        if (value <= 0) {
            throw new Error('Value must be positive');
        }
        super(value);
    }
}

// Конструктор с преобразованием аргументов
class UpperCaseString extends String {
    constructor(str) {
        super(str.toUpperCase());
    }
}

// Конструктор с побочными эффектами
class Logger {
    constructor(name) {
        super();
        console.log(`Logger created: ${name}`);
        this.name = name;
    }
}
```

## Автоматическое исправление

Это правило поддерживает автоматическое исправление и может удалить бесполезные конструкторы:

```javascript
// До
class MyClass {
    constructor() {
    }
    
    method() {
        return 'hello';
    }
}

// После автоматического исправления
class MyClass {
    method() {
        return 'hello';
    }
}
```

## Конфигурация

```json
{
    "rules": {
        "no-useless-constructor": "error"
    }
}
```