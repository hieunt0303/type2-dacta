
// const test  = '(VM i TH {1..n-1}.a(i) <= a(i+1))'
const test = '(TT i TH {1..n-1}. TT j TH {i+1..n}.a(i) <= a(j))'
console.log(test);
let output = ''

window.onload=function(){

    document.getElementById('input-loop').defaultValue  = test
}
function handle() {
    let input = document.getElementById('input-loop').value
    const formatInput = input.slice(1, input.length - 1).replace(/ /g, '')
    // slice : bỏ 2 dấu ngoặc đầu cuối () 
    //replace :  xóa tất cả space
    const arr = formatInput.split('}.')
    let arrLoop = arr.slice(0, arr.length - 1)
    let conditionIf = arr[arr.length - 1]
    console.log({
        formatArrLoop: formatArrLoop(arrLoop),
        conditionIf
    });
    handleForLoop(formatArrLoop(arrLoop), conditionIf)
}

// nếu check = true thì !check = false
function handleForLoop(arrForLoop, conditionIf) {
    const checked = checkConvert(arrForLoop) // check xem có VM hay k
    let i = 0
    for (i; i < arrForLoop.length; ++i) {
        let [param, numberStart, numberEnd] = getParamFromString(arrForLoop[i])
        output += handleTab(i) + `for(let ${param} = ${numberStart};${param} <${numberEnd};++${param}) {\n`
    }
    output += handleTab(i) + `if (${handleConditionIf(conditionIf, checked)})\n`
    output += handleTab(i + 1) + `return ` + !checked + '\n'

    // vòng for này dùng để thêm dấu đóng ngoặc } 
    for (let j = arrForLoop.length - 1; j >= 0; --j) {
        output += handleTab(j) + '}\n'
    }
    
    output += 'return ' + checked + '\n'
    console.log(output);
}
// vd:  stringLoop = TTiTH{1..n-1}  -> param : i || numberStart : 1 ||  numberEnd: n-1
function getParamFromString(stringLoop) {
    let param = stringLoop[2]
    let numberStart = stringLoop.slice(6, stringLoop.length - 1).split('..')[0]
    let numberEnd = stringLoop.slice(6, stringLoop.length - 1).split('..')[1]
    return [param, numberStart, numberEnd]

}

// có VM thì đổi dấu trong hàm if
function handleConditionIf(conditionIf, checked) {
    if (checked) {
        if (conditionIf.indexOf('<') != -1)
            return conditionIf.replace('<', '>')
        else
            return conditionIf.replace('>', '<')
    }
    return conditionIf
}

// check xem có VM trong tất cả vòng for hay k , nếu có VM thì trả về true
function checkConvert(arrForLoop) {
    return arrForLoop.some(element => {
        return element.indexOf('VM') != -1 ? true : false
    });
}
// thêm dấu tab tùy thuọc vào index của mảng
function handleTab(numberTab) {
    let str = ''
    for (let i = 0; i < numberTab; ++i) {
        str += '\t'
    }
    return str
}

function formatArrLoop(arrLoop) {
    return arrLoop.map(element => {
        return element += '}'
    });
}