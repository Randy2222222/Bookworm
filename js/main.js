//document.getElementById('editBtn').addEventListener('click', function() {
(function() {
    // Code to run immediately-got rid of button temporarly-commented out code
      document.getElementById('post').disabled = false;
    document.getElementById('author').disabled = false;
    document.getElementById('image').disabled = false;
    this.style.display = 'none';
    document.getElementById('saveBtn').style.display = 'inline';
//}); 
})();

document.getElementById('saveBtn').addEventListener('click', function() {
document.getElementById('post').style.color = '#FFFFFF'.disabled = true;
    document.getElementById('author').style.color = '#FFFFFF'.disabled = true;
    document.getElementById('image').disabled = true;
    this.style.display = 'none';
    document.getElementById('editBtn').style.display = 'inline';
});
