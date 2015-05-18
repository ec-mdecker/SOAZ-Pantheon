(function ($) {
  Drupal.behaviors.mediadisplays = {
    attach: function (context, settings) {
      $('.cke_contents').find('iframe').contents().find('span.media-element').keyup(function(){
        console.log(this);
      });

      $('body.cke_editable', $('iframe.cke_wysiwyg_frame').contents()).on('keyup', function(e) {
        alert('testing');
      });

      //var stuff = $('.cke_contents').find('iframe').contents().find('span.media-element').html();
      //console.log(stuff);
      //
      //$('select.filter-list').change(function () {
      //  var stuff = $('.cke_contents').find('iframe').contents().find('span.media-element').html();
      //  console.log(stuff);
      //})
    }
  }
})(jQuery);