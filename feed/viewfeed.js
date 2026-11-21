const posts = [
    {
        id: 1,
        username: "Internet user Username",
        topic: "How to bake a perfect Sponge Cake!",
        content: "Once you've gently poured the mixture between two tins, spin the cake pans to ensure the air bubbles are evenly distributed. Then, to check when the cakes are ready, lightly touch them and see if they spring back (don't insert a skewer as that may cause deflation).",
        image: "../images/manager1.png"
    }
];

// Get the post ID from the URL
const params = new URLSearchParams(window.location.search);
const postId = Number(params.get("id"));

// Find the post matching the ID
const post = posts.find(p => p.id === postId);

if (post) {
    document.getElementById("post-username").textContent = post.username;
    document.getElementById("post-topic").textContent = post.topic;
    document.getElementById("post-content").textContent = post.content;
    document.getElementById("post-image").src = post.image;
} else {
    document.querySelector(".card").textContent = "Post not found.";
}