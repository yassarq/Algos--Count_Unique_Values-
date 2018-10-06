// function arr(){
//     let arr2 = []
//     for (let i = 0; i < arr.length; i++){
//          if(arr[0] === arr.length - 1){
//              arr2.push(arr[0])
//              else(arr[0])
//          }
//     }
// }
// console.log(arr([1,1,2,3]));
function countUniqueValues(arr){
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
        console.log(i,j);
    }
    return i + 1;
}
countUniqueValues([1,1,1,2,2,3,4,5,5,5,6,7])