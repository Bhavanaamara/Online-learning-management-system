// JavaScript code for fetching and displaying course listings
document.addEventListener('DOMContentLoaded', function() {
    const courses = [
      { title: 'Web Development Fundamentals', instructor: 'Mr. Satya Deep', duration: '6 weeks' },
      { title: 'Back end Development', instructor: 'Mr. Samba siva rao', duration: '8 weeks' },
      // Add more course objects as needed
    ];
  
    const coursesList = document.getElementById('courses');
  
    // Populate course listings
    courses.forEach(course => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${course.title}</strong> - ${course.instructor}, ${course.duration}`;
      coursesList.appendChild(li);
    });
    document.addEventListener('DOMContentLoaded', function() {
        const loginForm = document.getElementById('login-form');
        const errorMessage = document.getElementById('error-message');
      
        loginForm.addEventListener('submit', function(event) {
          event.preventDefault();
          
          const username = loginForm.username.value;
          const password = loginForm.password.value;
      
          // Placeholder for actual authentication logic
          // For simplicity, let's assume the username is 'admin' and the password is 'password'
          if (username === 'admin' && password === 'password') {
            // Successful login
            window.location.href = 'dashboard.html'; // Redirect to dashboard page
          } else {
            // Failed login
            errorMessage.textContent = 'Invalid username or password. Please try again.';
          }
        });
      });
      document.addEventListener('DOMContentLoaded', function() {
        const registerForm = document.getElementById('register-form');
        const successMessage = document.getElementById('success-message');
        const errorMessage = document.getElementById('error-message');
      
        registerForm.addEventListener('submit', function(event) {
          event.preventDefault();
          
          const username = registerForm.username.value;
          const email = registerForm.email.value;
          const password = registerForm.password.value;
      
          // Placeholder for registration logic
          // For simplicity, let's assume the registration is successful
          // You would typically send the registration data to a server for processing
          // and handle any errors that occur
          // Here, we'll simply display a success message
          successMessage.textContent = 'Registration successful. You can now login.';
          registerForm.reset(); // Clear form fields after successful registration
        });
      });
            
  });
  