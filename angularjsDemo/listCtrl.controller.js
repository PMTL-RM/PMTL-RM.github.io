angular
    .module('BrianList')
    .controller('ListCtrl', ListCtrl);
    
    function ListCtrl(List){
        
        var self = this;
        
        self.tasks = [];
        
        self.auth = function(listName){
            //code
            List.auth(listName)
            .then(function(res){
                self.tasks = List.tasks = res.data.tasks;
            }), function(err){
                    console.log(err);
                };
        };
        
        self.getTasks = function(){
            //code
            List.getTasks()
            .then(function(res){
                self.tasks = List.tasks = res.data.tasks;
            }),function(err){
                   console.log(err);
               };
        };
        
        self.addTask = function(newTaskText){
            //code
            List.addTask(newTaskText)
               .then(function(res){
                    self.getTasks();
                }),function(err){
                        console.log(err);
                    };
                self.newTaskText="";
        };
        
        self.updateTask = function(task){
            //code
             List.updateTask(task)
                    .then(function(res){
                        self.getTasks();
                    }),function(err){
                        console.log(err);
                    };
            
        };
        
        self.deleteTask = function(taskID){
            //code
            List.deleteTask(taskID)
                .then(function(res){
                    self.getTasks();
                }), function(err){
                    console.log(err);
                };
        };

    };
    

    