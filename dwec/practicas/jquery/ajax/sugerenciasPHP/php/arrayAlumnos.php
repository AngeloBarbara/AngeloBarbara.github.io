
<?php

$alumnos = [
    "Angelo Barbara", "Guillermo Boquizo ",
    "Javier González", "Jesús Mejías", "José Bravo",
    "Chema Romero", "José Álvarez",
    "Marcos Gallardo", "Francisco Ramírez", "Mario Navarro",
];

$input = strtolower($_REQUEST["input"]);

$cadena = "";

foreach ($alumnos as $alumno) {
    //if (stristr($input, substr($alumno, 0, strlen($input)))) {
    if (preg_match('/' . $input . '/i', $alumno)) {
        if($cadena !== ""){
            $cadena .= "<p>$alumno</p>";
            continue;
        }
        $cadena = "<p>$alumno</p>";
    }

}

echo $cadena === "" ? "No hay coincidencias" : $cadena;

?>