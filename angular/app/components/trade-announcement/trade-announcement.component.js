class TradeAnnouncementController {
  constructor ($scope, $state, $compile, DTOptionsBuilder, DTColumnBuilder, API) {
    'ngInject'
    this.API = API
    this.$state = $state

    // let TradeAnnouncements = this.API.service('teakns', this.API.all('users'))
    let TradeAnnouncements = this.API.service('tradeannouncements', this.API.all('informs'))

    TradeAnnouncements.getList()
        .then((response) => {
      let dataSet = response.plain()

      this.dtOptions = DTOptionsBuilder.newOptions()
        .withOption('data', dataSet)
        .withOption('createdRow', createdRow)
        .withOption('responsive', true)
        .withBootstrap()

    this.dtColumns = [
      DTColumnBuilder.newColumn('id').withTitle('ID'),
      DTColumnBuilder.newColumn('title').withTitle('Title'),
      // DTColumnBuilder.newColumn('content').withTitle('Content'),
      DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable()
          .renderWith(actionsHtml)
    ]

    this.displayTable = true
  })

    let createdRow = (row) => {
      $compile(angular.element(row).contents())($scope)
    }

    let actionsHtml = (data) => {
      return `
                <a class="btn btn-xs btn-warning" ui-sref="app.tradeannouncementedit({tradeannouncementId: ${data.id}})">
                    <i class="fa fa-edit"></i>
                </a>
                &nbsp
                <button class="btn btn-xs btn-danger" ng-click="vm.delete(${data.id})">
                    <i class="fa fa-trash-o"></i>
                </button>`
    }
  }

  delete (tradeannouncementId) {
    let API = this.API
    let $state = this.$state

    swal({
      title: '确认是否删除?',
      text: '删除后将无法恢复!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: '删除!',
      closeOnConfirm: false,
      showLoaderOnConfirm: true,
      html: false
    }, function () {
      API.one('informs').one('tradeannouncements', tradeannouncementId).remove()
          .then(() => {
        swal({
            title: '删除!',
            text: '好了,你已经删除掉TA了.',
            type: 'success',
            confirmButtonText: 'OK',
            closeOnConfirm: true
        }, function () {
          $state.reload()
        })
    })
    })
  }

  $onInit () {}
}

export const TradeAnnouncementComponent = {
  templateUrl: './views/app/components/tea-knowledge/tea-knowledge.component.html',
  controller: TradeAnnouncementController,
  controllerAs: 'vm',
  bindings: {}
}
