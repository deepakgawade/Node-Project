// import fetch from 'node-fetch'

console.log('THIS IS client side INDEX PAGE');



const weatherForm = document.querySelector('form');
const searchText = document.querySelector('input')
const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = searchText.value;

    message2.textContent='Loading Please wait...';
   fetch('http://localhost:3000/weather?address='+location+'').then((response)=>{
    response.json().then((data)=>{
        if( data.error){
            console.log(data.error);
            message2.textContent='';
            message1.textContent=`${data.error}`
        }else{
            console.log(data.Addres);
            console.log(data.forecast);
            message2.textContent='';
            message1.textContent=`${data.forecast}`;
   

        }
       
    })
})
})