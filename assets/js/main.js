var text = ["panda 1", "panda 2", "panda 3", "panda 4"];

function pandaGallery(param){
	return "assets/img/panda"+(param+1)+".jpg";
}

function insert(elem){
	var div = document.createElement("div");
	var figure = document.createElement("figure");
		figure.setAttribute("class", "panda-figure");

	var img = document.createElement("img");
	var indice = text.indexOf(elem);
		img.setAttribute("src", pandaGallery(indice));
		img.setAttribute("alt", elem);
		img.setAttribute("class", "img-panda");
	figure.appendChild(img);
	div.appendChild(figure);

	return div;
}

window.addEventListener("load", function(e){
	var gallery = text.forEach(function(e){
		document.getElementById("gallery").appendChild(insert(e));
	});
})