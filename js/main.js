class Todo {
    constructor(text) {
        this.text = text
    }

    storeData(arr) {
        arr.push(this.text)
    }

    showData() {

        let ul = document.getElementById('ul')
        let createLi = document.createElement('li')
        createLi.classList = `list-group-item`

        createLi.innerHTML = `<input type="radio" data-text="${this.text}" id=check><span class="ml-2" id ="line" data-text = "${this.text}">${this.text}</span><button data-text="${this.text}" class="btn btn-danger float-right" id="remove">D</button>`
        ul.appendChild(createLi)

        createLi.addEventListener('click', function (e) {

            let data = e.target.getAttribute('data-text')
            if (e.target.id == "remove") {

                e.target.parentElement.remove()

                arr.filter(function (element) {

                    if (element === data) {
                        arr.splice(arr.indexOf(element), 1);
                    }
                })
            }

            if (e.target.id == `check`) {
                createLi.style.textDecorationLine = "line-through";
                createLi.style.color = "#D6D6D6";
            }
        })

    }
    reloadPage() {
        arr = [];
        document.getElementById('ul').innerHTML = '';
    }

}

let arr = []

document.getElementById('add').addEventListener('click', function () {

    let input = document.getElementById('input')

    if (input.value === '') {
        alert("Please input your text");
    } else {
        let todo = new Todo(input.value)
        todo.storeData(arr)
        todo.showData()
        input.value = '';
    }

})
document.getElementById('reloadAll').addEventListener('click', function () {
    let todo = new Todo(input.value)
    todo.reloadPage();
})
function date(){

    let time = new Date()
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getUTCSeconds();
    let result = hour + ":" + min+ ":" + sec;
    // console.log();
    return result
}
document.getElementById('showTime').innerHTML = date();
document.querySelector('.wallClock').innerHTML = date();

document.getElementById('change').addEventListener('click', function () {
    // console.log("right");
    let select = document.querySelector('.wrapper')
    if (select.classList.contains('changePicture')) {
        select.classList.remove('changePicture')
        document.querySelector('.wallClock').innerHTML =''
    }
    else {
        select.classList.add('changePicture')
        
        document.querySelector('.wallClock').innerHTML = date();

    }
})