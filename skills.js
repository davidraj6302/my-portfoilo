document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".skill-bar");

  skillBars.forEach((bar) => {
    const progress = bar.querySelector(".progress");
    const percentText = bar.querySelector(".percent");
    const targetPercent = parseInt(bar.getAttribute("data-percent"));
    let current = 0;

    const interval = setInterval(() => {
      if (current >= targetPercent) {
        clearInterval(interval);
      } else {
        current++;
        progress.style.width = current + "%";
        percentText.textContent = current + "%";
      }
    }, 20); // speed of increment
  });
});
