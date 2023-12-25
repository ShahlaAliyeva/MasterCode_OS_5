// Polindrome

// 16461

function isPolindrome(number) {
    let reversedNum = 0
    let copyOfNum = number

    while (copyOfNum > 0) { //12
        reversedNum = reversedNum * 10 + (copyOfNum % 10) //3 --> 3 * 10 = 30 + 2 = 32 --> 32 * 10 = 320 + 1 = 321

        copyOfNum = parseInt(copyOfNum / 10) //123 --> 12 --> 1 -> 1 /10
    }
    console.log(reversedNum);
}

let str = 'racecar'
let reversed = ''

function polindromeStr(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }

    if (reversed === str) {
        return reversed
    }

    return 'Polindrome deyil'
}
console.log(polindromeStr(str));