interface TableCell {
    content: string;
    style?: string;
}

interface TableData {
    headers: TableCell[];
    rows: TableCell[][];
}

function generateTable(tableData: TableData): HTMLTableElement {
    const table = document.createElement('table');

    // Generate header row
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    tableData.headers.forEach(header => {
        const th = document.createElement('th');
        th.innerHTML = header.content;
        if (header.style) th.setAttribute('style', header.style);
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Generate rows
    const tbody = document.createElement('tbody');
    tableData.rows.forEach(rowData => {
        const tr = document.createElement('tr');
        rowData.forEach(cellData => {
            const td = document.createElement('td');
            td.innerHTML = cellData.content;
            if (cellData.style) td.setAttribute('style', cellData.style);
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    return table;
}

const tableData: TableData = {
    headers: [
        { content: 'Header 1', style: 'background-color: #FFD700; color: #000;' },
        { content: 'Header 2', style: 'background-color: #000; color: #FFD700;' },
        { content: 'Header 3', style: 'background-color: #1E90FF; color: #FFF;' }
    ],
    rows: [
        [
            { content: 'Row 1, Cell 1', style: 'background-color: #FFD700; color: #000;' },
            { content: 'Row 1, Cell 2', style: 'background-color: #000; color: #FFD700;' },
            { content: 'Row 1, Cell 3', style: 'background-color: #1E90FF; color: #FFF;' }
        ],
        [
            { content: 'Row 2, Cell 1', style: 'background-color: #FFD700; color: #000;' },
            { content: 'Row 2, Cell 2', style: 'background-color: #000; color: #FFD700;' },
            { content: 'Row 2, Cell 3', style: 'background-color: #1E90FF; color: #FFF;' }
        ]
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const tableContainer = document.getElementById('dynamic-table');
    if (tableContainer) {
        const table = generateTable(tableData);
        tableContainer.appendChild(table);
    }
});
