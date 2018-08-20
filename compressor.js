function compressor(string){
    var arr = [];
    for(var i in string){
        arr.push(string[i]);
    }
    output = [arr[0]];
    counter =1;
    console.log(arr);
    for(var i =1; i<=arr.length;i++){
        if(arr[i] != output[output.length-1]){
            output.push(counter);
            counter=1;
            output.push(arr[i]);
        }else{
            counter++;
        }
    }
    console.log(output);
    output.pop();
    var ans = "";
    for (x in output){
        ans+= output[x];
    }
    console.log(ans);
}
compressor("aabcccccaaa");
compressor("zhhhhrhrrwzww");