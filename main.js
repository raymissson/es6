function test(x){
    // pode reatribuir valor
    let y = 2;

    if(x>5){
        // reatribuido
        y = 4;
        console.log(x,y);
    }
}

test(10);