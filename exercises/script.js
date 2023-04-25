let ageCurrent = +prompt("What is your age?");
while (isNaN(ageCurrent)){
    ageCurrent= +prompt("What is your age?");
}
let ageRetirement = +prompt("At what age would you like to retire?");
    while ((isNaN(ageRetirement)) || (ageCurrent>=ageRetirement)) {
        ageRetirement= +prompt("At what age would you like to retire?")
        } 
const yearLeft= ageRetirement-ageCurrent;
const yearCurrent = new Date().getFullYear() ;
const yearRetirement = yearLeft + yearCurrent;
alert(`You have ${yearLeft} years left until you can retire.`);
alert(`It's ${yearCurrent}, so you can retire in ${yearRetirement}`);



