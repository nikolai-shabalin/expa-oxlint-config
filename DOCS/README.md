# Список правил ESLint/OXC

| Правило | Описание |
|---------|----------|
| [correctness/for-direction](rules/correctness-for-direction.md) | Обеспечивает правильное направление цикла for |
| [correctness/no-async-promise-executor](rules/correctness-no-async-promise-executor.md) | Запрещает использование async функций как исполнителей Promise |
| [correctness/no-caller](rules/correctness-no-caller.md) | Запрещает использование arguments.caller или arguments.callee |
| [correctness/no-class-assign](rules/correctness-no-class-assign.md) | Запрещает переназначение переменных класса |
| [correctness/no-compare-neg-zero](rules/correctness-no-compare-neg-zero.md) | Запрещает сравнение с отрицательным нулем |
| [correctness/no-cond-assign](rules/correctness-no-cond-assign.md) | Запрещает присваивание в условных выражениях |
| [correctness/no-const-assign](rules/correctness-no-const-assign.md) | Запрещает переназначение const переменных |
| [correctness/no-constant-binary-expression](rules/correctness-no-constant-binary-expression.md) | Запрещает константные бинарные выражения |
| [correctness/no-constant-condition](rules/correctness-no-constant-condition.md) | Запрещает константные условия |
| [correctness/no-control-regex](rules/correctness-no-control-regex.md) | Запрещает управляющие символы в регулярных выражениях |
| [correctness/no-debugger](rules/correctness-no-debugger.md) | Запрещает использование debugger |
| [correctness/no-delete-var](rules/correctness-no-delete-var.md) | Запрещает удаление переменных |
| [correctness/no-dupe-class-members](rules/correctness-no-dupe-class-members.md) | Запрещает дублирование членов класса |
| [correctness/no-dupe-else-if](rules/correctness-no-dupe-else-if.md) | Запрещает дублирование условий в else-if |
| [correctness/no-dupe-keys](rules/correctness-no-dupe-keys.md) | Запрещает дублирование ключей объекта |
| [correctness/no-duplicate-case](rules/correctness-no-duplicate-case.md) | Запрещает дублирование case в switch |
| [correctness/no-empty-character-class](rules/correctness-no-empty-character-class.md) | Запрещает пустые классы символов в регулярных выражениях |
| [correctness/no-empty-pattern](rules/correctness-no-empty-pattern.md) | Запрещает пустые паттерны деструктуризации |
| [correctness/no-empty-static-block](rules/correctness-no-empty-static-block.md) | Запрещает пустые статические блоки |
| [correctness/no-eval](rules/correctness-no-eval.md) | Запрещает использование eval |
| [correctness/no-ex-assign](rules/correctness-no-ex-assign.md) | Запрещает переназначение исключений в catch |
| [correctness/no-extra-boolean-cast](rules/correctness-no-extra-boolean-cast.md) | Запрещает излишнее приведение к boolean |
| [correctness/no-func-assign](rules/correctness-no-func-assign.md) | Запрещает переназначение функций |
| [correctness/no-global-assign](rules/correctness-no-global-assign.md) | Запрещает присваивание глобальным переменным |
| [correctness/no-import-assign](rules/correctness-no-import-assign.md) | Запрещает присваивание импортированным переменным |
| [correctness/no-invalid-regexp](rules/correctness-no-invalid-regexp.md) | Запрещает невалидные регулярные выражения |
| [correctness/no-irregular-whitespace](rules/correctness-no-irregular-whitespace.md) | Запрещает неправильные пробельные символы |
| [correctness/no-loss-of-precision](rules/correctness-no-loss-of-precision.md) | Запрещает числа с потерей точности |
| [correctness/no-new-native-nonconstructor](rules/correctness-no-new-native-nonconstructor.md) | Запрещает new с встроенными не-конструкторами |
| [correctness/no-nonoctal-decimal-escape](rules/correctness-no-nonoctal-decimal-escape.md) | Запрещает неокталные десятичные escape-последовательности |
| [correctness/no-obj-calls](rules/correctness-no-obj-calls.md) | Запрещает вызов глобальных объектов как функций |
| [correctness/no-self-assign](rules/correctness-no-self-assign.md) | Запрещает самоприсваивание |
| [correctness/no-setter-return](rules/correctness-no-setter-return.md) | Запрещает return в setter |
| [correctness/no-shadow-restricted-names](rules/correctness-no-shadow-restricted-names.md) | Запрещает затенение зарезервированных имён |
| [correctness/no-sparse-arrays](rules/correctness-no-sparse-arrays.md) | Запрещает разреженные массивы |
| [correctness/no-this-before-super](rules/correctness-no-this-before-super.md) | Запрещает использование this до super() |
| [correctness/no-unassigned-vars](rules/correctness-no-unassigned-vars.md) | Запрещает неинициализированные переменные |
| [correctness/no-unsafe-finally](rules/correctness-no-unsafe-finally.md) | Запрещает небезопасные конструкции в finally |
| [correctness/no-unsafe-negation](rules/correctness-no-unsafe-negation.md) | Запрещает небезопасное отрицание |
| [correctness/no-unsafe-optional-chaining](rules/correctness-no-unsafe-optional-chaining.md) | Запрещает небезопасное optional chaining |
| [correctness/no-unused-labels](rules/correctness-no-unused-labels.md) | Запрещает неиспользуемые метки |
| [correctness/no-unused-private-class-members](rules/correctness-no-unused-private-class-members.md) | Запрещает неиспользуемые приватные члены класса |
| [correctness/no-unused-vars](rules/correctness-no-unused-vars.md) | Запрещает неиспользуемые переменные |
| [correctness/no-useless-backreference](rules/correctness-no-useless-backreference.md) | Запрещает бесполезные обратные ссылки в регулярных выражениях |
| [correctness/no-useless-catch](rules/correctness-no-useless-catch.md) | Запрещает бесполезные catch блоки |
| [correctness/no-useless-escape](rules/correctness-no-useless-escape.md) | Запрещает бесполезные escape символы |
| [correctness/no-useless-rename](rules/correctness-no-useless-rename.md) | Запрещает бесполезное переименование |
| [correctness/no-with](rules/correctness-no-with.md) | Запрещает использование with |
| [correctness/require-yield](rules/correctness-require-yield.md) | Требует yield в генераторах |
| [correctness/use-isnan](rules/correctness-use-isnan.md) | Требует использование isNaN() |
| [correctness/valid-typeof](rules/correctness-valid-typeof.md) | Требует валидные строки в typeof сравнениях |
| [nursery/getter-return](rules/nursery-getter-return.md) | Требует return в getter |
| [nursery/no-undef](rules/nursery-no-undef.md) | Запрещает неопределённые переменные |
| [nursery/no-unreachable](rules/nursery-no-unreachable.md) | Запрещает недостижимый код |
| [nursery/export](rules/nursery-export.md) | Проверяет экспорты |
| [nursery/named](rules/nursery-named.md) | Проверяет именованные экспорты |
| [nursery/no-map-spread](rules/nursery-no-map-spread.md) | Запрещает spread в map |
| [nursery/no-return-in-finally](rules/nursery-no-return-in-finally.md) | Запрещает return в finally |
| [nursery/require-render-return](rules/nursery-require-render-return.md) | Требует return в render методах |
| [pedantic/array-callback-return](rules/pedantic-array-callback-return.md) | Требует return в колбэках массивов |
| [pedantic/eqeqeq](rules/pedantic-eqeqeq.md) | Требует строгого равенства |
| [pedantic/max-classes-per-file](rules/pedantic-max-classes-per-file.md) | Ограничивает количество классов в файле |
| [pedantic/max-depth](rules/pedantic-max-depth.md) | Ограничивает глубину вложенности блоков |
| [pedantic/max-lines](rules/pedantic-max-lines.md) | Ограничивает количество строк в файле |
| [pedantic/max-lines-per-function](rules/pedantic-max-lines-per-function.md) | Ограничивает количество строк в функции |
| [pedantic/max-nested-callbacks](rules/pedantic-max-nested-callbacks.md) | Ограничивает вложенность колбэков |
| [pedantic/no-array-constructor](rules/pedantic-no-array-constructor.md) | Запрещает Array конструктор |
| [pedantic/no-case-declarations](rules/pedantic-no-case-declarations.md) | Запрещает объявления в case |
| [pedantic/no-constructor-return](rules/pedantic-no-constructor-return.md) | Запрещает return в конструкторе |
| [pedantic/no-else-return](rules/pedantic-no-else-return.md) | Запрещает else после return |
| [pedantic/no-fallthrough](rules/pedantic-no-fallthrough.md) | Запрещает fallthrough в switch |
| [pedantic/no-inner-declarations](rules/pedantic-no-inner-declarations.md) | Запрещает объявления внутри блоков |
| [pedantic/no-lonely-if](rules/pedantic-no-lonely-if.md) | Запрещает одинокие if в else |
| [pedantic/no-negated-condition](rules/pedantic-no-negated-condition.md) | Запрещает отрицательные условия |
| [pedantic/no-new-wrappers](rules/pedantic-no-new-wrappers.md) | Запрещает new с примитивными обёртками |
| [pedantic/no-object-constructor](rules/pedantic-no-object-constructor.md) | Запрещает Object конструктор |
| [pedantic/no-prototype-builtins](rules/pedantic-no-prototype-builtins.md) | Запрещает прямой вызов методов прототипа |
| [pedantic/no-redeclare](rules/pedantic-no-redeclare.md) | Запрещает повторное объявление переменных |
| [pedantic/no-self-compare](rules/pedantic-no-self-compare.md) | Запрещает сравнение переменной с собой |
| [pedantic/no-throw-literal](rules/pedantic-no-throw-literal.md) | Запрещает выбрасывание литералов |
| [pedantic/radix](rules/pedantic-radix.md) | Требует radix в parseInt |
| [pedantic/require-await](rules/pedantic-require-await.md) | Требует await в async функциях |
| [pedantic/sort-vars](rules/pedantic-sort-vars.md) | Требует сортировку переменных |
| [pedantic/symbol-description](rules/pedantic-symbol-description.md) | Требует описание для Symbol |
| [perf/no-await-in-loop](rules/perf-no-await-in-loop.md) | Запрещает await в циклах |
| [perf/no-useless-call](rules/perf-no-useless-call.md) | Запрещает бесполезные .call() и .apply() |
| [perf/no-accumulating-spread](rules/perf-no-accumulating-spread.md) | Запрещает накопление через spread |
| [perf/no-array-index-key](rules/perf-no-array-index-key.md) | Запрещает индекс массива как key в React |
| [perf/jsx-no-jsx-as-prop](rules/perf-jsx-no-jsx-as-prop.md) | Запрещает JSX как prop |
| [perf/jsx-no-new-array-as-prop](rules/perf-jsx-no-new-array-as-prop.md) | Запрещает новые массивы как props |
| [perf/jsx-no-new-function-as-prop](rules/perf-jsx-no-new-function-as-prop.md) | Запрещает новые функции как props |
| [perf/jsx-no-new-object-as-prop](rules/perf-jsx-no-new-object-as-prop.md) | Запрещает новые объекты как props |
| [perf/prefer-array-find](rules/perf-prefer-array-find.md) | Предпочитает Array.find() |
| [perf/prefer-array-flat-map](rules/perf-prefer-array-flat-map.md) | Предпочитает Array.flatMap() |
| [perf/prefer-set-has](rules/perf-prefer-set-has.md) | Предпочитает Set.has() |
| [restriction/default-case](rules/restriction-default-case.md) | Требует default в switch |
| [restriction/no-alert](rules/restriction-no-alert.md) | Запрещает alert, confirm, prompt |
| [restriction/no-bitwise](rules/restriction-no-bitwise.md) | Запрещает битовые операторы |
| [restriction/no-console](rules/restriction-no-console.md) | Запрещает console |
| [restriction/no-div-regex](rules/restriction-no-div-regex.md) | Запрещает регулярные выражения похожие на деление |
| [restriction/no-empty](rules/restriction-no-empty.md) | Запрещает пустые блоки |
| [restriction/no-empty-function](rules/restriction-no-empty-function.md) | Запрещает пустые функции |
| [restriction/no-eq-null](rules/restriction-no-eq-null.md) | Запрещает == null |
| [restriction/no-iterator](rules/restriction-no-iterator.md) | Запрещает __iterator__ |
| [restriction/no-plusplus](rules/restriction-no-plusplus.md) | Запрещает ++ и -- |
| [restriction/no-proto](rules/restriction-no-proto.md) | Запрещает __proto__ |
| [restriction/no-regex-spaces](rules/restriction-no-regex-spaces.md) | Запрещает множественные пробелы в регулярных выражениях |
| [restriction/no-restricted-globals](rules/restriction-no-restricted-globals.md) | Запрещает определённые глобальные переменные |
| [restriction/no-restricted-imports](rules/restriction-no-restricted-imports.md) | Запрещает определённые импорты |
| [restriction/no-undefined](rules/restriction-no-undefined.md) | Запрещает undefined |
| [restriction/no-unused-expressions](rules/restriction-no-unused-expressions.md) | Запрещает неиспользуемые выражения |
| [restriction/no-var](rules/restriction-no-var.md) | Запрещает var |
| [restriction/no-void](rules/restriction-no-void.md) | Запрещает void оператор |
| [restriction/unicode-bom](rules/restriction-unicode-bom.md) | Требует или запрещает Unicode BOM |
| [style/arrow-body-style](rules/style-arrow-body-style.md) | Требует определённый стиль тела стрелочных функций |
| [style/curly](rules/style-curly.md) | Требует фигурные скобки |
| [style/default-case-last](rules/style-default-case-last.md) | Требует default последним в switch |
| [style/default-param-last](rules/style-default-param-last.md) | Требует параметры по умолчанию последними |
| [style/func-names](rules/style-func-names.md) | Требует имена функций |
| [style/func-style](rules/style-func-style.md) | Требует определённый стиль функций |
| [style/grouped-accessor-pairs](rules/style-grouped-accessor-pairs.md) | Требует группировку getter/setter |
| [style/guard-for-in](rules/style-guard-for-in.md) | Требует проверку в for-in |
| [style/id-length](rules/style-id-length.md) | Требует определённую длину идентификаторов |
| [style/init-declarations](rules/style-init-declarations.md) | Требует инициализацию переменных |
| [style/max-params](rules/style-max-params.md) | Ограничивает количество параметров функции |
| [style/new-cap](rules/style-new-cap.md) | Требует заглавные буквы в конструкторах |
| [style/no-continue](rules/style-no-continue.md) | Запрещает continue |
| [style/no-duplicate-imports](rules/style-no-duplicate-imports.md) | Запрещает дублирование импортов |
| [style/no-extra-label](rules/style-no-extra-label.md) | Запрещает лишние метки |
| [style/no-label-var](rules/style-no-label-var.md) | Запрещает метки с именами переменных |
| [style/no-labels](rules/style-no-labels.md) | Запрещает метки |
| [style/no-lone-blocks](rules/style-no-lone-blocks.md) | Запрещает ненужные блоки |
| [style/no-magic-numbers](rules/style-no-magic-numbers.md) | Запрещает магические числа |
| [style/no-multi-assign](rules/style-no-multi-assign.md) | Запрещает цепочки присваивания |
| [style/no-multi-str](rules/style-no-multi-str.md) | Запрещает многострочные строки |
| [style/no-nested-ternary](rules/style-no-nested-ternary.md) | Запрещает вложенные тернарные операторы |
| [style/no-new-func](rules/style-no-new-func.md) | Запрещает new Function |
| [style/no-return-assign](rules/style-no-return-assign.md) | Запрещает присваивание в return |
| [style/no-script-url](rules/style-no-script-url.md) | Запрещает javascript: URLs |
| [style/no-template-curly-in-string](rules/style-no-template-curly-in-string.md) | Запрещает ${} в обычных строках |
| [style/no-ternary](rules/style-no-ternary.md) | Запрещает тернарные операторы |
| [style/operator-assignment](rules/style-operator-assignment.md) | Требует операторы присваивания |
| [style/prefer-destructuring](rules/style-prefer-destructuring.md) | Предпочитает деструктуризацию |
| [style/prefer-exponentiation-operator](rules/style-prefer-exponentiation-operator.md) | Предпочитает ** вместо Math.pow |
| [style/prefer-numeric-literals](rules/style-prefer-numeric-literals.md) | Предпочитает числовые литералы |
| [style/prefer-object-has-own](rules/style-prefer-object-has-own.md) | Предпочитает Object.hasOwn |
| [style/prefer-object-spread](rules/style-prefer-object-spread.md) | Предпочитает object spread |
| [style/prefer-promise-reject-errors](rules/style-prefer-promise-reject-errors.md) | Предпочитает Error в Promise.reject |
| [style/prefer-rest-params](rules/style-prefer-rest-params.md) | Предпочитает rest параметры |
| [style/prefer-spread](rules/style-prefer-spread.md) | Предпочитает spread оператор |
| [style/prefer-template](rules/style-prefer-template.md) | Предпочитает template literals |
| [style/sort-imports](rules/style-sort-imports.md) | Требует сортировку импортов |
| [style/sort-keys](rules/style-sort-keys.md) | Требует сортировку ключей объекта |
| [style/vars-on-top](rules/style-vars-on-top.md) | Требует переменные в начале области видимости |
| [style/yoda](rules/style-yoda.md) | Требует или запрещает условия Yoda |
| [suspicious/block-scoped-var](rules/suspicious-block-scoped-var.md) | Требует блочную область видимости для var |
| [suspicious/no-extend-native](rules/suspicious-no-extend-native.md) | Запрещает расширение нативных объектов |
| [suspicious/no-extra-bind](rules/suspicious-no-extra-bind.md) | Запрещает лишний bind |
| [suspicious/no-new](rules/suspicious-no-new.md) | Запрещает new без присваивания |
| [suspicious/no-unexpected-multiline](rules/suspicious-no-unexpected-multiline.md) | Запрещает неожиданные многострочные выражения |
| [suspicious/no-unneeded-ternary](rules/suspicious-no-unneeded-ternary.md) | Запрещает ненужные тернарные операторы |
| [suspicious/no-useless-concat](rules/suspicious-no-useless-concat.md) | Запрещает бесполезную конкатенацию |
| [suspicious/no-useless-constructor](rules/suspicious-no-useless-constructor.md) | Запрещает бесполезные конструкторы |