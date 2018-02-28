export class Form{
    constructor(){

        console.log('form');
        this.vista = {
            header: document.querySelector('header'),
            imports: document.querySelectorAll('link[rel="import"]'),
        }
    }

}