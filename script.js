const noFlyList = ['Hailey Mert','Danny Duke'];

function processPassengers(passengers, testFunction){
    for(i=0; i < passengers.length; i++){
        if( testFunction(passengers[i]) ){
            console.log(`Plane can't take off!`);
            return false;
        }
    }
    console.log(`Plane can fly!`);
    return true;
}

function checkNotPaid(passenger){
    if(passenger.paid==false){
        console.log('some did not pay!');
        return true;
    }
    return false;
}
function checkNoFlyList(passenger){
    for(i=0; i < noFlyList.length; i++){
        if(noFlyList[i] == passenger.name){
            console.log('We have a passenger on the no flight list.');
            return true;
        }
    }
    return false;
}
function printPassengers(passenger){
    console.log(passenger.name);
    return false;
}

const createDrinkOrder = (passenger) =>{
    if(passenger.ticket == 'firstclass'){
        prompt('Would you like a cocktail or wine? ');
    } else{
        prompt('Your choice is cola or water. ');
    }
};
const createDinnerOrder = (passenger) =>{
    if(passenger.ticket == 'firstclass'){
        prompt('What would you like to eat? ');
    } else{
        prompt('Peanuts or bretzel, which would you prefer? ');
    }
};
function servePassengers(passenger){
    createDrinkOrder(passenger);
    createDinnerOrder(passenger);
    //pick trash
}


//testing===========================================
let passengers = [
    {name: 'Tim Woody', paid: true, ticket: 'coach'},
    {name: 'Bryan Cook', paid: true, ticket: 'firstclass'},
    {name: 'Hailey Mert', paid: true, ticket: 'firstclass'},
    {name: 'Danny Duke', paid: false, ticket: 'coach'},
    {name: 'Craig Deen', paid: true, ticket: 'firstclass'},
    {name: 'Fitie Greffin', paid: false, ticket: 'firstclass'}
];
//processPassengers(passengers, checkNotPaid);
//processPassengers(passengers, checkNoFlyList);
//processPassengers(passengers, printPassengers);
//processPassengers(passengers, servePassengers);