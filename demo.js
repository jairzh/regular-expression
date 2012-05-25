var sToMatch = "cat";
var reCat = /cat/;
reCat.test(sToMatch);  //ture

var sToM1 = "a bat, a cat, a fAt baT, a FaT, Cat";
var reAt = /at/
var arrMatches = reAt.exec(sToM1);  //["at"]

var reAtAll = /at/gi
arrMatches = sToM1.match(reAtAll); //["at", "at", "At", "aT", "aT", "at"]

arrMatches = sToM1.search(reAtAll); // 3