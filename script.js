const btnEle=document.getElementById("btn");
const birthdayEle=document.getElementById("birthday");
const resultEle=document.getElementById("result");

function calculateAge(){
   const birthdayValue=birthdayEle.value;
   if(birthdayValue===""){
    alert("please enter birth date!");
   }
   else{
    const age=getAge(birthdayValue);
    resultEle.innerText=`Your Age is ${age} ${age>1 ? "years" : "year"} old!`;
   }
   
}

function getAge(birthdayValue){
    const currentDate=new Date();
    const birthDate= new Date(birthdayValue);
    let age=currentDate.getFullYear() - birthDate.getFullYear();
    const month=currentDate.getMonth()-birthDate.getMonth();

    if(month<0 || (month===0 && currentDate.getDate() < birthDate.getDate())){
        age--;
    }
    return age;
}

btnEle.addEventListener("click", calculateAge);
