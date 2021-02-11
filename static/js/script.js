const form = document.querySelector('form');
const btn = document.querySelector('button');
const h2 = document.querySelector('h2');
const input = document.querySelector('#link');


form.addEventListener('submit',(e) => {
    e.preventDefault();
    info={
        link:input.value,
    }
    //write fetch code...
    fetch('create/',{
        method:'POST',
        headers: {
        //all requests to django sever must containe csrftoken
        "X-CSRFToken": document.cookie.slice(10),
        // 'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
        body:JSON.stringify(info),
    })
    .then(res => res.text())
    .then(data => {
        h2.innerText = 'localhost:8000/' + data;
        // console.log(JSON.stringify(info))
    })
})