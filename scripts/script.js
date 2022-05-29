let todo_array = [];
let todo = [];
let id_number = [];

//generating random id
function randomId() {
    var rand_index = Math.floor(Math.random() * 100 + 1);
    console.log(rand_index);
    var check = id_number.includes(rand_index);
    if (check == false) {
        id_number.push(rand_index)
    }
};

// getting the timestamp
function date() {
    const d = new Date();
    let time = d.getTime();
}


//creating card
function createCard(){
    var title = $("#title").value;
    var t1 = document.createTextNode(title);
    var desc = $("#description").value;
    var t2 = document.createTextNode(desc);
    var t3 = document.createTextNode(date);

    var container = document.createElement("div");
    container.addClass("todo-card");

    var sub1 = document.createElement("div");
    sub1.addClass("top");
    var sub2 = document.createElement("div");
    sub2.addClass("desc");
    var sub3 = document.createElement("div");
    sub3.addClass("card-bot");
    container.appendChild(sub1)
    container.appendChild(sub2)
    container.appendChild(sub3)
    //creating sub1 children
    var sub1_child1 = document.createElement("div");
    var sub1_child2 = document.createElement("div");
    var sub1_child3 = document.createElement("div");
    //appending to sub 1
    sub1.appendChild(sub1_child1);
    sub1.appendChild(sub1_child2);
    sub1_child2.appendChild(t1);
    sub1.appendChild(sub1_child3);
    sub1_child3.appendChild(t3);

    var sub2_child = document.createElement("p");
    sub2.appendChild(sub2_child);
    sub2_child.appendChild(t2);
    //creating sub3 children
    var sub3_child1 = document.createElement("button");
    sub3_child1.addId("done");
    var sub3_child2 = document.createElement("button");
    sub3_child2.addId("change");
    var sub3_child3 = document.createElement("button");
    sub3_child3.addId("delete");
    //appendind to sub 3
    sub3.appendChild(sub3_child1);
    sub3.appendChild(sub3_child2);
    sub3.appendChild(sub3_child3);
}
