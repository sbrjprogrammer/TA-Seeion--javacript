
// true
// 1to9 true     0 false
// kisi chiz ka hona yaa nna hona


// console.log(5>4)

// // var a = ""

// const apiData={
//     Name:"shahzaib",
//     password:"1234",
//     email:""
// }
// var password="123"

// if(apiData.email){
//     console.log("login")
// }else{
//     console.log("ivalid username  or  password")
// }

// hoisting
// js code run karne se pehle fn or var declare

// console.log(a)
// var a=10;
// console.log(a)

// {

//     const a=10
//     console.log(a)
// }

// console.log(a)


   




















// function exampleWithLet() {
//     let a = 5;
//     if (true) {
//         let a = 10; // This is a different variable with block scope
//         console.log(a); // Output: 10
//     }
//     console.log(a); // Output: 5 (outer 'a' is not affected by the inner block)
// }



// function exampleWithVar() {
//     const b = 5;
    
//          b = 10; // This affects the outer 'b' because of function scope
//         console.log(b); // Output: 10
    
//    // Output: 10 (outer 'b' is changed by the inner block)
// }

// exampleWithVar()


// console.log("2nd cxlass of jaavcript")
// primitive type(pass by   value)
// String,number,undefined,boolean,null
// let a=10   


// let b=a;

// console.log(b)



// a++

// console.log(a)

// console.log(b)

// non-primitive pass by referencce
// array object 


// let obj ={
//     name:"shahzaib",
//     rollno:123,
//     cohort:9

// }



// let b={...obj}

// spread operator 
// copy banaeg
// reference ko convert kardega pass by value


// console.log(b)


// obj.name="shahzaib siraj"
// console.log(obj)
// console.log(b)




// array method

// let str= "my name is shahzaib"
//         // shift                                  // pop
//         // unshiift   
// console.log(str.split(''))


// // arr.unshift("orange")
// // arr[arr.length]="orange"

// console.log(arr[arr.length-1])

















// function modifyValue(value) {
//      value = value * 2; // Modify the local copy of 'value'
//      console.log("Inside the function:", value);
//    }
   
//    let originalValue = 10;
//    console.log("Before the function:", originalValue);
   
//    modifyValue(originalValue);
   
//    console.log("After the function:", originalValue);






// 3rd  class

// var a="shahzaib"

// var template = `Hello from template literals ${a} article  check previous one arrow functions`;
// console.log(template) 





                    
// function xyz(x, y="shahzaib", ...z) {
//         console.log(x, y,z);
//         // console.log(z);
//       }


// xyz("arman",)






// spread
// var stuff = {name: 'dani',age : 21,shoes: 'nike'}
// var stuff1 = {name: 'dani',age : 21, clothes: {shirt: 'white'}};

// var mergeObj = {...stuff, ...stuff1 };
// console.log(mergeObj)



// let obj={
//     name:"shahzaib",
//     rollNo:123,
//     cohort:7,
// }

// let[{userNamme,rollNo,cohort},{name}]=[{
//     userNamme:"shahzaib",
//     rollNo:123,
//     cohort:7,
// },
// {
//     name:"aahmer",
//     rollNo:123,
//     cohort:7,
// }]

// console.log(userNamme)
// console.log(name)


// console.log(n)

// console.log(c)
// console.log(rollNo)
// console.log(cohort)



// call back
// function as a parramerter pas ho

// function parent(child){
//     console.log("parent chal gaya")
//     child()
// }


// function child(){
//     console.log("child")
// }


// parent(child)



// Arrow function
// const a=(para)=>para



// let b= a("ahmer")
// console.log(b)

// const arrFn=(a)=>a

// const a=arrFn("shahzaib")
// console.log(a)


// let obj={
//     name:"mudassir",

//     normalFn(){
//         const arrowTest=()=>{
//             console.log(this.name)
//         }
//         arrowTest()

//         console.log(this.name)    
//     },



//     arrfn:()=>{
//         console.log(this.name)
//     }


// }
// obj.normalFn()
// obj.arrfn()





// class4





// Synchronous function





// function sayHello() {
//     console.log("Hello!");
// }



// Asynchronous function using a callback
// function sayHelloLater(callback) {
//     setTimeout(function() {
//         console.log("Hello, after a delay!");
//         callback();
//     }, 6000); // Simulating a 2-second delay
// }

// // Callback function
// function sayGoodbye() {
//     console.log("Goodbye!");
// }



// // console.log("Start");

// async
// sayHelloLater(sayGoodbye); 

// sync
// sayHelloLater();       
// sayGoodbye()


// console.log("End");




// setTimeout(()=>{
//     console.log("settimeout chal gaya")
// },6000)


// setInterval(()=>{
//     console.log("setinterval")
// },2000)

// setTimeout()




// fetch('https://jsonplaceholder.typicode.com/todos/1') 
// // promise return resolve success
// // reject kuch masla hogaya


// .then((res)=>res.json())


// .then((data)=>console.log(data))


// .catch((err)=>{
//     console.log("error")
// })



async function api(){
 

    try{
        let data = await fetch('https://jsonplaceholder.typicode.com/users')
        let convertedData= await data.json()
        console.log(convertedData)

    }
    catch(error){
        console.log(error)
    }





}

api()

     





