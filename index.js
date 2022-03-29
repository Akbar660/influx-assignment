function akbar(tripgroup) {
    var x = tripgroup;
    console.log(x);

    return function addMember(newmembers) {
        var resultantGroup = [...x, ...newmembers];

        console.log(resultantGroup);
        return resultantGroup;
    };
}

function addExpenses(totalgroup, expense) {
    for (let i = 0; i < totalgroup.length; i++) {
        totalgroup[i] = `${totalgroup[i]}:${expense[i]}`;
    }
    console.log(totalgroup);
    return totalgroup;
}

function splitExpenses(addedexpenses) {
    var sum = 0;
    var max=-1000000;
    var highamountperson=""
    for (let i = 0; i < addedexpenses.length; i++) {
        var split = addedexpenses[i].split(":");
        console.log(split);


        var [name, expense] = split;

        if (expense !== "undefined") {
            sum = sum + +expense;
           
        }
        if(+expense>max){
            max=+expense
            highamountperson=name
            
        }
        // console.log(name, expense);
    }
    console.log("total:" + sum);

    var t = Math.floor(sum / addedexpenses.length);
    console.log("each one share is:" + t);
    console.log(max)

    for(let j=0;j<addedexpenses.length;j++){
        var split = addedexpenses[j].split(":");
        var [name, expense] = split;
        if(+expense !== max){
            var diff=Math.abs(max-expense)
           if(expense == "undefined"){
            console.log(`${name} is give ${t} ruprees to ${highamountperson}`)
           }else{
            console.log(`${name} is give ${diff} ruprees to ${highamountperson}`)
           }
        }
    }
}

var TripGroup = new Array("kanth");

var Akbar = akbar(TripGroup);
var AddMembers = Akbar(["sail", "july"]); //here i added the new members

var AddExpenses = addExpenses(AddMembers, [10, 20]); // here i passed the tripgroup with Added members and each one expenses

var SplitExpenses = splitExpenses(AddExpenses);
