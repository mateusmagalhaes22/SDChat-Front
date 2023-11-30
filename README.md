# SDChat-Front
implementação de um sistema de chat para a cadeira de sistemas distribuidos (Front-End)

How to run:

  1: Clone the repository:
    
    git clone https://github.com/mateusmagalhaes22/SDChat.git
     
  2: run database docker image:
    
    docker run --name sdchatdb -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mateusmagalhaes/sdchatdb:latest
    
  3: enter project directory:
    
    cd SDChat
    
  4: activate venv:
    
  on ubuntu: 
    
    source ./.venv/bin/activate

  on cmd:

    C:\> ./.venv/bin/activate.bat

  on PowerShell:

    C:\> ./.venv/bin/Activate.ps1

  5: run API:

    flask --app api/aplication.py run

  6: enter front-end directory in other terminal:

    cd SDChat-Front/

  7: install dependencies:

    npm i

  8: run front-end:

    npm run start
