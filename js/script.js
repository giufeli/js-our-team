const arrObject = [
    {
    name : "Wayne Barnett",
    work : "Founder & CEO",
    photo : "wayne-barnett-founder-ceo.jpg"
    },
    
    {
    name : "Angela Caroll",
    work : "Chief Editor",
    photo : "angela-caroll-chief-editor.jpg"   
    },
    
    {
    name : "Walter Gordon",
    work : "Office Manager",
    photo : "walter-gordon-office-manager.jpg"
    },
    
    {
    name : "Angela Lopez",
    work : "Social Media Manager",
    photo : "angela-lopez-social-media-manager.jpg"
    },
    
    {
    name : "Scott Estrada",
    work : "Developer",
    photo: "scott-estrada-developer.jpg"   
    },
    
    {
    name : "Barbara Ramos",
    work : "Graphic Designer",
    photo : "barbara-ramos-graphic-designer.jpg"   
    }  
];
console.table(arrObject)
eleCard = document.querySelector(".propriety")

for (let i = 0; i < arrObject.length; i++){
    let card = document.createElement("div")
    card.classList.add("card")
    card.classList.add("col-3")
    card.innerHTML= 
    `<img class="card-img-top" src = img/${arrObject[i].photo}></img>
    <div class="card-body text-center">
        <p class="card-text name">${arrObject[i].name}</p>
        <p class="card-text work">${arrObject[i].work}</p>
    </div>`
    eleCard.append(card)
};
