window.onload = () => {
    document.addEventListener("keypress", (e) => {
        if(e.code === "Enter") {
            addItem();
        }
    });
    loadList();
}

const localStorageItemName = "list";

function loadList() {
    let listDiv = document.getElementById("list");
    let list = localStorage.getItem(localStorageItemName);
    console.log(list);
    if (list === null) {
        listDiv.innerHTML = `<span style="color: red;">list empty</span>`;
    } else {
        listItems = list.split(';');
        for(let i = 0; i < listItems.length; i++) {
            listDiv.innerHTML += (i+1) + ". " + listItems[i] + "<br>";
        }
    }
}

function addItem() {
    let newItem = document.getElementById('newitem').value;
    if (newItem === "") {
        alert('enter a item before adding');
    } else {
        let list = localStorage.getItem(localStorageItemName);
        if(list === null) {
            localStorage.setItem(localStorageItemName, newItem);
            window.location.reload();
            return false;
        } else {
            list += ";" + newItem;
            localStorage.setItem(localStorageItemName, list);
            window.location.reload();
            return false;
        }
    }
}

function clearList() {
    localStorage.removeItem(localStorageItemName);
    window.location.reload();
    return false;
}