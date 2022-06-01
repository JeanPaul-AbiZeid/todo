//generating random id
function randomId() {
    var rand_index = Math.floor(Math.random() * 100000000 + 1);
    console.log(rand_index);
};

// getting the timestamp
function date() {
    const d = new Date();
    let time = d.getTime();
}

$(document).ready(function(){
    $("#myInput").on("keyup", function(){
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});


// function getImportance(){
//     var importance;
//     var result = document.getElementsByName("rating-number");
//     for(var index = 0; index, result.length; index++){
//         if(result[index].checked){
//             importance = result[index].value;
//             console.log(importance);
//         }
//     }
// }

function getImportance(){
    var check_value = $('input[name ="rating-number"]:checked').val();
    console.log(check_value);
}

var create = document.getElementById("create-button");
create.addEventListener("click", getImportance);
