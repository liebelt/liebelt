var duoshuoQuery = {short_name:"liebelt"};
			
			function toggleDuoshuoComments(ind){
			container='#comment-box';
		    if(ind){
		        $('.ds-comments').html('');
		        $('#guestbook_href').html('<a href="javascript:void(0);" onclick="toggleDuoshuoComments();">展开评论</a>');
		    }else{
		        $(container).html('');
		        $('#guestbook_href').html('<a href="javascript:void(0);" onclick="toggleDuoshuoComments(1);">收起评论</a>');
		        var el = document.createElement('div');
		        el.setAttribute('data-thread-key', 'liebelt');
		        el.setAttribute('data-url', 'https://liebelt.github.io');
		        el.setAttribute('data-title', "思思的小站");
		        DUOSHUO.EmbedThread(el);
		        jQuery(container).append(el);
		    }
		}
		
		//链接到框架
		function frametarget(){
		    var location_href=window.location.href;
			var jump_query=['index.html?','/?'];
			for (var i in jump_query){
				var location_href_pos=location_href.indexOf(jump_query[i]);
				var conv_href=location_href.substr(location_href_pos+jump_query[i].length);
				if (location_href_pos>0 && conv_href.indexOf('.html')>0 && conv_href.indexOf('//')<0){
					$('iframe#framemain').attr('src',conv_href);
					break;
				}
			}
		}
		
		window.onload = function(){ 
		    frametarget();
		    toggleDuoshuoComments();
		};