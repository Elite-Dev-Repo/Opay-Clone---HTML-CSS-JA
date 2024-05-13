let balance = document.getElementById('balance');
let eyeIcon = document.getElementById('eye');


function showBal() {
    
    if (balance.value == "****") {
        balance.value = "N 95,000"
    } else {
        balance.value = "****"
    }
}

