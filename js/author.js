
document.getElementById('editBtn').addEventListener('click', function() {
document.getElementById('author').disabled = false;
    this.style.display = 'none';
  document.getElementById('saveBtn').style.display = 'inline';
}); 


document.getElementById('saveBtn').addEventListener('click', function() {
document.getElementById('author').disabled = true;
    this.style.display = 'none';
  document.getElementById('editBtn').style.display = 'inline';
});
