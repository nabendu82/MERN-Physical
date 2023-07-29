//Async-await Fetch
// async function fetchPosts() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
//     let output = '';
//     data.forEach(item => output += `<h2>${item.title}</h2><p>${item.body}</p>`);
//     document.body.innerHTML = output;
// }

// fetchPosts();

//then..catch fetch
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        let output = '';
        data.forEach(item => output += `<h2>${item.title}</h2><p>${item.body}</p>`);
        document.body.innerHTML = output;
    })
    .catch(err => document.body.innerHTML = `${err}`)