# Запити зацікавлених осіб

## <a name="intro"></a>Вступ

Даний розділ містить основну інформацію про нашу власну систему організації та управління опитуваннями експертів, а саме: короткий огляд продукту, список бізнес-сценаріїв, функціональність, практичність у використанні та продуктивність.

### <a name="aim"></a>Мета

Створення практичного, надійного та функціонально досконалого сервісу, що дасть можливість клієнтам проводити аналітичні опитування та систематизовано оброблювати отриману інформацію.

### <a name="context"></a>Контекст

Огляд завдань, пов'язаних із створенням системи організації та управління експертними опитуваннями.


### <a name="definitions"></a>Основні визначення та скорочення

Дивитись ["Аналіз предметної області"](http://localhost:3030/surveys-organization-and-management-system/requirements/state-of-the-art.html#%D0%B5%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D1%82)

## Короткий зміст

1. [Вступ](#intro)
2. [Мета](#aim)
3. [Контекст](#context)
4. [Основні визначення та скорочення](#definitions)
5. [Характеристика ділових процесів](#characteristics)
6. [Короткий огляд продукту](#review)
7. [Функціональність](#functionality)
8. [Практичність](#practicality)
9. [Надійність](#reliability)
10. [Продуктивність](#productivity)
11. [Експлуатаційна придатність](#serviceability)

## <a name="characteristics"></a>Характеристика ділових процесів

*Дається опис бізнес-сценаріїв взаємодії бізнес-акторів, робітників і, можливо, інформаційної системи за допомогою наступної
специфікації:*

***1. ID ПРОЦЕСУ:*** UNDEFINED_USER_REGISTRATION
    
   ***НАЗВА:*** Реєстрація нового користувача
    
   ***УЧАСНИКИ:*** Система, користувач

   ***ПЕРЕДУМОВИ:*** Незареєстрований користувач перейшов на сторінку

   ***РЕЗУЛЬТАТ:*** Створено особистий кабінет користувача

   ***ВИКЛЮЧНІ СИТУАЦІЇ:*** Відміна реєстрації, хибні дані

   ***ОСНОВНИЙ СЦЕНАРІЙ:*** 
   1. Користувач вводить дані
   2. Система обробляє дані
   3. Система заносить дані користувача в базу даних 
   4. Система створює особистий кабінет користувача 
   5. Система надає користивачу доступ до його особистого кабінету 

---

***2. ID ПРОЦЕСУ:*** UNDEFINED_USER_LOGIN
    
   ***НАЗВА:*** Вхід користувача в його особистий кабінет
    
   ***УЧАСНИКИ:*** Система, користувач

   ***ПЕРЕДУМОВИ:*** Зареєстрований користувач перейшов на сторінку

   ***РЕЗУЛЬТАТ:*** Користувачу наданий доступ до його особистого кабінету

   ***ВИКЛЮЧНІ СИТУАЦІЇ:*** Відміна входу, хибні дані

   ***ОСНОВНИЙ СЦЕНАРІЙ:***
   1. Користувач вводить дані 
   2. Система обробляє дані
   3. Система надає користивачу доступ до його особистого кабінету 
  
---   
   
***3. ID ПРОЦЕСУ:*** CREATE_SURVEY
    
   ***НАЗВА:*** Створення користувачем опитування
    
   ***УЧАСНИКИ:*** Система, користувач, замовник

   ***ПЕРЕДУМОВИ:*** Користувач знаходиться на сторінці свого особистого кабінету

   ***РЕЗУЛЬТАТ:*** Створене опитування

   ***ВИКЛЮЧНІ СИТУАЦІЇ:*** Користувач не створив жодного питання, замовник не одобрив або відмінив створення опитування

   ***ОСНОВНИЙ СЦЕНАРІЙ:*** 
   1. Користувач переходить на сторінку створення опитування 
   2. Користувач робить опитування
   3. Система додає опитування у базу даних 
   4. Користувач закінчує взаємодію із системою
   
---   
   
***4. ID ПРОЦЕСУ:*** UPDATE_SURVEY
    
   ***НАЗВА:*** Редагування опитування
    
   ***УЧАСНИКИ:*** Користувач, замовник, система

   ***ПЕРЕДУМОВИ:*** Користувач знаходиться на сторінці свого особистого кабінету

   ***РЕЗУЛЬТАТ:*** Оновлене опитування

   ***ВИКЛЮЧНІ СИТУАЦІЇ:*** Користувач не зробив жодних змін, замовник не ухвалив зміни

   ***ОСНОВНИЙ СЦЕНАРІЙ:*** 
   1. Користувач переходить на сторінку опитування
   2. Користувач робить зміни 
   3. Система додає зміни до бази даних 
   4. Користувач закінчує взаємодію із системою
   
---   
   
***5. ID ПРОЦЕСУ:*** DELETE_SURVEY
    
   ***НАЗВА:*** Видалення опитування
    
   ***УЧАСНИКИ:*** Користувач, система

   ***ПЕРЕДУМОВИ:*** Користувач знаходиться на сторінці свого особистого кабінету

   ***РЕЗУЛЬТАТ:*** Видалення опитування

   ***ВИКЛЮЧНІ СИТУАЦІЇ:*** Немає

   ***ОСНОВНИЙ СЦЕНАРІЙ:*** 
   1. Користувач переходить на сторінку опитування 
   2. Користувач видаляє опитування 
   3. Система видаляє опитування з бази даних 
   4. Користувач закінчує взаємодію із системою
   
---   
   
***6. ID ПРОЦЕСУ:*** GET_RESULTS
    
   ***НАЗВА:*** Отриманная результатів опитування
    
   ***УЧАСНИКИ:*** Користувач, замовник, система

   ***ПЕРЕДУМОВИ:*** Опитування закінчилось

   ***РЕЗУЛЬТАТ:*** Результати опитування

   ***ВИКЛЮЧНІ СИТУАЦІЇ:*** Опитування ніхто не пройшов

   ***ОСНОВНИЙ СЦЕНАРІЙ:*** 
   1. Користувач переходить на сторінку опитування
   2. Користувач дивиться результати
   3. Користувач закінчує взаємодію із системою
   
---

***7. ID ПРОЦЕСУ:*** INVITE_SURVEY
    
   ***НАЗВА:*** Надсилання запрошення для участі в опитуванні
    
   ***УЧАСНИКИ:*** Користувач, система

   ***ПЕРЕДУМОВИ:*** Створено опитування

   ***РЕЗУЛЬТАТ:*** Експерт отримав запрошення

   ***ВИКЛЮЧНІ СИТУАЦІЇ:*** Немає

   ***ОСНОВНИЙ СЦЕНАРІЙ:*** 
   1. Користувач відправляє запрошення на проходження опитування
   2. Система надсилає запрошення
   
---

## <a name="review"></a>Короткий огляд продукту

**SurveyMaster** – система управління, організації та обробки експертними опитуваннями, який характерний простий інтерфейс та широкий функціонал. Завдяки SurveyMaster будь-хто може створити опитування, аналізувати їх результати та ділитися ними.


## <a name="functionality"></a>Функціональність

Функціональність залежить від категорії зацікавлених осіб. Відповідно, для кожної категорії зацікавлених осіб буде відповідний їй інтерфейс. Це дає змогу систематизувати інформацію, а також досягти зручності у використанні системи.

### Категорії зацікавлених осіб:

+ **Респондент**
+ **Менеджер опитування**
+ **Адміністратор**

### Інтерфейс респондента (учасника)

Респондент – це людина, яка бере участь у заповненні анкети або проходженні опитування, тесту або інтерв’ю за допомогою функціоналу сервісу. Він має обліковий запис з необхідним функціоналом для зручного пошуку та проходження опитування, а також подальшої обробки отриманих результатів.

**<span style= "text-decoration:underline;">Можливості респондента:</span>**

+ Заповнювати анкети;
+ Долучатись до проходження анкет користуючись посиланням;
+ Здійснювати пошук доступних анкет, а також фільтрувати їх за багатьма критеріями, такими як тема, дата, автор тощо;
+ Надсилати заповнену анкету для обробки результатів;
+ Мати зворотній зв’язок з менеджером опитування;
+ Переглядати результати опитування, а також статистику по ним;

### Інтерфейс менеджера опитування

Менеджеру надається ряд інструментів для створення анкет та опитувань, а також їх подальшого редагування та видозмінення. Також надається функціонал для розповсюдження опитувань серед респондентів.

**<span style= "text-decoration:underline;">Можливості менеджера опитування:</span>**

+ Створення нових анкет;
+ Налаштовування окремих параметрів анкет;
+ Змінення візуальної складової анкет;
+ Доповнення або видалення вмісту анкет;
+ Можливість вигрузки результатів анкет для подальшої зручної обробки в табличних редакторах;
+ Поширення анкет серед респондентів;

### Інтерфейс адміністратора

Адміністраторський інтерфейс надає інструменти та функціонал, який дозволяє контролювати кожен етап опитування, починаючи зі створення та розповсюдження анкети, та закінчуючи збором результатів опитування та систематизацією даних.

**<span style= "text-decoration:underline;">Можливості адміністратора:<**

+ Створення нових анкет, опитувань та тестувань. Можливість їх подальшого редагування або видалення;
+ Передача результатів опитування респондентам;
+ Розсилка анкет;
+ Надання зворотнього зв’язку;
+ Наявність доступу до всіх можливостей респондента та менеджера ;опитувань;
+ Право на додавання або видалення менеджерів опитувань;

## <a name="practicality"></a>Практичність

+ Зручність у використанні;
+ Простий та інтуїтивно зрозумілий інтерфейс;
+ Можливість проходження опитування без реєстрації;
+ Зручні інструменти для аналізу результатів опитування;

## <a name="reliability"></a>Надійність

Основні вимоги стосовно продуктивності:

+ Здатність безперебійно працювати за будь-яких умов;
+ Захист від DDOS атак та роботів;
+ Можливість обробки запитів великої кількості користувачів одночасно;
+ Резервне копіювання;

## <a name="productivity"></a>Продуктивність

+ Швидкість роботи – система максимально оптимізована для ефективної роботи з великою кількістю даних та користувачів, що дозволяє значно скоротити час на обробку даних та створення нових опитувань.
+ Простота та зручність використання – завдяки зрозумілому та інтуїтивно зрозумілому інтерфейсу, будь-який користувач може легко та швидко зрозуміти, як працювати з системою та досягти бажаного результату.
+ Розширені можливості – система має широкий функціонал, що дозволяє здійснювати різні види опитувань та аналізувати результати, а також експортувати дані для подальшої обробки.
+ Гнучкість – система дозволяє налаштовувати параметри опитувань та розповсюджувати їх серед вибраної аудиторії, що дозволяє досягти максимальної продуктивності та ефективності в проведенні опитувань.
+ Висока якість результатів – завдяки широкому функціоналу та точному аналізу даних, система забезпечує високу якість та достовірність результатів, що дозволяє користувачам приймати обґрунтовані та виважені рішення.


## <a name="serviceability"></a>Експлуатаційна придатність

+ Використання сучасного та актуального стеку технологій
+ Вихідний текст має бути достатньо гнучким для можливості редагування та додавання нових можливостей
+ Максимально швидко реагувати на наявність багів та помилок у коді.
+ Регулярно проводити рефакторінг коду
+ При можливості змінювати залучені технології у випадку іх застарілості та наявності кращих варіантів
+ Проведення регулярної діагностики
