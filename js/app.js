document.addEventListener("DOMContentLoaded", () => {

  const hour = document.getElementById("hour")
  const min = document.getElementById("min")
  const sec = document.getElementById("sec")

  const dgHour = document.getElementById("dg-hour")
  const dgMin = document.getElementById("dg-min")
  const dgSec = document.getElementById("dg-sec")

  const timePref = document.getElementById("time-prefix")

  setInterval(() => {
    const day = new Date();
    const h = day.getHours();
    const m = day.getMinutes();
    const s = day.getSeconds();

    setClockTime(h, m, s)
    setDigitTime(h, m, s)
  })


  function setClockTime(h, m, s) {
    const hourAngle = h * 30;
    const minAngle = m * 6;
    const secAngle = s * 6;

    hour.style.transform = `rotateZ(${hourAngle + (minAngle/12)}deg)`
    min.style.transform = `rotateZ(${minAngle}deg)`
    sec.style.transform = `rotateZ(${secAngle}deg)`
  }

  function setDigitTime(h, m, s) {
    h = h > 12 ? h - 12 : h;

    dgHour.innerHTML = h < 10 ? `0${h}` : h;
    dgMin.innerHTML = m < 10 ? `0${m}` : m;
    dgSec.innerHTML = s < 10 ? `0${s}` : s;
    timePref.innerHTML = h > 12 ? 'PM' : 'AM';
  }
});