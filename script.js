let myFormEl = document.getElementById("myForm");


let nameEl = document.getElementById("name");
let nameErrorMsgEl = document.getElementById("nameErrorMsg");


let emailEl = document.getElementById("email");
let emailErrorMsgEl = document.getElementById("emailErrorMsg");


let workingstatusEl = document.getElementById("status");


let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");


let statusOfFormSubmitEl = document.getElementById("statusOfFormSubmit");

let formData = {
    name:"",
    email:"",
    status:"Active",
    gender:"Male"
};

nameEl.addEventListener("change",function(event){
    if(event.target.value === ""){
        nameErrorMsgEl.textContent = "*Required*";
    }
    else{
        nameErrorMsgEl.textContent = ""
    }
    formData.name = event.target.value;
});

emailEl.addEventListener("change",function(event){
    if(event.target.value === ""){
        emailErrorMsgEl.textContent = "*Required*";
    }
    else{
        emailErrorMsgEl.textContent = ""
    }
    formData.email = event.target.value;
});

workingstatusEl.addEventListener("change",function(event){
    formData.status = event.target.value;
}); 

genderMaleEl.addEventListener("change",function(event){
    formData.gender = event.target.value;
});

genderFemaleEl.addEventListener("change",function(event){
    formData.gender = event.target.value;
});

function validateFormData(formData){
    let {name,email} = formData;
    if(name === ""){
        nameErrorMsgEl.textContent = "*Required*"
    }
    if(email === ""){
        emailErrorMsgEl.textContent = "*Required*"
    }
};

function submitFormData(formData){
    let options = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            Authorization:"Bearer 45b494af4b1fe49538c570a0232869af3f9f3de5c9465d2bc2b53555a37f479b"
        },
        body:JSON.stringify(formData)
    }
    let url = "https://gorest.co.in/public-api/users";


    fetch(url,options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            statusOfFormSubmitEl.textContent = JSON.stringify(jsonData);
            statusOfFormSubmitEl.classList.remove("d-none");
        });
};

myFormEl.addEventListener("submit",function(event){
    event.preventDefault();
    validateFormData(formData);
    submitFormData(formData);
});