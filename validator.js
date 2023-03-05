class Validator {
    constructor(config){
        this.elementsconfig = config
        this.errors = [];

        this.generateErrorsObject()
        this.inputListener()
    }
    generateErrorsObject() {
        for(let field in this.elementsconfig){
        this.errors[field] = []
        }
    }
    inputListener(){
        let inputSelector = this.elementsconfig

        for(let field in inputSelector){
            let el = document.querySelector(`input[name="${field}"]`)

            el.addEventListener("input", this.validate.bind(this))
        }
    }

validate(e) {
let elfields = this.elementsconfig

let field = e.target
let fieldName = field.getAttribute("name")
let fieldValue = field.value

this.errors[fieldName] = [];

if(elfields[fieldName].required) {
    if(fieldValue === ""){
        this.errors[fieldName].push("Polje je prazno")

            }

        }
        if(elfields[fieldName].email){
            if(!this.validateEmail(fieldValue)) {
                this.errors[fieldName].push("Neispravna e mail adresa")
            }

        }
            if(fieldValue.length < elfieldsF[fieldName].minlength || fieldValue.length > elfields[fieldName].maxlength ) {
                this.errors[fieldName].push(`Polje moraa imati minimalno ${elfields[fieldName].minlength} i maksimalno ${elfields[fieldName].maxlength} karaktera`)
            }

            if(elfields[fieldName].matching) {
                
                let matchingEl = document.querySelector(`input[name="${elfields[fieldName].matchin}"]`)

                if(fieldValue != matchingEl.value) {
                
                    this.errors[fieldName].push("Lozinke se ne poklapaju")
                }

                if(this.errors[fieldName].length === 0) {
                    this.errors[fieldName] = []
                    this.errors
                }
            }
      }
      validateEmail(email) {

        if( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
                }
                return false
            


      }
            
      

    }   
