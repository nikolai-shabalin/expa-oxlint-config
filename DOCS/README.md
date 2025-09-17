# Список правил Oxlint

В этой документации представлены все правила линтера, организованные по категориям.

| Правило | Описание |
|---------|----------|
| [correctness/for-direction](rules/correctness-for-direction.md) | Проверяет направление цикла `for` для предотвращения бесконечных циклов |
| [correctness/no-async-promise-executor](rules/correctness-no-async-promise-executor.md) | Запрещает использование async функций в качестве исполнителей Promise |
| [correctness/no-caller](rules/correctness-no-caller.md) | Запрещает использование `arguments.caller` и `arguments.callee` |
| [correctness/no-class-assign](rules/correctness-no-class-assign.md) | Запрещает переназначение переменных класса |
| [correctness/no-compare-neg-zero](rules/correctness-no-compare-neg-zero.md) | Запрещает сравнение с отрицательным нулем |
| [correctness/no-cond-assign](rules/correctness-no-cond-assign.md) | Запрещает присваивание в условных выражениях |
| [correctness/no-const-assign](rules/correctness-no-const-assign.md) | Запрещает переназначение переменных, объявленных с помощью `const` |
| [correctness/no-constant-binary-expression](rules/correctness-no-constant-binary-expression.md) | Запрещает бинарные выражения, которые всегда возвращают одно и то же значение |
| [correctness/no-constant-condition](rules/correctness-no-constant-condition.md) | Запрещает константные условия в циклах и условных выражениях |
| [correctness/no-control-regex](rules/correctness-no-control-regex.md) | Запрещает управляющие символы в регулярных выражениях |
| [correctness/no-debugger](rules/correctness-no-debugger.md) | Запрещает использование оператора `debugger` |
| [correctness/no-delete-var](rules/correctness-no-delete-var.md) | Запрещает удаление переменных с помощью оператора `delete` |
| [correctness/no-dupe-class-members](rules/correctness-no-dupe-class-members.md) | Запрещает дублирование членов класса |
| [correctness/no-dupe-else-if](rules/correctness-no-dupe-else-if.md) | Запрещает дублирование условий в цепочке `if-else-if` |
| [correctness/no-dupe-keys](rules/correctness-no-dupe-keys.md) | Запрещает дублирование ключей в объектных литералах |
| [correctness/no-duplicate-case](rules/correctness-no-duplicate-case.md) | Запрещает дублирование меток `case` в операторах `switch` |
| [correctness/no-empty-character-class](rules/correctness-no-empty-character-class.md) | Запрещает пустые классы символов в регулярных выражениях |
| [correctness/no-empty-pattern](rules/correctness-no-empty-pattern.md) | Запрещает пустые деструктурирующие паттерны |
| [correctness/no-empty-static-block](rules/correctness-no-empty-static-block.md) | Запрещает пустые статические блоки |
| [correctness/no-eval](rules/correctness-no-eval.md) | Запрещает использование `eval()` |
| [correctness/no-ex-assign](rules/correctness-no-ex-assign.md) | Запрещает переназначение исключений в блоках `catch` |
| [correctness/no-extra-boolean-cast](rules/correctness-no-extra-boolean-cast.md) | Запрещает ненужные булевы приведения типов |
| [correctness/no-func-assign](rules/correctness-no-func-assign.md) | Запрещает переназначение объявлений функций |
| [correctness/no-global-assign](rules/correctness-no-global-assign.md) | Запрещает присваивание значений глобальным переменным только для чтения |
| [correctness/no-import-assign](rules/correctness-no-import-assign.md) | Запрещает присваивание значений импортированным привязкам |
| [correctness/no-invalid-regexp](rules/correctness-no-invalid-regexp.md) | Запрещает недействительные строки регулярных выражений в конструкторах RegExp |
| [correctness/no-irregular-whitespace](rules/correctness-no-irregular-whitespace.md) | Запрещает неправильные пробельные символы |
| [correctness/no-loss-of-precision](rules/correctness-no-loss-of-precision.md) | Запрещает числовые литералы, которые теряют точность |
| [correctness/no-new-native-nonconstructor](rules/correctness-no-new-native-nonconstructor.md) | Запрещает использование `new` с нативными объектами, которые не являются конструкторами |
| [correctness/no-nonoctal-decimal-escape](rules/correctness-no-nonoctal-decimal-escape.md) | Запрещает `\8` и `\9` escape-последовательности в строковых литералах |
| [correctness/no-obj-calls](rules/correctness-no-obj-calls.md) | Запрещает вызов глобальных объектов как функций |
| [correctness/no-self-assign](rules/correctness-no-self-assign.md) | Запрещает присваивание переменной самой себе |
| [correctness/no-setter-return](rules/correctness-no-setter-return.md) | Запрещает возврат значений из сеттеров |
| [correctness/no-shadow-restricted-names](rules/correctness-no-shadow-restricted-names.md) | Запрещает затенение зарезервированных имен |
| [correctness/no-sparse-arrays](rules/correctness-no-sparse-arrays.md) | Запрещает разреженные массивы |
| [correctness/no-this-before-super](rules/correctness-no-this-before-super.md) | Запрещает использование `this`/`super` до вызова `super()` в конструкторах |
| [correctness/no-unassigned-vars](rules/correctness-no-unassigned-vars.md) | Запрещает неинициализированные переменные |
| [correctness/no-unsafe-finally](rules/correctness-no-unsafe-finally.md) | Запрещает небезопасные операторы управления потоком в блоках `finally` |
| [correctness/no-unsafe-negation](rules/correctness-no-unsafe-negation.md) | Запрещает отрицание левого операнда операторов отношения |
| [correctness/no-unsafe-optional-chaining](rules/correctness-no-unsafe-optional-chaining.md) | Запрещает использование необязательной цепочки в неподходящих контекстах |
| [correctness/no-unused-labels](rules/correctness-no-unused-labels.md) | Запрещает неиспользуемые метки |
| [correctness/no-unused-private-class-members](rules/correctness-no-unused-private-class-members.md) | Запрещает неиспользуемые приватные члены класса |
| [correctness/no-unused-vars](rules/correctness-no-unused-vars.md) | Запрещает неиспользуемые переменные |
| [correctness/no-useless-backreference](rules/correctness-no-useless-backreference.md) | Запрещает бесполезные обратные ссылки в регулярных выражениях |
| [correctness/no-useless-catch](rules/correctness-no-useless-catch.md) | Запрещает ненужные блоки `catch` |
| [correctness/no-useless-escape](rules/correctness-no-useless-escape.md) | Запрещает ненужные escape-символы |
| [correctness/no-useless-rename](rules/correctness-no-useless-rename.md) | Запрещает переименование импортов, экспортов и деструктурированных присваиваний в то же имя |
| [correctness/no-with](rules/correctness-no-with.md) | Запрещает использование операторов `with` |
| [correctness/require-yield](rules/correctness-require-yield.md) | Требует наличия `yield` в функциях-генераторах |
| [correctness/use-isnan](rules/correctness-use-isnan.md) | Требует использования `isNaN()` при проверке на `NaN` |
| [correctness/valid-typeof](rules/correctness-valid-typeof.md) | Обеспечивает корректность строк сравнения с оператором `typeof` |
| [nursery/getter-return](rules/nursery-getter-return.md) | Требует возврата значения из геттеров |
| [nursery/no-undef](rules/nursery-no-undef.md) | Запрещает использование неопределенных переменных |
| [nursery/no-unreachable](rules/nursery-no-unreachable.md) | Запрещает недостижимый код |
| [pedantic/array-callback-return](rules/pedantic-array-callback-return.md) | Требует возврата значений из колбэков методов массивов |
| [pedantic/eqeqeq](rules/pedantic-eqeqeq.md) | Требует использования `===` и `!==` |
| [pedantic/max-classes-per-file](rules/pedantic-max-classes-per-file.md) | Ограничивает количество классов в файле |
| [pedantic/max-depth](rules/pedantic-max-depth.md) | Ограничивает максимальную глубину вложенности блоков |
| [pedantic/max-lines](rules/pedantic-max-lines.md) | Ограничивает количество строк в файле |
| [pedantic/max-lines-per-function](rules/pedantic-max-lines-per-function.md) | Ограничивает количество строк в функции |
| [pedantic/max-nested-callbacks](rules/pedantic-max-nested-callbacks.md) | Ограничивает максимальную глубину вложенности колбэков |
| [pedantic/no-array-constructor](rules/pedantic-no-array-constructor.md) | Запрещает использование конструктора Array |
| [pedantic/no-case-declarations](rules/pedantic-no-case-declarations.md) | Запрещает лексические объявления в блоках case/default |
| [pedantic/no-constructor-return](rules/pedantic-no-constructor-return.md) | Запрещает возврат значений из конструкторов |
| [pedantic/no-else-return](rules/pedantic-no-else-return.md) | Запрещает блоки `else` после операторов `return` в блоках `if` |
| [pedantic/no-fallthrough](rules/pedantic-no-fallthrough.md) | Запрещает проваливание через блоки case |
| [pedantic/no-inner-declarations](rules/pedantic-no-inner-declarations.md) | Запрещает объявления переменных или функций во вложенных блоках |
| [pedantic/no-lonely-if](rules/pedantic-no-lonely-if.md) | Запрещает операторы `if` как единственные операторы в блоках `else` |
| [pedantic/no-negated-condition](rules/pedantic-no-negated-condition.md) | Запрещает отрицательные условия |
| [pedantic/no-new-wrappers](rules/pedantic-no-new-wrappers.md) | Запрещает создание экземпляров `String`, `Number` и `Boolean` с помощью оператора `new` |
| [pedantic/no-object-constructor](rules/pedantic-no-object-constructor.md) | Запрещает использование конструктора Object |
| [pedantic/no-prototype-builtins](rules/pedantic-no-prototype-builtins.md) | Запрещает вызов некоторых методов `Object.prototype` непосредственно на объектах |
| [pedantic/no-redeclare](rules/pedantic-no-redeclare.md) | Запрещает переопределение переменных |
| [pedantic/no-self-compare](rules/pedantic-no-self-compare.md) | Запрещает сравнения, где обе стороны абсолютно одинаковы |
| [pedantic/no-throw-literal](rules/pedantic-no-throw-literal.md) | Запрещает выбрасывание литералов в качестве исключений |
| [pedantic/radix](rules/pedantic-radix.md) | Требует указания основания системы счисления в `parseInt()` |
| [pedantic/require-await](rules/pedantic-require-await.md) | Запрещает async функции, которые не содержат await выражений |
| [pedantic/sort-vars](rules/pedantic-sort-vars.md) | Требует сортировки объявлений переменных |
| [pedantic/symbol-description](rules/pedantic-symbol-description.md) | Требует описания при создании символов |
| [perf/no-await-in-loop](rules/perf-no-await-in-loop.md) | Запрещает использование `await` внутри циклов |
| [perf/no-useless-call](rules/perf-no-useless-call.md) | Запрещает ненужные вызовы `.call()` и `.apply()` |
| [perf/no-accumulating-spread](rules/perf-no-accumulating-spread.md) | Запрещает накопление spread операторов в циклах |
| [perf/no-array-index-key](rules/perf-no-array-index-key.md) | Запрещает использование индекса массива в качестве ключа в React |
| [restriction/default-case](rules/restriction-default-case.md) | Требует наличия default блока в операторах switch |
| [restriction/no-alert](rules/restriction-no-alert.md) | Запрещает использование `alert`, `confirm` и `prompt` |
| [restriction/no-bitwise](rules/restriction-no-bitwise.md) | Запрещает использование битовых операторов |
| [restriction/no-console](rules/restriction-no-console.md) | Запрещает использование `console` |
| [restriction/no-div-regex](rules/restriction-no-div-regex.md) | Запрещает регулярные выражения, которые выглядят как операторы деления |
| [restriction/no-empty](rules/restriction-no-empty.md) | Запрещает пустые блочные операторы |
| [restriction/no-empty-function](rules/restriction-no-empty-function.md) | Запрещает пустые функции |
| [restriction/no-eq-null](rules/restriction-no-eq-null.md) | Запрещает сравнения с null без операторов проверки типа |
| [restriction/no-iterator](rules/restriction-no-iterator.md) | Запрещает использование свойства `__iterator__` |
| [restriction/no-plusplus](rules/restriction-no-plusplus.md) | Запрещает унарные операторы `++` и `--` |
| [restriction/no-proto](rules/restriction-no-proto.md) | Запрещает использование свойства `__proto__` |
| [restriction/no-regex-spaces](rules/restriction-no-regex-spaces.md) | Запрещает множественные пробелы в регулярных выражениях |
| [restriction/no-restricted-globals](rules/restriction-no-restricted-globals.md) | Запрещает использование определенных глобальных переменных |
| [restriction/no-restricted-imports](rules/restriction-no-restricted-imports.md) | Запрещает использование определенных импортов |
| [restriction/no-undefined](rules/restriction-no-undefined.md) | Запрещает использование `undefined` в качестве идентификатора |
| [restriction/no-unused-expressions](rules/restriction-no-unused-expressions.md) | Запрещает неиспользуемые выражения |
| [restriction/no-var](rules/restriction-no-var.md) | Требует использования `let` или `const` вместо `var` |
| [restriction/no-void](rules/restriction-no-void.md) | Запрещает использование оператора `void` |
| [restriction/unicode-bom](rules/restriction-unicode-bom.md) | Требует или запрещает метку порядка байтов Unicode (BOM) |
| [style/arrow-body-style](rules/style-arrow-body-style.md) | Требует фигурных скобок вокруг тела стрелочных функций |
| [style/curly](rules/style-curly.md) | Обеспечивает последовательное использование фигурных скобок для всех управляющих операторов |
| [style/default-case-last](rules/style-default-case-last.md) | Обеспечивает, чтобы блоки `default` в операторах `switch` были последними |
| [style/default-param-last](rules/style-default-param-last.md) | Обеспечивает, чтобы параметры по умолчанию были последними |
| [style/func-names](rules/style-func-names.md) | Требует или запрещает именованные выражения функций |
| [style/func-style](rules/style-func-style.md) | Обеспечивает последовательное использование объявлений функций или выражений |
| [style/grouped-accessor-pairs](rules/style-grouped-accessor-pairs.md) | Требует группировки пар аксессоров в объектных литералах и классах |
| [style/guard-for-in](rules/style-guard-for-in.md) | Требует проверки `for-in` циклов с условием `if` |
| [style/id-length](rules/style-id-length.md) | Обеспечивает минимальную и максимальную длину идентификаторов |
| [style/init-declarations](rules/style-init-declarations.md) | Требует или запрещает инициализацию при объявлении переменных |
| [style/max-params](rules/style-max-params.md) | Ограничивает количество параметров, которые могут быть использованы в объявлениях функций |
| [style/new-cap](rules/style-new-cap.md) | Требует, чтобы имена конструкторов начинались с заглавной буквы |
| [style/no-continue](rules/style-no-continue.md) | Запрещает использование операторов `continue` |
| [style/no-duplicate-imports](rules/style-no-duplicate-imports.md) | Запрещает дублирующиеся импорты модулей |
| [style/no-extra-label](rules/style-no-extra-label.md) | Запрещает ненужные метки |
| [style/no-label-var](rules/style-no-label-var.md) | Запрещает метки, которые имеют то же имя, что и переменная |
| [style/no-labels](rules/style-no-labels.md) | Запрещает помеченные операторы |
| [style/no-lone-blocks](rules/style-no-lone-blocks.md) | Запрещает ненужные вложенные блоки |
| [style/no-magic-numbers](rules/style-no-magic-numbers.md) | Запрещает магические числа |
| [style/no-multi-assign](rules/style-no-multi-assign.md) | Запрещает использование цепных операторов присваивания |
| [style/no-multi-str](rules/style-no-multi-str.md) | Запрещает многострочные строки |
| [style/no-nested-ternary](rules/style-no-nested-ternary.md) | Запрещает вложенные тернарные выражения |
| [style/no-new-func](rules/style-no-new-func.md) | Запрещает использование конструктора `Function` |
| [style/no-return-assign](rules/style-no-return-assign.md) | Запрещает операторы присваивания в операторах `return` |
| [style/no-script-url](rules/style-no-script-url.md) | Запрещает `javascript:` URL |
| [style/no-template-curly-in-string](rules/style-no-template-curly-in-string.md) | Запрещает синтаксис шаблонных литералов в обычных строках |
| [style/no-ternary](rules/style-no-ternary.md) | Запрещает тернарные операторы |
| [style/operator-assignment](rules/style-operator-assignment.md) | Требует или запрещает операторы присваивания |
| [style/prefer-destructuring](rules/style-prefer-destructuring.md) | Требует деструктуризации из массивов и/или объектов |
| [style/prefer-exponentiation-operator](rules/style-prefer-exponentiation-operator.md) | Запрещает использование `Math.pow` в пользу оператора `**` |
| [style/prefer-numeric-literals](rules/style-prefer-numeric-literals.md) | Запрещает `parseInt()` и `Number.parseInt()` в пользу двоичных, восьмеричных и шестнадцатеричных литералов |
| [style/prefer-object-has-own](rules/style-prefer-object-has-own.md) | Запрещает использование `Object.prototype.hasOwnProperty.call()` в пользу `Object.hasOwn()` |
| [style/prefer-object-spread](rules/style-prefer-object-spread.md) | Запрещает использование `Object.assign` с объектным литералом в качестве первого аргумента и предпочитает использование object spread |
| [style/prefer-promise-reject-errors](rules/style-prefer-promise-reject-errors.md) | Требует использования объектов `Error` в качестве причин отклонения Promise |
| [style/prefer-rest-params](rules/style-prefer-rest-params.md) | Требует rest параметры вместо `arguments` |
| [style/prefer-spread](rules/style-prefer-spread.md) | Требует spread операторы вместо `.apply()` |
| [style/prefer-template](rules/style-prefer-template.md) | Требует шаблонные литералы вместо конкатенации строк |
| [style/sort-imports](rules/style-sort-imports.md) | Обеспечивает сортировку операторов импорта |
| [style/sort-keys](rules/style-sort-keys.md) | Требует сортировки ключей объекта |
| [style/vars-on-top](rules/style-vars-on-top.md) | Требует объявления `var` в верхней части их области видимости |
| [style/yoda](rules/style-yoda.md) | Требует или запрещает условия "Yoda" |
| [suspicious/block-scoped-var](rules/suspicious-block-scoped-var.md) | Обрабатывает объявления `var` так, как если бы они были блочными |
| [suspicious/no-extend-native](rules/suspicious-no-extend-native.md) | Запрещает расширение встроенных типов |
| [suspicious/no-extra-bind](rules/suspicious-no-extra-bind.md) | Запрещает ненужные привязки функций |
| [suspicious/no-new](rules/suspicious-no-new.md) | Запрещает операторы `new` вне операторов присваивания или сравнения |
| [suspicious/no-unexpected-multiline](rules/suspicious-no-unexpected-multiline.md) | Запрещает запутанные многострочные выражения |
| [suspicious/no-unneeded-ternary](rules/suspicious-no-unneeded-ternary.md) | Запрещает тернарные операторы, когда существуют более простые альтернативы |
| [suspicious/no-useless-concat](rules/suspicious-no-useless-concat.md) | Запрещает ненужную конкатенацию литералов или шаблонных литералов |
| [suspicious/no-useless-constructor](rules/suspicious-no-useless-constructor.md) | Запрещает ненужные конструкторы |