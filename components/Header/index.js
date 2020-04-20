// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const container = document.querySelector('.header-container');

function Header(item) {
    const head = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    head.classList.add('header');
    date.classList.add('date');
    title.classList.add('title');
    temp.classList.add('temp');

    date.textContent = "March 28, 2019";
    title.textContent = "Lambda Times";
    temp.textContent = "98°";

    head.appendChild(date);
    head.appendChild(title);
    head.appendChild(temp);

    return head;
}

const theHead = Header();
console.log(theHead);
container.appendChild(theHead);
