## JTabify

### Description
JTabify is a JQuery plugin used to display guitar chord diagrams by clicking the chord notation in guitar tablature. It uses the [JTab](http://jtab.tardate.com/) javascript libary to gernerate the chord diagrams.


### Libraries
* [JQuery](http://jquery.com)
* [JTab Website](http://jtab.tardate.com/)
* [JTab on Github](http://github.com/tardate/jtab)

### Usage

Include the Jquery library followed by the JTabify minified script file. JTab, and its depedency (raphael.js), are included in the minified file. 

	<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
	<script src="jtabify.min.js" type="text/javascript"></script>


Example div with chord notation.

	<div class="tab">Gm      Cm       Eb        Dm7  </div>

Initialize the plugin using the following syntax.

```
jQuery(document).ready(function($) {
	$("div.tab").jtabify();
});
```