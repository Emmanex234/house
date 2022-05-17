$(".row-tap").tabs()

document.addEventListener("DOMContentLoaded",function(){
    var fadeComplete=function(e)
    {stage.appendChild(arr[0]);};
    var stage=
    document.getElementById("Slider");
    var arr=
    stage.getElementsByTagName("a");
    for(var i=0; i < arr.length;i++){
        arr[i].addEventListener("animationend",fadeComplete, false);
    }
},false);


let popup = document.getElementById("popup");
function openPopup(){
    popup.classList.add("open-popup");
}
 function closePopup(){
    popup.classList.remove("open-popup");
}

let pop = document.getElementById("slider-pop");
function sliderOpen(){
    pop.classList.add("openSlider-popup");
}
 function SliderClose(){
    pop.classList.remove("openSlider-popup");
};

$(document).ready(function(){
    $("#bar").click(function(){
      $("#ul").toggle();
    });
  });

  function message(e){
    //   e.preventDefault(); 
      var Name = document.getElementById('Name');
      var valname = /^([a-z0-9-\s]+)$/ig;
      var email = document.getElementById('Email');
      var message =document.getElementById('Message');
      var Subject = document.getElementById('Subject')
      const Success = document.getElementById('Success');
      const Danger = document.getElementById('Danger');

      if(Name.value === '' || email.value === '' || message.value ==='' || Subject.value ===''){
          Danger.style.display = 'block';
      }
      else{
          setTimeout(()=>{
            Name.value='';
            email.value ='';
            message.value='';
          },2000);

          Success.style.display='block';
      }
      setTimeout(()=>{
          Danger.style.display = 'none'
          Success.style.display = 'none'
      },4000);
  }
// Form Validation 
document.querySelector('.onclick').onclick = () => {
var Name = document.querySelector(`#Name`).value;
var nameContact = /^([a-z0-9-]+)$/i;

if (Name == '') {
    document.querySelector('.usererror').textContent = `Please insert your name here`;
} 
 if (Name.length < 2) {
    document.querySelector('.usererror').textContent = `Name: ${Name} cannot be less than 2 characters.`;
}
 if (!(nameContact.test(Name))) {
    document.querySelector('.usererror').textContent = `Name: ${Name}  invalid`;
}
else {
    document.querySelector('.usererror').textContent = `success`;
}

var email = document.querySelector(`#Email`).value;
var emailContact = /^([a-z0-9]+)@([a-z]+).([a-z]{2,5})(.[a-z]{2,3})?$/;

if (email == '') {
    document.querySelector('.usererror1').textContent = `Please insert your e-mail address here`;
}
 if (email.length < 8) {
    document.querySelector('.usererror1').innerHTML = `E-mail: ${email} cannot be less than 8 characters.`;
}
 if (!(emailContact.test(email))) {
    document.querySelector('.usererror1').innerHTML = `E-mail: ${email} = invalid`;
}
else {
    document.querySelector('.usererror1').innerHTML = `success`;
};

var message = document.querySelector(`#Subject`).value;
var textContact = /^([a-z0-9+$%,:;*#&-_\s]+)$/igm;

if (message == '') {
    document.querySelector('.usererror2').textContent = `Please insert your message here`;
}
 else if (message.length < 5) {
    document.querySelector('.usererror2').innerHTML = `Message: ${message} cannot be less than 5 characters.`;
}
 else if (!(textContact.test(message))) {
    document.querySelector('.usererror2').innerHTML = `Message: ${message} = invalid`;
}
else {
    document.querySelector('.usererror2').innerHTML = `success`;
};
}