# Grails With Angular
The Project Demonstrates Grails Connection With Angular With Auth Token Based API

To Use the App

1. You neee to make sure that you have installed Grails 4.0.12 Along with Java 1.8 SDK on your Machine.
2. Go inside #client folder and Perfrom `npm install`
3. Since we are using Grails as a backend and Angular as a frontend both the services should run on seprate terminals
4. For Grails navigate inside #server folder and run <br/>
    `grails`<br/>
    Inside Grails Console Execute <br/>
    `clean`<br/>
    `run-app`<br/>
    The grails will run at `http://localhost:8080/`.
5. For Running Angular, navigate inside client folder and run `ng serve` and then navigate to `http://localhost:4200/`

And there we go. Application is ready to use.

The application is protected to API Leakeage that means every API is evaulated based on Auth token. Therefore I have inserted some data to 
access the application.

| User  | Password | Role  | SESSION_CATEGORY | 
| ------------- | ------------- | ------------- | ------------- |
| cm@cm.com  | qwerty  | COACH  | BOXER  |
| sc@sc.com  | qwerty  | COACH  | YOGA  |
| pd@pd.com  | qwerty  | CLIENT  | CLIENT  |
| jb@jb.com  | qwerty  | CLIENT  | CLIENT  |


Please use above credentials to access the applcation.

 
