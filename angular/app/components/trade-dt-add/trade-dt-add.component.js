class TradeDtAddController {
  constructor (API, $state, $stateParams, $scope) {
    'ngInject'
    console.log($scope);
    $scope.vm.content = "<h3>在这里输入内容</h3>"
    $scope.froalaOptions = {
      heightMin: 300,
      imageUploadURL: "uploadImgEditor"
    }
    // $scope.froalaOptions = {
    //   toolbarButtons : ["bold", "italic", "underline", "|", "align", "formatOL", "formatUL"],
    //   heightMin: 1000
    // }

    // $scope.froalaOptions = {
    //   // toolbarButtons : ["bold", "italic", "underline", "|", "align", "formatOL", "formatUL"],
    //   heightMin: 100,
    //   heightMax: 100,
    //   placeholderText: 'klsdjfasdfjkasl;dfjaslkjfasj',
    //   pastePlain: true,
    //   theme: 'gray'
    // }

    this.$state = $state
    this.formSubmitted = false
    this.API = API
    this.alerts = []

    if ($stateParams.alerts) {
      this.alerts.push($stateParams.alerts)
    }
  }

  save (isValid) {
    this.$state.go(this.$state.current, {}, { alerts: 'test' })
    if (isValid) {
      let Dtinforms = this.API.service('dtinforms', this.API.all('informs'))
      let $state = this.$state

      Dtinforms.post({
        'title': this.title,
        'content': this.content
        // ,
        // 'description': this.description
      }).then(function () {
        let alert = { type: 'success', 'title': 'Success!', msg: '一条新的动态添加完成!' }
        $state.go($state.current, { alerts: alert})
      }, function (response) {
        let alert = { type: 'error', 'title': 'Error!', msg: response.data.message }
        $state.go($state.current, { alerts: alert})
      })
    } else {
      this.formSubmitted = true
    }
  }

  $onInit () {}
}

export const TradeDtAddComponent = {
  templateUrl: './views/app/components/trade-dt-add/trade-dt-add.component.html',
  controller: TradeDtAddController,
  controllerAs: 'vm',
  bindings: {}
}
