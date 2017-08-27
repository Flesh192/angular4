import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AsyncLocalStorageModule} from 'angular2-async-local-storage';

import {AppComponent} from './app.component';
import {ClinicComponent} from './clinic/clinic.component';
import {TherapistComponent} from './therapist/therapist.component';
import {PatientComponent} from './patient/patient.component';

import {AppRoutingModule} from './app-routing/app-routing.module';


@NgModule({
    declarations: [
        AppComponent,
        ClinicComponent,
        TherapistComponent,
        PatientComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        AsyncLocalStorageModule,
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
