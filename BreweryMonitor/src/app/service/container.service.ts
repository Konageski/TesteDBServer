import { Injectable } from '@angular/core';

export interface Container {
    id: number;
    name: string;
    minimumTemperature: number;
    maximumTemperature: number;
    currentTemperature: number;
    color: string;
}

@Injectable({
    providedIn: 'root'
})
export class ContainerService {

    containers: Container[];

    constructor() { 
        this.containers = [
            { id: 1, name: 'Pilsner',       minimumTemperature: 4, maximumTemperature: 6, currentTemperature: 4, color: 'white' },
            { id: 2, name: 'IPA',           minimumTemperature: 5, maximumTemperature: 6, currentTemperature: 5, color: 'white' },
            { id: 3, name: 'Lager',         minimumTemperature: 4, maximumTemperature: 7, currentTemperature: 4, color: 'white' },
            { id: 4, name: 'Stout',         minimumTemperature: 6, maximumTemperature: 8, currentTemperature: 6, color: 'white' },
            { id: 5, name: 'Wheat beer',    minimumTemperature: 3, maximumTemperature: 5, currentTemperature: 3, color: 'white' },
            { id: 6, name: 'Pale Ale',      minimumTemperature: 4, maximumTemperature: 6, currentTemperature: 4, color: 'white' }
        ];
    }

    //This method getConteiners and thermometer sensor
    public getContainers():Container[] {
        return this.containers;
    }

    //This method simulates temperature variation 
    public calculateTemperature(doorOpen: boolean): boolean {
        let refrigeratIsOn:boolean = false;

        this.containers.forEach(container => {
            if (doorOpen) {
                container.currentTemperature += 0.1;
            } else {
                container.currentTemperature -= 0.05;
                refrigeratIsOn = true;
            }

            if (container.minimumTemperature > container.currentTemperature) {
                container.currentTemperature = container.minimumTemperature;
                refrigeratIsOn = false;
            } else if (container.maximumTemperature < container.currentTemperature) {
                container.color = 'red';
            } else {
                container.color = 'white';                    
            }
        });

        return refrigeratIsOn;
    }
}
