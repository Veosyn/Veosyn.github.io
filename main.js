$(function()
{
  $('h1').each(function(){
      var txt = $(this).text();
      var html = '';
      for (t in txt)
      {
          html = html + '<span>' + txt[t] + '</span>';
      }
      $(this).html(html);
    });
});

// Attaches hover events to each span within a h6. Using document.on, this 
// event will work for any span this is or will be in the document.
$(document).on('hover', 'h1 span', function(event){
    // 'hover' is a shorthand. The event is linked to mouseenter and mouseleave, so 
    // you'll have to check event.type to see which one it is.
    if (event.type == 'mouseenter')
        $(this).css('color', 'red');
    else
        $(this).css('color', 'blue');
});