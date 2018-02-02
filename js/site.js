$('.box').find('input, textarea').on('keyup blur focus', function(e){

  var $this = $(this),
      label = $this.prev('label');

    if (e.this === 'keyup') {
      if($this.val() === ''){
        label.removeClass('active highlight');
      } else {
        label.addClass('active highlight');
      }
    }
});
