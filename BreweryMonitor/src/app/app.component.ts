import { Component, OnInit } from '@angular/core';

import { Container, ContainerService } from './service/container.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string;
    doorOpen: boolean;
    refrigeratIsOn: boolean;
    containers: Container[];
    containerService: ContainerService = new ContainerService();

    ngOnInit() {
        this.title = 'BreweryMonitor';
        this.doorOpen = false;
        this.refrigeratIsOn = false;

        this.containers = this.containerService.getContainers();

        //Refresh containers
        setInterval(() => {
            this.refrigeratIsOn = this.containerService.calculateTemperature(this.doorOpen);
            this.containers = this.containerService.getContainers();
        }, 1000);
    }

    onDoorOpened() {
        this.doorOpen = true;
    }

    onDoorClosed() {
        this.doorOpen = false;
    }
}
