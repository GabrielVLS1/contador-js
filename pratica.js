function contar(){
  let inicio = document.querySelector('#inicio');
  let fim = document.querySelector('#fim');
  let passo = document.querySelector('#passo');
  let res = document.querySelector('#res');

  if(inicio.value.length == 0 || fim.value.length == 0 || 
  passo.value.length == 0){

  window.alert('[ERRO] Faltam dados!');

  }else{
    res.innerHTML += 'Contador: ';
    
     let i = Number(inicio.value);
     let f = Number(fim.value);
     let p = Number(passo.value);
    

    if(p <= 0){
      window.alert('Passo agora vai ser 1');
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