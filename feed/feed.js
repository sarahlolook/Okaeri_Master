const posts = [
    {
        id: 1,
        username: "Internet user Username",
        topic: "How to bake a perfect Sponge Cake!",
        content: "Once you've gently poured the mixture between two tins, spin the cake pans to ensure the air bubbles are evenly distributed. Then, to check when the cakes are ready, lightly touch them and see if they spring back (don't insert a skewer as that may cause deflation).",
        image: "../images/manager1.png"
    }
];

// Get the feed container
const feedContainer = document.getElementById("feed-container");

// Display all posts
posts.forEach(post => {

    feedContainer.innerHTML += `
        <div class="card_white" data-post-id="${post.id}">

            <span>${post.username}</span><br>

            <h2>${post.topic}</h2>

            <div class="feed_main">
                <span class="text-clip">${post.content}</span>

                <a href="viewfeed.html?id=${post.id}" class="no_link_style">
                    >>See Full Post
                </a>
            </div>

            <div class="feed_side">
                <img src="${post.image}" class="pfp_img" alt="preview">
            </div>

        </div>
    `;

});