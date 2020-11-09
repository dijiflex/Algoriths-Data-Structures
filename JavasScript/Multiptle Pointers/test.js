
function getCombinations() {
    let a = 0;
    let b= 0;
    let c = 21;

    let combinations = [];

    while (2 * a <= c){
        b = 21 - 2 * a;
        combinations.push([a,b]);
        console.log([a,b]);
        a++
    }
}

getCombinations();