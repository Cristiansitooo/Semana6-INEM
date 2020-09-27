var inputs = document.getElementsByClassName('formulario__input');
for(var i =0; i < inputs.legth; i++){
  inputs[i].addEventlistener('keyup', function (){
if(this.value.length>=1){
    this.nexELementSibling.claslist.add('fijar');
    } else {
    this.nexELementSibling.claslist.remove('fijar');
}
  });

} 