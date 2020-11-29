var newP = document.createElement("h1")
newP.textContent = "Welcome to my JS site"
document.body.append(newP)
var newP = document.createElement("p")
newP.textContent = "All of this was created with Javascript!"
document.body.append(newP)
var newLi1 = document.createElement("li")
newLi1.textContent = "Yay Javascript"
var newLi2 = document.createElement("li")
newLi2.textContent = "Boo Java"
var newLi3 = document.createElement("li")
newLi3.textContent = "Web Development Rules"
var ol = document.createElement("ol")
ol.append(newLi1,newLi2,newLi3)
document.body.append(ol) 