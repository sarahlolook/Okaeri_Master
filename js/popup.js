//pop-up card
const open_popup = document.querySelectorAll(".open_popup");
const popup = document.querySelector(".popup_bg");
const popup_content = document.getElementById("popup_content");
const popup_close = document.querySelector(".popup_close");

//selected content popup
open_popup.forEach(function(button) {
    button.addEventListener("click", function() {

        const content_id = this.dataset.popup;
        const content = document.getElementById(content_id);

        popup_content.innerHTML = content.innerHTML;

        const popupCard = popup.querySelector(".popup_card");
        popupCard.className = content.className;
        popup.style.display = "block";
    });
});

//close popup
popup_close.addEventListener("click", function() {
    popup.style.display = "none";
});


const stickerList = document.getElementById("sticker_list");

stickers.forEach(sticker => {
    const img = document.createElement("img");

    img.src = sticker.image;
    img.alt = sticker.name;
    img.classList.add("sticker_img");

    img.onclick = () => sendSticker(sticker.id);

    stickerList.appendChild(img);
});