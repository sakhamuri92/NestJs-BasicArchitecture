npm init

Nest Setup Steps

1 Install deps
2  Setup Typescript compiler settings
3  Create a Nest Module and controller
4 start app

npm install @nestjs/common@7.6.17 @nestjs/core@7.6.17 @nestjs/platform-express@7.6.17 reflect-metadata@0.1.13 typescript@4.3.2

    "@nestjs/common": "^7.6.17", --- contains vast majority of functions, classes that we use need from nest
    "@nestjs/core": "^7.6.17",
    "@nestjs/platform-express": "^7.6.17",--Lets Nest use expressJs for handling HTTP REQUESTS
    "reflect-metadata": "^0.1.13",--Library tied to deocorators
    "typescript": "^4.3.2"

    request---> NEST USES HTTP IMPLEMENTATION USING EXPRSESS OR FASTIFY FOR INCOMING REQUESTS--OUR CODE
    INSIDE NEST SERVER 
    Nest relies on outside IMPLEMENTATION to handle requests for it.Express is by default
Create a tsconfig.json


Http Server creation and its responsibilities


request -> validate data contained in request ->Make sure user is authenticated -- route the request to particular function-->run some business logic-->Access db--send response

For each and every step we do in server nest js provides us some tools

validate data contained in request --Pipe
Make sure user is authenticated--Guard
route the request to particular function---controller
run some business logic--Service
Access db--repository

For server start up we need below deps
npx ts-node-dev src/main.ts
- npm i ts-node-dev
- npm i rxjs --save

- npm i rxjs-compat --save

--Generating project with nest cli

npm install -g @nest/cli

nest new messages
nest generate module messages
nest generate controller messages/messages --flat

Steps to Add validation pipe

1 Tell nest to use global validation
2 create the class that describes different properties that the request body should have Data Transfer object dto
3 add validation rules to class
4 apply class to the request handler


npm install class-validator class-transformer

DI Container Flow

At startup register all the classes with the container
Container will figure out what each dependency each class has
--use the injectable decorator on each class and add them to providers list in modules
we then ask the container to create an instance of a class for us
container creates us all required dependencies and gives us instance
--Happens automatically- Nest will try to create controller instances for us
container will hold on to the created depenedency instances and reuse them if needed
