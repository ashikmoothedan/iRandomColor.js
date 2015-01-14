# iRandomColor.js
iRandomColor.js is an simple jquery plugin for give random colors to html elements.
<h2>Usage</h2>
Simply include <strong><a href="http://www.jquery.com">jQuery</a></strong> and the script in your page, then run the script like so:
<pre>
$(document).ready(function(){
 $('div').iRandomColor();
});
</pre>
<h2>Options</h2>
<strong>shuffle : </strong>By making shuffle option 'true' you can shuffle your colors. Default value = 'false'
<br />
<strong>colors : </strong>You can change default colors by giving the new array of colors.Default value of colors array is:
<pre>
colors: ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6','#34495e', '#16a085', '#27ae60', '#2980b9', '#f1c40f',
          '#e74c3c', '#e67e22', '#F62459', '#F22613', '#d35400','#bdc3c7'
        ]
</pre>
