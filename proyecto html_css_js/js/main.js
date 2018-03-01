export class Main{
    constructor(){
        this.vista = {
            header: document.querySelector('header'),
            footer: document.querySelector('footer'),
            imports: document.querySelectorAll('link[rel="import"]'),
            oImports : {},
        }
        
        this.vista.imports.forEach((elem) => {
            this.vista.oImports[elem.title]=elem.import;
        })

        //console.log(this.vista.oImports);
        //const tag = this.vista.oImports[elem.title];
        //console.log(tag.getElementsByTagName('template').getAttribute('id') );
/*
        this.nav = {
            navBars: this.vista.oImports['header'].querySelector(`#${'header'}`).content.querySelector('#nav-bars'),
            menuList: this.vista.oImports['header'].querySelector(`#${'header'}`).content.querySelector('#menu-list'),
        }
*/
        
        this.loadHeader('header');
        this.loadFooter('footer');
    }

    showMenu(){
        const menuList = document.querySelector('#menu-list');
        if(menuList.style.display == 'block'){
            menuList.style.display = 'none';
        } 
        else {
            menuList.style.display = 'block';
        }
    }

    loadHeader(id){
        const header = this.vista.oImports[id];
        const nav = header.querySelector(`#${id}`);
        this.vista.header.innerHTML = nav.innerHTML;
        
        //get navBars from document to show/hide menu:
        const navBars = document.querySelector('#nav-bars');
        navBars.addEventListener('click',this.showMenu.bind(this),false);
    }

    loadFooter(id){
        const footer = this.vista.oImports[id];
        const footerInfo = footer.querySelector(`#${id}`);
        this.vista.footer.innerHTML = footerInfo.innerHTML;
    }

   
}