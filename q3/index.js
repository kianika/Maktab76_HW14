$(document).ready(function(){
    $("button").click(function(){
      $("p").text($("form").serialize());
    });
  });