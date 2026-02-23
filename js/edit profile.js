
document.getElementById('editBtn').addEventListener('click', function() {
    document.getElementById('Username').disabled = false;
    document.getElementById('Age').disabled = false;
    document.getElementById('Career').disabled = false;
    document.getElementById('Hobbies').disabled = false;
    document.getElementById('Reading Style').disabled = false;
    document.getElementById('Bio').disabled= false;
    document.getElementById('Web Address').disabled = false;
    this.style.display = 'none';
    document.getElementById('saveBtn').style.display = 'inline';
});

document.getElementById('saveBtn').addEventListener('click', function() {
    document.getElementById('Username').disabled = true;
    document.getElementById('Age').disabled = true;
    document.getElementById('Career').disabled = true;
    document.getElementById('Hobbies').disabled = true;
    document.getElementById('Reading Style').disabled = true;
    document.getElementById('Bio').disabled = true;
    document.getElementById('Web Address').disabled = true;
    this.style.display = 'none';
    document.getElementById('editBtn').style.display = 'inline';
});
