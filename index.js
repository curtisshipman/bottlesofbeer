function beer(){

var bottles = 99;
    while(bottles > 0){
        console.log(bottles + " bottles of beer on the wall. " +bottles +" bottles of beer. Take one down, pass it arround " + (bottles -1) + " bottles of beer on the wall.");
        bottles--;
    }
    console.log(bottles + " bottles of beer on the wall. " +bottles +" bottles of beer. Got to the store, let's get some more! We need 99 bottles of beer on the wall.");
}

beer();
