(function(){
 noteApp.factory('noteService',function($localStorage){
      var notes = new Array();
        return{
            getNotes: function(){
            //Get notes from Local Storage  
            notes = $localStorage.note;                 
            return notes ? notes : [];  
            },
            saveNotes: function(updatedNote){
            //save notes to Local Storage
            $localStorage.note = updatedNote;
            }
        }
    });
    
})();