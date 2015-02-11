// $(document).ready(function() {

//   // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
// });

$(function() {
  // $('.contact-list').hide();

  $('.show').on('click', function() {
      var $contactlist = $('.contact-list');
      //before ajax do this 
      $('.contact-list').toggle();

  
      $.ajax({
         url: '/user/all',
      method: 'get',
    dateType: 'json',
     success: function(data) {
               var contacts = JSON.parse(data);
                
                $.each(contacts,function(i,contact) {
                console.log($contactlist.find('tr').length);
                console.log(contacts.length);
                if(($contactlist.find('tr').length - 1) < (contacts.length + 1)){
                  $contactlist.append(
                 '<tr>' + 
                 '<td>'+ contact.firstname +'</td>'+
                 '<td>'+ contact.lastname + '</td>'+ 
                 '<td>' + contact.phonenumber +'</td>' +
                '<td><b><a class="margin-r1" href="#">εdit</a><a href="http://www.google.com">x</b></a></td>' +
                 + '</tr>'
                 )
                }
                  $('.contact-form').fadeOut();
                  $contactlist.fadeIn('slow');
                });

              }
     });


  });

$('.contact-form').on('submit', function(e) {
  e.preventDefault(); 
  var contact = {
                  firstname: $('.firstname').val(),
                  lastname: $('.lastname').val(),
                  phonenumber: $('.phonenumber').val() }
  var $contactlist = $('.contact-list');
 

  $.ajax({
         url: '/user',
      method: 'post',
    dateType: 'json',
        data: contact,
     success: function(data) {
                console.log(data);
                var contact = JSON.parse(data);
                console.log(contact);
                $.each(contact,function(i,contact) {
                  $contactlist.append(
                 '<tr>' + 
                 '<td>'+ contact.firstname +'</td>'+
                 '<td>'+ contact.lastname + '</td>'+ 
                 '<td>' + contact.phonenumber +'</td>' +
                '<td><b><a class="margin-r1" href="#">εdit</a><a href="http://www.google.com">x</b></a></td>' +
                 + '</tr>'
                 )
                  $('.contact-form').fadeOut();
                  $contactlist.fadeIn('slow');
                })

              },
     });



   });

$('.add').on('click',function(e){
   e.preventDefault();
   $('.contact-form').toggle();
});
});