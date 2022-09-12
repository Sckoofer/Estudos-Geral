let feedback = document.querySelector('select#addedValues')
let input = document.querySelector('input#number')
let numbersArray = []
let result = document.querySelector('div#result')

function addNumber() {
    if (input.value.length == 0) {
        alert('Please, type a number.')

    } else if (input.value <= 0 || input.value > 100) {
        alert('Please, type a number between 1 and 100.')

    } else if (numbersArray.indexOf(Number(input.value)) == -1) {
        numbersArray.push(Number(input.value))
        let string = document.createElement('option')
        string.text = `The number ${input.value} was added.`
        feedback.appendChild(string)
        result.innerHTML = ''

    } else {
        alert(`The number ${input.value} was already added.`)
    }
    input.value = ''
    input.focus()
}

function submit() {
    if (numbersArray.length == 0) {
        alert('Please, type a number below.')
    } else {
        let total = numbersArray.length
        let max = numbersArray[0]
        let min = numbersArray[0]
        let sum = 0
        for (i in numbersArray) {
            sum += numbersArray[i]
            if (numbersArray[i] > max) {
                max = numbersArray[i]
            } else if (numbersArray[i] < min) {
                min = numbersArray[i]
            }
        }
        let mean = sum / total

        result.innerHTML = ''
        result.innerHTML += `<p>There's a total of ${total} number(s).</p>`
        result.innerHTML += `<p>The biggest number is ${max}.</p>`
        result.innerHTML += `<p>The smallest number is ${min}.</p>`
        result.innerHTML += `<p>The sum of all numbers is ${sum}.</p>`
        result.innerHTML += `<p>The mean of all numbers is ${mean.toFixed(2)}.</p>`
    }
}