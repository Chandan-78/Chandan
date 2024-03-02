window.onload = function() {
    // Get the registration box element
    var registrationBox = document.getElementById("registrationBox");

    // Create a table element
    var table = document.createElement("table");
    table.setAttribute("align", "center");
    table.setAttribute("width", "500");
    table.setAttribute("height", "400");
    table.setAttribute("bgcolor", "gray");

    // Add rows and cells to the table
    var rows = ["First Name", "Last Name", "Password", "Email", "Age"];
    for (var i = 0; i < rows.length; i++) {
        var row = document.createElement("tr");

        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");

        cell1.innerHTML = "<font size='4'>" + rows[i] + "</font>";
        cell2.innerHTML = "<input size='29' type='text'/>";

        row.appendChild(cell1);
        row.appendChild(cell2);

        table.appendChild(row);
    }

    // Append the table to the registration box
    registrationBox.appendChild(table);
};
