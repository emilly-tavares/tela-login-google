document.addEventListener("DOMContentLoaded", function() {
    
    const input = document.querySelector(".email");
    const label = document.querySelector(".label");
    
    input.addEventListener("input", function() {
        if (input.value.length > 0) {
            label.classList.add("input-active");
            input.classList.add("border");
          } else {
            label.classList.remove("input-active");
            input.classList.remove("border");
          }
    });
    
    input.addEventListener("focus", function() {
        label.classList.add("input-active");
        input.classList.add("border");
    });
    
    input.addEventListener("blur", function() {
        if (input.value.length === 0) {
            label.classList.remove("input-active");
            input.classList.remove("border");
          }
    });
    
    
});

