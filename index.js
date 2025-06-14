// Code your solution here

function findMatching(drivers, name){
    return drivers.filter(driver =>driver.toLowerCase() === name.toLoweCase());

}
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}
function matchName(driverObjects, name){
    return driverObjects.filter(driver =>driver.name ===name);
}

const drivers =["Alice", "Bob", "Charlie", "David","alice"];
const driverObjects =[
    {name: "Alice", city:"Nairobi"},
    {name: "Bob", city: "Mombasa"},
    {name: "Charlie", city: "Kisumu"}

];
console.log(findMatching(drivers,"Alice"))
console.log(fuzzyMatch(drivers, "Charlie"))
