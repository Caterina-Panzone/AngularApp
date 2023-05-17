# WebSPA

## Dependencies

- angular dependencies
- sass
- bootstrap
- popper.js
- rxjs
- tslib
- zone.js
- karma/jasmine
- nginx
- circuit-breaker-js

## Environment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Run the service

Being at /webspa/:

1. Set up local environment and workspace:

    Follow the instructions from Angular guide: `https://angular.io/guide/setup-local`

2. Install service deps

    `npm install`

3. Build the image (Steps 1 & 2 should not be needed if running the code with Docker):

    `docker build -t <DockerUserId>/<ImageName>:<version> .`

  There's no need to use the docker user at this point, just tag (-t) the image as you'd like. When trying to have the application up and running through kubernetes, the above nomenclature is needed.

4. Run recently created docker image:

    `docker run -p 4200:80 -d <DockerUserId>/<ImageName>`

    Same as above, make sure to  use the tag name in step 2.

5. Stop a running container:

    `docker stop <ContainerId>`
    
    In order to retrieve the id, use the following command to list all the running containers:
    `docker ps`

6. Access application:

    With a browser navigate to http://localhost:4200/

## Development

VSCode can be used for development (config included) which facilitates debugging, etc.
Recommended extensions:
- Docker: v1.25.0
- Angular Snippets: v13.0.0
- GitLens - Git supercharged: v13.5.0
- Kubernetes: v1.3.11
- YAML: v1.12.2
- Sass (.sass only): v1.8.26
- Prettier - Code formatter: v9.12.0
- Material Icon Theme: v4.27.0

Otherwise, use any text/code editor of preference.

## Pre-built Angular Documentation

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
