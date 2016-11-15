class TeaCultureEditController {
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
    let teacultureId = $stateParams.teacultureId
    let Teaculture = API.service('teacultures-show', API.all('informs'))
    Teaculture.one(teacultureId).get()
        .then((response) => {
      this.teaculture = API.copy(response)
    })
  }

  save (isValid) {
    if (isValid) {
      let $state = this.$state
      this.teaculture.put()
          .then(() => {
        let alert = { type: 'success', 'title': 'Success!', msg: '一条茶文化修改好了.' }
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

export const TeaCultureEditComponent = {
  templateUrl: './views/app/components/tea-culture-edit/tea-culture-edit.component.html',
  controller: TeaCultureEditController,
  controllerAs: 'vm',
  bindings: {}
}
