// Insert a heading at the top of each div
var entries = document.querySelectorAll("div");
for (var i = 0; i < entries.length; i++) {
    var index = (i + 1).toString(12);;
    index = index.replace("a", "X");
    index = index.replace("b", "Y");

    var heading = document.createElement("h2");
    heading.innerHTML = index + "<a href=\"dictionary.html#-izu\">-izu</a>"
         +" <a href=\"dictionary.html#arundi\">arundi</a>";
    entries[i].insertAdjacentElement("afterbegin", heading);
}
