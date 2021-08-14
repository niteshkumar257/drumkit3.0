var i;
for( var i=0;i<document.querySelectorAll("button").length;i++)
{


document.querySelectorAll("button")[i].addEventListener("click",function () {
 var buttoninnerhtml=this.innerHTML
 makeSound(buttoninnerhtml);
 buttonAnimation(buttoninnerhtml)

});


      


}
// var car = {name:"BMW", model:"X9", color:"Black"};
// var housekeerper={name:"Nitesh" ,workExperience: 12 ,langugae:["English","Hindi","Telugu","tamil","Odia"]}
// function Housekepper(name,workexperience,language)
// {
//     this.name=name;
//     this.workExperience=workexperience;
//     this.language=language;
//     this.vlean=function(){
//         alert("Can i move clean thi sout")
//         clear();
        
//     }

//     }

// var housekeerper1=new Housekepper("Kimmy",20,["Tamil","joi","yugdf"]);
// var housekeeper2=new Housekepper("jenny",24,["Odia","matrathi"]);
document.addEventListener("keydown",function(event){
   
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(K)
{
    switch(K)
    {
        case "a":
            var tom1=new Audio('sounds/crash.mp3');
            tom1.play();
            break;
       case "s":
          var tom2=new Audio('sounds/kick-bass.mp3');
          tom2.play();
          break;
       case "d":
              var tom3=new Audio('sounds/snare.mp3');
              tom3.play();
              break;
       case "j":   
                  var tom4=new Audio('sounds/tom-4.mp3');
                  tom4.play();
                  break;       
      case "k":
      var crash=new Audio('sounds/tom-1.mp3');
                      crash.play();
                      break;                            
       case "w":
           var snare=new Audio('sounds/tom-3.mp3');
                          snare.play();
                          break;                               
                          case "l":
                              var kick=new Audio('sounds/tom-2.mp3');
                              kick.play();
                              break; 
                              default:
    }  
}

function buttonAnimation(currenkey)
{
    var activeButton= document.querySelector("."+currenkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed")} ,100)
}
