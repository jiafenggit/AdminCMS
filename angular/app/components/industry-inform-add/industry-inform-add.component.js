class IndustryInformAddController {
  constructor (API, $state, $stateParams, $scope) {
    'ngInject'
    $scope.vm.content = "<h3>在这里输入内容</h3>"
    $scope.froalaOptions = {
      // placeholder: "Edit Me",
      heightMin: 300,
      language: 'zh_cn',
      imageUploadURL: "upload/imgEditor"
    }

    this.$state = $state
    this.formSubmitted = false
    this.API = API
    this.alerts = []
    if ($stateParams.alerts) {
      this.alerts.push($stateParams.alerts)
    }
  }

  save (isValid) {
    if (isValid) {
      let Teaknowledges = this.API.service('industryinforms', this.API.all('informs'))
      // let $state = this.$state

      Teaknowledges.post({
        'title': this.title,
        'content': this.content
      }).then(() => {
        let alert = { type: 'success', 'title': 'Success!', msg: '成功添加了一条茶知识.' }
        // $state.go($state.current, { alerts: alert})
        this.alerts.push(alert);
    }, (response) => {
        let alert = { type: 'error', 'title': 'Error!', msg: response.data.message }
        // $state.go($state.current, { alerts: alert})
        this.alerts.push(alert);
      })
    } else {
      this.formSubmitted = true
    }
  }

  $onInit () {}
}

export const IndustryInformAddComponent = {
  templateUrl: './views/app/components/industry-inform-add/industry-inform-add.component.html',
  controller: IndustryInformAddController,
  controllerAs: 'vm',
  bindings: {}
}
