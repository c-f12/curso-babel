class Form{
    constructor(){
        this.vista = {
            form: document.querySelector('#form'),
            name: document.querySelector('#nombre'),
            email: document.querySelector('#email'),
            brands: document.querySelector('#marcas'),
            comments: document.querySelector('#comentarios'),
            resultForm: document.querySelector('#result-form'),
            resultList: document.querySelector('#result-list'),
            oDatos: {},
        }
        this.vista.form.addEventListener('submit', this.getData.bind(this),false);
    }

    getData(oEv){
        oEv.preventDefault();
        this.getName();
        this.getEmail();
        if(!this.getName() || !this.getEmail()){
            return false;
        } else {
            this.getBrands();
            this.getComments();
            this.showData();
        }
    }

    getName(){
        console.log('name');
        const name = this.vista.name.value;

        if(!name.match(/^[a-z ,.'-]+$/i)){
            this.vista.name.nextSibling.nextSibling.innerHTML = 'Nombre incorrecto';
            return false;
        } else{
            this.vista.name.nextSibling.nextSibling.innerHTML = '';
            this.vista.oDatos['Nombre'] = name;
            return true;
        }
    }

    getEmail(){
        console.log('email');
        const email = this.vista.email.value;

        if(!email.match(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/)){
            this.vista.email.nextSibling.nextSibling.innerHTML = 'Email incorrecto';
            return false;
        } else{
            this.vista.email.nextSibling.nextSibling.innerHTML = '';
            this.vista.oDatos['Email'] = email;
            return true;
        }
    }

    getBrands(){
        console.log('brands');
        const brandsOptions = this.vista.brands;
        const brand = brandsOptions.options[brandsOptions.selectedIndex];
        const brandText = brand.text;
        this.vista.oDatos['Marca'] = brandText;
    }

    getComments(){
        console.log('comments');
        const comment = this.vista.comments.value;
        this.vista.oDatos['Comentario'] = comment;
    }

    showData(){
        console.log('showdata');
        this.vista.resultForm.classList.toggle('oculto');
        this.vista.form.classList.toggle('oculto');

        for(var i in this.vista.oDatos){
            this.vista.resultList.innerHTML += "<li><strong>" + i + ": </strong>" + this.vista.oDatos[i] + '</li>';
            localStorage.setItem(i, this.vista.oDatos[i])
        }
    }
}

(function () {
    document.addEventListener("DOMContentLoaded", () => new Form(), false)
})()