(function(){
    
    'use Strict';
    
    //controller for home view
    noteApp.controller('homeController',function($scope, $localStorage, noteService){
    
//     retrieve notes from localStorage using retrieveNoteService Factory
     $scope.notes = noteService.getNotes();
        
    /*
     add a new note and store it into localstorage
    */
    $scope.addNote = function(){
        var date = new Date();
        var utc = date.getTime() + (date.getTimezoneOffset() * 60000);
        var newDate = new Date(utc + (3600000*(+5.5)));
        var noteObject = {
           title : $scope.title ,
           content  : $scope.content,
           timestamp : newDate.toLocaleString()
        }
        $scope.notes.unshift(noteObject);
        noteService.saveNotes($scope.notes);
        $scope.title = "";
        $scope.content  = "";
        return false;
    }
    
    //function to remove respected note
    $scope.removeNote = function(delNote){
        $scope.notes.splice($scope.notes.indexOf(delNote), 1);
        saveNotesState();
    }
    
    //function to update respected note
    $scope.updateNote = function(updateNoteObj){
        $scope.notes.indexOf(updateNoteObj).title = $scope.title ;
        $scope.notes.indexOf(updateNoteObj).content = $scope.content;
        noteService.saveNotes($scope.notes);
     }
   });
})();