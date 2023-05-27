var imgs = document.querySelectorAll("img");
for (var i = 0; i < imgs.length; i++) {
    // Format imgs with a <br> before the start
    var prev = imgs[i].previousElementSibling;
    if (prev && prev.nodeName == "SPAN") {
        imgs[i].insertAdjacentElement("beforebegin",document.createElement("br"));
    }

    // Link each image to the dictionary
    var words = imgs[i].alt.split(" ");
    words.sort(compareFn);
    if (words[0] == "") {
        continue;
    }
    var link = document.createElement("a");
    link.href = "dictionary.html";

    if (words.length > 1){
        link.href += "?word=";
    }
    for (var j = 1; j < words.length; j++) {
        link.href += words[j];
        if (j < words.length - 1) {
            link.href += ",";
        }
    }
    link.href += "#" + words[0];
    imgs[i].insertAdjacentElement("beforebegin",link);
    link.appendChild(imgs[i])
}

// Sort suffixes after similar words
function compareFn(a, b) {
    if (a[0] == "-") {
        a = a.slice(1) + "~"
    }
    if (b[0] == "-") {
        b = b.slice(1) + "~"
    }
    return a > b ? 1 : -1;
}
