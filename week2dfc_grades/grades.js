const dataArray=[['Name','Age', 'Grade'],
                ['Alice',12,'A'],
                ['Bob',12,'B'],
                ['Charlie',14,'A+'],
                ['Dakota',12,'C']
            ]
// Multi Array
// const matrix = [[1, 2, 3], 
//                 [4, 5, 6], 
//                 [7, 8, 9]];


function generateTable(){

    const headerRow =document.getElementById('headerRow');
    const tableBody =document.getElementById('tableBody');


    dataArray[0].forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });


    for (let i =1; i< dataArray.length; i++){
        const row =dataArray[i];
        const tr =document.createElement('tr');



        //foreach loop
        row.forEach(data => {
            const td =document.createElement('td');
            td.textContent= data;
            tr.appendChild(td);
        });




        tableBody.appendChild(tr);
    }


}

//run the actual function on load
generateTable();