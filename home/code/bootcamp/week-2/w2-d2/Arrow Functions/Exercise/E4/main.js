const sum = (a,b,c)=> a+b+c ;

function printSum(a,b,c , sumFunc=sum){
    console.log(sumFunc(a,b,c))
}


printSum(1,1,1);
printSum(2,2,2);
printSum(3,3,3);