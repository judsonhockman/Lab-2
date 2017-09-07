var friends = ["Rick", "Steven", "Stan", "Kevin", "Jack"];
var a = 1;

for (var i = 0; i < friends.length; i++) {
    for (var j = 99, b = 98; j > 2, b > 1; j--, b--)
        console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + b + " lines of code in the file");
    // here I could have used (j-1) instead of creating a new variable b 

        for (var k = 2; k > 1; k--) {
            console.log(k + " lines of code in the file, " + k + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + a + " line of code in the file");

            for (var l = 1; l > 0; l--) {
                console.log(l + " line of code in the file, " + l + " line of code; " + friends[i] + " strikes it out, clears it all out, no more lines of code in the file");
        }
    }
};