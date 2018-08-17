function unique(s){
    console.log(s);
    var control = 0;
    while(control<s.length){
        for(var i = control+1; i < s.length; i++){
            console.log(s[control], "is our control");
            console.log(s[i], " is what we're comparing");
            if (s[control] == s[i]){
                return false;
            }
        }
        control++;
    }
    return true;
}

console.log(unique("cat"));
console.log(unique("catch"));
console.log(unique("hello"));
console.log(unique("delirium"));

// Big O idk