
//document.getElementById('editBtn')
(function() {
    // Code to run immediately
  //.addEventListener('click', function() {
    document.getElementById('username').disabled = false;
    document.getElementById('age').disabled = false;
    document.getElementById('career').disabled = false;
    document.getElementById('hobbies').disabled = false;
    document.getElementById('readingstyle').disabled = false;
    document.getElementById('bio').disabled = false;
    document.getElementById('webaddress').disabled = false;
    this.style.display = 'none';
  //  document.getElementById('saveBtn').style.display = 'inline';
//}); 
})();

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
