# Проєктування бази даних

## Модель бізнес-обʼєктів

@startuml
entity User <<ENTITY>>
entity User.id <<NUMBER>> #ffffff
entity User.email <<TEXT>> #ffffff
entity User.password <<TEXT>> #ffffff
entity User.fullname <<TEXT>> #ffffff

entity Quiz <<ENTITY>>
entity Quiz.id <<NUMBER>> #ffffff
entity Quiz.text <<TEXT>> #ffffff
entity Quiz.topic <<TEXT>> #ffffff
entity Quiz.creation_date <<DATE>> #ffffff
entity Quiz.creator_id <<NUMBER>> #ffffff

entity Question <<ENTITY>>
entity Question.id <<NUMBER>> #ffffff
entity Question.text <<TEXT>> #ffffff
entity Question.option_type <<TEXT>> #ffffff
entity Question.quiz_id <<NUMBER>> #ffffff

entity Option <<ENTITY>>
entity Option.id <<NUMBER>> #ffffff
entity Option.text <<TEXT>> #ffffff
entity Option.question_id <<TEXT>> #ffffff

entity ChoosenOption <<ENTITY>>
entity ChoosenOption.user_id <<NUMBER>> #ffffff
entity ChoosenOption.quiz_id <<NUMBER>> #ffffff
entity ChoosenOption.question_id <<NUMBER>> #ffffff
entity ChoosenOption.option_id <<NUMBER>> #ffffff

entity Answer <<ENTITY>>
entity ChoosenOption.user_id <<NUMBER>> #ffffff
entity ChoosenOption.quiz_id <<NUMBER>> #ffffff
entity ChoosenOption.question_id <<NUMBER>> #ffffff
entity ChoosenOption.option_id <<NUMBER>> #ffffff

User.id -down-* User
User.email -down-* User
User.password -down-* User
User.fullname -right-* User

Quiz.id -down-* Quiz
Quiz.text -down-* Quiz
Quiz.topic -down-* Quiz
Quiz.creation_date -down-* Quiz
Quiz.creator_id -down-* Quiz

Question.id -up-* Question
Question.text -up-* Question
Question.option_type -up-* Question
Question.quiz_id -up-* Question

Option.id -u-* Option
Option.text -u-* Option
Option.question_id -u-* Option

ChoosenOption.user_id -right-* ChoosenOption
ChoosenOption.quiz_id -u-* ChoosenOption
ChoosenOption.question_id -u-* ChoosenOption
ChoosenOption.option_id -u-* ChoosenOption

Answer.quiz_id -up-* Answer
Answer.question_id -up-* Answer
Answer.option_id -up-* Answer

User"1,1" -r-"0,*" Quiz
Quiz "1,1" -d- "0,*" Question
Question "1,1" -d- "0,*" Option
User "1,1" -d- "0,*" ChoosenOption
Quiz "1,1" -d- "0,*" ChoosenOption
Question "1,1" -d- "0,*" ChoosenOption
Option "1,1" -d- "0,*" ChoosenOption
Quiz "1,1" -d- "0,*" Answer
Question "1,1" -d- "0,*" Answer
Option "1,1" -d- "0,*" Answer
@enduml


## ER-модель
@startuml
	entity User <<ENTITY>> {
    id:INT
    email:TEXT
    password:TEXT
    usersname:TEXT
  }
  
  
  entity Quiz <<ENTITY>>{
    id:INT
    text:TEXT
    topic:TEXT
    creation_date:DATE
    creator_id:INT
  }
  
  entity Question <<ENTITY>>{
    id:INT
    text:TEXT
    option_type:TEXT
    quiz_id:INT
  }

  entity Option <<ENTITY>>{
	  id:INT
    text:TEXT
    question_id:INT    
	}

  entity ChoosenOption <<ENTITY>> {
      user_id:INT
      quiz_id:INT
      question_id:INT
      option_id:INT
    }

  entity Answer <<ENTITY>> {
      quiz_id:INT
      question_id:INT
      option_id:INT
  }

  Quiz "0, *" -d-> "1, 1" User
  Question "0, *" -d-> "1, 1" Quiz
  Option "0, *" -d-> "1, 1" Question
  ChoosenOption "1, 1" -l-> "0, *" User
  ChoosenOption "1, 1" -l-> "0, *" Quiz
  ChoosenOption "1, 1" -l-> "0, *" Question
  ChoosenOption "1, 1" -u-> "0, *" Option
  Answer "1, 1" -r-> "0, *" Quiz
  Answer "1, 1" -r-> "0, *" Question
  Answer "1, 1" -r-> "0, *" Option
@enduml
## Реляційна схема
[![schema](https://i.im.ge/2023/05/25/hqCRI9.schema.png)](https://im.ge/i/hqCRI9)