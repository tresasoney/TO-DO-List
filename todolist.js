var uncheckedOnLoad = 0; 
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var objects = JSON.parse(this.response);
        var output = "<tr><th>User ID</th><th>ID</th><th>Title</th><th>Completed</th></tr>";
        
        for (var i = 0; i < objects.length; i++) {
            output += "<tr>";
            output += '<td class="alignCenter">' + objects[i].userId + "</td>";
            output += '<td class="alignCenter">' + objects[i].id + "</td>";
            output += "<td >" + objects[i].title + "</td>";
            
            if (objects[i].completed == true) {
                output += `<th><input type="checkbox" checked disabled onchange="checkChange()"></th>`;
            }
            else {
                
                output += `<th><input type="checkbox" oninput="checkChange()" id="checkBox${uncheckedOnLoad}"></th>`;
                uncheckedOnLoad += 1;
            }
            output += "</tr>";
        }
        document.getElementById("progress").setAttribute("hidden", true);
        document.getElementById("table").innerHTML = output;
    }
}
xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xhttp.send();
var storeCount = 0; 
function checkChange() {
    var promise = new Promise(function (resolve, reject) {
        var checkCount = 0;
       
        for (var i = 0; i < uncheckedOnLoad; i++) {
            if ((document.getElementById("checkBox" + i)).checked == true) {
                checkCount += 1;
            }
        }
       
        if (checkCount == 5 && storeCount < 5) {
            resolve();
        }
        else {
            storeCount = checkCount;
        }
    });
    promise.then(function () {
        setTimeout(function(){
        alert("Congrats. 5 Tasks have been Successfully Completed");
        },10)
        setTimeout(function () {
            alert("Congrats! 5 Tasks have been Successfully Completed!");
        }, 10)
    });
} 
