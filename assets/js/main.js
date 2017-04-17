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
		var span = document.createElement("span");
			span.setAttribute("class", "close");
			span.innerText = "X";
	figure.appendChild(img);
	figure.appendChild(span);
	div.appendChild(figure);

	span.addEventListener("click", function(){
		div.style.display = "none";
	})

	var subRestaurar = document.getElementById("sub-restaurar");

	subRestaurar.addEventListener("click", function(){
		div.style.visibility = "visible"
	})

	return div;
}

window.addEventListener("load", function(e){
	var gallery = text.forEach(function(e){
		document.getElementById("gallery").appendChild(insert(e));
	});

	var subOrigen = document.getElementById("sub-origen");
	var subHistoria = document.getElementById("sub-historia");
	var subRestaurar = document.getElementById("sub-restaurar");


})