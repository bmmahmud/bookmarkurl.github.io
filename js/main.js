//listen for From Submission 

document.getElementById('myform').addEventListener('submit',saveBookmark);


//SaveBookmark
function saveBookmark(e){
    //console.log("Done");
 
    //get form values
    var siteName = document.getElementById('siteName').value;
    var siteURL  = document.getElementById('siteURL').value;
   
    

    var bookmark ={
        name:siteName,
        url:siteURL
    }

    console.log(bookmark);

    //Test if bookmark is null 
if(localStorage.getItem('bookmarks')== null){
    //init array
    var bookmarks = [];
    //Add to array
    bookmarks.push(bookmark);
    //set to localStorage
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }
    else{
        //get bookmarks from local stroratge
        var bookmarks= JSON.parse(localStorage.getItem('bookmarks'));

        //Add to array
        bookmarks.push(bookmark);
        //set to localStorage
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
        
    }
    
    fetchBookmarks();
 //Previent Default
    e.preventDefault();
}

//delete function

function deleteBookmak(url){
//get bookmarks from local stroratge
var bookmarks= JSON.parse(localStorage.getItem('bookmarks'));
for(var i=0;i<bookmarks.length;i++){
   if(bookmarks[i].url == url){
       bookmarks.splice(i,1);
   }
}
//set to localStorage
localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
fetchBookmarks();  
}


//fetch bm
function fetchBookmarks(){
//get bookmarks from local stroratge
var bookmarks= JSON.parse(localStorage.getItem('bookmarks'));



//get output id
var bookmarkResults = document.getElementById('bookmarkResults');

//Build output
bookmarkResults.innerHTML="";

for(var i=0;i<bookmarks.length;i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarkResults.innerHTML += '<div class="jumbotron">'+ '<h4>'+name+
    '<a class="btn btn-default" target="_blank" href="'+url+'">Visit</a>'+
    '<a onclick="deleteBookmak(\''+url+'\')" class="btn btn-danger" href="#">Delete</a>'
    +'</h4>'+
     '</div>';
}


}