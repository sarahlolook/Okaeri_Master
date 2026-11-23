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

//stuck!!!
// collapse ...https://www.w3schools.com/howto/howto_js_collapsible.asp
var coll = document.getElementsByClassName("expand_text");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {

        var content = this.nextElementSibling;

        content.classList.toggle("expanded");

        if (content.classList.contains("expanded")) {
            this.textContent = "<<See Less";
        } else {
            this.textContent = ">>See More";
        }

    });
}