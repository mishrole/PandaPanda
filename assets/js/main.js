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
		div.style.display = "inline-block"
	})

	return div;
}

window.addEventListener("load", function(e){
	var gallery = text.forEach(function(e){
		document.getElementById("gallery").appendChild(insert(e));
	});

	var subOrigen = document.getElementById("sub-origen");
	var subHistoria = document.getElementById("sub-historia");

	var origen = document.getElementById("origen");
	var historia = document.getElementById("historia");

	subOrigen.addEventListener("click", function(){
		if(origen.style.display == "inline-block"){
			origen.style.display = "none"
		}else{
			origen.style.display = "inline-block"
		}
	})

		subHistoria.addEventListener("click", function(){
		if(historia.style.display == "inline-block"){
			historia.style.display = "none"
		}else{
			historia.style.display = "inline-block"
		}
	})

})