module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins:[
    [
      "component",
      {
        "libraryName":"southgisui",
        styleLibrary:{
          'base':false,
          "styleLibraryName": "sgui-theme"
        },
        'style':false
      }
    ]
  ]
}

