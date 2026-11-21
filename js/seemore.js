// See More from.. https://medium.com/@vnkelkar11/implementing-text-overflow-and-show-more-less-in-html-css-70c9a2baf58b
const content = document.getElementById("content");
const text = document.getElementById("text");
const expandLink = document.getElementById("expand-link");

// Detect whether text is overflowing
if (text.scrollHeight > text.clientHeight) {
    expandLink.style.display = "inline";
} else {
    expandLink.style.display = "none";
}

// collapse ...https://www.w3schools.com/howto/howto_js_collapsible.asp
const seeMoreButtons = document.querySelectorAll(".expand_text");

seeMoreButtons.forEach(button => {
    button.addEventListener("click", function() {
        const text = this.previousElementSibling;

        text.classList.toggle("expanded");

        if (text.classList.contains("expanded")) {
            this.textContent = "See Less";
        } else {
            this.textContent = ">>See More";
        }
    });
});