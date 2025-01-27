const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalDisplay = document.getElementById('total');

let total = 0;

// Add Expense
expenseForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (title && !isNaN(amount) && amount > 0) {
    // Add to list
    const li = document.createElement('li');
    li.innerHTML = `${title} <span>$${amount.toFixed(2)}</span>`;

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.style.background = 'red';
    deleteBtn.style.color = 'white';
    deleteBtn.style.border = 'none';
    deleteBtn.style.borderRadius = '5px';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.onclick = () => {
      total -= amount;
      updateTotal();
      expenseList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    expenseList.appendChild(li);

    // Update total
    total += amount;
    updateTotal();

    // Reset form
    expenseForm.reset();
  }
});

// Update Total
function updateTotal() {
  totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}