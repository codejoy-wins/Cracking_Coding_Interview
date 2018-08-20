// aabcccccaaa ->  a2b1c5a3
// The strategy
// Create an array with the first character of the string
// set counter to 1

//  LOOP STARTS HERE

// check the next value in the string
// if it is the same as the last element in the array, increment counter
// else if it is different, push the counter to the array and push the new element
// so [a] with a counter of 1 becomes [a,1,b] if the next value in the string is b
// or [a] with a counter of 1 becomes [a] with a counter of two if the next val is still a
// then when string[i] is finally different, [a] with a counter of 2 becomes [a,2,b] if b is next val
// reset counter to 1
// restart loop
function abbreviator(string){
// Create an array with the first character of the string
    output = [string[0]];
// set counter to 1
    counter =1;
    for(var i =1; i<=string.length;i++){
// check the next value in the string
        if(string[i] != output[output.length-1]){
// if it is different, push the counter to the array and push the next character of the string
            output.push(counter);
            output.push(string[i]);
// reset counter to 1
            counter=1;
        }
// if it is the same as the last element in the array, increment counter
        else{
            counter++;
        }
    }
    output.pop();
    var ans = "";
    for (x in output){
        ans+= output[x];
    }
    return(ans);
}
console.log(abbreviator("aabbbbcccccaaa"));
console.log(abbreviator("assdddffwedd"));

//  In only 20 lines of code:
function uncommented_abbreviator(string){
        output = [string[0]];
        counter =1;
        for(var i =1; i<=string.length;i++){
            if(string[i] != output[output.length-1]){
                output.push(counter);
                output.push(string[i]);
                counter=1;
            }
            else{
                counter++;
            }
        }
        output.pop();
        var ans = "";
        for (x in output){
            ans+= output[x];
        }
        return(ans);
    }
    console.log(uncommented_abbreviator("aabcccccaaa"));