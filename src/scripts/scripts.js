document
  .getElementById("mobile-menu-btn")
  .addEventListener("click", function () {
    console.log("I am clicked to open a sidebar");
    document
      .getElementById("mobile-sidebar")
      .classList.toggle("opacity-100", true);
    document
      .getElementById("mobile-sidebar")
      .classList.toggle("pointer-events-auto", true);
  });

document
  .getElementById("close-sidebar-btn")
  .addEventListener("click", function () {
    console.log("I am clicked to close the sidebar");
    document
      .getElementById("mobile-sidebar")
      .classList.toggle("opacity-0", true);
    document
      .getElementById("mobile-sidebar")
      .classList.toggle("pointer-events-none", true);
  });
