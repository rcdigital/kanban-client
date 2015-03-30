/* recommended */
angular
    .module('scruman.widgets')
    .directive('scrumanTask', ScrumanTask);

function ScrumanTask() {
    var directive = {
        link: link,
        templateUrl: 'app/shared/task/TaskTemplate.html',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
      /* */
    }
}
