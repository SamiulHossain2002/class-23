
      /*deposit part  */

document.getElementById('deposit-button').addEventListener('click',function(){
   const depositInputField= document.getElementById('deposit-input');
   //console.log(depositInputField);
   const depositText = depositInputField.value;
   const newDepositAmmount = parseFloat(depositText);

   //console.log(newDepositAmmount);

  const depositTotal= document.getElementById('deposit-total');
  const previousDepositTotalText = depositTotal.innerText;
  const previousDepositTotalAmmount = parseFloat(previousDepositTotalText);

  const newDepositTotal = previousDepositTotalAmmount + newDepositAmmount;
  depositTotal.innerText = newDepositTotal;


  //update balance..

  const balanceTotal= document.getElementById('balace-total');
  const balanceTotalText =balanceTotal.innerText;
  const balanceTotalAmmount = parseFloat(balanceTotalText);

  const newBalanceTotal = balanceTotalAmmount + newDepositAmmount;
  balanceTotal.innerText=newBalanceTotal;

  //clear form:

  depositInputField.value = "";


})



document.getElementById('withdra-button').addEventListener('click',function(){

    const withDrawInputField= document.getElementById('withdraw-input');
    const withDrawInputText = withDrawInputField.value;
    const withDrawInputAmmount = parseFloat(withDrawInputText);

    //withdraw total:
    const withDrawTotal =document.getElementById('withdraw-total');
    const withDrawTotalText =withDrawTotal.innerText;
    
    const withDrawTotalAmmount = parseFloat(withDrawTotalText);
    


    const newWithdrawTotal = withDrawTotalAmmount + withDrawInputAmmount;
    withDrawTotal.innerText = newWithdrawTotal;

    //update balance:

  const balanceTotal= document.getElementById('balace-total');
  const prevBalanceTotalText =balanceTotal.innerText;
  const balanceTotalAmmount = parseFloat(prevBalanceTotalText);

  const newTotalAmmount = balanceTotalAmmount - withDrawInputAmmount;
  balanceTotal.innerText = newTotalAmmount;

  
  withDrawInputField.value='';

    //console.log(withDrawInputField);

})