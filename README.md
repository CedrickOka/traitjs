#![TraitJs Logo](./images/logo.png)

# TraitJs
> javascript, PHP trait polyfill

Traitjs is a library that will allow you to set up PHP trait concept..

[![GitHub version](https://badge.fury.io/gh/CedrickOka%2Ftraitjs.svg)](https://badge.fury.io/gh/CedrickOka%2Ftraitjs)
[![GitHub issues](https://img.shields.io/github/issues/CedrickOka/traitjs.svg)](https://img.shields.io/github/issues/CedrickOka/traitjs.svg)
[![GitHub forks](https://img.shields.io/github/forks/CedrickOka/traitjs.svg)](https://img.shields.io/github/forks/CedrickOka/traitjs.svg)
[![GitHub stars](https://img.shields.io/github/stars/CedrickOka/traitjs.svg)](https://github.com/CedrickOka/traitjs/stargazers)
[![GitHub license](https://img.shields.io/github/license/CedrickOka/traitjs.svg)](https://github.com/CedrickOka/traitjs/blob/master/LICENSE)

## Installing / Getting started

If you want to try the sample codes below, just open your browser's console and enter them.

Trait.js is available on [github.com](https://github.com/CedrickOka/traitjs).

### Browser

```html
<script type="text/javascript" src="trait.js"></script>
<script>
    var AlertBehavior = function(){
        this.alert = function(message){
            alert(message);
        };
    };
    var ConsoleLogBehavior = function(){
        this.console = function(message){
            console.log(message);
        };
    };

    var context = {};
    Trait.use(AlertBehavior, context);
    Trait.use(ConsoleLogBehavior, context);

    context.alert('Hello World !'); // print: Hello World !
    context.console('Hello World !'); // print: Hello World !
</script>
```

### Require.js

```javascript
require.config({
	paths: {
		trait: 'trait.js',
	}
});

define(['trait'], function (Trait) {
    var AlertBehavior = function(){
        this.alert = function(message){
            alert(message);
        };
    };
    var ConsoleLogBehavior = function(){
        this.console = function(message){
            console.log(message);
        };
    };

    var context = {};
    Trait.use(AlertBehavior, context);
    Trait.use(ConsoleLogBehavior, context);

    context.alert('Hello World !'); // print: Hello World !
    context.console('Hello World !'); // print: Hello World !
});
```

## Versioning

For the versions available, see the [tags on this repository](/tags).

## Licensing

This library is under the MIT license. See the complete license [in the library](LICENSE).
