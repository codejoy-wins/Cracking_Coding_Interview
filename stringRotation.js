// checks if s2 is a rotation of s1 in one call
function isSubstring(s1,s2){
    s3 = "";
    console.log(s1);
    for (var i = 0; i < s2.length; i++){
        s3 += s2[i];
    }
    for (var i = 0; i < s2.length; i++){
        s3 += s2[i];
    }
    console.log(s3);
    if(s3.includes(s1)){
        console.log("we did it");
        console.log("true");
        return true;
    }else{
        console.log("false");
        return false;
    }
}
isSubstring("waterbottle", "lewaterbott");
isSubstring("waterbottle", "jim");
console.log(isSubstring("waterbottle", "lewaterbott"));
console.log(isSubstring("waterbottle", "lewaterbott"));