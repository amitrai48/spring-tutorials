angular.module('todo').controller('todoController',['$scope','todoService',
    function($scope,todoService){
        $scope.newTodo = {};
        $scope.editedTodo = {};
        $scope.fetchAll = function(){
            todoService.fetchAll().then(function(response){
                $scope.todos = response.data;
            });
        }
        //when landing on the page fetch all the todos             
        $scope.fetchAll();

        //when the user creates new todo send this to our back end and save it.
        $scope.createTodo = function(){
            console.log($scope.newTodo);
            todoService.createTodo($scope.newTodo).then(function(response){
                $scope.newTodo = {};
                $scope.fetchAll();
            });
        }

        //save the currently editing todo in $scope.editedTodo
        $scope.editTodo = function(todo){
            $scope.editedTodo = todo;
        }

        //call the save todo function when your editing is done
        $scope.saveTodo = function(todo){
            todoService.saveTodo(todo).then(function(response){
                angular.forEach($scope.todos,function(singleTodo,index){
                    if(singleTodo.id === todo.id){
                        $scope.todos[index] = response.data;
                    }
                });

                if($scope.editedTodo && $scope.editedTodo.id === todo.id){
                    $scope.editedTodo = {};
                }
            });
        }

        //delete todo

        $scope.deleteTodo = function(todo){
            todoService.deleteTodo(todo).then(function(response){
                angular.forEach($scope.todos,function(singleTodo,index){
                    if(singleTodo.id === todo.id){
                        $scope.todos.splice(index,1);
                    }
                });
            });
        }
    }
]);