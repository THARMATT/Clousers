// message="global"//global varsble
// function hello1()
// {
//   message= "good morning"//function variable
  
//     let message="ramu ka ka"//local variable
//   console.log("hey listen "+ message)

// let c=function hello2(){
//   console.log("hey chutiyee"+ message)
// }
//   return c
// }
// c= hello1()
// c()turn
// FIUNCT
// Clousers is a function with whom its lexical envirinment  
function returnFunc(){
  const x=()=>{
    let a=1
    console.log(a)
    const y=()=>{
      // let a=2
      console.log(a)
      let z=()=>{
        // let a=3;
        console.log(a)
      }
     z() 
    }
    a=99
    y()
  }
  return x
  
}
let a = returnFunc()
a()
