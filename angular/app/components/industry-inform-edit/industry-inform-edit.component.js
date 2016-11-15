class IndustryInformEditController {
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
    let industryinformId = $stateParams.industryinformId
    let IndustryInform = API.service('industryinforms-show', API.all('informs'))
    IndustryInform.one(industryinformId).get()
        .then((response) => {
      this.industryinform = API.copy(response)
    })
  }

  save (isValid) {
    if (isValid) {
      let $state = this.$state
      this.industryinform.put()
          .then(() => {
        let alert = { type: 'success', 'title': 'Success!', msg: '一条茶知识修改好了.' }
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

export const IndustryInformEditComponent = {
  templateUrl: './views/app/components/industry-inform-edit/industry-inform-edit.component.html',
  controller: IndustryInformEditController,
  controllerAs: 'vm',
  bindings: {}
}
