# VueJS Mixins/Components

In no particular order, just some VueJS tools I've created.

### vClickAway
Monitors clicks outside of the specified object and emits an event when an outside click is detected.

TL;DR: [Live Demo](https://jsfiddle.net/Lax37km0/)

### Installation

just include it in your html code:
```html
<script src="v-click-away.js"></script>
```

### Usage

html:
```html
<template id="some-component">
	<div v-show="displayed"> this is some outer content nobody cares about
		<div @click="insideClick">
			do not hide when clicking here!!
		</div>
	</div>
</template>
```
in your component:
```javascript
Vue.component('some-component',{
	template:'#some-component'
	,mixins:[vClickAway]
	,data:function () {
		return {
			displayed:true
		}
	}
	,events:{
		'outside-click':function () {
			this.displayed=false;
		}
	}
});
```
