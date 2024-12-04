const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.getElementById("main")

for (let i=0; i < posts.length; i++) {
    main.innerHTML += `

    <section class="sec-profil">
            <img src="${posts[i].avatar}" class="avatar">
            <div class="txt-profil">
              <h1>${posts[i].name}</h1>
              <p>${posts[i].location}<p>
            </div>
    </section>
          <section class="sec-post">
            <img src="${posts[i].post}" class="img-post" id="img-heart">
            <div class="icons">
              <img src="images/icon-heart.png" class="img-icons">
              <img src="images/icon-comment.png" class="img-icons">
              <img src="images/icon-dm.png" class="img-icons">
            </div>
            <h3>${posts[i].likes} likes</h3>
            <h2><span class="comment-name">${posts[i].username}</span> ${posts[i].comment}</h2>
          </section>

    `
}

//Stretchgoal : Wenn auf Bild doppel-geklickt wird muss sich like counter von jeweiligen Bild erhöhen

// const imgHeart = document.getElementById("img-heart")

// imgHeart.addEventListener("dblclick", function() {

//     for (let i=0; i < posts.length; i++) {
//         posts[i].likes += 1
//         console.log(posts[i].likes)

// }
// })

// 1. Es wird auf Bild geklickt, jedes Bild eigener event Listener 
// 2. Durch Klick wird likes key des jeweiligen Bildes erhöht
// 3. neue like anzahl wird in html eingesetzt und angezeigt

// posts.forEach(function(posts) {
//     posts.addEventListener("dblclick", function() {
//         posts.likes += 1
//         console.log(posts.likes)
//     });
// });