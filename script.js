const Ques = function (){
    let x ='Hello'
    console.log(x)
}()
let q1=document.getElementsByClassName('q1');
q1[0].innerHTML=Ques;

let hs=document.getElementsByClassName('abc');
function check(){
    // const add=parseInt(document.getElementById("num1").value);
    // const add1=parseInt(document.getElementById("num2").value);
    let add=3;
    let add1=4;
    console.log(add+add1);
    hs[0].innerHTML=(`Addition of 3+4 is : ${add+add1}`);
}

function q4(){
var x = 21;
var girl = function () {
    document.writeln(x);
    var x = 20;
};
girl ();}


function q5(){
var y = 21;
        girl ();
        document.writeln(y)
        function girl() {
            document.writeln(y);
            var y = 20;
        };}

      

function q6(){var x = 21;
a();
b();

  function a() {
    
   x = 20;
  document.write(x);
};
 function b() {
    
    x = 40;
    document.writeln(x);
};}


function fac(n){
    let count=1;
    // let n=6;
    for(let i=1;i<=n;i++){
    count=count*i;}
    console.log(count);
}
fac(8);


function qb(){
function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    document.writeln(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 9));}

function q2(){
              Abc();
                const Abc = function(){
                    let value = 20;
                    console.log(value);
                }
            }
                


        
function q3(){
var a = 10;
(function (){
    document.writeln(a);
    var a = 20;
})();}   

function qa(){
    const greet =  function(name){
        return function(m){
        
            document.writeln(`Hi!! ${name}, ${m}`);
        }
    }
      
    const greet_message = greet('EA19');
    greet_message("Welcome To PrepBytes")  
}


