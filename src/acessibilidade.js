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
