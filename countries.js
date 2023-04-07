var countrysH = {};
function addCountry(countryName, capitalName) {
     
    countrysH[countryName] = capitalName;
     console.log('Страна: ' + countryName + ', столица: ' + capitalName);
}


function deleteCountry(countryName) {
    var countryName = prompt('Введите название страны которую хотите удалить: ')
    delete countrysH[countryName];
}

function getCountryInfo(countryName) {
    if (countryName in countrysH)
        console.log('Страна: ' + countryName + ' Столица: ' + countrysH[countryName]);
    else console.log('Информация о стране не найдена');
}

function listCountrys() {
    var res = "";
    for (var CN in countrysH)
        res += '\n' + getCountryInfo(CN);
    return res;
}
