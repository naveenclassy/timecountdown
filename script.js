const d = document.querySelector("#days");
const h = document.querySelector("#hours");
const m = document.querySelector("#minutes");
const s = document.querySelector("#seconds");
function newevolution() {
    const currentyear = new Date().getFullYear();
    const newyear = new Date(`january 1 ${currentyear + 1} 00:00:00`);
    const currentdate = new Date();
    const diff = newyear - currentdate;
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    d.innerHTML = days < 10 ? "0" + days : days;
    h.innerHTML = hours < 10 ? "0" + hours : hours;
    m.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    s.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    // console.log(`${days}-${hours}-${minutes}-${seconds}`);

}
setInterval(newevolution, 1000);