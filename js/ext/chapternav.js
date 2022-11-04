
class ChapterNav{

    index=-1;
    detectTopVal=20;
    constructor(queryChapterNav='chapter-nav') {
        this.prefixClassName = queryChapterNav;
        this.chapterNavItem = document.querySelector("."+queryChapterNav);
        this.chapterNavChapterItems = document.querySelectorAll("."+queryChapterNav+"-chapter"); 
        this.chapterNavChapterItemContentLast =  document.querySelector("."+queryChapterNav+"-chapter-last"); 
        
      }
      show(){
        if(this.index <0 || this.index >= this.chapterNavChapterItems.length  ){
            this.chapterNavItem.querySelector("."+this.prefixClassName+'-title-content').innerHTML = '';
        }
        else
            this.chapterNavItem.querySelector("."+this.prefixClassName+'-title-content').innerHTML =   
                        this.chapterNavChapterItems[this.index].getAttribute(this.prefixClassName+"-title-content");
     
    }
    preview(){
        if(this.index>0)
        {
         
            this.chapterNavChapterItems[this.index-1].scrollIntoView({
                behavior: 'smooth',
                });
        } 
        else if(this.index == 0)
             window.scrollTo({
                    top: 0,
                });
           
    }
    goNext(){
    
        if(this.index <  this.chapterNavChapterItems.length-1)
        {
            this.chapterNavChapterItems[this.index+1].scrollIntoView({
                behavior: 'smooth',
               
                });
        }
    
    }
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight ||
                    document.documentElement.clientHeight) &&
            rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    updateData() {
     
        if(this.chapterNavChapterItems === null ||  this.chapterNavChapterItems.length <= 0)
            return;

        let isfindindex = false;
        let findindex = -1;
    
  
        for(let [index,item] of  this.chapterNavChapterItems.entries()){

            const rect = item.getBoundingClientRect();

            if(rect.top > this.detectTopVal && isfindindex)
            {
                    break;
            }
            if(rect.top <= this.detectTopVal)
            {
                findindex = index;
                isfindindex = true;
            }
            if(rect.bottom >= this.detectTopVal)
                break;
        
        }

    
        // define last content check over
        if( this.chapterNavChapterItemContentLast !== null &&
            findindex>=this.chapterNavChapterItems.length-1)
        {
        
            const rect = this.chapterNavChapterItemContentLast.getBoundingClientRect();
            
            if(rect.bottom <= this.detectTopVal){
                findindex=this.chapterNavChapterItems.length;
            }
        }
        if(this.index !=findindex)
        {

            this.index = findindex;
            this.show();
        }
    }
}
export default  ChapterNav;
