const gallery_items = document.querySelector(".gallery_items"),
firstImg = gallery_items.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".gallery_cont i");




const showHideIcons = () => {
    let scrollWidth = gallery_items.scrollWidth - gallery_items.clientWidth;
    arrowIcons[0].style.display = gallery_cont.scrollLeft == 0 ? "none" : "block" ;
    arrowIcons[1].style.display = gallery_cont.scrollLeft == scrollWidth ? "none" : "block" ;
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // console.log(icon);
        let firstImgWidth = firstImg.clientWidth + 20;
        gallery_items.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() =>  showHideIcons(), 60);
    });
});