const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all price elements
    const priceElements = document.querySelectorAll(".price");
    
    // Calculate the total sum
    let total = 0;
    priceElements.forEach(price => {
        total += parseInt(price.textContent);
    });

    // Check if total row already exists to avoid duplicate rows
    const table = document.querySelector("table");
    const existingTotalRow = document.getElementById("total-row");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for the total
    const totalRow = document.createElement("tr");
    totalRow.id = "total-row";

    // Create a single cell that spans both columns
    const totalCell = document.createElement("td");
    totalCell.setAttribute("colspan", "2");
    totalCell.style.fontWeight = "bold";
    totalCell.style.textAlign = "center";
    totalCell.id = "ans";  // Add this ID so Cypress can find it
    totalCell.textContent = `Total Price: Rs ${total}`;

    // Append cell to row and row to table
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);

