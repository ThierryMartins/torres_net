const btn = document.getElementById("btn-acessibilidade");
const menu = document.getElementById("menu-acessibilidade");

btn.addEventListener("click", () =>{
    if(menu.style.display === "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
        menu.style.left = "40px";
        menu.classList.toggle("ativo");
    }
});

  
  // Fecha o menu ao pressionar ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      menu.classList.remove("ativo");
    }
  });

// <i class="fa-regular fa-sun"></i> -> Link do sol

document.getElementById('trocar_tema').addEventListener('click',
  () =>{
    document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark')){
      document.getElementById('trocar_tema').innerHTML = '<i class="fa-regular fa-sun"></i> Tema Claro'
    }else{
      document.getElementById('trocar_tema').innerHTML = '<i class="fa-regular fa-moon"></i> Tema Escuro'
    }
  }
) 

document.getElementById('tema_contraste').addEventListener('click',
  ()=>{
    document.body.classList.toggle('contraste')
  }
)

document.getElementById('Tamanho_Fonte').addEventListener('click',
  ()=>{
    document.body.classList.toggle('more-letter')
    if(document.body.classList.contains('more-letter')){
      document.getElementById('Tamanho_Fonte').innerHTML = '<i class="fa fa-font fa-1x"></i> Diminuir Tamanho da Fonte'
    }else{
       document.getElementById('Tamanho_Fonte').innerHTML = '<i class="fa fa-font fa-2x"></i> Aumentar Tamanho da Fonte'
    }
  }
)

document.getElementById('link_sublinhado').addEventListener('click',
  ()=>{
    document.body.classList.toggle('sublinhar')
    if(document.body.classList.contains('sublinhar')){
      document.getElementById('sublinhar').innerHTML = '<i class="fas fa-link"></i>  Retirar Links Sublinhados'
    }else{
      document.getElementById('sublinhar').innerHTML = '<i class="fas fa-link"></i>  Links Sublinhados'
    }
  }
)