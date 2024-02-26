var selectedRow= null;
function onFormSubmit(e){
event.preventDefault();
var formData=readFormData();
if(selectedRow === null){
    insertNewRecord(formData)
}
else{
updateRecord(formData)
}
resetForm();
}

//Retrieve the data 
function readFormData(){
    var formData = {};
    formData['workout'] =document.getElementById('workout').value;
    formData['date'] =document.getElementById('date').value;
    formData['reps'] =document.getElementById('reps').value;
    return formData;
}


//Insert the data

function insertNewRecord(data){
    var table = document.getElementById('woList').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.workout;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.date;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.reps;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`

}

//Edit the data

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('workout').value = selectedRow.cells[0].innerHTML;
    document.getElementById('date').value = selectedRow.cells[1].innerHTML
    document.getElementById('reps').value = selectedRow.cells[2].innerHTML
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML =formData.workout;
    selectedRow.cells[1].innerHTML= formData.date;
    selectedRow.cells[2].innerHTML=formData.reps;
}


//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('woList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//
function resetForm(){
document.getElementById('workout').value='';
document.getElementById('date').value='';
document.getElementById('reps').value='';
}


