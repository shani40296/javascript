// refrenc of object in array....

// let obj = {
//     name: "shani",
//     age: 20,
//     weigth: 47,
//     height:"5.4fit",
//     greet: function(){
//         console.log("hello jee kaise ho");
//     }
// }
// console.log(obj)
// obj.greet();
// console.log(typeof(obj))
// //   obj2 = obj..
// let obj2 = obj;
// console.log(obj2)

// creation of array.....
// let arr = [1,2,3,4,5]
// array constructor
// let brr = new Array('shani',1,true)
// console.log(arr[3])

// built method in array....
// push and pop....
// let brr = new Array('shani',1,true);
// brr.push('patel');
// brr.pop();
// console.log(brr);

// shift and unshift.....
// let brr = new Array('shani',1,true);
// brr.shift( );
// brr.unshift('patel');
// console.log(brr);

// slice...
// let brr = new Array('shani',1,true)
// brr.push('20')
// brr.unshift('60')
// console.log(brr.slice(1,4))
// console.log(brr)

// splice...
// let brr = new Array('shani',1,true)
// brr.push('20')
// brr.unshift('60')
// // brr.splice(1,0,'kunal')
// brr.splice(1,2,'kunal')
// console.log(brr)

// map in arrey...
// let arr = [10, 20, 30];
// let ansArray = arr.map((Number) =>{
//     return Number*Number;
// })
// console.log(ansArray)

// let arr = [10, 20, 30];

// arr.map((number, index) =>{
//     console.log(number);
//     console.log(index);
// });

// filter ....
// let arr = [10,20,30,11,21,44,51];
// let evenArray = arr.filter((Number) =>{
//     if(Number%2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(evenArray)

//    OR
// let arr = [1,2,'shani','kunal',null]
// let ans = arr.filter((value) => {
//     if(typeof(value) === 'string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(ans)

// sort....
// let arr = [9,1,7,4,2,8]
// arr.sort();
// console.log(arr);

// index of ....
// let arr = [9,1,7,4,2,8]
// arr.sort();
// console.log(arr.indexOf(7));
// foorEach....
let arr = [10, 20, 30];
arr.forEach((value, index) =>{
    console.log("value",value, "index",index)
})
