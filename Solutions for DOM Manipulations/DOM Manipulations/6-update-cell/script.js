function changeContent(){

    const table = document.getElementById('sampleTable');

    const newContent = "Updated content for Row1 cell2";

    const row = 1; 
    const col = 2; 

    const cell = table.querySelector(`tr:nth-of-type(${row}) td:nth-of-type(${col})`);
    if (cell) {
        cell.textContent = newContent;
    }
}