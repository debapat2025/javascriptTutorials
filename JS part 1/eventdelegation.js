function one(){
  console.log('one');
}
function two(){
  console.log('two');
}
function three(){
  console.log('three');
}

function handleParent(event){
  //console.log("event",event.target);
  const target = event.target;
  if (target.id === 'btn1') {
    one();
  } else if (target.id === 'btn2') {
    two();
  } else if (target.id === 'btn3') {
    three();
  }
}