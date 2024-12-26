const next_btn = document.getElementById('btn');
let count = 0;
const img_boi = document.getElementsByClassName('img-boi')[0];
const img_girl = document.getElementsByClassName('img-girl')[0];
const girlname = document.getElementsByClassName("girlname")[0];
const boiname = document.getElementsByClassName("boiname")[0];
const questext = document.getElementsByClassName('ques')[0];

const bois = [
    "businessprop-3.jpeg",
    "crashland-1.webp",
    "herprivate-1.jpeg",
    "kingtheland-1.jpeg",
    "lovenextdoor-1.webp",
    "mydemon-1.jpeg",
    "plankton-1.jpeg",
    "tears-2.avif",
    "watermelon-2.webp",
    "whenifly-2.webp",'lovetoday-1.jpeg','doraemon-2.png', 'mismatched-1.jpeg', 'itsokay-1.jxl','oggy-1.jpeg',
    'mrbean-1.webp', "billu-1.jpeg",
    'orkho2.png'
]

const bois_names = ['Cha Sung-Hoon', 'Ri Jeong-hyeok', 'Ryan Gold', 'Goo Won', 'Bae Seok-ryu', 'Jeong Gu-won', 'Hae Jo', 'Baek Hyun-woo', 'Ha Yi-chan', 'Zhang Lu Rang', 'Uthaman','Nobita', "Rishi", "Moon kang-tae", 'Oggy', "Mr Bean", "Billo billu"]
const girls_names = ['Jin Young-seo', 'Yoon Se-ri', 'Sung Deok-mi', 'Cheon Sa-rang', 'Choi Seung-hyo', 'Do Do-Hee', 'Jo Jae Mi', 'Hong Hae-in', 'Cheong-ah', 'Su Zai Zai','Nikitha', "Shizuka", "Dimple", "Go Moon-young", "Ollivia", "Irmaa", "Billu boo"]

const girls = [
    "businessprop-4.jpeg",
    "crashland-2.jpeg",
    "herprivate-2.png",
    "kingtheland-2.webp",
    "lovenextdoor-2.jpeg",
    "mydemon-2.jpeg",
    "plankton-2.jpeg",
    "tears-1.jpeg",
    "watermelon-1.jpeg",
    "whenifly-1.webp",'lovetoday-2.png','doraemon-1.png','mismatched-2.jpeg', 'itsokay-2.jpeg', 'oggy-2.jpeg',
    'mrbean-2.jpeg',"billu-2.jpeg",
    'aishu.png'
]


next_btn.onclick= ()=>
{
    //
    // next_btn.focus=;
    // setTimeout(()=>
    // {next_btn.focus()}, 500);
    //
    // console.log(bois[count], girls[count])
    boiname.textContent = bois_names[count];
    girlname.textContent = girls_names[count];
    img_boi.src = `imgs/${bois[count]}`
    img_girl.src = `imgs/${girls[count]}`
    img_boi.alt = `imgs/${bois[count]}`
    img_girl.alt = `imgs/${girls[count]}`
    
    count+=1
    if (count ===18){
        // alert("hehe");
        questext.textContent="Will ya be minee 🥺👉👈"
        img_boi.src = 'imgs/orkho2.png'
        img_girl.src = 'imgs/aishu.png'
        next_btn.onclick=()=>{window.location.href = "home2.html"}
        }
    
}
