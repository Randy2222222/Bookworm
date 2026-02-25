
document.getElementById('editBtn').addEventListener('click', function() {
    document.getElementById('username').style.color = '#FFFFFF'.disabled = true;
    document.getElementById('age').style.color = '#FFFFFF'.disabled = true;
    document.getElementById('career').style.color = '#FFFFFF'.disabled = true;
    document.getElementById('hobbies').style.color = '#FFFFFF'.disabled = true;
    document.getElementById('readingstyle').style.color = '#FFFFFF'.disabled = true;
    document.getElementById('bio').style.color = '#FFFFFF'.disabled = true;
    document.getElementById('webaddress').style.color = '#FFFFFF'.disabled = true;
    this.style.display = 'none';
    document.getElementById('saveBtn').style.display = 'inline';
});

document.getElementById('saveBtn').addEventListener('click', function() {
    document.getElementById('username').style.color = '#FFFFFF'.disabled = true;
    document.getElementById('age').style.color = '#FFFFFF'.disabled = true;
    document.getElementById('career').style.color = '#FFFFFF'.disabled = true;
    document.getElementById('hobbies').style.color = '#FFFFFF'.disabled = true;
    document.getElementById('readingstyle').style.color = '#FFFFFF'.disabled = true;
    document.getElementById('bio').style.color = '#FFFFFF'.disabled = true;
    document.getElementById('webaddress').disabled = true;
    this.style.display = 'none';
    document.getElementById('editBtn').style.display = 'inline';
});
