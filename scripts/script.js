//generating random id
function randomId() {
    var rand_index = Math.floor(Math.random() * 100000000 + 1);
    console.log(rand_index);
};


//search function
$(document).ready(function(){
    $("#myInput").on("keyup", function(){
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

//get title, description and importance
function getInfo(){
    var info = []
    var todo_title = $('#title').val();
    var todo_desc = $('#description').val();
    var points = $('input[name ="rating-number"]:checked').val();
    info.push(todo_title);
    info.push(todo_desc);
    info.push(points);
    return info
}

//reset values
function reset(){
    $('input[id ="title"]').val("");
    $('textarea[id ="description"]').val("");
    $( ".radio-btn" ).prop( "checked", false );
}

function createRow(id, title, description, importance, time){
    var table = document.getElementById("myTable");
    var row = document.createElement("tr");

    table.appendChild(row);
    //id
    var col_id = document.createElement("th");
    col_id.innerHTML = id;
    row.appendChild(col_id);

    //title
    var col_title = document.createElement("th");
    col_title.innerHTML = title;
    row.appendChild(col_title);

    //description
    var col_desc = document.createElement("th");
    col_desc.innerHTML = description;
    row.appendChild(col_desc);

    //importance
    var col_importance = document.createElement("th");
    col_importance.innerHTML = importance;
    row.appendChild(col_importance);

    //time
    var col_time = document.createElement("th");
    col_time.innerHTML = time;
    row.appendChild(col_time);

    //done button
    var done = document.createElement("th")
    var done_class = done.classList;
    done_class.add("button");
    done_class.add("done");
    done.innerHTML = "&#9989";
    row.appendChild(done);

    //edit button
    var edit = document.createElement("th")
    var edit_class = edit.classList;
    edit_class.add("button");
    edit_class.add("change");
    edit.innerHTML = "&#128393";
    row.appendChild(edit);

    //remove button
    var remove = document.createElement("th")
    var remove_class = remove.classList;
    remove_class.add("button");
    remove_class.add("delete");
    remove.innerHTML = "&#10060";
    row.appendChild(remove);
}

// click create
$(document).ready(function(){
    $("#create-button").click(function(){
        //getting info from form
        getInfo();
        var title = getInfo()[0];
        var desc = getInfo()[1];
        var point = getInfo()[2];

        //recording time
        const d = new Date();
        let time = d.getTime();
        

        //resetting values
        reset();
    })
})
