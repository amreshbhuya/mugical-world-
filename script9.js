const users = [
        { name: "Amresh Bhuyan", email: "amreshbhuyanone@gmail.com", password: "Amresh@1234" },
        { name: "Mausumi Bhuyan", email: "amreshbhuyan04@gmail.com", password: "Mausumi@1234" },
        { name: "Amresh Bhuyan", email: "amreshbhuyan04@gmail.com", password: "Amresh@1234" },
        { name: "Amresh Bhuyan", email: "amreshbhuyanone@gmail.com", password: "Amresh@1234" },
        { name: "Sanat kumar Bhuyan", email: "amreshbhuyan03@gmail.com", password: "Amresh@1234" },
        { name: "Puspalata Bhuyan", email: "amreshbhuyan03@gmail.com", password: "Amresh@1234" }

    ];
    
    let currentUser = null;
    
    function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        alert("Email is already registered. Please log in.");
        return;
    }
    
    users.push({ name, email, password });
    currentUser = { name, email };
    showUserProfile();
    }
    
    function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        currentUser = user;
        showUserProfile();
    } else {
        alert("Invalid email or password");
    }
    }
    
    function logout() {
    currentUser = null;
    showLoginForm();
    }
    
    function showSignupForm() {
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    }
    
    function showLoginForm() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    }
    
    function showUserProfile() {
    document.getElementById('userName').textContent = currentUser.name;
    document.getElementById('userProfile').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'none';
    }
