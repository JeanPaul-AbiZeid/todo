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

//search function
$(document).ready(function(){
    $("#myInput").on("keyup", function(){
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

//get title and description
function getInfo(){
    var todo_title = $('#title').val();
    var todo_desc = $('#description').val();
    var check_value = $('input[name ="rating-number"]:checked').val();
    console.log(todo_title);
    console.log(todo_desc);
    console.log(check_value);
}

function reset(){
    $('input[id ="title"]').val("");
    $('textarea[id ="description"]').val("");
    $( ".radio-btn" ).prop( "checked", false );
    // document.getElementById("description").value = "";
}
$(document).ready(function(){
    $("#create-button").click(function(){
        getInfo();
        reset();

    })
})

