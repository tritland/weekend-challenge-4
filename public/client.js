var app = angular.module('EmployeeApp', []);

app.controller('EmployeeController', ['$http', function ($http) {
    var self = this;
    self.employees = [];

//runs loop on employees array, adds salaries, and returns total
    self.getMonthlyExpenditures = function () {
        var total = 0
        for (var i = 0; i < self.employees.length; i++) {
            var amount = self.employees[i].salary;
            total += amount;
        }
        return total;
    }

//GET to retrieve table of employees from database; clears input fields
    self.getEmployees = function () {
        $http({
            method: 'GET',
            url: '/employee',
        }).then(function (response) {
            console.log(response);
            console.log(response.data);
            self.employees = response.data;
            self.newEmployee = {};
        });
    };

//POST function adds new employee to database
    self.postEmployee = function () {
        $http({
            method: 'POST',
            url: '/employee',
            data: self.newEmployee,
        }).then(function (response) {
            console.log(response);
            self.getEmployees();
        });
    };

//calls GET function at page load
    self.getEmployees();
}]);