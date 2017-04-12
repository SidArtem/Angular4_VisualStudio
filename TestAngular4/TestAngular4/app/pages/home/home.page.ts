import { Component } from '@angular/core';

@Component({
    templateUrl: './app/pages/home/home.view.html',
    selector: 'home-app',
})
export class HomePage{
    private title;
    constructor() {
        this.title = "Home Title";
    }
    
}