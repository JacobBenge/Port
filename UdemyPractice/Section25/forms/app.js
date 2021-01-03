const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

const addTweet = (username, tweet) => {
    const newLi = document.createElement('li');
    const bTag = document.createElement('b');

    // <b>username</b>
    bTag.append(username);
    // <li><b>username</b></li>
    newLi.append(bTag);
    // <li><b>username</b>`- ${tweet}`</li>
    newLi.append(`- ${tweet}`);
    // inserts inside tweetsContainer ul
    tweetsContainer.append(newLi);
};

tweetForm.addEventListener('submit',(e) => {
    // prevents form submission causing page reload or redirect. Needs to come first
    e.preventDefault(); 
    
    // grabs user input and sends it to addTweet
    const username = tweetForm.elements.username.value;
    const tweet = tweetForm.elements.tweet.value;
    addTweet(username, tweet)

    // resets the form
    tweetForm.elements.username.value = '';
    tweetForm.elements.tweet.value = '';
});

