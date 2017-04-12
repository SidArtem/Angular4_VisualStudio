import { Component } from '@angular/core';

@Component({
    templateUrl: './app/components/info/info.view.html',
    selector: 'info',
})
export class InfoComponent{
    private description;
    constructor() {
        this.description = "New description";
    }
    
}