let tombolsLihat = document.querySelectorAll(".tombol-lihat");
let tombolsSilang = document.querySelectorAll(".silang");
let tombolsHapus = document.querySelectorAll(".tombol-hapus");
let modals = document.querySelectorAll(".modal");

tombolsLihat.forEach(function(tombolLihat){
    tombolLihat.addEventListener('click', function(e){
        e.preventDefault();
        this.nextElementSibling.classList.add("modal-active");
    })
})

tombolsSilang.forEach(function(tombolSilang){
    tombolSilang.addEventListener('click', function(e){
        e.preventDefault();
        this.parentElement.parentElement.classList.remove("modal-active");
        e.stopPropagation();
    })
})

tombolsHapus.forEach(function(tombolHapus){
    tombolHapus.addEventListener('click', function(e){
        e.preventDefault();
        this.parentElement.parentElement.parentElement.remove();
        e.stopPropagation();
    })
})