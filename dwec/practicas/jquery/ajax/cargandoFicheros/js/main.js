function init() {
  url = jQuery(location).attr("href");
  $("#url").val(url);

  $("#mostrar").click(ajax);

  $("#url").on("change", function() {
    $("#data").empty();
    url = $("#url").val();
  });
}

function ajax() {
  let cadena = "";
  $.get({
    url: url,
    cache: "false",
    error: function() {
      cadena = "Error";
      $("#estado").text(cadena);
    },
    beforeSend: function() {
      cadena = "Before send";
      $("#estado").text(cadena);
    },
    success: function(data) {
      cadena += ", Succes";
      $("#estado").text(cadena);
      $("#data").text(data);
    },
    complete: function() {
      cadena += ", Complete";
      $("#estado").text(cadena);
    }
  })
    .done(function() {
      cadena += ", Done";
      $("#estado").text(cadena);
    })
    .fail(function() {
      cadena += ", Fail";
      $("#estado").text(cadena);
    })
    .always(function() {
      cadena += ", Always";
      $("#estado").text(cadena);
    });
}

$(init);
