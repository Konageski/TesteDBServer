import { container } from '@angular/core/src/render3';
import { TestBed } from '@angular/core/testing';

import { Container, ContainerService } from './container.service';

describe('ContainerService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    let service: ContainerService = new ContainerService();
    let containers: Container[];
    let refrigeratIsOn: boolean = false;

    it('starting temperature', () => {
        containers = service.getContainers();
        expect(containers[0].currentTemperature).toBe(4);
        expect(containers[1].currentTemperature).toBe(5);
        expect(containers[2].currentTemperature).toBe(4);
        expect(containers[3].currentTemperature).toBe(6);
        expect(containers[4].currentTemperature).toBe(3);
        expect(containers[5].currentTemperature).toBe(4);
    });

    it('opened door and rising temperature', () => {
        for (let index = 0; index < 10; index++) {
            refrigeratIsOn = service.calculateTemperature(true);
        }
        containers = service.getContainers();

        expect(refrigeratIsOn).toBeFalsy();

        expect(containers[0].currentTemperature.toFixed(1)).toBe('5.0');
        expect(containers[1].currentTemperature.toFixed(1)).toBe('6.0');
        expect(containers[2].currentTemperature.toFixed(1)).toBe('5.0');
        expect(containers[3].currentTemperature.toFixed(1)).toBe('7.0');
        expect(containers[4].currentTemperature.toFixed(1)).toBe('4.0');
        expect(containers[5].currentTemperature.toFixed(1)).toBe('5.0');
        
        expect(containers[0].color).toBe('white');
        expect(containers[1].color).toBe('white');
        expect(containers[2].color).toBe('white');
        expect(containers[3].color).toBe('white');
        expect(containers[4].color).toBe('white');
        expect(containers[5].color).toBe('white');
    });

    it('opened door and rising temperature and Container 2 is above the limit', () => {
        refrigeratIsOn = service.calculateTemperature(true);
        containers = service.getContainers();

        expect(refrigeratIsOn).toBeFalsy();
        
        expect(containers[0].currentTemperature.toFixed(1)).toBe('5.1');
        expect(containers[1].currentTemperature.toFixed(1)).toBe('6.1');
        expect(containers[2].currentTemperature.toFixed(1)).toBe('5.1');
        expect(containers[3].currentTemperature.toFixed(1)).toBe('7.1');
        expect(containers[4].currentTemperature.toFixed(1)).toBe('4.1');
        expect(containers[5].currentTemperature.toFixed(1)).toBe('5.1');
        
        expect(containers[0].color).toBe('white');
        expect(containers[1].color).toBe('red');
        expect(containers[2].color).toBe('white');
        expect(containers[3].color).toBe('white');
        expect(containers[4].color).toBe('white');
        expect(containers[5].color).toBe('white');
    });

    it('opened door and rising temperature and Containers (1, 2, 4, 5, 6) is above the limit', () => {
        for (let index = 0; index < 10; index++) {
            refrigeratIsOn = service.calculateTemperature(true);
        }
        containers = service.getContainers();

        expect(refrigeratIsOn).toBeFalsy();
        
        expect(containers[0].currentTemperature.toFixed(1)).toBe('6.1');
        expect(containers[1].currentTemperature.toFixed(1)).toBe('7.1');
        expect(containers[2].currentTemperature.toFixed(1)).toBe('6.1');
        expect(containers[3].currentTemperature.toFixed(1)).toBe('8.1');
        expect(containers[4].currentTemperature.toFixed(1)).toBe('5.1');
        expect(containers[5].currentTemperature.toFixed(1)).toBe('6.1');
        
        expect(containers[0].color).toBe('red');
        expect(containers[1].color).toBe('red');
        expect(containers[2].color).toBe('white');
        expect(containers[3].color).toBe('red');
        expect(containers[4].color).toBe('red');
        expect(containers[5].color).toBe('red');
    });

    it('opened door and rising temperature and Containers (1, 2, 3, 4, 5, 6) is above the limit', () => {
        for (let index = 0; index < 10; index++) {
            refrigeratIsOn = service.calculateTemperature(true);
        }
        containers = service.getContainers();

        expect(refrigeratIsOn).toBeFalsy();
        
        expect(containers[0].currentTemperature.toFixed(1)).toBe('7.1');
        expect(containers[1].currentTemperature.toFixed(1)).toBe('8.1');
        expect(containers[2].currentTemperature.toFixed(1)).toBe('7.1');
        expect(containers[3].currentTemperature.toFixed(1)).toBe('9.1');
        expect(containers[4].currentTemperature.toFixed(1)).toBe('6.1');
        expect(containers[5].currentTemperature.toFixed(1)).toBe('7.1');
        
        expect(containers[0].color).toBe('red');
        expect(containers[1].color).toBe('red');
        expect(containers[2].color).toBe('red');
        expect(containers[3].color).toBe('red');
        expect(containers[4].color).toBe('red');
        expect(containers[5].color).toBe('red');
    });

    it('Closed door and refrigerator on and falling temperature and Containers (1, 2, 4, 5, 6) is above the limit', () => {
        for (let index = 0; index < 20; index++) {
            refrigeratIsOn = service.calculateTemperature(false);
        }
        containers = service.getContainers();

        expect(refrigeratIsOn).toBeTruthy();
        
        expect(containers[0].currentTemperature.toFixed(1)).toBe('6.1');
        expect(containers[1].currentTemperature.toFixed(1)).toBe('7.1');
        expect(containers[2].currentTemperature.toFixed(1)).toBe('6.1');
        expect(containers[3].currentTemperature.toFixed(1)).toBe('8.1');
        expect(containers[4].currentTemperature.toFixed(1)).toBe('5.1');
        expect(containers[5].currentTemperature.toFixed(1)).toBe('6.1');
        
        expect(containers[0].color).toBe('red');
        expect(containers[1].color).toBe('red');
        expect(containers[2].color).toBe('white');
        expect(containers[3].color).toBe('red');
        expect(containers[4].color).toBe('red');
        expect(containers[5].color).toBe('red');
    });

    it('Closed door and refrigerator on and falling temperature and Container 2 is above the limit', () => {
        for (let index = 0; index < 20; index++) {
            refrigeratIsOn = service.calculateTemperature(false);
        }
        containers = service.getContainers();

        expect(refrigeratIsOn).toBeTruthy();
        
        expect(containers[0].currentTemperature.toFixed(1)).toBe('5.1');
        expect(containers[1].currentTemperature.toFixed(1)).toBe('6.1');
        expect(containers[2].currentTemperature.toFixed(1)).toBe('5.1');
        expect(containers[3].currentTemperature.toFixed(1)).toBe('7.1');
        expect(containers[4].currentTemperature.toFixed(1)).toBe('4.1');
        expect(containers[5].currentTemperature.toFixed(1)).toBe('5.1');
        
        expect(containers[0].color).toBe('white');
        expect(containers[1].color).toBe('red');
        expect(containers[2].color).toBe('white');
        expect(containers[3].color).toBe('white');
        expect(containers[4].color).toBe('white');
        expect(containers[5].color).toBe('white');
    });

    it('Closed door and refrigerator on and falling temperature and all the containers are in the ideal temperature', () => {
        for (let index = 0; index < 2; index++) {
            refrigeratIsOn = service.calculateTemperature(false);
        }
        containers = service.getContainers();

        expect(refrigeratIsOn).toBeTruthy();
        
        expect(containers[0].currentTemperature.toFixed(1)).toBe('5.0');
        expect(containers[1].currentTemperature.toFixed(1)).toBe('6.0');
        expect(containers[2].currentTemperature.toFixed(1)).toBe('5.0');
        expect(containers[3].currentTemperature.toFixed(1)).toBe('7.0');
        expect(containers[4].currentTemperature.toFixed(1)).toBe('4.0');
        expect(containers[5].currentTemperature.toFixed(1)).toBe('5.0');
        
        expect(containers[0].color).toBe('white');
        expect(containers[1].color).toBe('white');
        expect(containers[2].color).toBe('white');
        expect(containers[3].color).toBe('white');
        expect(containers[4].color).toBe('white');
        expect(containers[5].color).toBe('white');
    });

    it('Closed door and refrigerator on and falling temperature and all the containers are in the ideal temperature', () => {
        for (let index = 0; index < 20; index++) {
            refrigeratIsOn = service.calculateTemperature(false);
        }
        containers = service.getContainers();

        expect(refrigeratIsOn).toBeTruthy();
        
        expect(containers[0].currentTemperature.toFixed(1)).toBe('4.0');
        expect(containers[1].currentTemperature.toFixed(1)).toBe('5.0');
        expect(containers[2].currentTemperature.toFixed(1)).toBe('4.0');
        expect(containers[3].currentTemperature.toFixed(1)).toBe('6.0');
        expect(containers[4].currentTemperature.toFixed(1)).toBe('3.0');
        expect(containers[5].currentTemperature.toFixed(1)).toBe('4.0');
        
        expect(containers[0].color).toBe('white');
        expect(containers[1].color).toBe('white');
        expect(containers[2].color).toBe('white');
        expect(containers[3].color).toBe('white');
        expect(containers[4].color).toBe('white');
        expect(containers[5].color).toBe('white');
    });

    it('Closed door and refrigerator off and all the containers are in the minimum temperature', () => {
        refrigeratIsOn = service.calculateTemperature(false);
        containers = service.getContainers();

        expect(refrigeratIsOn).toBeFalsy();
        
        expect(containers[0].currentTemperature.toFixed(1)).toBe('4.0');
        expect(containers[1].currentTemperature.toFixed(1)).toBe('5.0');
        expect(containers[2].currentTemperature.toFixed(1)).toBe('4.0');
        expect(containers[3].currentTemperature.toFixed(1)).toBe('6.0');
        expect(containers[4].currentTemperature.toFixed(1)).toBe('3.0');
        expect(containers[5].currentTemperature.toFixed(1)).toBe('4.0');
        
        expect(containers[0].color).toBe('white');
        expect(containers[1].color).toBe('white');
        expect(containers[2].color).toBe('white');
        expect(containers[3].color).toBe('white');
        expect(containers[4].color).toBe('white');
        expect(containers[5].color).toBe('white');
    });

});
