const convertbutton = document.querySelector(".convert-button")
const convertSelect = document.querySelector(".convert-select")

function convertValues() {
    const inputConvertValue = document.querySelector(".input-convert").value
    const convertvalueReal = document.querySelector(".convert-value-real") // valor real
    const convertvalueConverted = document.querySelector(".convert-value-dolar") // outras moedas

    console.log(convertSelect.value)
    const dolartoday = 5.2
    const eurotoday = 6.2



    if (convertSelect.value == "dolar") { 
        convertvalueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputConvertValue / dolartoday)

    }

    if (convertSelect.value == "euro") { 
        convertvalueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputConvertValue / eurotoday)

    }


    convertvalueReal.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputConvertValue)


}

function changeConvert() {

    const convertImage = document.querySelector (".convert-img")

    const convertName = document.getElementById("convert-name")

    if (convertSelect.value == "dolar") {
        convertName.innerHTML = "Dólar americano"
        convertImage.src = "assets/9a7dabec33201d95eb1a05fdea133971.png"
    }

    if (convertSelect.value == "euro") {
        convertName.innerHTML = "Euro"
        convertImage.src = "assets/euroo.png.png"

    }
    convertValues()
}


convertSelect.addEventListener("change", changeConvert)
convertbutton.addEventListener("click", convertValues)