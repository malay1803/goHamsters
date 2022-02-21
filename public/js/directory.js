
  const tabs = document.querySelectorAll(".tabs");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelector("h4.activeEq").classList.remove("activeEq");
      tab.classList.add("activeEq");
      console.log(this.id);
    });
  });

  var excerData = '<%- JSON.stringify(excercises) %>'

  console.log(excerData);

  for (i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", (e) => {
      e.preventDefault();
      const filter = e.target.dataset.filter;
      console.log(filter);
    });
  }
