import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AsyncLocalStorage} from 'angular2-async-local-storage';
import {Router} from '@angular/router';

import {Clinic} from '../clinic';

@Component({
    selector: 'app-clinic',
    templateUrl: './clinic.component.html',
    styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {
    clinics: Clinic[];
    clinic: Clinic;
    title: string;

    constructor(private route: ActivatedRoute,
                protected storage: AsyncLocalStorage,
                private router: Router) {}


    getClinics() {
        this.storage.getItem('clinics').subscribe((clinics) => {
            this.clinics = clinics;
        });
    }

    editClinic(id: number) {
        this.title = 'Edit';
        this.storage.getItem('clinics').subscribe((clinics) => {
            this.clinic = clinics.find(clinic => clinic.id === +id);
        });
    }

    saveClinic() {
        this.storage.getItem('clinics').subscribe(clinics => {
            let data = clinics.filter(clinic => clinic.id !== this.clinic.id);
            data.push(this.clinic);
            this.storage.setItem('clinics', data).subscribe(() => {}, () => {});
            this.clinic = null;
            this.clinics = data;
        });
    }

    addClinic() {
        this.title = 'Add';
        let id = this.generateId();
        this.clinic = {id: id, name: ''};
    }

    deleteClinic(id: number) {
        console.log(id);
        this.storage.getItem('clinics').subscribe(clinics => {
            this.clinics = clinics.filter(clinic => clinic.id !== id);
            this.storage.setItem('clinics', this.clinics).subscribe(() => {}, () => {});
        });
    }

    generateId() {
        let id: number;
        let flag = true;
        do {
            id = Math.floor(Math.random() * 100);
            let count = this.clinics.filter(clinic => clinic.id === id).length;
            if (count == 0) {
                flag = false;
            }
        }
        while (flag);
        return id;
    }

    ngOnInit() {
        this.getClinics();

        /**
         * Add test data
         */
        this.storage.getItem('clinics').subscribe(clinics => {
            if (clinics == null) {
                let testOb = [
                    { id: 1, name: 'Clinic 1' },
                    { id: 2, name: 'Clinic 2' },
                    { id: 3, name: 'Clinic 3' },
                    { id: 4, name: 'Clinic 4' },
                    { id: 5, name: 'Clinic 5' },
                ];
                this.storage.setItem('clinics', testOb)
                    .subscribe(() => {}, () => {});
            }
        });
    }
}
