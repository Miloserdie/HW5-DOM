function doLogin() {
	let user = document.querySelector('#username').value;
	let pass = document.querySelector('#password').value;
	localStorage.setItem('username', user);
	localStorage.setItem('password', pass);
	let form = document.querySelector('#loginForm');
	form.onsubmit = function(evt) {
      evt.preventDefault();
   };
	document.querySelector('#showLogAndPass').innerHTML = `Username: ${user} Password: ${pass}`
}
document.querySelector('#submitBtn').addEventListener('click',doLogin)