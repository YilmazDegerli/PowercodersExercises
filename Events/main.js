// // const box1= document.querySelector(".box1");

// // addEventListener("click", (e) =>{
// //     e.target
// //     console.log(e);
// // });

// // const box1= document.querySelector(".box1");
// // const button = document.querySelector(".button");

// // box1.addEventListener("click", (e) =>{
// //     console.log(e);
// //     e.target.style.backgroundColor = "#556699";
// // });

// const box1= document.querySelector(".box1");
// const box2 = document.querySelector(".box2");

// box1.addEventListener("click", (e) =>{
//     console.log(e);
//     e.target.style.backgroundColor = "#556699";
// });

// window.addEventListener("resize", ()=>{
//     console.log(window.innerWidth);
//     box2.textContent= `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
// })

// window.addEventListener("load", ()=>{
//     box2.textContent= `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
// })

const todos = [
    {
        toDoName: "Yogurt",
        status: true,
    },
    {
        toDoName: "Egg",
        status: false,
    },
    {
        toDoName: "Strawberry",
        status: true,
    },
    {
        toDoName: "Banana",
        status: false,
    },
    {
        toDoName: "Apple",
        status: true,
    }
]

const isDone = todos.filter((todo)=> todo.status == true);

const inProgress = todos.filter((todo)=> todo.status != true);



// document.querySelector("#isDone").innerHTML = isDone.map((todo)=>`<li>${todo.toDoName} </li>`).join("")

const render = (pSelector, pData) => {
    document.querySelector(pSelector).innerHTML = pData.map((todo)=>`<li>${todo.toDoName} </li>`).join("");
}
render("#inProgress", inProgress);
render("#isDone", isDone);

document.querySelector("#addToDo"). addEventListener("click", () =>{
   todos.push( {
        toDoName: "Apple",
        status: true,
    })
    render("#inProgress", inProgress);
})
