class TeaKnowledgeEditController {
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
    let teaknowledgeId = $stateParams.teaknowledgeId
    let Teaknowledge = API.service('teaknowledges-show', API.all('informs'))
    Teaknowledge.one(teaknowledgeId).get()
        .then((response) => {
      this.teaknowledge = API.copy(response)
    })
  }

  save (isValid) {
    if (isValid) {
      let $state = this.$state
      this.teaknowledge.put()
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

export const TeaKnowledgeEditComponent = {
  templateUrl: './views/app/components/tea-knowledge-edit/tea-knowledge-edit.component.html',
  controller: TeaKnowledgeEditController,
  controllerAs: 'vm',
  bindings: {}
}
