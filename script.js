function simulateData() {
  const temp = (20 + Math.random() * 10).toFixed(1);
  const humidity = (40 + Math.random() * 20).toFixed(1);

  document.getElementById("temp").textContent = `${temp} °C`;
  document.getElementById("humidity").textContent = `${humidity} %`;
}






