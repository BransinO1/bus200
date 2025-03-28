document.addEventListener("DOMContentLoaded", function () {
    console.log("Loading Excel data...");

    fetch("assets/data/wages.xlsx") // Correct path based on your structure
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.arrayBuffer(); // Read as binary
        })
        .then(data => {
            let workbook = XLSX.read(data, { type: "array" });
            let firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            let jsonData = XLSX.utils.sheet_to_json(firstSheet);
            console.log(jsonData); // Debugging: Check data in console
            displayData(jsonData);
        })
        .catch(error => console.error("Error loading Excel file:", error));
});

function displayData(data) {
    let table = document.getElementById("jobDataTable");
    table.innerHTML = "<tr><th>Job Title</th><th>Wage</th><th>Location</th></tr>";

    data.forEach(row => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${row["Job Title"] || "N/A"}</td>
                        <td>${row["Wage"] || "N/A"}</td>
                        <td>${row["Location"] || "N/A"}</td>`;
        table.appendChild(tr);
    });
}
