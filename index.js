
let count = 1;

function funAdd(){
    const itemBox = document.getElementById('itemBox');
    const itemBoxValue = itemBox.value;
    const ansBox = document.getElementById('ansBox');

    if(itemBoxValue !== ''){
        const newItem = document.createElement('div');
        newItem.innerHTML = "<div class='row'><div class='col-md-8'>" + count + ". " + itemBoxValue + "</div>" +
            `<div class='col-md-4'>
            <button class='btn btn-success mx-2 p-2 btn-sm editBtn'><i class='bi bi-pen'></i></button>
            <button class='btn btn-danger p-2 mx-2 btn-sm clsBtn'><i class='bi bi-x-circle'></i></button>
            <button class='btn btn-primary p-2 mx-2 btn-sm copyBtn'><i class='bi bi-copy'></i></button>
            </div></div>`;
        ansBox.appendChild(newItem);

        newItem.querySelector('.clsBtn').addEventListener('click', () => newItem.remove());

        newItem.querySelector('.copyBtn').addEventListener('click', () => {
            const copiedText = newItem.innerText;
            navigator.clipboard.writeText(copiedText);
            alert('Item copied to clipboard');
        });

        newItem.querySelector('.editBtn').addEventListener('click', () => {
            const editedText = prompt('Edit your item:', itemBoxValue);
            if (editedText !== null) {
                itemBox.value = editedText;
                funAdd(); 
                newItem.remove();
            }
        });

        itemBox.value = ''; 
        count++; 
    }
}

function funCopyList(){
    const copiedList = document.getElementById('ansBox').innerText;
    navigator.clipboard.writeText(copiedList);
    alert('Full List copied on clipboard');
}
