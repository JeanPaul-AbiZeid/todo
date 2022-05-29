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

