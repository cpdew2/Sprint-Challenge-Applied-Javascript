// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function article(input){

    //elements
const card = document.createElement('div');
const headline = document.createElement('div');
const author = document.createElement('div');
const imgContainer = document.createElement('div');
const img = document.createElement('img');
const name = document.createElement('span');

// assign element values

headline.textContent = input.headline;
img.src = input.authorPhoto;
name.textContent = input.authorName;

//assigning style

card.classList.add('card');
headline.classList.add('headline');
author.classList.add('author');
imgContainer.classList.add('img-container');

//nesting elements

card.appendChild(headline);
card.appendChild(author);
author.appendChild(imgContainer);
author.appendChild(name);
imgContainer.appendChild(img);

return card;

}

const cardsCondtainer = document.querySelector('.cards-container');

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);
        response.data.articles.bootstrap.forEach(item => {
            const newArticle = article(item);
            cardsCondtainer.appendChild(newArticle);
        })

        response.data.articles.javascript.forEach(item => {
            const newArticle = article(item);
            cardsCondtainer.appendChild(newArticle);
        })

        response.data.articles.jquery.forEach(item => {
            const newArticle = article(item);
            cardsCondtainer.appendChild(newArticle);
        })

        response.data.articles.node.forEach(item => {
            const newArticle = article(item);
            cardsCondtainer.appendChild(newArticle);
        })

        response.data.articles.technology.forEach(item => {
            const newArticle = article(item);
            cardsCondtainer.appendChild(newArticle);
        })
    }) 

    .catch(error => {
        console.log("We have an error:" + error)
    })