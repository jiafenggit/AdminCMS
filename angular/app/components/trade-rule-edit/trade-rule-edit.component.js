class TradeRuleEditController {
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
    let traderuleId = $stateParams.traderuleId
    let TradeRule = API.service('traderules-show', API.all('informs'))
    TradeRule.one(traderuleId).get()
        .then((response) => {
      this.traderule = API.copy(response)
    })
  }

  save (isValid) {
    if (isValid) {
      let $state = this.$state
      this.traderule.put()
          .then(() => {
        let alert = { type: 'success', 'title': 'Success!', msg: '一条交易规则修改好了.' }
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

export const TradeRuleEditComponent = {
  templateUrl: './views/app/components/trade-rule-edit/trade-rule-edit.component.html',
  controller: TradeRuleEditController,
  controllerAs: 'vm',
  bindings: {}
}
