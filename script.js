    const form = document.getElementById("itemForm");
    const textInput = document.getElementById("textInput");
    const categorySelect = document.getElementById("categorySelect");
    const itemList = document.getElementById("itemList");
    
    form.onsubmit = (e) => {
        e.preventDefault();
        
        const li = document.createElement("li");
        li.textContent = textInput.value;
        li.classList.add(categorySelect.value);
        
        itemList.appendChild(li);
        textInput.value = "";
    };