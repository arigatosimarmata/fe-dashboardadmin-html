let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn>i");

sidebarBtn.onclick = function(){
    sidebar.classList.toggle("active");
}