const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

getSumBtn.addEventListener("click", () => {
    const total = [...document.querySelectorAll(".price")]
        .reduce((sum, el) => sum + parseInt(el.textContent), 0);

    let totalRow = document.getElementById("total-row");
    if (!totalRow) {
        totalRow = document.createElement("tr");
        totalRow.id = "total-row";
        totalRow.innerHTML = `<td colspan="2" id="ans" style="font-weight: bold; text-align: center;">Total Price: Rs ${total}</td>`;
        document.querySelector("table").appendChild(totalRow);
    } else {
        document.getElementById("ans").textContent = `Total Price: Rs ${total}`;
    }
});

