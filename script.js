// const pageUp = document.querySelector(".pageUp");
// window.addEventListener("scroll", () => {
//     if(window.scrollY > 100){
//         pageUp.classList.add("active");
//     }else{
//         pageUp.classList.remove("active");
//     }
// })
window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".pop_cont").style.display = "flex"
        },
        500
    )
});
document.querySelector(".fa-times").addEventListener
("click", function(){
    document.querySelector(".pop_cont").style.display = "none";

});
// dropdown
const button = document.getElementsByClassName(".btn");
const list = document.getElementsByClassName(".list");
list.style.display = "none";

button.addEventListener("click", (event)=>{
    if (list.style.display == "none"){
        list.style.display = "block"
    }
    else{
        list.style.display = "none"
    }
})
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementsByClassName("navbar").style.padding = "30px 10px";
    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementsByClassName("navbar").style.padding = "80px 10px";
    // document.getElementById("logo").style.fontSize = "35px";
  }
}
// var indexValue = 1;
// showImg(indexValue);
// function btn_slide(e){showImg(indexValue = e);}
// function side_slide(e){showImg(indexValue += e);}
// function showImg(e){
//     var i;
//     const img = document.querySelectorAll('img');
//     const sliders = document.querySelectorAll('.btn-sliders span');
//     if( e > img.length){indexValue = 1}
//     if( e < 1){indexValue = img.length}
//     for(i = 0; i < img.length; i++){
//         img[i].style.display = "none";
//     }
//     for(i = 0; i < sliders.length; i++){
//         sliders[i].style.background = "gray";
//     }
//     img[indexValue-1].style.display = "block";
//     sliders[indexValue-1].style.background = "white";
// }