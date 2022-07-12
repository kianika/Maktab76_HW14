

const API_URL = 'https://62cc9b41a080052930adefdc.mockapi.io/info';
$(document).ready(function(){
    $("button").click(function(){
        $.ajax({
            url: API_URL,
            type: "GET",
            success: function(infos) {
            $.each(infos, function (index , info) {
                var row = "<tr><td>" + info.name + "</td><td>" + info.lastname + "</td><td>" + info.age + "</td></tr>";
     $("table tbody").append(row);
            });
        }
    });
});
});

   