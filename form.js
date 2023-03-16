class ValidateForm
{
    constructor(form,fields)
    {
        this.form = form;
        this.fields = fields;
    }
    
    initialize()
    {
        // console.log(this.form);
        // console.log(this.fields);
        this.validateOnInput();
        this.validateOnSubmit();
    }
    validateOnInput()
    {
        let selfForm = this;
        this.fields.forEach(field =>
            {
                let input = document.querySelector(`#${field}`);
                input.addEventListener('input',()=>{
                    selfForm.validateFields(input);
                })
            })
    }
    validateFields(field)
    {
        let label =  field.previousElementSibling;
        let pass2 = document.getElementById('fname',)
        let error =  field.nextElementSibling;
        // console.log(error);
        if (field.value.trim()==="")//trim() remove the traling spaces ,remove unesesary spaces
        {
            error.textContent = `${label.innerHTML} cannot be blank`
            error.style.color = `red`;
        }
        else
        {
            error.textContent = ""
        }
    }

    validateOnSubmit()
    {
        let selfForm = this;
        this.form.addEventListener('submit',(event) =>
        {
            event.preventDefault();
            selfForm.fields.forEach(field =>{
                let input = document.querySelector(`#${field}`)
                selfForm.validateFields(input)
            })
        })
    }
    
}
let form = document.querySelector('.form');
let fields = [
    'fname',
    'lname',
    'address',
    'bday',
    'contact'
];
let newAccount = new ValidateForm(form,fields);

newAccount.initialize()

let arrayPatient = [];
const addpatient = (event)=>{
    event.preventDefault();
let patient =
{
    patientId: Date.now(),
    firstname: document.getElementById('fname').value,
    lastname: document.getElementById('lname').value,
    address: document.getElementById('address').value,
    birthday: document.getElementById('bday').value,
    contact: document.getElementById('contact').value,
    medicalhistory: document.querySelector('.medicalhistory').value
    
}
arrayPatient.push(patient);
console.table(arrayPatient);

localStorage.getItem("patient", JSON.stringify(arrayPatient,));
localStorage.getItem()
}
 
let btn = document.getElementById('submit');
btn.addEventListener('click', addpatient)