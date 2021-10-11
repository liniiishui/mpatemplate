module.exports = {
	root: true,
  // 默认使用 Espree 作为其解析器，为了更好地兼容 babel，推荐使用 babel-eslint 作为解析器
  parserOptions: {
		parser: "babel-eslint",
  },
  // 启用的环境，一个环境定义了一组预定义的全局变量
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // 全局变量
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
		axios: true,
		$: true,
		_: true,
		CD: true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  // 规则设置
  // off 或 0 - 关闭规则
  // warn 或 1 - 开启规则，使用警告级别的错误
  // error 或 2 - 开启规则，使用错误级别的错误
	rules: {		
		'no-trailing-spaces': 2,	// 禁用行尾空格
		'space-before-blocks': 2, // 块级前需要加一个空格
		'accessor-pairs': 2, // 强制 getter 和 setter 在对象中成对出现
    'array-bracket-spacing': [2, 'never'], // 禁止在数组括号内出现空格
    'arrow-spacing': [2, { 'before': true, 'after': true }], // 强制箭头函数的箭头前后使用一致的空格
    'block-spacing': [2, 'always'], // 强制在代码块中开括号前和闭括号后有空格
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }], // 将大括号放在控制语句或声明语句同一行的位置
    'camelcase': [2, { 'properties': 'always' }], // 使用骆驼拼写法命名约定
    'comma-dangle': [2, 'never'], // 禁止对象字面量最后一个末尾逗号
    'comma-spacing': [2, { 'before': false, 'after': true }], // 要求在逗号后使用一个或多个空格
    'comma-style': [2, 'last'], // 要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
    'curly': [2, 'all'], // 所有控制语句前后时刻保留大括号
    'default-case': 1, // 要求 switch 语句中有 default 分支
    'dot-location': [2, 'property'],  // 表达式中的点号操作符应该和属性在同一行
    'eol-last': 2, // 在非空文件末尾至少存在一行空行
    // 'eqeqeq': [2, 'always', { 'null': 'ignore' }], // 强制使用 === 和 !==，除了与 null 字面量进行比较时
    'func-call-spacing': 2, // 禁止在函数标识符和其调用之间有空格
    'generator-star-spacing': [2, { 'before': true, 'after': false }], // 强制在 * 和 function 关键字之间有空格
    'handle-callback-err': [2, '^(err|error)$' ], // 要求回调函数中有容错处理
    'indent': [2, 2, { 'SwitchCase': 1 }], // 使用 2 个空格缩进，switch 语句中的 case 子句的缩进级别为1
    'jsx-quotes': [2, 'prefer-single'], // 强制所有不包含单引号的 JSX 属性值使用单引号
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }], // 要求在对象字面量的冒号和值之间存在至少有一个空格
    'keyword-spacing': [2, { 'before': true, 'after': true }], // 在关键字前后至少有一个空格
    'new-cap': [2, { 'newIsCap': true, 'capIsNew': false }], // 要求调用 new 操作符时有首字母大小的函数，允许调用首字母大写的函数时没有 new 操作符
    'new-parens': 2, // 强制括号后的新构造函数没有参数
    'no-array-constructor': 2, // 禁止使用 Array 构造函数
    'no-caller': 2, // 禁用 arguments.caller 或 arguments.callee
    'no-console': 0, // 禁用 console
    'no-debugger': 1, // 开发时可用debugger，但会警告。这样可用提示开发者调试完后，及时清除调试代码
    'no-extend-native': 2, // 禁止扩展原生类型
    'no-extra-bind': 2, // 禁止不必要的 .bind() 调用
    'no-extra-parens': 2, // 禁止不必要的圆括号
    'no-floating-decimal': 2, // 禁止数字字面量中使用前导和末尾小数点
    'no-iterator': 2, // 禁用 __iterator__ 属性
    'no-label-var': 2, // 不允许标签与变量同名
    'no-labels': [2, { 'allowLoop': false, 'allowSwitch': false }], // 禁用标签语句
    'no-lone-blocks': 2, // 禁用不必要的嵌套块
    'no-multi-spaces': 2, // 禁止使用多个空格
    'no-multi-str': 2, // 禁止使用多行字符串
    'no-multiple-empty-lines': [2, { 'max': 1 }], // 禁止出现多行空行，强制最大连续空行数为1
    'no-new-object': 2, // 禁用 Object 的构造函数
    'no-new-require': 2, // 禁止调用 require 时使用 new 操作符
    'no-new-wrappers': 2, // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-octal-escape': 2, // 禁止在字符串中使用八进制转义序列
    'no-path-concat': 2, // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-proto': 2, // 禁用 __proto__ 属性
    'no-return-assign': [2, 'except-parens'], // 禁止在 return 语句中使用赋值语句，除非使用括号把它们括起来
    'no-self-compare': 2, // 禁止自身比较
    'no-sequences': 2, // 禁用逗号操作符
    'no-throw-literal': 2, // 禁止抛出异常字面量
    'no-undef': 0,
    'no-undef-init': 2, // 不允许初始化变量值为 undefined
    'no-unmodified-loop-condition': 2, // 禁用一成不变的循环条件
    'no-unneeded-ternary': 2, // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-useless-call': 2, // 禁止不必要的 .call() 和 .apply()
    'no-useless-computed-key': 2, // 禁止在对象中使用不必要的计算属性
    'no-useless-constructor': 2, // 禁用不必要的构造函数
    'no-whitespace-before-property': 2, // 禁止属性前有空白
    'object-curly-spacing': [2, 'always', { objectsInObjects: false }], // 要求花括号内有空格 (除了 {})
    'one-var': [2, { 'initialized': 'never' }], // 要求每个作用域的初始化的变量有多个变量声明
    'operator-linebreak': [2, 'after', { 'overrides': { '?': 'before', ':': 'before' } }], // 句太长不能放在一行时，换行符一般插入到分离表达式的操作符后面
    'padded-blocks': [2, 'never'], // 禁止块语句和类的开始或末尾有空行
    'prefer-const': 2, // 要求使用 const 声明那些声明后不再被修改的变量
    'quotes': [2, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }], // 要求尽可能地使用单引号
    'semi': [2, 'never'], // 禁止在语句末尾使用分号
    'semi-spacing': [2, { 'before': false, 'after': true }], // 分号之后强制有空格
    'space-before-function-paren': [2, 'always'], // 要求在参数的 ( 前面有一个空格
    'space-in-parens': [2, 'never'], // 强制圆括号内没有空格
    'space-infix-ops': 2, // 要求中缀操作符周围有空格
    'space-unary-ops': [2, { 'words': true, 'nonwords': false }], // 单词类一元操作符之前或之后存在空格
    'spaced-comment': [2, 'always', { 'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','] }], // 在注释前必须跟随至少一个空白
    'template-curly-spacing': [2, 'never'], // 禁止花括号内出现空格
    'wrap-iife': [2, 'any'], // 需要把立即执行的函数包裹起来
    'yield-star-spacing': [2, { 'before': false, 'after': true }], // 强制在 yield* 表达式中 * 后使用空格
    'yoda': [2, 'never'], // 禁止Yoda条件
    'vue/jsx-uses-vars': 2,
		'no-const-assign': 2, // 禁止修改const声明的变量
		'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
		'no-dupe-args': 2, // 函数参数不能重复
		'no-duplicate-case': 2, // switch中的case标签不能重复
		'no-empty': 2, // 块语句中的内容不能为空
		'no-empty-character-class': 2, // 正则表达式中的[]内容不能为空
		'no-extra-semi': 2, // 禁止多余的冒号
		'no-func-assign': 2, // 禁止重复的函数声明
		'no-irregular-whitespace': 2, // 不能有不规则的空格
		'no-mixed-spaces-and-tabs': [
			2,
			false
		], // 禁止混用tab和空格
		'linebreak-style': [
			0,
			'windows'
		], // 换行风格
		'no-redeclare': 2, // 禁止重复声明变量
		'no-unreachable': 2, // 不能有无法执行的代码
		'no-unused-vars': [
			1,
			{
				'vars': 'all',
				'args': 'none'
			}
		], // 不能有声明后未被使用的变量或参数
		'no-var': 0, // 禁用var，用let和const代替
		'no-with': 2, // 禁用with
		'block-scoped-var': 0, //块语句中使用var
		'dot-notation': [
			0,
			{
				'allowKeywords': true
			}
		], // 避免不必要的方括号
		// 强制使用es6属性简写写法
		'object-shorthand': [
			2, 
			'always',
			{ 'avoidExplicitReturnArrows': true }
		],
		'no-trailing-spaces': 2,	// 禁用行尾空格
		'block-spacing': 2, // 强制在代码块中开括号前和闭括号后有空格
		'space-before-blocks': 2 // 块级前需要加一个空格
	}
};
