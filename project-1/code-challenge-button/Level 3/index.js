const calculateTotal = (payment) => {
    let result = ''
    const firstNum = parseFloat(payment)
    if (payment < 500) result = payment * 1.2
    if (payment > 500  && payment < 2000) result = payment * 1.15
    if (payment > 2000) result = payment * 1.1
    return result
}
var bill = [1240,480,2680]
var FinalPayment = []
for (x = 0; x < 3 ; x++)
{   
    FinalPayment.push(calculateTotal(bill[x]))
    document.write(FinalPayment[x])
    document.write('</br>')
}