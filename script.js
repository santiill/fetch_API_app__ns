fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {return response.json()})
    .then((data) => {
        for(let item in data) {
            let userId = data[item].userId;
            let title = data[item].title;
            let dataText = userId +" "+ title;
            htmltext(dataText)
        }
    })

let btn = document.querySelector(".get_data")
let content = document.querySelector(".container")
let newTagUL = document.createElement("ul")
let newTagLI = document.createElement("li")
function htmltext(data) {
    btn.addEventListener("click", () => {
        content.appendChild(newTagUL);
        newTagUL.className = "content_items"
        newTagUL.appendChild(newTagLI);
        newTagLI.className = "content_item"
        newTagLI.innerHTML += data + "<br>"
    })
}

