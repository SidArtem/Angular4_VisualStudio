import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomePage } from 'pages/home/home.page';
import { InfoComponent } from 'components/info/info.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomePage
    } 
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        HomePage,
        InfoComponent
       
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}