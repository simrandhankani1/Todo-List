let form = document.querySelector("#todoForm");
let input = document.querySelector("#taskInput");
let table = document.querySelector("#taskList");
console.log(table);
let count = 0;
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let task = input.value.trim();
    console.log(task);
    if (task === "") {
        alert("please enter the value");
    }
    else {
        count++
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = count;
        let td2 = document.createElement("td");
        td2.textContent = task;
        let td3 = document.createElement("td");
        let btn = document.createElement("button");

        btn.textContent = "Delete";
        btn.className = "delete-btn";
        function updateSerialNumbers() {

            let rows = table.querySelectorAll("tr");

            rows.forEach(function (row, index) {

                row.cells[0].textContent = index + 1;

            });

        }

        btn.addEventListener("click", function () {

            tr.remove();

            updateSerialNumbers();

        });
        td3.appendChild(btn);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
        updateSerialNumbers();

        input.value = "";

    }

});

