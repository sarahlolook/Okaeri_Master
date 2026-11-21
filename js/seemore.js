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