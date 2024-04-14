setInterval(() => {
  var bgGrad = document.querySelector("#bg-grad");
  let condition = localStorage.getItem("light_theme");
  var black_text = document.querySelectorAll(".black_text");

  if (condition === "false") {
    bgGrad.classList.remove("from-white");
    bgGrad.classList.remove("to-blue-700");
    bgGrad.classList.add("from-[#39002B]");
    bgGrad.classList.add("to-[#0E041C]");
    black_text.forEach(function (item) {
        item.classList.remove("!text-black");
      });
  } else if (condition === "true"){
    bgGrad.classList.add("to-blue-700");
    bgGrad.classList.remove("from-[#39002B]");
    bgGrad.classList.remove("to-[#0E041C]");
    bgGrad.classList.add("from-white");
    black_text.forEach(function (item) {
        item.classList.add("!text-black");
      });
  }
}, 200);
