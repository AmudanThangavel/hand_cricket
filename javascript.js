// Toss JS --------------------------------------------------------------------------------------

var toss_div = document.getElementById('toss');
var html_choice = document.getElementById('choice');
var toss_loss = document.getElementById('toss_loss');
var sys_choice = document.getElementById('system_choice');

// Toss Compare  

function tossCompare(toss_choice, random_toss) {
    if (toss_choice === random_toss) {
        html_choice.style.display = 'block';
    } else {
        toss_loss.style.display = 'block';
        sys_choice.style.display = 'block';
        document.getElementById('toss_loss').innerHTML = 'You loss the Toss 😔';
        document.getElementById('system_choice').innerHTML = 'System choosed to ' + system_choice();
    }
}

// System decision 

function system_choice() {
    var c = new Array();
    c[0] = 'Bat';
    c[1] = 'Bowl';

    var cn = Math.floor(Math.random() * c.length);
    console.log(cn);
    return c[cn];
}

// User toss function

function tosser(toss_choice) {
    var random_toss = toss();
    toss_input.style.display = 'none';
    toss_output.style.display = 'block';
    document.getElementById('toss_out').innerText = random_toss;
    tossCompare(toss_choice, random_toss);
}

// Random toss function

function toss() {
    // Array decleration
    var coin = new Array();
    coin[0] = "Head";
    coin[1] = "Tail";

    var number_toss = Math.floor(Math.random() * coin.length);
    // document.getElementById('toss_output'.innerHTML = coin[number_toss]);
    return coin[number_toss]
}


// User Batting --------------------------------------------------------------------------------------

var output_num;
var input_num;
var first_score = 0;
var second_score = 0;

// Random number

function randomNumber() {
    var randomNumbers = new Array();
    var i = 1;
    for (i = 0; i <= 5; i++) {
        randomNumbers[i] = i + 1;
    }

    var number = Math.floor(Math.random() * randomNumbers.length);
    document.getElementById('output_num').innerHTML = randomNumbers[number];
}
