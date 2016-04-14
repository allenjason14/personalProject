angular.module("nameMaker")
	.directive('dropDownDir', function () {
        return {
<div class="dropdown-container" ng-class="{ show: listVisible }">
	<div class="dropdown-display" ng-click="show();" ng-class="{ clicked: listVisible }">
		<span ng-if="!isPlaceholder">{{display}}</span>
		<span class="placeholder" ng-if="isPlaceholder">{{placeholder}}lt;/span>
	</div>
	<div class="dropdown-list">
		<div>
			<div ng-repeat="item in list" ng-click="select(item)" ng-class="{ selected: isSelected(item) }">
				<span>{{property !== undefined ? item[property] : item}}</span>
			</div>
		</div>
	</div>
</div>
}
