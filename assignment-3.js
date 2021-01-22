

// *******Kilometer To Meter***********

function kilometerToMeter(kilometer) {
    var meter = 0;
    if (kilometer <= -1) {
        meter = "Error";
    }
    else {
        meter = kilometer * 1000;
    }
    return meter;
}
var result = kilometerToMeter(-20);
console.log(result);

// *********Kilometer To Meter***********







// ***************Budget Calculator***********


function budgetCalculator(sum) {
    for (var i = 0; i < sum.length; i++) {
        var Watch = sum[0] * 50;
        var Mobile = sum[1] * 100;
        var Laptop = sum[2] * 500;
        var total = Watch + Mobile + Laptop;


    }
    return total;
}
var result = budgetCalculator([2, 1, 1]);
console.log(result);


// ***************Budget Calculator***********








// **************Hotel Cost****************

function hotelCost(days) {
    var cost = 0;
    if (days <= 10) {
        cost = days * 100;

    }
    else if (days <= 20) {
        var rules1 = 10 * 100;
        var remaining = days - 10;
        var rules2 = remaining * 80;
        cost = rules1 + rules2;
    }
    else {
        var rules1 = 10 * 100;
        var rules2 = 10 * 80;
        var remaining = days - 20;
        var rules3 = remaining * 50;
        cost = rules1 + rules2 + rules3;
    }
    return cost;
}
var result = hotelCost(20);
console.log(result);

// **************Hotel Cost****************





// **************Mega Friend****************

function megaFriend(num) {
    var largeName = [0];
    for (var i = 0; i < num.length; i++) {        
        var nameWord = num[i];        
        if (largeName.length < nameWord.length) {
            largeName = nameWord;
        }
    }
    return largeName;
}
var result = megaFriend(["Akash", "Asraful Alam", "Shohag Kumar Malakar", "Joy Gobinda", "Rojit Roy"]);
console.log(result);

// **************Mega Friend****************