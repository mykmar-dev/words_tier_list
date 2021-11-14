document.addEventListener("DOMContentLoaded", function() {
  let inputEl = document.body;
  inputEl.addEventListener("keydown", copy_paste);
});

console.log('It connected');

let storage = {};

function copy_paste(e) {
  if (e.ctrlKey && e.key == "q") {
    let inputValue = window.getSelection();
    navigator.clipboard.writeText(inputValue).then(
      navigator.clipboard.readText().then((text) => {
        if (!storage.hasOwnProperty(text)) storage[text] = 1;
        else storage[text] += 1;
        mySort(storage);
      })
    );
  }
}

function show(arrStorage) {
  let parent = document.getElementById("insert");
  parent.innerHTML = "";
  for (let i = 0; i < arrStorage.length; i++) {
    let para = document.createElement("h4");
    para.innerText = arrStorage[i][0] + " : " + arrStorage[i][1];
    parent.appendChild(para);
  }
}

function mySort(storage) {
  let arrStorage = [];
  for (let key in storage) {
    arrStorage.push([key, storage[key]]);
  }
  arrStorage.sort(function (a, b) {
    return b[1] - a[1];
  });
  show(arrStorage);
}
