const myArr= [
    {
        name: "Merve",
        age: 27,
        eyeColor: "blue",
        img:"./img/04-PowerCoders_04.jpg",
        city:"Luzern"
    },
    {
        name: "Melek",
        age: 38,
        eyeColor: "green",
        img:"./img/11-PowerCoders_11.jpg",
        city:"Bern"
    },
    {
        name: "Sahin",
        age: 28,
        eyeColor: "black",
        img:"./img/08-PowerCoders_08.jpg",
        city:"blue"
    },
    {
        name: "Kingsley",
        age: 34,
        eyeColor: "black",
        img:"./img/13-PowerCoders_13.jpg",
        city:"Bern"
    },
    {
        name: "Hüseyin",
        age: 29,
        eyeColor: "blue",
        img:"./img/15-PowerCoders_15.jpg",
        city:"Lugano"
    },
    {
        name: "Harun",
        age: 37,
        eyeColor: "brown",
        img:"./img/17-PowerCoders_17.jpg",
        city:"Luzern"
    },
       

]

myArr.forEach((person)=>{
    document.getElementById(`content`).innerHTML+=`
    <div>
    <img src="${person.img}" alt="">
    <div class= "information" >
    Name:${person.name} <br/>
    Age:${person.age}  <br/>
    Eye Color: ${person.eyeColor} <br/>
    City: ${person.city}</div> </div>`
})

 const luzerner= myArr.filter((person)=>person.city==="Luzern")
 const berner = myArr.filter ((person)=>person.city==="Bern")
 const ageOver30= myArr.filter ((person)=>person.age>30)
 const eyeColorBlue=myArr.filter ((person)=>person.eyeColor==="blue")

const handleClickLuzern=()=>{
  document.getElementById(`content`).innerHTML="";
  luzerner.forEach((person)=>{
        document.getElementById(`content`).innerHTML+=`
         <div>
         <img src="${person.img}" alt="">
         <div class= "information" >
         Name:${person.name} <br/>
         Age:${person.age}  <br/>
         Eye Color: ${person.eyeColor} <br/>
         City: ${person.city}</div> </div>`
     })
}

const handleClickBern=()=>{
    document.getElementById(`content`).innerHTML="";
    berner.forEach((person)=>{
          document.getElementById(`content`).innerHTML+=`
           <div>
           <img src="${person.img}" alt="">
           <div class= "information" >
           Name:${person.name} <br/>
           Age:${person.age}  <br/>
           Eye Color: ${person.eyeColor} <br/>
           City: ${person.city}</div> </div>`
       })
  }
  const handleClickAgeOver30=()=>{
    document.getElementById(`content`).innerHTML="";
    ageOver30.forEach((person)=>{
          document.getElementById(`content`).innerHTML+=`
           <div>
           <img src="${person.img}" alt="">
           <div class= "information" >
           Name:${person.name} <br/>
           Age:${person.age}  <br/>
           Eye Color: ${person.eyeColor} <br/>
           City: ${person.city}</div> </div>`
       })
  }
  const handleClickEyeColorBlue=()=>{
    document.getElementById(`content`).innerHTML="";
    eyeColorBlue.forEach((person)=>{
          document.getElementById(`content`).innerHTML+=`
           <div>
           <img src="${person.img}" alt="">
           <div class= "information" >
           Name:${person.name} <br/>
           Age:${person.age}  <br/>
           Eye Color: ${person.eyeColor} <br/>
           City: ${person.city}</div> </div>`
       })
  }

  myArr.forEach((person)=>{
    (person.img)
  }).addEventListener(
    "mouseover",
    (event) => {
      event.target.style.opacity = 0.5;
      setTimeout(() => {
        event.target.style.color = "";
      }, 500);
    },
  );