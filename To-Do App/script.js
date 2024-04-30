const input = document.querySelector('input');
const btn = document.querySelector('button');
const wrapper = document.getElementById('wrapper');
const alert1 = document.querySelector(".alert");

input.onkeydown = function(e){
    if(e.keyCode === 13){
        kaydet();
    }
}

function kaydet() {
    let value = input.value;
    if (value.trim() != "") {
        let div = document.createElement('div');
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.padding = '10px';
        div.addEventListener('click', ciz)

        let p = document.createElement('p');
        p.textContent = value;
        p.style.margin = '0'

        let span = document.createElement('span');
        span.innerHTML = '<i class="fa-solid fa-trash"></i>'
        span.addEventListener('click', sil)

        div.appendChild(p);
        div.appendChild(span);
        wrapper.appendChild(div);
    } else {
        alert1.classList.add('d-block');
        alert1.classList.remove('d-none');
        setTimeout(timeOut, 3000);
    }
    input.value = "";

}

function ciz() {
    this.classList.toggle('bg-dark');
    this.classList.toggle('text-white');
    this.children[0].classList.toggle('text-decoration-line-through')
}

function sil() {
    this.parentElement.remove()
}

function timeOut() {
    alert1.classList.remove('d-block');
    alert1.classList.add('d-none');
}