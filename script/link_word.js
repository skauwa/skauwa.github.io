// Link each word to the dictionary
var spans = document.querySelectorAll("span");
for (var s = 0; s < spans.length; s++) {
    var words = spans[s].innerHTML.split(/( |-|["]|[.]|[,])/);

    for (var w = 0; w < words.length; w++) {
        if (words[w] == "-") {
            words[w] = "-" + words[w + 1];
            words.splice(w + 1, 1);
        }
        if (/^[a-zA-Z|-]+$/.test(words[w])) {
            var link = "<a href=dictionary.html#" + words[w].toLowerCase() + ">" + words[w] + "</a>";
           words[w] = link;
        }
    }
    spans[s].innerHTML = words.join("");
}
