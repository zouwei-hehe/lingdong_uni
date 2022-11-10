const init = {
  config: [
    {
      url: ['xxxxxxxxxxxxxx'],
      api: 'http://xxxxxxxxxxxxxxxx'   
    },
	{
		url: ['*'],
		api: 'http://xxxxxxxxxxxxxxxxxxxxxxxx'
	}
  ],
  getConfig: function (arg) {
    const tempUrl = arg
    let returnConfig = {}
    for (var i = 0; i < init.config.length; i++) {
      if (init.config[i].url.indexOf(tempUrl) > -1) {
        returnConfig = init.config[i]
      }
    }
    if (JSON.stringify(returnConfig) === '{}') {
      returnConfig = init.config[init.config.length - 1]
    }
    return returnConfig
  }
}
export default init