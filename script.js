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
const loveMessageArray = [
    "I loveee you naa mah sweetheart",
    "Ya always mahh little baby girl naa",
    "I am never ever going anywhere na babyy chehehe",
    "I would never fall in love again until I found you",
    "Yk I always really wanna jus go there to ya when we have any misunderstandings na",
    "And hold youu close to me, kissing away all your tears and pain",
    "I wanna hold your hands and go on peaceful nite walkie with ya",
    "I wanna huggeywuggy air jail yaa till everything becomes goodie",
    "I lovee youu mah baby, and I will always be in love with you na sweetheart",
    "You are the besstesttt hooman i can ebah habb chehehe mah lovee eueuehhee"
];

// const arr_txt = ["arka", "test"];
let btn = document.querySelector(".btn");
let txt1 = document.querySelector(".txt1");
let txt2 = document.querySelector(".txt2");
let first = document.querySelector(".first-div");
let first_txt = document.querySelector(".first-txt");

let c= 0;
const l = arr_txt.length;
let d = 0;

const interv = setInterval(() => {
    // const first_arr = ['test'];
    const first_arr = ["I", "love", "you", "sooooooo", "much", "na", "yk", "with", "you", "na"];

    const fl = first_arr.length;

    first_txt.textContent = first_arr.at(d);
    
    // d++;
    if(d===fl)
    {
        clearInterval(interv);
        first_screen();
    }
    d++;
}, 1000);

function first_screen()
{
    first.style.opacity = 0;
    first.style.visibility = "collapse";
}
let a = 0;
btn.onclick = () =>
{
    // btn.style.backgroundColor = "red";
    if(c >=l)
    {
        // txt1.textContent = c;
        first.style.visibility = "visible";
        first.style.opacity = "95%";
        first_txt.textContent = "Perfect ✨";
        const sec_interv = setInterval(() => {
            const apologyArray = ["you", "are", "perfect", "na", "sweetheart.", "I", "am", "sorrrey", "for", "all", "the misunderstandings", "we had na", "🥺", "can", "we", "have", "us", "back", "na", "sweetheart, please.", "🥺"];
            const al = apologyArray.length;
            first_txt.textContent = apologyArray.at(a);
            if(a===12)
            {
                first_txt.style.color = "wheat";
            }
            if(a>=al)
            {
                clearInterval(sec_interv);
                first_screen2();
            }
            a++;
        }, 1000);
    }
    else
    {
        txt1.textContent = arr_txt.at(c);
        txt2.textContent = loveMessageArray.at(c);
        c++;
    }

    // btn.style.backgroundColor = "white";
}

let x = 0;
function first_screen2()
{
    const valentine = ["a-and 👀",
        "sweetheart na ❤️", 
        "Will", "you", "be", "my", "valentine", "Will you be my valentine ? 🥺👉👈","Will you be my valentine ? 🥺👉👈"
    ];


    let vl = valentine.length;
    const third_interv = setInterval(() => {
        first_txt.textContent = valentine.at(x++);
        if(x == vl+1)
        {
            setTimeout(() => {
                window.open("foto.jpeg");
            }, 2000);
            first.style.opacity = 0;
            first.style.visibility = "collapse"; 
            clearInterval(third_interv);
            x=0;
            d=0;
            c=0;
            a=0;
        }
        
    }, 1000);
}
