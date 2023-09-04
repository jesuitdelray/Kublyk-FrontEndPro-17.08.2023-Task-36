function displayData() {
    const form = document.getElementById("registrationForm")
    const userData = document.getElementById("userData")
    const table = document.createElement("table")

    for (let i = 0; i < form.elements.length; i++) {
        const element = form.elements[i]
        if (element.type !== "button") {
            if (element.type === "text" && !/^[а-яА-ЯёЁa-zA-Z\s]*$/.test(element.value)) {
                alert("Поле 'Ім'я' і 'Прізвище' може містити тільки букви та пробіли.")
                element.value = ""
                element.focus()
                return
            }
            if (element.type === "checkbox" && element.checked) {
                const row = table.insertRow()
                const cell1 = row.insertCell(0)
                const cell2 = row.insertCell(1)
                cell1.innerText = element.name
                cell2.innerText = element.value
            } else if (element.type !== "checkbox" && element.type !== "radio") {
                const row = table.insertRow()
                const cell1 = row.insertCell(0)
                const cell2 = row.insertCell(1)
                cell1.innerText = element.name
                cell2.innerText = element.value || "Не вказано"
            }
        }
    }

    userData.innerHTML = ""
    userData.appendChild(table)
    userData.style.display = "block"

    form.remove()
}
