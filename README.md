﻿
﻿Ви повинні написати відповідь на запитання повністю або вгадувати по буквах.
+100 балів, якщо вгадали одразу
-100 балів, якщо слово невірне
+1 бал, якщо користувач вгадав букву
-1 бал, якщо ввели невірну букву

# Методичні рекомендації до виконання лабораторних робіт з дисципліни Конструювання ПЗ

## Вступ

Термін "Конструювання ПЗ" запроваджений [Стівеном МакКоннеллом](https://en.wikipedia.org/wiki/Steve_McConnell) у його книзі ["Досконалий код"](https://en.wikipedia.org/wiki/Code_Complete). 

Дисципліна "Конструювання ПЗ" в основному стосується технік мінімізації складності ПЗ, що, у свою чергу, зменшить кількість помилок у ньому і підвищить гнучкість його адаптації до нових завдань. 

В рамках лабораторних робіт студенти вивчають техніки хорошого стилю коду: грамотне розмежування додатку на компоненти у пакетах чи просторах імен, ін'єкція залежностей, використання дизайн патернів, документування інтерфейсів на основі javadoc, XML documentation чи NDoc; 
написання юніт-тестів;
використання систем контролю версій.

Усі лабораторні роботи виконуються в рамках прилюдних репозиторіїв студентів. 
Дисципліна стосується новітніх технологій, тому вся документація і звіти з виконання лабораторних робіт зберігаються у виключно в репозиторіях. 

Друкувати паперові звіти з виконання лабораторних робіт не потрібно.

Дисципліна не стосується якоїсь конкретної мови програмування, технології чи середовища розробки. 
Вона надає практичні рекомендації, яких можна дотримуватися на буль-якій мові програмування.
Це відповідає терміну С.МакКоннелла "program into language" див. [тут](https://codeblog.jonskeet.uk/2008/04/23/programming-quot-in-quot-a-language-vs-programming-quot-into-quot-a-language/). 
Тому Ви вільні у виборі мови програмування, технології і середовища розробки.
Практичне завдання можна виконати як консольний чи віконний додаток для .NET або JVM, як веб-сторінку з JavaScript або будь-що інше за вподобанням студента.

Будь ласка, регулярно відправляйте у репозиторій проміжні версії своєї роботи. 
Бо дуже підозріло виглядає репозиторій, де студент відправив лише одну завершену версію програми в день виставлення залікового модуля.

Приємного програмування!

## Перше завдання

Створіть обліковий запис на [github](github.com).

Додайте у файл `README.md` розділ "Правила гри", де опишіть так, як пригадуєте з лекційного заняття, правила гри "Вгадай слово".

## Друге завдання 

Створіть у будь-якій мові програмування інтерфейс (трейт) `TaskProvider` з методом `get`, що повертає інстанцію `Task`.

Добавте структуру (кейс-клас) `Task` з полями `question` та `answer` стрічкового типу.

Створіть юніт-тест `TestProviderTest` для компонента `TestProvider`. Тест повинен перевіряти чи метод `get` повертає непорожню (not null) інстанцію `Task`, обидва поля якого також непорожні (not null).

Напишіть найпримітивнішу імплементацію `TaskProviderImpl` інтерфейсу `TaskProvider`.

## Третє завдання

Добавте інтерфейс `GameView` з методами `showSorry(message)`, `showCongratulations(message)`, `showCurrentGuess(guess: String)` та `showTask(task: Task)`.

Добавте інтерфейс `GameService` з властивостями `gameView: GameView`, `taskProvider: TaskProvider` та методами: `guessWord(word: String)`, `guessLetter(letter: String)` і `start()`.

Напишіть юніт-тест `GameServiceTest` для компоненту `GameService`, який засобами [Mockito](http://site.mockito.org/) підставляє імітаційні (mocked) імплементації компонентів `gameView: GameView` і `taskProvider: TaskProvider`. Тест повинен перевіряти чи компонент вірно опрацьовує логіку гри при вірно і невірно вгаданому слові(букві). При цьому слід перевіряти особливі випадки: користувач ввів порожню стрічку, користувач вгадав букву, котра у слові зустрічаєтсья двічі і т.д.



