
document.getElementById('editBtn').addEventListener('click', function() {
    document.getElementById('username').style.display.color = '#FFFFFF'.disabled = false;
    document.getElementById('age').style.display.color = '#FFFFFF'.disabled = false;
    document.getElementById('career').style.display.color = '#FFFFFF'.disabled = false;
    document.getElementById('hobbies').style.display.color = '#FFFFFF'.disabled = false;
    document.getElementById('readingstyle').style.display.color = '#FFFFFF'.disabled = false;
    document.getElementById('bio').style.display.color = '#FFFFFF'.disabled= false;
    document.getElementById('webaddress').style.display.color = '#FFFFFF'.disabled = false;
    this.style.display = 'none';
    document.getElementById('saveBtn').style.display = 'block';
});

document.getElementById('saveBtn').addEventListener('click', function() {
    document.getElementById('username').style.display.color = '#FFFFFF'.disabled = true;
    document.getElementById('age').style.display.color = '#FFFFFF'.disabled = true;
    document.getElementById('career').style.display.color = '#FFFFFF'.disabled = true;
    document.getElementById('hobbies').style.display.color = '#FFFFFF'.disabled = true;
    document.getElementById('readingstyle').style.display.color = '#FFFFFF'.disabled = true;
    document.getElementById('bio').style.display.color = '#FFFFFF'.disabled = true;
    document.getElementById('webaddress').style.display.color = '#FFFFFF'.disabled = true;
    this.style.display = 'none';
    document.getElementById('editBtn').style.display = 'block';
});
