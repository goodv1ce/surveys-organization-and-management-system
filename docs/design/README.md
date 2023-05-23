# Проєктування бази даних

## Модель бізнес-обʼєктів

@startuml
entity Option <<ENTITY>>
entity Option.id <<NUMBER>> #ffffff
entity Option.text <<TEXT>> #ffffff
entity Option.type <<TEXT>> #ffffff

entity Answer <<ENTITY>>
entity Answer.id <<NUMBER>> #ffffff
entity Answer.text <<TEXT>> #ffffff
entity Answer.created <<DATE>> #ffffff

entity User <<ENTITY>>
entity User.id <<NUMBER>> #ffffff
entity User.username <<TEXT>> #ffffff
entity User.password <<TEXT>> #ffffff
entity User.email <<TEXT>> #ffffff
entity User.fullname <<TEXT>> #ffffff

entity Question <<ENTITY>>
entity Question.id <<NUMBER>> #ffffff
entity Question.text <<TEXT>> #ffffff
entity Question.type <<TEXT>> #ffffff

entity Quiz <<ENTITY>>
entity Quiz.id <<NUMBER>> #ffffff
entity Quiz.text <<TEXT>> #ffffff
entity Quiz.topic <<TEXT>> #ffffff
entity Quiz.created <<DATE>> #ffffff

Option.id -u-* Option
Option.text -u-* Option
Option.type -u-* Option

Answer.id -r-* Answer
Answer.text -u-* Answer
Answer.created -u-* Answer

Question.id -u-* Question
Question.text -u-* Question
Question.type -u-* Question

Quiz.id -d-* Quiz
Quiz.text -d-* Quiz
Quiz.topic -l-* Quiz
Quiz.created -d-* Quiz

User.id -u-* User
User.username -u-* User
User.password -r-* User
User.email -d-* User
User.fullname -d-* User

User"1,1" -r-"0,*" Quiz
Question"1,1"-l- "0,*" Answer
Quiz "1,1" -d- "0,*" Question
Question "1,1" -d- "0,*" Option
@enduml


## ER-модель
@startuml
	entity User <<ENTITY>> {
    id:INT
    usersname:TEXT
    email:TEXT
  }
  
  
  entity Quiz <<ENTITY>>{
    id:INT
    text:TEXT
    topic:TEXT
    created:DATE
    link:TEXT
  }
  
  entity Question <<ENTITY>>{
    id:INT
    type:TEXT
    text:TEXT
  }

  entity Option <<ENTITY>>{
	id:INT
    type:TEXT
    text:TEXT    
	}

  entity Answer <<ENTITY>> {
    id:INT
    text:TEXT
    data:DATE
  }

  Question "1, 1"<-u- "0, *" Option
  Answer "0, *" <-r- "1, 1" Question
  Quiz "1, 1" -l-> "0, *" Question
  Quiz "0, *" <-d- "1, 1" User
@enduml

- реляційна схема
