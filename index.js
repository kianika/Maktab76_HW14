/* 

const API_URL = 'https://62cc9b41a080052930adefdc.mockapi.io/info';
$(document).ready(function(){
$("#btn").click(function () {
const table = $('table tbody');
$.ajax({
url: API_URL,
type: "GET",
success: function(employees) {
table.append(`idfirstNamelastNamephoneNumberemailaddressjobavator`)
$.each(employees, function (index , employee) {
table.append(
`${employee.id}${employee.firstName}${employee.lastName}${employee.phoneNumber}${employee.email}${employee.address}${employee.job}`
);
});
}
});
});
});
 */

const API_URL = 'https://62cc9b41a080052930adefdc.mockapi.io/info';
$(document).ready(function(){
    $("button").click(function(){
        $.ajax({
            url: API_URL,
            type: "GET",
            success: function(infos) {
            $.each(infos, function (index , infos) {
                var row = "<tr><td>" + infos.name + "</td><td>" + infos.lastname + "</td><td>" + infos.age + "</td></tr>";
     $("table tbody").append(row);
            });
        }
    });
});
});

   