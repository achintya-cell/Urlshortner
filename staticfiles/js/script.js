const form = document.querySelector('form');
const btn = document.querySelector('button');
const h2 = document.querySelector('h2');
const input = document.querySelector('input[name="link"]');
const csrfInput = document.querySelector('input');


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
         // we can also retrieve value of csrftoken by using below method.
        //"X-CSRFToken": csrfInput.value
        //the below line is optional while sending data to server using json/fetch.
        // 'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
        body:JSON.stringify(info),
    })
    .then(res => res.text())
    .then(data => {
        h2.innerHTML = `<a href="http://localhost:8000/${data}" target="_blank">localhost:8000/${data}</a>`;
        // console.log(JSON.stringify(info))
    })
})