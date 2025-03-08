const envelope = document.querySelector('.envelope-wrapper');
        envelope.addEventListener('click', () => {
            envelope.classList.toggle('flap');
        });

function openCanvas() {
            document.getElementById("letterCanvas").classList.add("active");
        }

function closeCanvas() {
            document.getElementById("letterCanvas").classList.remove("active");
        }

function Thanks(){
    document.getElementById("letterCanvas").classList.add("active");
}

function openCanvas2() {
    document.getElementById("canvas2").classList.add("active");
}

function closeAllCanvas() {
    document.getElementById("letterCanvas").classList.remove("active");
    document.getElementById("canvas2").classList.remove("active");
}