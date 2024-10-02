function contar(){
  let inicio = document.querySelector('#inicio');
  let fim = document.querySelector('#fim');
  let passo = document.querySelector('#passo');
  let res = document.querySelector('#res');

  if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
     res.innerHTML = 'Impossível contar!';
     alert('[ERRO] Faltam dados!');
    
  }else{
    res.innerHTML += 'Contando: <br>';
    i = Number(inicio.value);
    f = Number(fim.value);
    p = Number(passo.value);

    if(p <= 0){
      alert(`Valores iguais ou menores que 0 não são aceitos no passo! Agora o passo será considerado como 1.`)
      p = 1;
    }
    
    if(i < f){
    for(let c = i; c <= f; c += p){
      res.innerHTML += `${c} \u{1F449}`;
    }
       }else{
        for(let c = i; c >= f; c -= p){
      res.innerHTML += `${c} \u{1F449}`;
      }
    }res.innerHTML += `\u{1F3C1}`;
  }
}

