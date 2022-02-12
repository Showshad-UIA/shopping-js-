// deposit handle amount
document.getElementById('deposit-button').addEventListener('click', function(){
   
    // new amount deposited
    const userInput=document.getElementById('deposit-input');
    const newDepositAmount=parseFloat(userInput.value) ;
 
//update balance
   const presentDeposit=document.getElementById('deposit-total');
   const previousDepositAmount= parseFloat(presentDeposit.innerText);
   const totalDepositIs=previousDepositAmount + newDepositAmount;
   presentDeposit.innerText=totalDepositIs;


//  update account balance
const balanceTotal=document.getElementById('update-amount');

const balanceTotalText=balanceTotal.innerText;
const previousBalanceAmount=parseFloat(balanceTotalText);
const newBalanceTotal=previousBalanceAmount + newDepositAmount;

balanceTotal.innerText=newBalanceTotal;

//    clear the field
   userInput.value='';
  
})
//    hanlde withdraw handler


document.getElementById('withdraw-button').addEventListener('click', function(){
const withdrawInput= document.getElementById('withdraw-input');
const newWithdrawAmount=parseFloat(withdrawInput.value);
// console.log(withdrawAmountText);

// set a withdraw total
const withdrawTotal=document.getElementById('withdraw-total');
const previousWithdrawTotal= parseFloat(withdrawTotal.innerText);
const newWithdrawtotal=previousWithdrawTotal +newWithdrawAmount;

 withdrawTotal.innerText=newWithdrawtotal;

// Update balance

const balanceTotal=document.getElementById('update-amount');
const previousBalanceTotal=parseFloat(balanceTotal.innerText);
const newBalanceAmount=previousBalanceTotal -newWithdrawAmount;
balanceTotal.innerText=newBalanceAmount;





 //    clear the field
 withdrawInput.value='';

})