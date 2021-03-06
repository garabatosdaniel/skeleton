'use strict';

angular.module('fpymeFrontApp')
  .factory('urlService', function () {
    //var unloggedUrls = ['/', '/register'];
    var unloggedUrls = ['/objeto', '/objetivos', '/poblacion', '/consejo', '/register', '/recover', '/recoverPassword',
    '/sesion', '/capturaQueja', '/capturaOpinion', '/validarTempUser' , '/encuestaEmprendeTIC','/registro', '/demoInvocaServicio',''];
    return {
      getUnloggedUrls: function () {
        if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { //test for MSIE x.x;
          var ieversion=new Number(RegExp.$1); // capture x.x portion and store as a number
          if (ieversion < 9) {
            unloggedUrls.push('/');
          }
        }
        return unloggedUrls;
      },
      getBasePath: function () {
        return '';
      },
      getAppletPath: function () {
        return 'http://200.77.231.14/WSCommerceFiel/WSCommerceFielService?wsdl';
        // PROD return 'http://200.77.231.14/WSCommerceFiel/WSCommerceFielService?wsdl';
        //QA return 'http://200.77.231.36:5580/WSCommerceFiel/WSCommerceFielService?wsdl';
        //DESA return 'http://172.18.53.22:5080/WSCommerceFiel/WSCommerceFielService?WSDL';
      }
    };
  });
