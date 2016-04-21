EmpApp.controller('logController', ['$scope', '$log',  function ($scope, $log) {

		

	}]);

EmpApp.controller('logController', function ($scope, logFactory) {

		$scope.users;

		$scope.newUser = {};

		$scope.answer = false;
	
	/*Add New Employee to the Table*/

		$scope.addLog = function (newUser) {
			/*Salary Validation*/
			if ((newUser.designation == "Senior Manager") && (newUser.salary >= 100000) && (newUser.salary <= 130000)) {
				$scope.answer = true;
			} else if ((newUser.designation == "Manager") && (newUser.salary >= 90000) && (newUser.salary <= 99999)) {
				$scope.answer = true;
			} else if ((newUser.designation == "Assistant Manager") && (newUser.salary >= 80000) && (newUser.salary <= 89999)) {
				$scope.answer = true;
			} else if ((newUser.designation == "Lead") && (newUser.salary >= 60000) && (newUser.salary <= 79999)) {
				$scope.answer = true;
			} else if ((newUser.designation == "Senior Consultant") && (newUser.salary >= 50000) && (newUser.salary <= 59000)) {
				$scope.answer = true;
			} else if ((newUser.designation == "Consultant") && (newUser.salary >= 40000) && (newUser.salary <= 49000)) {
				$scope.answer = true;
			} else {
				$scope.answer = false;
			}

			if ($scope.answer == true) {
				/*Check the last Id in the table and creates a new ID*/
				var newId = getId() + 1;
				$scope.users.push(newUser);
				endEdit();
			} else {
				console.log("Error");
			}
		};
	
		$scope.currentEditId = undefined;
	
	/*Edit User data*/

		$scope.editUser = function (rowId) {
			'use strict';
			$scope.currentEditId = rowId;
			$scope.newUser = angular.copy($scope.users[rowId]);
		}
		
	/*Delete User data*/

		$scope.deleteUser = function () {
			'use strict';
				
			if (hasNumValue($scope.currentEditId)) {
				$scope.users.splice($scope.currentEditId, 1);
				endEdit();
			}
		}
		
	/*Save User data*/

	 $scope.saveOp = function () {
        'use strict';
        $scope.users[$scope.currentEditId] = $scope.newUser;
        endEdit();
    }
		
	/*Cancel modifying User data*/	

		$scope.cancelOp = function () {
			'use strict';
			endEdit();
		}

		function endEdit() {
			$scope.newUser = {};
			$scope.currentEditId = undefined;
		}
	
	/*Get the last ID on the table */

		function getId() {
        'use strict';
        var idCollection = [];

        for (var i = 0; i < $scope.users; i++) {
            idCollection.push($scope.users[i].id);
        }

        return Math.max.apply(null, idCollection);
    }		
	
	/*Verify a Numeric Value*/
	
		function hasNumValue(value) {
			"use strict";
			if (value != undefined && value != null) {
				return true;
			}
			return false;
		}

	/*Get the Json File data through logFactory */
	
		logFactory.getUsers().success(function (data) {
			$scope.users = data;
		}).error(function (error) {
			console.log(error);
		});



	});