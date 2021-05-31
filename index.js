function introduction (name = "Josh") {
    return (`Hi, my name is ${name}.`);
}

function introductionWithLanguage(name = Josh,language = "Ember .JS") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
const name = "Graice"
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

