export function RoutesConfig ($stateProvider, $urlRouterProvider) {
  'ngInject'

  var getView = (viewName) => {
    return `./views/app/pages/${viewName}/${viewName}.page.html`
  }

  var getLayout = (layout) => {
    return `./views/app/pages/layout/${layout}.page.html`
  }

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('app', {
      abstract: true,
      views: {
        'layout': {
          templateUrl: getLayout('layout')
        },
        'header@app': {
          templateUrl: getView('header')
        },
        'footer@app': {
          templateUrl: getView('footer')
        },
        main: {}
      },
      data: {
        bodyClass: 'hold-transition skin-blue sidebar-mini'
      }
    })
    .state('app.landing', {
      url: '/',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          templateUrl: getView('landing')
        }
      }
    })
    .state('app.tablessimple', {
      url: '/tables-simple',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<tables-simple></tables-simple>'
        }
      }
    })
    .state('app.uiicons', {
      url: '/ui-icons',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<ui-icons></ui-icons>'
        }
      }
    })
    .state('app.uimodal', {
      url: '/ui-modal',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<ui-modal></ui-modal>'
        }
      }
    })
    .state('app.uitimeline', {
      url: '/ui-timeline',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<ui-timeline></ui-timeline>'
        }
      }
    })
    .state('app.uibuttons', {
      url: '/ui-buttons',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<ui-buttons></ui-buttons>'
        }
      }
    })
    .state('app.uigeneral', {
      url: '/ui-general',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<ui-general></ui-general>'
        }
      }
    })
    .state('app.formsgeneral', {
      url: '/forms-general',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<forms-general></forms-general>'
        }
      }
    })
    .state('app.chartjs', {
      url: '/charts-chartjs',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<charts-chartjs></charts-chartjs>'
        }
      }
    })
    .state('app.comingsoon', {
      url: '/comingsoon',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<coming-soon></coming-soon>'
        }
      }
    })
    .state('app.profile', {
      url: '/profile',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-profile></user-profile>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.userlist', {
      url: '/user-lists',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-lists></user-lists>'
        }
      }
    })
    .state('app.useredit', {
      url: '/user-edit/:userId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-edit></user-edit>'
        }
      },
      params: {
        alerts: null,
        userId: null
      }
    })
    .state('app.userroles', {
      url: '/user-roles',
      data: {
        auth: false
      },
      views: {
        'main@app': {
          template: '<user-roles></user-roles>'
        }
      }
    })
    .state('app.userpermissions', {
      url: '/user-permissions',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-permissions></user-permissions>'
        }
      }
    })
    .state('app.userpermissionsadd', {
      url: '/user-permissions-add',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-permissions-add></user-permissions-add>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.userpermissionsedit', {
      url: '/user-permissions-edit/:permissionId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-permissions-edit></user-permissions-edit>'
        }
      },
      params: {
        alerts: null,
        permissionId: null
      }
    })
    .state('app.userrolesadd', {
      url: '/user-roles-add',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-roles-add></user-roles-add>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.userrolesedit', {
      url: '/user-roles-edit/:roleId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-roles-edit></user-roles-edit>'
        }
      },
      params: {
        alerts: null,
        roleId: null
      }
    })
    .state('app.widgets', {
      url: '/widgets',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<widgets></widgets>'
        }
      }
    })
    .state('login', {
      url: '/login',
      views: {
        'layout': {
          templateUrl: getView('login')
        },
        'header@app': {},
        'footer@app': {}
      },
      data: {
        bodyClass: 'hold-transition login-page'
      },
      params: {
        registerSuccess: null,
        successMsg: null
      }
    })
    .state('loginloader', {
      url: '/login-loader',
      views: {
        'layout': {
          templateUrl: getView('login-loader')
        },
        'header@app': {},
        'footer@app': {}
      },
      data: {
        bodyClass: 'hold-transition login-page'
      }
    })
    .state('register', {
      url: '/register',
      views: {
        'layout': {
          templateUrl: getView('register')
        },
        'header@app': {},
        'footer@app': {}
      },
      data: {
        bodyClass: 'hold-transition register-page'
      }
    })
    .state('userverification', {
      url: '/userverification/:status',
      views: {
        'layout': {
          templateUrl: getView('user-verification')
        }
      },
      data: {
        bodyClass: 'hold-transition login-page'
      },
      params: {
        status: null
      }
    })
    .state('forgot_password', {
      url: '/forgot-password',
      views: {
        'layout': {
          templateUrl: getView('forgot-password')
        },
        'header@app': {},
        'footer@app': {}
      },
      data: {
        bodyClass: 'hold-transition login-page'
      }
    })
    .state('reset_password', {
      url: '/reset-password/:email/:token',
      views: {
        'layout': {
          templateUrl: getView('reset-password')
        },
        'header@app': {},
        'footer@app': {}
      },
      data: {
        bodyClass: 'hold-transition login-page'
      }
    })
    .state('app.logout', {
      url: '/logout',
      views: {
        'main@app': {
          controller: function ($rootScope, $scope, $auth, $state, AclService) {
            $auth.logout().then(function () {
              delete $rootScope.me
              AclService.flushRoles()
              AclService.setAbilities({})
              $state.go('login')
            })
          }
        }
      }
    })

    .state('app.tradedts', {
      url: '/trade-dt',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<trade-dt></trade-dt>'
        }
      }
    })
    .state('app.tradedtadd', {
      url: '/trade-dt-add',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<trade-dt-add></trade-dt-add>'
        }
      }
    })
    .state('app.tradedtedit', {
      url: '/trade-dt-edit/:tradedtId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<trade-dt-edit></trade-dt-edit>'
        }
      },
      params: {
        alerts: null,
        tradeId: null
      }
    })

    .state('app.teacultures', {
      url: '/tea-culture',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<tea-culture></tea-culture>'
        }
      }
    })
    .state('app.teacultureadd', {
      url: '/tea-culture-add',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<tea-culture-add></tea-culture-add>'
        }
      }
    })
    .state('app.teacultureedit', {
      url: '/tea-culture-edit/:teacultureId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<tea-culture-edit></tea-culture-edit>'
        }
      },
      params: {
        alerts: null,
        teacultureId: null
      }
    })

    .state('app.teaknowledges', {
      url: '/tea-knowledge',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<tea-knowledge></tea-knowledge>'
        }
      }
    })
    .state('app.teaknowledgeadd', {
      url: '/tea-knowledge-add',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<tea-knowledge-add></tea-knowledge-add>'
        }
      }
    })
    .state('app.teaknowledgeedit', {
      url: '/tea-knowledge-edit/:teaknowledgeId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<tea-knowledge-edit></tea-knowledge-edit>'
        }
      },
      params: {
        alerts: null,
        teaknowledgeId: null
      }
    })
    .state('app.teacollections', {
      url: '/tea-collection',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<tea-collection></tea-collection>'
        }
      }
    })
    .state('app.teacollectionadd', {
      url: '/tea-collection-add',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<tea-collection-add></tea-collection-add>'
        }
      }
    })
    .state('app.teacollectionedit', {
      url: '/tea-collection-edit/:teacollectionId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<tea-collection-edit></tea-collection-edit>'
        }
      },
      params: {
        alerts: null,
        teacollectionId: null
      }
    })
    .state('app.teacollectionimg', {
      url: '/tea-collection-img/:teacollectionId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<tea-collection-img></tea-collection-img>'
        }
      },
      params: {
        alerts: null,
        teacollectionId: null
      }
    })
    .state('app.tradeannouncements', {
      url: '/trade-announcement',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<trade-announcement></trade-announcement>'
        }
      }
    })
    .state('app.tradeannouncementadd', {
      url: '/trade-announcement-add',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<trade-announcement-add></trade-announcement-add>'
        }
      }
    })
    .state('app.tradeannouncementedit', {
      url: '/trade-announcement-edit/:tradeannouncementId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<trade-announcement-edit></trade-announcement-edit>'
        }
      },
      params: {
        alerts: null,
        tradeannouncementId: null
      }
    })
    .state('app.traderules', {
      url: '/trade-rule',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<trade-rule></trade-rule>'
        }
      }
    })
    .state('app.traderuleadd', {
      url: '/trade-rule-add',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<trade-rule-add></trade-rule-add>'
        }
      }
    })
    .state('app.traderuleedit', {
      url: '/trade-rule-edit/:traderuleId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<trade-rule-edit></trade-rule-edit>'
        }
      },
      params: {
        alerts: null,
        traderuleId: null
      }
    })
}
