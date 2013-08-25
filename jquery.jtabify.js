/**
 * JTabify - JQuery plugin for jtab
 *
 *   
 *	The JTab project can be found here
 * 	 http://jtab.tardate.com : more information on availability, configuration and use.
 *   http://github.com/tardate/jtab/tree/master : source code repository, wiki, documentation
 *
 *  JTab also used following two libraries:
 *   jQuery - http://www.jquery.com/
 *   Raphael - http://raphaeljs.com/
 *
 */

(function( $ ){

	var TabDialog = {
		init: function(){
			
			$('BODY').prepend('<div id="tab-dialog">									\
								<div>													\
									<span id="tab-close">&times;</span>						\
									<div id="tab-content" class="jtab"></div>			\
								</div>													\
					   	  		</div>');
			
			var fontFamily = "Helvetica Neue",
				fontColor = "black",
				backgroundColor = "#fff";
				
			this.$dialog = $("#tab-dialog");
			this.$content = $("#tab-content");
			this.$close = $("#tab-close");
			
			//Hide message container div
			this.$dialog.hide();
			
			//find center of the screen to position the message
			this.top = (($(window).height() / 2) - 100);
			this.left = (($(window).width() / 2) - (350 / 2));
			//if( top < 0 ) top = 0;
			//if( left < 0 ) left = 0;

			//Apply Default Styles
			this.$dialog.css({
				"z-index": 999,
				position: "absolute",
				top: this.top,
				left: this.left,
				width: "175px",
				"padding-bottom":"10px",
				"padding-top": "10px",
				"padding-left": "15px",
				"padding-right": "15px",
				background: backgroundColor,
				"font-family":fontFamily,
				"font-size":"62.5%",
				color: fontColor,
				"-moz-border-radius":"8px",
				"-webkit-border-radius":"8px",
				"border-radius":"8px",
				"-moz-box-shadow": "0 0 6px #000", 
				"-webkit-box-shadow": "0 0 6px #000",
				"box-shadow": "0 0 6px #000"
			});
			this.$content.css({
				"font-size":"1.2em",
				"margin": "1.2em"
			});
			this.$close.css({
				"font-size":"22px",
				"font-weight": "bold",
				position:"relative",
				top: "1px",
				"margin-top":"-4px",
				"float":"right",
				"cursor":"pointer",
				"text-decoration":"none"
			});
			
			//Click handler for close
			this.$close.click($.proxy(function(){
				//Hide Message Window
				this.$dialog.hide();
			},this));
			
			
			return this;
		},
		show: function() {
			//Show Message Window
			this.$dialog.show();
		},
		hide: function() {
			//Hide Message Window
			this.$dialog.hide();
		},
		reset: function(){
			//Hide Message Window
			this.$dialog.hide();
			this.$content.text('');
		},
		content: function(content){
			this.$content.html(content);
		},
		position: function(top,left){
			this.top = top;
			this.left = left;
			this.$dialog.css({
				"top": this.top,
				"left": this.left
			});
			
		}
		
	}
  
  $.fn.jtabify = function( type ) {  

    return this.each(function() {

    	console.log($(this));
      	var $this = $(this),
      	//regex to match chords
	  	regex = /(([A-G][b\#]?(2|5|6|7|9|11|13|6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7|m7b5|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus|sus2|sus4|7\/C)*)( |\n|\-|\/|]))/g;
      	var content = $this.html();
	  
	 	var dialog = TabDialog.init();
	  
	 	//modify content using regex replace
		$this.html(content.replace(regex,'<a href="#" class="jtab-link" data-chord="$2">$2</a>$4'));
	
		//event handler for clicking on a chord
		$this.find(".jtab-link").on("click", function(event){
			$self = $(this);
			
			event.preventDefault()
			
			dialog.content($self.data("chord"));
			//jtab.renderimplicit();
		
			var offset = $self.offset();
			dialog.position(offset.top,offset.left + 25);
			dialog.show();
			jtab.render(document.getElementById("tab-content"),$self.data("chord"));
			
		});
	
    });

  };
})( jQuery );