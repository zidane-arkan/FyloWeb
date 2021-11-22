let content1Text = document.getElementsByClassName('content1-text')[0];
let buttonTop = content1Text.getElementsByTagName('button')[0];

let content2 = document.querySelector('.content-2');
buttonTop.addEventListener('click', () => {
    content2.scrollIntoView();
})