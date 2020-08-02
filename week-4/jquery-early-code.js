// If Mozilla is used
if (jQuery.browser == 'mozilla' || jQuery.browser == 'opera') {
  // Use the handy event callback
  jQuery.event.add(document, 'DOMContentLoaded', jQuery.ready);

  // If IE is used, use the excellent hack by Matthias Miller
  // http://www.outofhanwell.com/blog/index.php?title=the_window_onload_problem_revisited
} else if (jQuery.browser == 'msie') {
  // Only works if you document.write() it
  document.write(
    '<scr' + 'ipt id=__ie_init defer=true ' + 'src=javascript:void(0)></script>'
  );

  // Use the defer script hack
  var script = document.getElementById('__ie_init');
  script.onreadystatechange = function () {
    if (this.readyState == 'complete') jQuery.ready();
  };

  // Clear from memory
  script = null;

  // If Safari  is used
} else if (jQuery.browser == 'safari') {
  // Continually check to see if the document.readyState is valid
  jQuery.safariTimer = setInterval(function () {
    // loaded and complete are both valid states
    if (document.readyState == 'loaded' || document.readyState == 'complete') {
      // If either one are found, remove the timer
      clearInterval(jQuery.safariTimer);
      jQuery.safariTimer = null;

      // and execute any waiting functions
      jQuery.ready();
    }
  }, 10);
}
