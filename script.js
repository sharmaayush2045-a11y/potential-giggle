let balance = 0;

const balanceDisplay = document.getElementById("balance");
const message = document.getElementById("message");
const withdrawBtn = document.getElementById("withdrawBtn");
const withdrawInput = document.getElementById("withdrawAmount");
const historyList = document.getElementById("history");
const addButtons = document.querySelectorAll(".add-btn");

// Function to update balance UI
function updateBalance() {
    balanceDisplay.textContent = "₹" + balance;
}

// Function to add transaction to history
function addToHistory(text) {
    const li = document.createElement("li");
    li.textContent = text;
    historyList.prepend(li);
}

// Event Handling for Add Buttons
addButtons.forEach(button => {
    button.addEventListener("click", function() {
        const amount = parseInt(this.getAttribute("data-amount"));
        balance += amount;
        updateBalance();
        message.textContent = "Money Added Successfully!";
        message.style.color = "green";
        addToHistory("Deposited ₹" + amount);
    });
});

// Event Handling for Withdraw
withdrawBtn.addEventListener("click", function() {
    const withdrawAmount = parseInt(withdrawInput.value);

    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        message.textContent = "Enter a valid amount!";
        message.style.color = "orange";
        return;
    }

    if (balance >= withdrawAmount) {
        balance -= withdrawAmount;
        updateBalance();
        message.textContent = "Withdrawal Successful!";
        message.style.color = "green";
        addToHistory("Withdrew ₹" + withdrawAmount);
    } else {
        message.textContent = "❌ Insufficient Balance";
        message.style.color = "red";
    }

    withdrawInput.value = "";
});