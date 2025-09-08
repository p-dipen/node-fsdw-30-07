function hello() {
  console.log('This is main.js file with need to run on server');
  console.log('This second line command running outside of browser');
}

hello();
/* 

    jquery -> library  
    <script src=""></script>
    as module 
    require('library');

    Three type of modules : 
    1. Internal Module - require('fs');
    2. User-created Module - require('./console')
    3. third party modules from npm(Node package manager) - require('hello-world-npm')
*/
