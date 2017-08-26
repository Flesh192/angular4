import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

import {Clinic} from '../clinic';

@Component({
    selector: 'app-clinic',
    templateUrl: './clinic.component.html',
    styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {
    clinics: Clinic[];
    clinic: Clinic;

    constructor(private route: ActivatedRoute,
                private localStorageService: LocalStorageService) {
    }

    getClinics() {
        /*let testOb = [
            { id: 11, name: 'Mr. Nice1' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        this.localStorageService.set('clinics', testOb);*/
        Promise.resolve(this.localStorageService.get('clinics')).then(clinics => {
            return this.clinics = clinics as Clinic[];
        });
    }

    getClinic(id: number): void {
        //this.clinic = this.clinics.find(clinic => clinic.id === +id);
        Promise.resolve(this.localStorageService.get('clinics')).then(clinics => {
            let clinicsArr = clinics as Clinic[];
            this.clinic = clinicsArr.find(clinic => clinic.id === +id);
        });
    }

    saveClinic() {
        this.clinics.push({id: this.clinic.id, name: this.clinic.name});
        this.localStorageService.set('clinics', this.clinics);
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.getClinic(params['id']);
            } else {
                this.getClinics();
            }
        });
    }

}
