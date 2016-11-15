class TradeDtEditController {
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
    let tradedtId = $stateParams.tradedtId
    let Tradedt = API.service('dtinforms-show', API.all('informs'))
    Tradedt.one(tradedtId).get()
        .then((response) => {
      this.tradedt = API.copy(response)
    })
  }

  save (isValid) {
    if (isValid) {
      let $state = this.$state
      this.tradedt.put()
          .then(() => {
        let alert = { type: 'success', 'title': 'Success!', msg: '一条交易动态修改好了.' }
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

export const TradeDtEditComponent = {
  templateUrl: './views/app/components/trade-dt-edit/trade-dt-edit.component.html',
  controller: TradeDtEditController,
  controllerAs: 'vm',
  bindings: {}
}
