$(".row-tap").tabs()

$(document).ready(function(){
    $("#bar").click(function(){
      $("#ul").toggle(2500);
    });
  });


  let popup = document.getElementById("popup");
function openp(){
    popup.classList.add("open-popup");
}
 function closePopup(){
    popup.classList.remove("open-popup");
}

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