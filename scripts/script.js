
//generating random id
function randomId() {
    var rand_index = Math.floor(Math.random() * 100000000 + 1);
    return todo_id = rand_index;
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
    if($('#title').val()){
        var todo_title = $('#title').val();
        info.push(todo_title);
    }
    if($('#description').val()){
        var todo_desc = $('#description').val();
        info.push(todo_desc);
    }
    if($('input[name ="rating-number"]:checked').val()){
        var points = $('input[name ="rating-number"]:checked').val();
        info.push(points);
    }
    return info
}

//reset values
function reset(){
    $('input[id ="title"]').val("");
    $('textarea[id ="description"]').val("");
    $( ".radio-btn" ).prop( "checked", false );
}

function createLi(title){
    var list = document.getElementById("myList");
    var element = document.createElement("li");
    element.innerHTML = title;
    list.appendChild(element);
}

function createRow(id, title, description, importance, time){
    var table = document.getElementById("myTable");
    var row = document.createElement("tr");

    table.prepend(row);
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
    done.setAttribute("id", id);
    done.setAttribute('onclick',`setDone(${id});`);

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
    remove.setAttribute("id", id);
    remove.setAttribute('onclick',`removeRow(${id});`);

    
    openPopup();
}


$(document).ready(function(){
    for(let i = 0; i<localStorage.length; i++){
        let saved_todo = JSON.parse(localStorage.getItem(localStorage.key(i)));
        
        let id = saved_todo.id;
        let title = saved_todo.title;
        let description = saved_todo.description;
        let point = saved_todo.point;
        let date = saved_todo.date;

        createRow(id, title, description, point, date);
              
    }
})
// click create
$(document).ready(function(){
    $("#create-button").click(function(){
        if(getInfo().length === 3){
            //getting info from form
            getInfo();
            var title = getInfo()[0];
            var desc = getInfo()[1];
            var point = getInfo()[2];

            //recording time
            const d = new Date();
            let time = d.getTime();
            
            //generating id
            let id = randomId();
            
            //adding
            createLi(title);
            createRow(id, title, desc, point, time);
            task = { id: id, title: title, description: desc, point: point, date: time }
            localStorage.setItem(id, JSON.stringify(task))

            //resetting values
            reset();
            
        }else{
                alert("Missing information, please fill all the form")
            }
    })
})
function openPopup(){
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementsByClassName("change");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close");

    //checkbox for showing password
    var show = document.getElementById("toggle");

    // When the user clicks the button, open the modal
    for (var j = 0; j < btn.length; j++) {
        btn[j].addEventListener("click", function(){
            modal.style.display = "block";})
    } 

    // When the user clicks on <span> (x), close the modal
    span[0].addEventListener("click", function(){
        modal.style.display = "none";})

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }}
}

function removeRow(id) {
    var div = document.getElementById(id).parentElement;
    div.style.display = "none";
    localStorage.removeItem(id)
}

function setDone(id) {
    var div = document.getElementById(id).parentElement;
    div.style.display = "none";
    var x = div.children[1];
    createLi(x.innerText);
    
    
}

// function editRow(){
//     var edit_row = document.getElementsByClassName("change");
//     var save_button = document.getElementById("save-button")
//     var i;
//     for (i = 0; i < edit_row.length; i++) {
//     edit_row[i].onclick = function() {
//         var new_info = []
//         if($('#title').val()){
//             var new_todo_title = $('#title').val();
//             edit_row[i].title.innerHTML = new_todo_title;
//         }
//         if($('#description').val()){
//             var todo_desc = $('#description').val();
//             edit_row[i].title.innerHTML = new_todo_desc;
//         }
//         if($('input[name ="rating-number"]:checked').val()){
//             var new_points = $('input[name ="rating-number"]:checked').val();
//             edit_row[i].title.innerHTML = new_todo_points;
//         save_button.onclick = function(){

//         }
//         }
    
//     }
// }
// }

openPopup();
