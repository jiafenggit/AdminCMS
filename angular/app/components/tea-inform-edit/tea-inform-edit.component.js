class TeaInformEditController {
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
    let teainformId = $stateParams.teainformId
    let TeaInform = API.service('teainforms-show', API.all('informs'))
    TeaInform.one(teainformId).get()
        .then((response) => {
      this.teainform = API.copy(response)
    })
  }

  save (isValid) {
    if (isValid) {
      let $state = this.$state
      this.teainform.put()
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

export const TeaInformEditComponent = {
  templateUrl: './views/app/components/tea-inform-edit/tea-inform-edit.component.html',
  controller: TeaInformEditController,
  controllerAs: 'vm',
  bindings: {}
}
