
function formPrevent (event) {
    event.preventDefault();
  
    const userName = document.getElementById('name').value;
  
    localStorage.setItem('userName', userName);
  
    document.getElementById('nameForm').style.display = 'none';
    document.getElementById('game').style.display = 'block';
  
    document.getElementById('game').innerHTML = '<h2>Hello, ' + userName + '!</h2>';
    //console.log('User name:', userName);
}