document.addEventListener("DOMContentLoaded", () => {
    const usersContainer = document.getElementById("users-container");

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                
                const userCard = document.createElement("div");
                userCard.classList.add("user-card");

                userCard.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
                `;

                usersContainer.appendChild(userCard);
            });
        })
        .catch(error => {
            console.error("Error fetching users:", error);
            usersContainer.innerHTML = "<p>Failed to load users. Please try again later.</p>";
        });
});
