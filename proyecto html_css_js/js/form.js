class Form{
    constructor(){
        this.vista = {
            form: document.querySelector('#form'),
            name: document.querySelector('#nombre'),
            email: document.querySelector('#email'),
            brands: document.querySelector('#marcas'),
            comments: document.querySelector('#comentarios'),
            submit: document.querySelector('#submit'),
            resultForm: document.querySelector('#result-form'),
            resultList: document.querySelector('#result-list'),
            oDatos: {},
        }
        this.vista.submit.addEventListener('submit', this.getData.bind(this),false);
    }

    getData(oEv){
        oEv.preventDefault();
        this.getName();
        this.getEmail();
        this.getBrands();
        this.getComments();
        this.showData();
    }

    getName(){
        const name = this.vista.name.value;
        //console.log(this.vista.name.nextSibling.nextSibling);
        this.vista.oDatos['Nombre'] = name;
        /*
        if(!name.match(/^[A-ZÑ]+([A-ZÑa-zñ_]+)$/)){
            
        }
        */
    }

    getEmail(){
        const email = this.vista.email.value;
        this.vista.oDatos['Email'] = email;
    }

    getBrands(){
        const brandsOptions = this.vista.brands;
        const brand = brandsOptions.options[brandsOptions.selectedIndex];
        const brandText = brand.text;
        this.vista.oDatos['Marca'] = brandText;
    }

    getComments(){
        const comment = this.vista.comments.value;
        this.vista.oDatos['Comentario'] = comment;
        
        //console.log(this.vista.oDatos);
    }

    showData(){
        this.vista.resultForm.classList.toggle('oculto');
        this.vista.form.classList.toggle('oculto');

        for(var i in this.vista.oDatos){
            this.vista.resultList.innerHTML += "<li><strong>" + i + ": </strong>" + this.vista.oDatos[i] + '</li>';
            localStorage.setItem(i, this.vista.oDatos[i])
        }

        console.log(this.vista.resultList)
    }
}

(function () {
    document.addEventListener("DOMContentLoaded", () => new Form(), false)
})()