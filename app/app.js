'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', []);
app.controller ('todoCtrl', function($scope) {
  $scope.todoList = [
{
todoText:'In case of Fire', 
done:false},
{
todoText:'git commit', 
done:false},
{
todoText:'git push', 
done:false},
{
todoText:'exit the building', 
done:false},

];

   $scope.todoAdd = function() {
       var task = prompt("Add a task", "");
       // Checking for null or empty sttring
       // else pressing okay or cancel also adds a task
       if(null != task && "" != task) {
           $scope.todoList.push({todoText: task , done:false});
       }
       $scope.todoInput = "";
   };

   $scope.remove = function() {
       var oldList = $scope.todoList;
       $scope.todoList = [];
       angular.forEach(oldList, function(x) {
           if (!x.done) $scope.todoList.push(x);
       });
   };
} );
