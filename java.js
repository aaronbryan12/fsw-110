for ( var i = 0; i < 5; i ++) {
    var header = document.createElement("h2");
    header.textContent = "Something Creative";
    document.body.append(header);
    header.style.fontSize = "20px";
    header.style.fontWeight = "lighter";
    header.style.fontFamily = "sans-serif";
    header.style.color = "cornflowerblue"; 
    header.classList.add("border");
}