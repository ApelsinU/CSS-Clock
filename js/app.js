document.addEventListener("DOMContentLoaded", () => {

  const hour = document.getElementById("hour")
  const min = document.getElementById("min")
  const sec = document.getElementById("sec")


  setInterval(()=> {
    const day = new Date();

    const hourAngle = day.getHours() * 30;
    const minAngle = day.getMinutes() * 6;
    const secAngle = day.getSeconds() * 6;

    hour.style.transform = `rotateZ(${hourAngle + (minAngle/12)}deg)`
    min.style.transform = `rotateZ(${minAngle}deg)`
    sec.style.transform = `rotateZ(${secAngle}deg)`

    console.log(secAngle)
  })


});