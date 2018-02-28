export class Main{
    constructor(){
        this.vista = {
            header: document.querySelector('header'),
            imports: document.querySelectorAll('link[rel="import"]'),
            oImports : {},
        }
        
        this.vista.imports.forEach((elem) => {
            this.vista.oImports[elem.title]=elem.import;
        })

        this.nav = {
            //const vistaHeader = this.vista.oImports['header'].querySelector(`#${'header'}`);
            navBars: this.vista.oImports['header'].querySelector(`#${'header'}`).content.querySelector('#nav-bars'),
            menuList: this.vista.oImports['header'].querySelector(`#${'header'}`).content.querySelector('#menu-list'),
        }

        console.log(this.nav.navBars);

        this.loadHeader('header');
        this.nav.navBars.addEventListener('click',this.showMenu.bind(this),false);
    }

    showMenu(){
        console.log('click');
        if(this.nav.menuList.style.display == 'block'){
            this.nav.menuList.style.display = 'none';
        } 
        else {
            this.nav.menuList.style.display = 'block';
        }
    }

    loadHeader(id){
        const header = this.vista.oImports[id];
        //console.log(header);
        const nav = header.querySelector(`#${id}`);
        //console.log(nav);
        this.vista.header.innerHTML = nav.innerHTML;
    }
}