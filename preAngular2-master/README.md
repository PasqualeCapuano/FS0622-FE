1) Due campi di input con nome e cognome, gestiti dal componente newUser, un campo età (incremento e decremento) gestito dal componente età

2) Scrittura dei dati nei campi di input e incremento/decremento età

2a) Incremento e decremento creano già il valore di età nell'oggetto -> il componente età riceve il valore iniziale (0) in @Input, emette in @Output il valore di età verso newUser, che lo riceverà attraverso la variabile newEta

3) CLICK SU AGGIUNGI: il componente newUser emette in @Output un oggetto valorizzato, che verrà ricevuto dal componente che utilizzerà due EventEmitter (onManCreated - onWomanCreated); app Component, attraverso due metodi onAddMan - onAddWoman, farà il push nell'array di oggetti

4) L'array sarà ricevuto come dato dal componente userCard, che lo riceve in @Input e ne gestisce iil ciclo (nell'app Component), e la stampa (nell'HTML)

# PreAngular2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
