function addNewWEField(){
    
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-3');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb = document.getElementById("we")
    let weAddButtonOb = document.getElementById("weAddButton")

    weOb.insertBefore(newNode,weAddButtonOb)
}
function addNewAQField(){
   
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-3');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let aqOb = document.getElementById("aq")
    let aqAddButtonOb = document.getElementById("aqAddButton")

    aqOb.insertBefore(newNode,aqAddButtonOb)
}

function generateCV(){

    let imgField = document.getElementById("imgField").value;
    let imgT = document.getElementById("imgT");
    imgT.src = imgField;

    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    let nameT2 = document.getElementById("nameT2");
    nameT2.innerHTML = nameField;

    let contactField = document.getElementById("contactField").value;
    let contactT = document.getElementById("contactT");
    contactT.innerHTML = contactField;

    let addressField = document.getElementById("addressField").value;
    let addressT = document.getElementById("addressT");
    addressT.innerHTML = addressField;

    let fbField = document.getElementById("fbField").value;
    let fbT = document.getElementById("fbT");
    fbT.innerHTML = fbField;

    let instaField = document.getElementById("instaField").value;
    let instaT = document.getElementById("instaT");
    instaT.innerHTML = instaField;

    let linkedinField = document.getElementById("linkedinField").value;
    let linkedT = document.getElementById("linkedT");
    linkedT.innerHTML = linkedinField;

    let githubField = document.getElementById("githubField").value;
    let githubT = document.getElementById("githubT");
    githubT.innerHTML = githubField;

    let objectiveField = document.getElementById("objectiveField").value;
    let objectiveT = document.getElementById("objectiveT");
    objectiveT.innerHTML = objectiveField;

    // work experience

   let weField = document.getElementsByClassName("weField");
   let str = "";
   for(let e of weField){
    str += `<li> ${e.value} </li>`;
   }

   document.getElementById("weT").innerHTML = str;

//    academic qualification

   let aqField = document.getElementsByClassName("aqField");
   let str1 = "";
   for(let e of aqField){
    str1 += `<li> ${e.value} </li>`;
   }

   document.getElementById("aqT").innerHTML = str1;

   document.getElementById("cv-form").style.display = "none"
   document.getElementById("cv-template").style.display = "block"
}


// print cv

function printCV(){
    window.print();
}