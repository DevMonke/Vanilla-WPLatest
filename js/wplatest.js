$(function() {

var forum_url;
var blog_url;

forum_url = window.location.origin;
  
$.getJSON( forum_url+'/plugins/WPLatest/addon.json', function( addon_settings ) {
	
blog_url = addon_settings.blog_url;
  
$.getJSON( blog_url+'wp-json/wp/v2/posts?per_page=1', function( post_data ) {
	
$.getJSON( blog_url+'wp-json/wp/v2/users/?search='+post_data[0].author, function( user_data ) {
	
$.getJSON( blog_url+'wp-json/wp/v2/comments?post='+post_data[0].id, function( comment_data ) {
 
$(".DataList").prepend('<li id="Discussion_1" class="Item Announcement Announcement-Everywhere Unread ItemDiscussion noPhotoWrap pageBox" style="background-color:gold;"><div class="ItemContent Discussion"><div class="Title" role="heading" aria-level="3"><a href="'+post_data[0].link+'">'+post_data[0].title.rendered+'</a></div><div class="Meta Meta-Discussion"><span class="Tag Tag-Announcement" title="Blog">Blog</span><span class="MItem MCount CommentCount"><span title="'+comment_data.length+' comments" class="Number">'+comment_data.length+'</span> comments</span><span class="MItem MCount DiscussionScore Hidden"><span title="0 points" class="Number">0</span> points</span><span class="MItem LastCommentBy">Started by <a href="/profile/'+user_data[0].name+'" data-userid="3" class="js-userCard js-userCardInitialized" aria-controls="popupTrigger-0-content" aria-expanded="false" aria-haspopup="false" role="button">'+user_data[0].name+'</a></span><span class="MItem LastCommentDate"><time title="'+post_data[0].date.replace('T',' ')+'" datetime="'+post_data[0].date.replace('T',' ')+'">'+post_data[0].date.replace('T',' ')+'</time></span><span class="MItem Category Category-general"><a href="'+blog_url+'" tabindex="0" aria-label="User &amp;quot;'+user_data[0].name+'&amp;quot; started discussion &amp;quot;Welcome to awesome!&amp;quot; on date '+post_data[0].date.replace('T',' ')+'">Blog</a></span></div></div><span class="Options"></span></li>');

});

});

}); 
  
});

});
