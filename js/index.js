

document.addEventListener('DOMContentloaded',init)


function init(){
    addListenders()
    card()
}
function addListenders(){
    document.querySelectorAll('nav a').forEach(item =>{
        item.addEventListener('click', onNavication)
    })
}
function  onNavication(ev){
    document.querySelectorAll('nav a').forEach(item =>{
        item.classList.remove('active')
    })

    ev.target.classList.add('active')
}
function card(){
    let contentDiv=document.querySelector('.home-blog-content')
    contentDiv.innerHTML=""

    for(let i=0;i<4;i++){
        let cardContent=blog[i];

        let card=document.createElement('div')
        card.cloneName="home-blog-card"

        let img =document.createElement('img')
        img.className="home-blog-img"
        img.src=cardContent.imgage

        let titleDiv=document.createElement('div')
        titleDiv.className="home-blog-card-title"

        let line=document.createElement('div')
        let title=document.createElement('p')
        title.textContent=cardContent.title

        titleDiv.appendChild(line)
        titleDiv.appendChild(title)

        card.appendChild(img)
        card.appendChild(titleDiv)

        contentDiv.appendChild(card)
    }
}