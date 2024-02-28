// THIS IS COMMENTED OUT BECAUSE IT WAS HAVING ISSUES
/*
var hashes = [
    "0423d7e5304d3c96d96bcaf1b4dbfe80de0aff31d4937edd91d2cf15025608b0",
    "b53bf5f17b3e3f52c2de376270425215b20827fda82c8ab0998f74baf095f801",
    "63581ac80c2e27b15cabacb4e3e6b20491640ebbbe934b198ff9cc72fa693153",
    "7a100966322df5ed51e287736e185fb5d06c124bdd8f37f76b8015a336f1f18a",
    "3b025756c4baa885dc4b6606a4f20adaae6260b5dfd53d78cc4656c7e00d857a",
    "6f47614c2d8ac08fb84a099ba13f109040eb2c6094daa2a6f81271e0cb95bfe5",
    "142efa286b4b2cd740cf40397b271d246eaf998e76a0b46ca28e4ed0c2d77043"
];


function checkAnswer(hash_index) {
    var input = document.getElementById('input').value;
    
    if (sha256(input) == hashes[hash_index]) {
        alert('Nice! You got it :D');
    } else {
        alert('Try Again...');
    }
}
*/
var flags = [
    "681b82ce0578785b3ea5203684529f79271592bf3a9435d6c8f0d2424f040a73",
    "b53bf5f17b3e3f52c2de376270425215b20827fda82c8ab0998f74baf095f801",
    "63581ac80c2e27b15cabacb4e3e6b20491640ebbbe934b198ff9cc72fa693153",
    "7a100966322df5ed51e287736e185fb5d06c124bdd8f37f76b8015a336f1f18a",
    "3b025756c4baa885dc4b6606a4f20adaae6260b5dfd53d78cc4656c7e00d857a",
    "6f47614c2d8ac08fb84a099ba13f109040eb2c6094daa2a6f81271e0cb95bfe5",
    "142efa286b4b2cd740cf40397b271d246eaf998e76a0b46ca28e4ed0c2d77043"
];


function checkAnswer(flag_index) {
    var input = document.getElementById('input').value;
    if (sha256(input) == "cat{solomon}") {console.log("it worked")}
    
    if (input == flags[flag_index]) {
        alert('Nice! You got it :D');
    } else {
        alert('Try Again...');
    }
}
