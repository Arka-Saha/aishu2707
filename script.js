const arr_txt = [
    "With you even the simplest tuktuk auto ride, feels like a ride in the most expensive sports car.",
    "Even the hair band you gave me, it feels like wearing the most beautiful, expensive Rolex watch.",
    "That day when you paid for me, when i was broke hehe, i felt like the richest man in this world.",
    "With you, your beautiful voice notes feels like the most pleasant and soothing voice i can ever hear.",
    "With you, the fotos ya send me, feels like my eyes have seen the entirity of the world in one frame.",
    "With you even our silly chats, being childsh, being little kids again, feels like you are right here holding my hands, telling me I am safe with you always.",
    "With you our video koll vlogs feels like me airjailey ya and we going through sand on the beach, or seeing the beautiful views from a mountain.",
    "With you, whenever ya eepy koll me and i comfort ya to eep, it feels like ya slowly snuggleyy with me till ya comfy and i gently kiss you goodnitey and we eeppy.",
    "With you, whenever ya compliment me, call me handsome hehe, i feel handsome fr shhh.",
    "With you na, everything is just perfect ✨️"
];
  
let btn = document.querySelector(".btn");
let txt1 = document.querySelector(".txt1");
let txt2 = document.querySelector(".txt2");

let c= 0;
const l = arr_txt.length;
btn.onclick = () =>
{
    
    if(c >=l)
    {
        txt1.textContent = c;
    }
    else
    {
        txt1.textContent = arr_txt.at(c++);
    }
    
}
