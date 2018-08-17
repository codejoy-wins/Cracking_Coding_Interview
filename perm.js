// write a function that takes 2 strings and returns if they are a permutation or not




// in order to do this, we need to be able to create a hashmap of an array and count the frequency of values
// then we can compare the frequecy maps of each array and if they match return true

// aabc
// returns {'a':2, 'b': 1, 'c':1};
// function hashmap(string){
//     var hash = {};
//     var control = 0;
//     var count = 0;
//     while(control < string.length){
//         for (var i =0; i < string.length; i++){
//             if (string[i] == string[control]){
//                 count++;
//             }
//         }
//         hash[string[control]] = count;
//         count = 0;
//         control++;
//     }
//     console.log(hash);
//     return hash;
// }
// hashmap("kitty");
// hashmap("baseball");
// okay so that works.  now I just need to have a function that returns if the two hash maps are equal.
// var kitty = hashmap("kitty");
// var baseball = hashmap("baseball");

function compareY(hash1, hash2){
    // console.log("comparing");
    if (hash1 == hash2){
        console.log(true);
        return true;
    }
    else{
        console.log(false);
        return false;
    }
}
// compare(kitty, baseball);
// hash3 = hashmap("tityk");
// compare(kitty, hash3);
// I have to sort the letters first for this method to work.
// sort strings
// create hashmaps on both strings
// compare hashes

// OR

// sort strings
// compare new strings

//  aabc  abac
//  aabc  aabc

// write a function that sorts a string alphabetically
// Do a songcast video

// bubble sort
// insertion sort
// selection sort
// merge sort
// quicksort
// using insertion
// function alphabetize(string){
//     var min = string[0];
//     console.log(min, " is min");
//     for (var i = 1, n = string.length; i < n; i++){
//         if ( string[i]< min){
//             min = string[i];
//             console.log(min, " is now min");
//             var temp = string[0];
//             console.log(temp, " is now temp");
//             string[0] = min;
//             console.log(string[0], " is now string at zero");
//             string[i] = temp;
//         }
//     }
//     console.log(string);
// }

// alphabetize('cat');


// cat becomes act

// strings are immutable

//  convert string into array of characters
//  sort array
// put back into string


function convertY(string){
    var arr = [];
    for (var i = 0; i < string.length; i++){
        arr.push(string[i]);
    }
    // console.log(arr);
    return arr;
}
// convert("cat");

// step one:  convert string into array

// step two:  sort array

// step three:  compare 2 sorted arrays

function sortY(arr){
    var temp;
    var count = 0;
    var s = 0;
    while (count < arr.length){
        for (var i =0; i < arr.length-count; i++){
            if (arr[i] > arr[i+1]){
                temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
            }
            else{
                s++;
            }
        }
        if (s == arr.length-count){
            // console.log(arr);
            return arr;
        }
        else{
            s=0;
        }
        count++;
    }
}
// sort([5,3,8,72,1,11,2]);
// sort(convert("cat"));

// var one = sort(convert('cat'));
// var two = sort(convert('tac'));
// console.log(one, two);

// console.log(one === two);
// struggling with equivilency of arrays.
// maybe put them back into strings

function stringifyY(arr){
    string = "";
    for(var i = 0; i<arr.length;i++){
        string += arr[i];
    }
    console.log(string);
    return string;
}
// sample = ['c','a','b'];
// stringify(sample);

// var one = sort(convert('cat'));
// var two = sort(convert('tac'));
// console.log(one, two);

// var first = stringify(sort(convert('cat')));
// var second = stringify(sort(convert('tac')));

// compare(first, second);

// here are all the functions I'm using

function convert(string){
    var arr = [];
    for (var i = 0; i < string.length; i++){
        arr.push(string[i]);
    }
    // console.log(arr);
    return arr;
}
function sort(arr){
    var temp;
    var count = 0;
    var s = 0;
    while (count < arr.length){
        for (var i =0; i < arr.length-count; i++){
            if (arr[i] > arr[i+1]){
                temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
            }
            else{
                s++;
            }
        }
        if (s == arr.length-count){
            // console.log(arr);
            return arr;
        }
        else{
            s=0;
        }
        count++;
    }
}
function stringify(arr){
    string = "";
    for(var i = 0; i<arr.length;i++){
        string += arr[i];
    }
    console.log(string);
    return string;
}
function compare(hash1, hash2){
    // console.log("comparing");
    if (hash1 == hash2){
        console.log(true);
        return true;
    }
    else{
        console.log(false);
        return false;
    }
}
function permutation(string1, string2){
    console.log("comparing");
    compare(stringify(sort(convert(string1))),stringify(sort(convert(string2))));
}
permutation('cat', 'hat');
permutation('cat', 'act');
permutation('aabc', 'abac');
permutation('adabd4c', 'abac4dd');


// write a function that takes 2 strings and returns if they are a permutation or not

// step one:    convert strings into arrays
// step two:    sort the arrays
// step three:  revert arrays into strings
// step four:   compare sorted strings

// create a function for fun that takes a string and returns a random permutation of that string.