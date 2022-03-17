<?php 

/*

Class WPLatestPlugin

*/

class WPLatestPlugin extends Gdn_Plugin {

public function base_render_before($sender) {
    
if($sender->RequestMethod == 'index') {
      
$sender->addJsFile('wplatest.js', 'plugins/WPLatest');
        
}
     
}
   
}