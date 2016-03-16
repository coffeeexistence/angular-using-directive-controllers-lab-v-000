function CaseController($scope) {
    $scope.name=$scope.name.toLowerCase();
    $scope.email=$scope.email.toLowerCase();
    $scope.phone=$scope.phone.toLowerCase();
    $scope.username=$scope.username.toLowerCase();
}
 
angular
    .module('app')
    .controller('CaseController', CaseController);


function ContactCard() {
	return {
		scope: {
			name: '=',
			email: '=',
			phone: '=',
			username: '='
		},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ name }}',
				'<label>Email:</label>',
				'{{ email }}',
				'<label>Phone:</label>',
				'{{ phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ username }}</span>',
			'</div>'
		].join(''),
		restrict: 'E',
		controller: 'CaseController as ctrl'
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);