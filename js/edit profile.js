
document.getElementById('editBtn').addEventListener('click', function() {
    document.getElementById('name').disabled = false;
    document.getElementById('email').disabled = false;
    this.style.display = 'none';
    document.getElementById('saveBtn').style.display = 'inline';
});

document.getElementById('saveBtn').addEventListener('click', function() {
    document.getElementById('name').disabled = true;
    document.getElementById('email').disabled = true;
    this.style.display = 'none';
    document.getElementById('editBtn').style.display = 'inline';
});
