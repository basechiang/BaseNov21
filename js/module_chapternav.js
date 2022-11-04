import ChapterNav from './ext/chapternav.js';

var objChapterNav= new ChapterNav();
  
   // objChapterNav.show();
    //event onclick
    objChapterNav.chapterNavItem.querySelector(  "."+objChapterNav.prefixClassName  +'-previous' )?.addEventListener("click", 
                                                                function(event){   
                                                                    event.preventDefault();
                                                                    objChapterNav.preview(); 
                                                                }
                                                                 );
    objChapterNav.chapterNavItem.querySelector( "."+ objChapterNav.prefixClassName  +'-next' )?.addEventListener("click", 
                                                                function(event){
                                                         
                                                                    event.preventDefault();
                                                                    objChapterNav.goNext(); 
                                                                   
                                                                } );
    var objChapterNavScrollEventLock=null;
    document.addEventListener('scroll', (e) => {
       
        if ( objChapterNavScrollEventLock === null ) {
            objChapterNavScrollEventLock = setTimeout( (e)=> {
                objChapterNav.updateData();
               objChapterNavScrollEventLock =null;
                          }, 200 );
        }
       
            
    });
    window.objChapterNav = objChapterNav;
    objChapterNav.updateData();
  
    
