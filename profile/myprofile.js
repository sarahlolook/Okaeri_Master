const posts = [
    {
        id: 1,
        username: "Username",
        topic: "How to bake a perfect Sponge Cake!",
        content: "Once you've gently poured the mixture between two tins, spin the cake pans to ensure the air bubbles are evenly distributed. Then, to check when the cakes are ready, lightly touch them and see if they spring back (don't insert a skewer as that may cause deflation).",
        image: "../images/manager1.png"
    },
    {
        id: 2,
        username: "Username",
        topic: "Chat GPT nice diagram!",
        content: "a short definition of what each button do",
        image: "../images/mermaid-diagram.png"
    }
];

// Get the feed container
const feedContainer = document.getElementById("feed-container");

// Display all posts
posts.forEach(post => {

    feedContainer.innerHTML += `
        <div class="card_white">
            <a href="editfeed.html?id=${post.id}">Edit</a>
            <button type="button">Delete</button><br>

            <span>${post.username}</span><br>

            <h2>${post.topic}</h2>

            <div class="feed_main">
                <button type="button" class="expand_text no_link_style">>>See More</button>
                <span class="text-clip">${post.content}</span>
            </div>

            <div class="feed_side">
                <img src="${post.image}" class="pfp_img" alt="preview">
            </div>
        </div>
    `;
});