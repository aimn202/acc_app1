function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        localStorage.setItem('currentUser', username);
        window.location.href = "home.html";
    } else {
        alert("يرجى إدخال اسم المستخدم وكلمة المرور.");
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = "index.html";
}

function addTransaction() {
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;
    const type = document.getElementById('type').value;

    const table = document.getElementById('transactions');
    const row = table.insertRow();
    row.innerHTML = `
        <td>${table.rows.length}</td>
        <td>${date}</td>
        <td>${description}</td>
        <td>${amount}</td>
        <td>${type}</td>
    `;
}
