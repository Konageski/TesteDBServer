# BreweryMonitor

The BreweryMonitor is an application that monitors the temperature of beer containers, and visually shows if the temperature has exceeded the maximum limit.
If the temperature is over the maximum, the color of container is change to red.
On the screen I placed the buttons to control the opening or closing of the door.
When opening the container door the temperature starts to rise, so when closed the cooling is switched on and temperatures begin to drop to the minimum temperature limit.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.

## Development install

Run `npm install` to install dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## What are the highlights of your logic/code writing style?

I maked the monitor in the most simplest and easiest way for maintenance.
I think a good code should always be easy to read and intuitive. 

## What could have been done in a better way? What would you do in version 2.0?

I would create a database with container temperatures to verify the need to improve refrigeration.
I would create a record screen of beer types and temperature limits.
I would put an alarm on the containers to warn that the temperature was high.
I would put a lock on the door opening if the temperature was already high.
Add system logs and catch erros.

## What were the questions you would ask and your own answers/assumptions?

- Is it possible to have more containers on the screen?
In this version there are only 6 containers.

- One or more container is empty, but in monitor the color is red, what i do to disable this containers?
This option is not available.

- Can i put two different beer in the same container?
It is not possible because the system control one type of beer per container.

## Any other notes you feel relevant for the evaluation of your solution

I developed this project using Angular 7.0.2 and Angular Material.
I created this monitor, imagining that there would be a service available to collect the temperature of the containers.
