function createTable(){
    const rows = parseInt(prompt('Enter number of rows: '));
    const columns = parseInt(prompt('Enter number of columns: '));

    const table = document.getElementById('myTable');

    table.innerHTML = '';

    for(let i = 0; i < rows; i++){
        const tr = document.createElement('tr');
        for(let j = 0; j < columns; j++){
            const td = document.createElement('td');

            td.textContent = `Row-${i} Column-${j}`;

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}