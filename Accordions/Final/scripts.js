var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}
// making it responsive
window.addEventListener("resize", function(){
    var isOpen = document.querySelectorAll(".is-open");
    isOpen.forEach(function(e){
      e.nextElementSibling.style.maxHeight = e.nextElementSibling.scrollHeight + "px";
    })
});
