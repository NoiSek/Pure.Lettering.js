var lettering = function(selector) {
  elements = document.querySelectorAll(selector);

  for(var i = 0; i < elements.length; i++) {
    element = elements[i];
    chars = element.textContent.split("");
    output = "";
    
    for(var n = 0; n < chars.length; n++) {
      output += "<span class='char" + (n + 1) + "'>" + chars[n] + "</span>";
    }

    element.innerHTML = output;
  }
};