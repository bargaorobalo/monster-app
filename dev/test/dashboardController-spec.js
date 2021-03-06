describe('monsterApp', function () {
  var scope,
  controller;

  beforeEach(function () {
      module('monsterApp', function($provide) {
        $provide.value('$log', {
          log: jasmine.createSpy('log')
        });
        $provide.value("$exceptionHandler", {
          exceptionHandler: jasmine.createSpy('exceptionHandler')
        });
      });
  });

  describe('dashboardController', function () {
      beforeEach(inject(function ($rootScope, $controller) {
          scope = $rootScope.$new();
          controller = $controller('dashboardController', {
              '$scope': scope
          });
      }));

      it('should ("dashboardController") not to be undefined', function(){
        expect(scope).not.toBeUndefined();
      });

      it('should (method "init") not to be undefined', function () {
          expect(scope.init).not.toBeUndefined();
      });

      it('should (method "getAppList") not to be undefined', function () {
          expect(scope.getAppList).not.toBeUndefined();
      });

      it('should (method "getCloneUrl") not to be undefined', function () {
          expect(scope.getCloneUrl).not.toBeUndefined();
      });

      it('should (method "getServerInfo") not to be undefined', function () {
          expect(scope.getServerInfo).not.toBeUndefined();
      });
  });

  describe('dashboardService', function () {
    beforeEach(inject(function ($rootScope, _dashboardService_) {
      scope = $rootScope.$new();
      service = _dashboardService_;
    }));

    it('should have an getAppList function', function () {
      expect(angular.isFunction(service.getAppList)).toBe(true);
    });

    it('should have an getCloneUrl function', function () {
      expect(angular.isFunction(service.getCloneUrl)).toBe(true);
    });

    it('should have an getServerInfo function', function () {
      expect(angular.isFunction(service.getServerInfo)).toBe(true);
    });

  });
});
