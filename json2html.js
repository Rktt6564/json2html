// json2html.js

export default function json2html(data) {
    // Start table with data-user attribute
    let html = '<table data-user="tpolagoni@gmail.com">';
    
    // Table Header
    html += '<thead><tr>';
    // Get column headers dynamically based on the keys of the first object
    const columns = Object.keys(data[0]);
    columns.forEach(column => {
        html += `<th>${column}</th>`;
    });
    html += '</tr></thead>';
    
    // Table Body
    html += '<tbody>';
    data.forEach(item => {
        html += '<tr>';
        columns.forEach(column => {
            html += `<td>${item[column] || ''}</td>`;  // In case a key is missing in some rows
        });
        html += '</tr>';
    });
    html += '</tbody>';
    
    // End table
    html += '</table>';
    
    return html;
}
