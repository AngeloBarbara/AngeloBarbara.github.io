{
    document.addEventListener("DOMContentLoaded", init);
	let array1 = [1,2,3,4,5];

	function crearArray() {

		let array2 = [];

		for(let i=0; i < arguments.length; i++){

			if(Array.isArray(arguments[i])){
				arguments[i].forEach(function(element){
					array2.push(element);
				});
			}
			else{	
				array2.push(arguments[i]);
			}
		}

		return array2;
	}

	function init(){
        document.getElementById("parrafo").innerHTML = crearArray("Argumento1", "Argumento2", "Argumento3", array1);
    }
}