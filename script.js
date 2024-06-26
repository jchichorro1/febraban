document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        const userList = document.getElementById('users');
        const li = document.createElement('li');
        li.textContent = `Nome: ${name}, Email: ${email}`;
        userList.appendChild(li);

        document.getElementById('userForm').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
