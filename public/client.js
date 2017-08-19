var app = angular.module('EmployeeApp', []);

app.controller('EmployeeController', ['$http', function($http){
    var self = this;
    self.employees = [];


self.getMonthlyExpenditures = function(){
    var total = 0
      for(var i = 0; i < self.employees.length; i++){
       var amount = self.employees[i].salary;
       total += amount;
    }
    return total;
}

self.getEmployees = function(){
    $http({
        method: 'GET',
        url: '/employee',
    }).then(function(response){
        console.log(response);
        console.log(response.data);
        self.employees = response.data;
        self.newEmployee = {};
    });
};

self.postEmployee = function(){
    $http({
        method: 'POST',
        url: '/employee',
        data: self.newEmployee,
    }).then(function(response){
        console.log(response);
        self.getEmployees();
        
    });
};

    self.getEmployees();

    }]);