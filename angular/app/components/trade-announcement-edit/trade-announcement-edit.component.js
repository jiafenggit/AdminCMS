class TradeAnnouncementEditController {
  constructor (API, $state, $stateParams, $scope) {
    'ngInject'

    this.$state = $state
    this.formSubmitted = false
    this.API = API
    this.alerts = []

    $scope.froalaOptions = {
      // placeholder: "Edit Me",
      heightMin: 300,
      language: 'zh_cn',
      imageUploadURL: "upload/imgEditor"
    }

    if ($stateParams.alerts) {
      this.alerts.push($stateParams.alerts)
    }
    let tradeannouncementId = $stateParams.tradeannouncementId
    let TradeAnnouncement = API.service('tradeannouncements-show', API.all('informs'))
    TradeAnnouncement.one(tradeannouncementId).get()
        .then((response) => {
      this.tradeannouncement = API.copy(response)
    })
  }

  save (isValid) {
    if (isValid) {
      let $state = this.$state
      this.tradeannouncement.put()
          .then(() => {
        let alert = { type: 'success', 'title': 'Success!', msg: '一条通知公告修改好了.' }
        $state.go($state.current, { alerts: alert})
    }, (response) => {
        let alert = { type: 'error', 'title': 'Error!', msg: response.data.message }
        $state.go($state.current, { alerts: alert})
      })
    } else {
      this.formSubmitted = true
    }
  }

  $onInit () {}
}

export const TradeAnnouncementEditComponent = {
  templateUrl: './views/app/components/trade-announcement-edit/trade-announcement-edit.component.html',
  controller: TradeAnnouncementEditController,
  controllerAs: 'vm',
  bindings: {}
}
