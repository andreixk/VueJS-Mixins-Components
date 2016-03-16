/**
 * ClickAway - monitors clicks (inside and) outside of the object
 * usage: include this mixin, and add @click="insideClick" to the element
 * clicking inside which should NOT hide it
 * to actually hide the element, listen to the 'outside-click' event.
 */
var vClickAway ={
	methods:{
		allClicks:function (e) {
			if(this._clickedInside){ //clicked inside the object - do not hide it
				this._clickedInside = false;  //reset it for the next time
				return;
			}
			//clicked outside the object
			this.$emit('outside-click');
		}
		// capture all clicks inside the calendar
		// and set a flag to prevent global event capture from closing the datepicker
		,insideClick:function (e) {
			this._clickedInside = true;
		}
	}
	,ready:function () {
		this._clickedInside = false
		// when clicked outside of the element, hide the calendar (if visible)
		window.addEventListener('click',this.allClicks);
	}
	,beforeDestroy:function () {
		window.removeEventListener('click',this.allClicks);
	}
};
