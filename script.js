const h1=document.querySelector('h1')
const card =document.querySelector('.card')

function sayhi(){
    console.log('Hello World!!');
}

// h1.onclick=sayhi

// h1.addEventListener('click',sayhi)


const div=document.querySelector('div')
div.addEventListener('dblclick',function(){
    console.log('Hiiiiiii');
})

const container=document.querySelector('.container')
let i=1
card.addEventListener('click',()=>{
    const newcard=document.createElement('div')
    newcard.classList.add('card')
    
    newcard.innerText=i++
    
    container.append(newcard)
})