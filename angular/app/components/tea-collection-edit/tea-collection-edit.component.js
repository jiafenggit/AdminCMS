class TeaCollectionEditController {
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
    let teacollectionId = $stateParams.teacollectionId
    let TeaCollection = API.service('teacollections-show', API.all('informs'))
    TeaCollection.one(teacollectionId).get()
        .then((response) => {
      this.teacollection = API.copy(response)
    })
  }

  save (isValid) {
    if (isValid) {
      let $state = this.$state
      this.teacollection.put()
          .then(() => {
        let alert = { type: 'success', 'title': 'Success!', msg: '一条藏品展示修改好了.' }
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

export const TeaCollectionEditComponent = {
  templateUrl: './views/app/components/tea-collection-edit/tea-collection-edit.component.html',
  controller: TeaCollectionEditController,
  controllerAs: 'vm',
  bindings: {}
}
