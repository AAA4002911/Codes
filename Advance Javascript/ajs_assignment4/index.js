/* Feature--2v, for getting same functionality without the grand total column of html
Remove line 40, html tfoot block, on line 30 replace tbody with table and uncomment all the commented code */

const addButton = document.getElementById('add');

function addTable() {
    // if (document.querySelector("#total")) {
    //     document.querySelector("#total").remove();
    // }
    let itemName = document.querySelector('#item-name-input');
    let itemPrice = document.querySelector('#item-price-input');
    console.log(Number(itemPrice.value))
    if (parseInt(itemPrice.value) < 0 || Number(itemPrice.value) === 0) {
        alert("Invalid Price");
        itemPrice.value="";
        return;
    }
    if (itemName.value === '') {
        alert("Please fill the item name");
        return;
    }
    const tableRow = document.createElement("tr");
    const nameTd = document.createElement('td')
    nameTd.innerText = itemName.value;
    const priceTd = document.createElement('td');
    priceTd.innerText = itemPrice.value;
    priceTd.classList.add("price-value");
    tableRow.appendChild(nameTd);
    tableRow.appendChild(priceTd);
    document.querySelector('tbody').appendChild(tableRow);
    itemName.value="";
    itemPrice.value="";

    const allPriceValues = document.querySelectorAll('.price-value');

    let total = 0;
    for (let i = 0; i < allPriceValues.length; i++) {
        total += parseInt((allPriceValues[i]).innerText);
    }
    document.querySelector('#value').innerText = total;
    // const tableRowFinal = document.createElement("tr");
    // tableRowFinal.setAttribute("id", "total");
    // const grandTotal = document.createElement('td');
    // const totalPrice = document.createElement('td');
    // grandTotal.innerText = "Grand Total";
    // totalPrice.innerText = total;
    // totalPrice.setAttribute("data-ns-test", "grandTotal")
    // tableRowFinal.appendChild(grandTotal);
    // tableRowFinal.appendChild(totalPrice);
    // document.querySelector('table').appendChild(tableRowFinal);
}

addButton.addEventListener('click', addTable);