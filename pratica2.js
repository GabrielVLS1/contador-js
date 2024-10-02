function contar(){
  let inicio = document.querySelector('#inicio');
  let fim = document.querySelector('#fim');
  let passo = document.querySelector('#passo');
  let res = document.querySelector('#res');

  if(inicio.value.length == 0 || fim.value.legth == 0 || passo.value.length == 0){
    alert('aaaaaaaaaa');
    
  }else{
    res.innerHTML += 'Contador: ';

    i = Number(inicio.value);
    f = Number(fim.value);
    p = Number(passo.value);

    if(p <= 0){
      alert('Agora o passo vale 1');
      p = 1;
    }
    
    if(i < f){
      for(let c = i; c <= f; c += p){
        res.innerHTML += `${c}. `;
       }
      }else{
      for(let c = i; c >= f; c -= p){
         res.innerHTML += `${c}. `;
      }
    }
  }
}


function apagar(){
  res.innerHTML = '';
}