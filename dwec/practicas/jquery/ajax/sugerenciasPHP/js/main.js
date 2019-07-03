function init() {
  $("#buscador").keyup(function(str) {
    let input = $("#buscador").val();
    if (input.length == 0) {
      $("#sugerencias").text("");
      return;
    }
    $.get({
      url: "php/arrayAlumnos.php?input=" + input,
      data: { input: input },
      cache: "false",
      success: function(response) {
        $("#sugerencias").html(response);
      }
    });
  });

  $('#sugerencias').css({
    minWidth : $('#buscador').width(),
  });

  $('#sugerencias').on('click', function(e){
    $("#buscador").val($(e.target).text());
    $("#sugerencias").text("");
  });
}

$(init);
