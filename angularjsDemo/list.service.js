angular
    .module('BrianList')
    .service('List',ListService);
    
    function ListService($http){
        this.baseURL = 'https://richegg.top';
        this.tasks = [];
        this.auth = function(listName){
            var data = {
                listName: listName
            };
            return $http.post(this.baseURL + '/lists',data);
        };
        
        this.addTask = function(newTaskText){
            var data = {
                'text':newTaskText
            };
            return $http.post(this.baseURL + '/tasks',data);
        };
        
        this.getTasks = function(){
            return $http.get(this.baseURL + '/tasks');
        };
        
        this.updateTask = function(task){
            var data = {
                isDone: task.isDone
            };
            return $http.patch(this.baseURL + '/tasks/' + task.id,data);
        };
        
        this.deleteTask = function(taskID){
            return $http.delete(this.baseURL + '/tasks/' + taskID);
        };
    };