var accordian = document.getElementsByClassName("accordian");

for (var i = 0; i < accordian.length; i++) {
  accordian[i].onclick = function () {
    this.classList.toggle("is-open");

    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  }
}
