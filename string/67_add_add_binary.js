var addBinary = function(a, b) {
    let i = a.length - 1
    let j = b.length - 1

    let result = ''
    let carry = 0

    while((i >= 0 || j >= 0 || carry > 0)){

        const aBit = Number(a[i]) || 0
        const bBit = Number(b[j]) || 0

        const sum = aBit + bBit + carry
        result = (sum % 2) + result
        carry = Math.floor(sum/2)

        i--
        j--
    }

    return result
};

console.log(addBinary('10111','1011'))
