// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const news = document.querySelector('.topics');

axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(object => {
        console.log('response', object.data.topics);
        const subject = object.data.topics;
        subject.forEach(word => {
            iteration(word);
        });
    })

    .catch(err => {
        console.log("Working?");
    });

    function iteration(array) {
        const thing = document.createElement('div');
        thing.classList.add('tab');
        thing.textContent = array;

        news.appendChild(thing)

        return thing;
    }