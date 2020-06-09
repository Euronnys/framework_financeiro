


function salvarcategoria(){
  const nome2 = document.getElementById("nome2").value;
 
   
  
  const categorias = {id:Date.now(),nome2};
  
  let categoriagravada = JSON.parse(window.localStorage.getItem("categorias"));
  if(categoriagravada == null){ // primeiro acesso chave ainda não foi criada
    window.localStorage.setItem('categorias',JSON.stringify([])); // criar
    categoriagravada = JSON.parse(window.localStorage.getItem("categorias"));// atualizar a minha variavel
    // validar se o email ja´ existe
    categoriagravada.push(categorias); // adiciona um novo produto
      window.localStorage.setItem('categorias', JSON.stringify(categoriagravada)); // gravar na memoria o objeto atualizado
      Swal.fire({
    
        icon: 'success',
        title: 'Produto cadastrado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      });
     
    
  }else{ // chave produto já existe na memória
    categoriagravada.push(categorias); // adiciono um novo produto
      window.localStorage.setItem('categorias',JSON.stringify(categoriagravada)); // gravar na memoria
      Swal.fire({
    
        icon: 'success',
        title: 'Categoria cadastrada com sucesso!',
        showConfirmButton: false,
        timer: 1500
      });
      
    }  

    listarcategorias();
  }
 
 



function cadcategorias(){
  const nome2 = document.getElementById("nome2").value;
 

  const categorias = {id: Date.now(),nome2};
  //produtos.push(produto);//
  // criar o objeto na localstorage
  // esta vazio na memoria
  //window.localStorage.setItem('produtos',JSON.stringify([])); // criar
  // primeiro acesso verificar se existe a chave na memoria
  let categoriagravada = JSON.parse(window.localStorage.getItem("categorias"));
  if(categoriagravada == null){ // primeiro acesso chave ainda não foi criada
    window.localStorage.setItem('categorias',JSON.stringify([])); // criar
    categoriagravada = JSON.parse(window.localStorage.getItem("categorias"));// atualizar a minha variavel
    // validar se o email ja´ existe
    
    categoriagravada.push(categorias); // adiciona um novo produto
      window.localStorage.setItem('categorias', JSON.stringify(categoriagravada)); // gravar na memoria o objeto atualizado
      Swal.fire({
    
        icon: 'success',
        title: 'Produto cadastrado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      });
    
  }else{ // chave produto já existe na memória
    
    categoriagravada.push(categorias); // adiciono um novo produto
      window.localStorage.setItem('categorias',JSON.stringify(categoriagravada)); // gravar na memoria
      Swal.fire({
    
        icon: 'success',
        title: 'Produto cadastrado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      });
    
  }
  /*produtoGravado.push(produto);
  window.localStorage.setItem('produtos',JSON.stringify(produtoGravado));// gravo na memoria o array novo
  */
  
  
  
  /*Swal.fire({
    
    icon: 'success',
    title: 'Usuário cadastrado com sucesso!',
    showConfirmButton: false,
    timer: 1500
  });
  limpar();
  window.location.href = "index.html";*/
 
 

}



function listarcategorias(){
  let linha = "";
  let categoriagravada = JSON.parse(window.localStorage.getItem("categorias"));
  if(categoriagravada){
   
    categoriagravada.forEach(categorias =>  {
    row = document.getElementById("tbody");
    if(row != null){
     linha += "<tr>"+
              "<td id='tdid'>"+categorias.id +"</td>"+
              "<td id='tdnome'>"+categorias.nome2 +"</td>"+             
              "<td id='tdacoes'><button class='btn btn-outline-success' onclick='editarproduto("+categorias.id+")'><i class='fa fa-edit'></i></button>"+
              "<button class='btn btn-outline-danger'onclick='apagarproduto("+categorias.id+")'><i class='fa fa-trash'></i></button></td>"
            +"</tr>";
    row.innerHTML = linha;        
    }   
  
  
  });
  }
 }
