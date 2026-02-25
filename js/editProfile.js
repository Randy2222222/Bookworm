
document.getElementById('editBtn').addEventListener('click', function() {
    document.getElementById('username').readOnly = false;
    document.getElementById('age').readOnly = false;
    document.getElementById('career').readOnly = false;
    document.getElementById('hobbies').readOnly = false;
    document.getElementById('readingstyle').readInly = false;
    document.getElementById('bio').readOnly = false;
    document.getElementById('webaddress').readOnly = false;
    this.style.display = 'none';
    document.getElementById('saveBtn').style.display = 'inline';
});

document.getElementById('saveBtn').addEventListener('click', function() {
    document.getElementById('username').style.color = '#FFFFFF'.readOnly = true;
    document.getElementById('age').style.color = '#FFFFFF'.readOnly = true;
    document.getElementById('career').style.color = '#FFFFFF'.readOnly = true;
    document.getElementById('hobbies').style.color = '#FFFFFF'.readOnly = true;
    document.getElementById('readingstyle').style.color = '#FFFFFF'.readOnly = true;
    document.getElementById('bio').style.color = '#FFFFFF'.readOnly = true;
    document.getElementById('webaddress').readOnly = true;
    this.style.display = 'none';
    document.getElementById('editBtn').style.display = 'inline';
});
