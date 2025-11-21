
//----Math.random----//

// var a  = Math.floor(Math.random()*10)
// console.log(a)


//----Math.random & Math.floor----//

// var a  = Math.floor(Math.random()*10)
//  console.log(a)


//---- Color Changes by click----//

var box=document.querySelector('#box')
var btn=document.querySelector('button')

btn.addEventListener("click", function(){
var a1 =Math.floor(Math.random()*256)
var a2 =Math.floor(Math.random()*256)
var a3 =Math.floor(Math.random()*256)

box.style.backgroundColor = `rgb(${a1},${a2},${a3})`

})