# Tests for Node Todo App
End-To-End and API Integration tests in Protractor JavaScript for Node Todo application

# Requirements
* Node and npm
* MongoDB
* Protractor

# Installation
1. Clone the repository: git clone https://github.com/raheel0452/tests-todo-app.git
2. Install the application: npm install
3. Start the server: npm start
4. Run E2E and API tests : npm test

#Note
* If you wish to have a clean Database, run 
** for Linux OS : npm run seedLocal
** for Windows OS : npm run seedLocal_windows
* Current setup will directly connect with Chrome driver. If you wish to execute via Selenium server, please make following modifications
** tests/config.js : set 'directConnect:false'
** Start webdriver-manager:npm run start_webdriver_manager
** Run E2E and API tests : npm test
* JSHint linting options can be configured in '.jshintrc'