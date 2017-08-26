import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import {ClinicComponent} from '../clinic/clinic.component';
import {TherapistComponent} from '../therapist/therapist.component';
import {PatientComponent} from '../patient/patient.component';

const routes: Routes = [
    {path: '', redirectTo: '/clinics', pathMatch: 'full'},
    {path: 'clinics', component: ClinicComponent},
    {path: 'clinic/add', component: ClinicComponent},
    {path: 'clinic/:id', component: ClinicComponent},
    {path: 'therapists', component: TherapistComponent},
    {path: 'patients', component: PatientComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
