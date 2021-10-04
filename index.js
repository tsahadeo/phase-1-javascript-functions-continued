function saturdayFun (activity = 'roller-skate'){
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun(activity = 'bathe my dog');

function mondayWork (where = 'go to the office'){
    return (`This Monday, I will ${where}.`)
}
mondayWork();

function wrapAdjective (string = '*'){
    return function (keyPhrase = 'a hard worker') {
        return (`You are ${string}${keyPhrase}${string}!`)
}
}
wrapAdjective("||")("a dedicated programmer");
