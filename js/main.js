//let display = document.getElementsByClassName("display")
//let number = document.getElementsByClassName("buttons")
//display.append(number)
function calcNumbers(result){
    form.displayResult.value=form.displayResult.value+result;
    
    }
//function clearNumbers(result){
   // form.displayResult.value=form.displayResult.reset();
//}

function clearNumbers(result) {
        if (form.displayResult.value != '') {
            form.displayResult.value = '';
        }
      }
function delNumbers(result) {
    form.displayResult.value = form.displayResult.value.substr(0, form.displayResult.value.length - 1);
}
