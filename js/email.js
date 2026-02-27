$(document).ready(function() { 
  $('#emailForm').submit(function(e) { 
    e.preventDefault();
    alert('Email sent successfully!'); 
    $('#recipient').val(''); 
    $('#subject').val(''); 
    $('#message').val(''); }); });
