function createButtons() {
    document.querySelectorAll('.upper_list li').forEach(element => {element.remove()});
    document.querySelectorAll('.separated_words li').forEach(element => {element.remove()});
    let result = document.querySelector('.separated_words');
    let inputValue = document.querySelector('.input').value;
    let separatedInput = inputValue.split('-');
    separatedInput.sort();

    let numberIndex = 1;
    let wordrIndex = 1;
    let map = new Map();

    separatedInput.forEach(element => {
        if(isNaN(element)) {
            map.set('a' + wordrIndex, element);
            wordrIndex++;
        } else {
            map.set('n' + numberIndex, element);
            numberIndex++;
        }
    });

    let sortedMap = new Map([...map].sort());

    for (let pair of sortedMap) {
        let elem = document.createElement("li");
        elem.innerHTML = pair[0] + ' ' + pair[1];
        result.appendChild(elem);
        elem.addEventListener("click" , createTitle);
    }
}

function createTitle() {
    let list = document.querySelector('.upper_list');
    let element = document.createElement("li");
    element.innerHTML = this.innerHTML.split(' ')[1];
    list.appendChild(element);
}