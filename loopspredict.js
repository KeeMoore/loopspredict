for (var num = 0; num < 15; num++) {
    console.log(num);
}
  // prediction will be between o to 14
  // var num = 0
  // num <15 if true logs the #
  // num ++ num is incremented by 1

  for (var i = 1; i < 10; i += 2) {
    if (i % 3 == 0) {
        console.log(i);
    }
}
// prediction the numbers will be 3,9
// i =1
// i <10 if true it'll execute the loop body
// i % 3 =0 - not divisible by 3
// i+=2; incremented by 2 
// 1=1 1=3 true 1=5 false 1=7 false 1=9 true
for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}
// prediction 1, 4, 6, 7, 10, 12, and 14. 
// j = 1 
// j<=15 if j is even we add 2 if divisible by 3 we increment it by 1
// j = 1 2 4 6 ( divisble by 3 add 1) 7 8 (add 2) 10 12 14 16