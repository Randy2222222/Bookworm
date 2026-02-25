
document.getElementById('editBtn').addEventListener('click', function() {
    document.getElementById('username').disabled = false;
    document.getElementById('age').disabled = false;
    document.getElementById('career').disabled = false;
    document.getElementById('hobbies').disabled = false;
    document.getElementById('readingstyle').disabled = false;
    document.getElementById('bio').disabled = false;
    document.getElementById('webaddress').disabled = false;
    this.style.display = 'none';
    document.getElementById('saveBtn').style.display = 'inline';
});

document.getElementById('saveBtn').addEventListener('click', function() {
    document.getElementById('username').disabled = true;
    document.getElementById('bio').style.color = '#FFFFFF';
    document.getElementById('age').disabled = true;
    document.getElementById('bio').style.color = '#FFFFFF';
    document.getElementById('career').disabled = true;
    document.getElementById('bio').style.color = '#FFFFFF';
    document.getElementById('hobbies').disabled = true;
    document.getElementById('bio').style.color = '#FFFFFF';
    document.getElementById('readingstyle').disabled = true;
    document.getElementById('bio').style.color = '#FFFFFF';
    document.getElementById('bio').disabled = true;
    document.getElementById('bio').style.color = '#FFFFFF';
    document.getElementById('webaddress').disabled = true;
    document.getElementById('bio').style.color = '#FFFFFF';
    this.style.display = 'none';
    document.getElementById('editBtn').style.display = 'inline';
});
