const btn = document.getElementsByClassName('btn')[0];
const img = document.getElementsByClassName('img')[0];
const quote = document.getElementsByClassName('quote')[0];
let count =0;

const pics = [
    "businessprop1.png",
    "crashland.png",
    "dora.jpeg",
    "herpriv.webp",
    "kingtheland.jpeg",
    "lovenextdoor.webp",
    "lovetoday.png",
    "mrplank.webp",
    "mydemon.jpeg",
    "qoftears.webp",
    "watermelon.png",
    "whenifly.webp"
]
const quotes = ['I lovee you na bubuu 🥺', 'I wanna frffrfr marrryyfy ya mah bubu wifeyy hhehe♥️', 'I will alwways tryifyy supahh tryy to be bettah orkho okeie 👉👈🥺',
     'Na une kadharliken na sweetheartey booboo ❤️❤️', 'We togethhaa will figure out everythingngn slowleyye okie na lovee 🥺🫶', 
    'A-amii tomakee bhalobashii naa bubu hehe 🤫🫣❤️','Mah bubuu naa 🥺 your orkho nebahah goin anywhere okiee na sshh🥺❤️', 'Your beautifull sweetestst eyessss 🤌😮‍💨',
    'Youururrr soothing voiceyeey aww 😫🤌', "Youururuu beautifullleeeeyy da mostststs preetiieesttstt faceyeye eheaeehjehkjrheja 🫣", "M-me wanana hab ish all naa meow for me onlyllyy 🥺👉👈",
    'Mwah okie ehaieafefnsej me lobbssuu hehehehe 🫣🫣🫣🫣🫣'
]
let check=0
btn.onclick = () =>
{
    if (check==1) {img.src = 'imgs2/us.jpeg';}
    
    else{
 
        img.src = `imgs2/${pics[count]}`;

        // console.log(img.src)
        // console.log(String.toString(img.src))
        img.alt = pics[count];
        quote.textContent=quotes[count];
        count++;
        if (count===12){
            img.src = 'imgs2/us.jpeg';
            btn.style.visibility= "hidden";
            // btn.style.
            check = 1
            quote.textContent = "Ya mah littel bubu bossey alawys shh okie 🥺❤️"
            img.src = 'imgs2/us.jpeg';

        }
}
}
