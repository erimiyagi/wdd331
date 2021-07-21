function menu(){
  document.getElementById('toggle1').classList.toggle('line_1');
  document.getElementById('toggle2').classList.toggle('line_2');
  document.getElementById('toggle3').classList.toggle('line_3');
  document.getElementById('nav').classList.toggle('inner');
  document.getElementById('window').classList.toggle('x'); 
};
  document.getElementById('menu').addEventListener('click',function(){
  menu();
});
  document.getElementById('window').addEventListener('click',function(){
  menu();
});