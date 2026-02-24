
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
    document.getElementById('username').style.display.color = '#FFFFFF'.disabled = true;
    document.getElementById('age').style.display.color = '#FFFFFF'.disabled = true;
    document.getElementById('career').style.display.color = '#FFFFFF'.disabled = true;
    document.getElementById('hobbies').style.display.color = '#FFFFFF'.disabled = true;
    document.getElementById('readingstyle').style.display.color = '#FFFFFF'.disabled = true;
    document.getElementById('bio').style.display.color = '#FFFFFF'.rows.40.cols.30.disabled = true;
    document.getElementById('webaddress').style.display.color = '#FFFFFF'.disabled = true;
    this.style.display = 'none';
    document.getElementById('editBtn').style.display = 'inline';
});
