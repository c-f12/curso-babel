export class Main{
    constructor(){
        this.vista = {
            header: document.querySelector('header'),
            footer: document.querySelector('footer'),
            imports: document.querySelectorAll('link[rel="import"]'),
            oImports : {},
        }

        console.log(this.vista.header)
        console.log(this.vista.imports)

        this.vista.imports.forEach((elem) => {
            this.vista.oImports[elem.title]=elem.import;
        });

        console.log(this.vista.oImports);

        Object.keys(this.vista.oImports).forEach((elem) => {
            console.log(elem)
            this.loadTemplate(elem);
        });
        
        console.log(this.vista.oImports);
/*
    this.nav = {
        navBars: this.vista.oImports['header'].querySelector(`#${'header'}`).content.querySelector('#nav-bars'),
        menuList: this.vista.oImports['header'].querySelector(`#${'header'}`).content.querySelector('#menu-list'),
    }
*/

    }

    showMenu(){
        const menuList = document.querySelector('#menu-list');
        const navBars = document.querySelector('#nav-bars');

        if(menuList.style.display == 'block'){
            menuList.style.display = 'none';
            navBars.classList.add('fa-bars');
            navBars.classList.remove('fa-times');
        } 
        else {
            menuList.style.display = 'block';
            navBars.classList.remove('fa-bars');
            navBars.classList.add('fa-times');
        }
    }

    loadTemplate(id){
        console.log('loadedtemplate')
        const contentTemplate = this.vista.oImports[id];
        console.log(contentTemplate)
        const getIdTemplate = contentTemplate.querySelector(`#${id}`);
        console.log(getIdTemplate)

        if(id === 'header'){
            this.vista.header.innerHTML = getIdTemplate.innerHTML;
            let navBars = document.querySelector('#nav-bars');
            navBars.addEventListener('click',this.showMenu.bind(this),false);
        }
        if(id === 'footer'){
            this.vista.footer.innerHTML = getIdTemplate.innerHTML;
        }
    }
}