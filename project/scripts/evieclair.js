let year = new Date().getFullYear();
var lastModified = document.lastModified;
let footer = `&copy; ${year}  Evelyn Abplanalp Thomas  MO, USA \n 
Last Modified: ${lastModified}`;
document.querySelector("footer").innerHTML = footer;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const sort = document.querySelector('.sort')
const gearbutton = document.querySelector('#filter');


hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});
gearbutton.addEventListener('click', () => {
    sort.classList.toggle('show');
    gearbutton.classList.toggle('show');
});


const albums = [
    {
        albumName: "Okay Day",
        releaseDate: "June 2018",
        genre: "Pop",
        top: "y",
        imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/5b/f5/da/5bf5dad3-6a75-1663-c70e-71d934c2108c/859726937219_cover.jpg/592x592bb.webp",
        listen: "https://song.link/okayday"
    },
    {
        albumName: "Valentine",
        releaseDate: "February 2019",
        genre: "Easy Listening",
        top: "n",
        imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/67/fd/8f/67fd8f3f-4cc4-c8fb-0fc1-3725a8ff32c4/193428621237.jpg/632x632bb.webp",
        listen: "https://song.link/valentine",
    },
    {
        albumName: "That They Might Have Joy",
        releaseDate: "November 2022",
        genre: "Inspirational",
        top: "n",
        imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ba/b3/9e/bab39e14-796b-985d-796a-e9778af6d28a/198004805124.jpg/632x632bb.webp",
        listen: "https://songwhip.com/evie-clair/that-they-might-have-joy"
    },
    {
        albumName: "I Know You're There",
        releaseDate: "September 2023",
        genre: "Inspirational",
        top: "y",
        imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/51/40/4e/51404e2a-4984-f2a4-c513-566ba06d2337/859777529265_cover.jpg/632x632bb.webp",
        listen: "https://songwhip.com/evie-clair/i-know-youre-there"
    },
    {
        albumName: "Chosen Son",
        releaseDate: "May 2023",
        genre: "Inspirational",
        top: "n",
        imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/a2/32/e2/a232e231-925e-43d6-137b-3870800818f9/artwork.jpg/632x632bb.webp",
        listen: "https://songwhip.com/evie-clair/chosen-son"
    },
    {
        albumName: "If We Hold on Together",
        releaseDate: "April 2023",
        genre: "Easy Listening",
        top: "n",
        imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/e2/b3/78/e2b37870-5b4b-0aed-fa5e-527304dfb9d8/859772534363_cover.jpg/592x592bb.webp",
        listen: "https://songwhip.com/evie-clair/if-we-hold-on-together"
    },
    {
        albumName: "Talking (Sunday Scaries Remix)",
        releaseDate: "April 2022",
        genre: "Dance",
        top: "n",
        imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/b2/c4/c4/b2c4c488-945b-e791-db50-2b8ab65f1fdb/artwork.jpg/592x592bb.webp",
        listen: "https://songwhip.com/evie-clair/talking-sunday-scaries-remix",
    },
    {
        albumName: "Lonely (feat. Christina & Ali)",
        releaseDate: "April 2021",
        genre: "Pop",
        top: "n",
        imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/22/9e/8d/229e8d65-9df6-a3c2-7e31-2e4bdb57d04a/artwork.jpg/592x592bb.webp",
        listen: "https://songwhip.com/evie-clair/lonely",
    },
    {
        albumName: "Talking",
        releaseDate: "February 2021",
        genre: "Pop",
        top: "y",
        imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/f7/43/97/f74397d5-97e9-1c10-ab0f-8bf77f24510e/artwork.jpg/592x592bb.webp",
        listen: "https://songwhip.com/evie-clair/talking",
    },
    {
        albumName: "The Door",
        releaseDate: "October 2020",
        genre: "Easy Listening",
        top: "n",
        imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/00/2f/f6/002ff6ea-6b46-34df-262e-8e474b5f3d95/artwork.jpg/592x592bb.webp",
        listen: "https://songwhip.com/evie-clair/the-door",
    },
    {
        albumName: "Trash",
        releaseDate: "July 2020",
        genre: "Pop",
        top: "n",
        imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/64/65/2a/64652a70-79a6-0078-7bbd-4bce113f30f1/195079723520.jpg/592x592bb.webp",
        listen: "https://songwhip.com/evie-clair/trash2020",
    },
    {
        albumName: "No Wasted Days",
        releaseDate: "June 2020",
        genre: "Easy Listening",
        top: "y",
        imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/f6/fa/f4/f6faf450-8cdf-f751-3d7c-ed1477b12bc8/195079662775.jpg/592x592bb.webp",
        listen: "https://songwhip.com/evie-clair/nowasteddays",
    },
    {
        albumName: "Results Take Time",
        releaseDate: "February",
        genre: "Pop",
        top: "y",
        imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/38/f0/7a/38f07ac3-c839-b602-fa1a-10cb9ccbb742/194660694287.jpg/592x592bb.webp",
        listen: "https://songwhip.com/evie-clair/results-take-time",
    },
    {
        albumName: "Young Fighter",
        releaseDate: "March 2019",
        genre: "Rock",
        top: "n",
        imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/00/73/1c/00731c58-efb0-e81b-3396-9636f17439be/cd3ab631-734b-4e16-a6dd-78fc332e1820.png/592x592bb.webp",
        listen: "https://song.link/youngfighternatefenwickftevieclair",
    },
    {
        albumName: "If Ye Love Me (feat. Kirra Abplanalp)",
        releaseDate: "March 2019",
        genre: "Inspirational",
        top: "n",
        imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/a0/dc/d9/a0dcd996-0227-e8ee-d1ec-ed640f9cbb7e/193428803336.jpg/592x592bb.webp",
        listen: "https://songwhip.com/evie-clair/if-ye-love-me",
    },
    {
        albumName: "Be Still My Soul",
        releaseDate: "September 2018",
        genre: "Inspirational",
        top: "n",
        imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/66/ea/b4/66eab465-d870-7308-6657-7f94b52d918f/192914910329.jpg/592x592bb.webp",
        listen: "https://songwhip.com/evie-clair/be-still-my-soul",
    },
    {
        albumName: "Auld Lang Syne",
        releaseDate: "December 2017",
        genre: "Holiday",
        top: "y",
        imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/0c/6f/82/0c6f8208-1fdd-657a-189c-c08ff3e773fe/191924689409.jpg/592x592bb.webp",
        listen: "https://songwhip.com/evie-clair/auld-lang-syne",
    },
    {
        albumName: "Love You One More Time",
        releaseDate: "September 2016",
        genre: "Pop",
        top: "y",
        imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music71/v4/dc/37/79/dc377974-7639-ab58-91af-d908a8f6f1bb/190394914394.jpg/592x592bb.webp",
        listen: "https://songwhip.com/evie-clair/love-you-one-more-time",
    },
]

createAlbumCard(albums);


function createAlbumCard(albums) {
    document.querySelector(".grid").innerHTML = "";
    albums.forEach(album => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let img = document.createElement("img");
        let link = document.createElement("a");

        name.textContent = album.albumName;
        img.setAttribute("src", album.imageUrl);
        img.setAttribute("alt", `${album.albumName}`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "100px");

        link.setAttribute("href", album.listen); 
        link.setAttribute("target", "_blank");
        
        link.appendChild(img);
        link.appendChild(name);
        card.appendChild(link);

        document.querySelector(".grid").appendChild(card);
});
}