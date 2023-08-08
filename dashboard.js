const dashboardItems = document.querySelectorAll(".dashboard-item");

dashboardItems.forEach((item) => {
  item.addEventListener("click", () => {
    dashboardItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("open");
      }
    });
    item.classList.toggle("open");
  });
});
