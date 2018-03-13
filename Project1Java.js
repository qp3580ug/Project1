$(function(){
  $("#buttonStart").click(function(){
    $(".black1").hide().show(function(){
      $(".black1").delay(400).removeClass("black1").addClass("red").delay(200).show(200).text("T");
    });
    $(".black2").hide().delay(600).show(200);
    $(".black3").hide().delay(800).show(200);
    $(".black4").hide().delay(1000).show(200);
    $(".black5").hide().delay(1200).show(200);
    $(".black6").hide().delay(1400).show(200);
    $(".black7").hide().delay(1600).show(200);
    $(".radio1").hide().delay(1800).show(function(){
      $(this).delay(1200).prop("checked", true);
    });
    $("#volumeOff").hide().delay(2200).show(function(){
      $(this).delay().toggleClass("glyphicon glyphicon-volume-off").show(function(){
        $(this).toggleClass("glyphicon glyphicon-volume-up").css("font-size", "30px")
      });
    });
    $("#alert").hide().delay(2400).show(function(){
      $(this).toggleClass("alert alert-danger").show(function(){
        $(this).toggleClass("alert alert-success").text("Yay! Your volume is now on. Click finish to reset.")
      })
    });
    $("#buttonEnd").hide().delay(3200).show(200);
  });
  $("#buttonEnd").click(function(){
    location.reload();
  });

});
