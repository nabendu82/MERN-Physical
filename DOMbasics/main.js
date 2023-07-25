//Grab Single element
// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector('#my-form'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('h1'));

//Select Multiple elements
// const nodeItems = document.querySelectorAll('.item');
// const colItems = document.getElementsByClassName('item');
// console.log(document.getElementsByTagName('li'));
// console.log([23, 454, 67]);

// nodeItems.forEach(item => console.log(item));

// for(let i=0; i<colItems.length; i++) {
//     console.log(colItems[i])
// }

//DOM manipulation
const ul = document.querySelector('.items');
// ul.remove();
ul.firstElementChild.textContent = 'HTML';
ul.children[1].innerText = 'CSS';
ul.lastElementChild.innerHTML = '<h3>JavaScript</h3><p>Web Language</p>';

//Event Listener
const btn = document.querySelector('.btn');

btn.addEventListener('click', e => {
    e.preventDefault()
    console.log(e.clientX)
    console.log(e.clientY)
    console.log(e.target.value)
    btn.style.backgroundColor = 'blue';
    btn.style.textTransform = 'uppercase';
    btn.style.fontSize = '16px';
})
