var manubtn=document.getElementById("manubtn")
    var snav=document.getElementById("snav")
    var manu=document.getElementById("manu")

snav.style.right="-250px";

manubtn.onclick=function()
{
    if(snav.style.right=="-250px")
    {
        snav.style.right="0";
        manu.scr="img/my.jpg";
    }
    else 
    {
        snav.style.right="-250px";
        manu.scr="img/mark.png";
    }
}

// //  var scroll = new SmoothScroll('a[href*="#"]', {
// 	speed: 1000,
// 	speedAsDuration: true
// });



let fullname = "saqib";
console.log(fullname);

const producrt
= {
    title: "ballpen",
    rating: 5,
    offer: 5,
    isoffer : true,

}

console.log(producrt)