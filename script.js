let tombolsLihat = document.querySelectorAll(".tombol-lihat");
let tombolsSilang = document.querySelectorAll(".silang");
let modals = document.querySelectorAll(".modal");

tombolsLihat.forEach(function(tombolLihat){
    tombolLihat.addEventListener('click', function(e){
        e.preventDefault();
        tombolLihat.nextElementSibling.classList.add("modal-active");
    })
})

tombolsSilang.forEach(function(tombolSilang){
    tombolSilang.addEventListener('click', function(e){
        e.preventDefault();
        tombolSilang.parentElement.parentElement.classList.remove("modal-active");
        e.stopPropagation();
    })
})