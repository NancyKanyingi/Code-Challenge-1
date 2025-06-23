
function estimateTransactionFee ()
{
    const prompt = require("prompt-sync")();
    let amountToSend = prompt(Number("Unatuma Ngapi? (KES):"))
    let calculatedTransactionFee = 0.015 * amountToSend
    let totalDebitAmount = amountToSend + calculatedTransactionFee

    if(calculatedTransactionFee <= 10){
        
        console.log(`Sending KES ${amountToSend}:
        Calculated Transaction Fee: KES 10
        Total amount to be debited: KES ${amountToSend + 10}

        Send Money Securely!`)
    }
    else if(calculatedTransactionFee >= 70){
        
        console.log(`Sending KES ${amountToSend}:
        Calculated Transaction Fee: KES 70
        Total amount to be debited: KES ${amountToSend + 70}

        Send Money Securely!`)
    }
    else if(10 < calculatedTransactionFee < 70){
        
        console.log(`Sending KES ${amountToSend}:
        Calculated Transaction Fee: KES ${calculatedTransactionFee}
        Total amount to be debited: KES ${totalDebitAmount}

        Send Money Securely!`)
    }

}

estimateTransactionFee()