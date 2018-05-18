// Carousel Auto-Cycle
  $(document).ready(function() {
    $('.carousel').carousel({
      interval: 5000
    })
  });
  $('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $(document).ready(function() {
    $("#btn").click(function(event){
      event.preventDefault();
      $("form#login").toggle();
    });
  });

  $(document).ready(function() {
    $("#readmore").click (function() {
      $(".more").fadeToggle();
    });

    $("#faith").click(function() {
      $(".aboutfaith").fadeToggle();
    });

    $("#btn5").click(function() {
      $("#imgstate5").toggle("fadein")
    });

  });
  $(window).load(function() {
      var boxheight = $('#myCarousel .carousel-inner').innerHeight();
      var itemlength = $('#myCarousel .item').length;
      var triggerheight = Math.round(boxheight/itemlength+1);
      $('#myCarousel .list-group-item').outerHeight(triggerheight);
  });

  var monthNames = [ "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December" ];
  var dayNames= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

  var newDate = new Date();
  newDate.setDate(newDate.getDate() + 1);
  $('#Date').html(dayNames[newDate.getDay()] + ", " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
