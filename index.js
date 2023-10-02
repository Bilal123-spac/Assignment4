

//function sum(x,y){
//  return x+y;
//}
//console.log("x and y is" ,x+y);
//console.log("y and z is" ,y+z);
//console.log("z and x is" ,z+x);

//const arry=[1,2,3,4,5] 

let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
let validator = document.querySelector(".validator");

    
        //newEle.innerHTML=`${inputs.value}  <i class="fa-solid fa-trash"><i class="fa-solid fa-pen-to-square"></i>`;
        function Add(){
            if(inputs.value == "")
            {
               validator.textContent = "Empty Input";
          
            }
            else
            {
                let newEle = document.createElement("ul");
                newEle.innerHTML=`${inputs.value} <i class="fa-solid fa-trash" ><i class="fa-solid fa-pen-to-square"  ></i>`;
                text.appendChild(newEle);
                inputs.value="";
                newEle.querySelector("i").addEventListener("click" , remove);
                function remove(){
                    newEle.remove()
                }
            }
        }