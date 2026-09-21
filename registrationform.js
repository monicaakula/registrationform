document.getElementById('registrationForm').addEventListener('submit',
function(event) {
event.preventDefault();
const statusMsg = document.getElementById('statusMessage');
const dataDisplay = document.getElementById('dataDisplay');
const fullName = document.getElementById('fullName').value.trim();
const email = document.getElementById('email').value.trim();
const phone = document.getElementById('phone').value.trim();
const course = document.getElementById('course').value;
const password = document.getElementById('password').value;
const confirmPassword = document.getElementById('confirmPassword').value;
statusMsg.innerHTML = '';
dataDisplay.style.display = 'none';
dataDisplay.innerHTML = '';
if (!fullName || !email || !phone || !course || !password || !confirmPassword) {
statusMsg.className = 'error-text';
statusMsg.innerText = 'Please enter full details';
return;
}
if (password !== confirmPassword) {
statusMsg.className = 'error-text';
statusMsg.innerText = 'Passwords do not match.';
return;
}
statusMsg.className = 'success-text';
statusMsg.innerText = 'All details received successfully!';
dataDisplay.innerHTML = `
<h3>Registered Student Information:</h3>
<p><strong>Full Name:</strong> ${fullName}</p>
<p><strong>Email Address:</strong> ${email}</p>
<p><strong>Phone Number:</strong> ${phone}</p>
<p><strong>Selected Course:</strong> ${course}</p>
<p><strong>Password Structure:</strong> ${'*'.repeat(password.length)}
(Secured)</p>
`;
dataDisplay.style.display = 'block';
});