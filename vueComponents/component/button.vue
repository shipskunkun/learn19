<template>
	<button :class="'btn-'+size" :disable="disabled"></button>
</template>

<script type="text/javascript">
	function oneOf (value, validList) {
	    for (let i = 0; i < validList.length; i++) {
	      if (value === validList[i]) {
	        return true;
	      }
	    }
	    return false;
	}
	Vue.component('button', {
		props: {
	      	size: {
	        	validator (value) {
	          		return oneOf(value, ['small', 'large', 'default']);
	        	},
	        	default: 'default'
	      	},
	      	disabled: {
	       		type: Boolean,
	        	default: false
	      	}
	    },
	    data: function() {
	    	return {
	    		size: small,
	    		disabled: true
	    	}
	    }
	    template: `<button :class="'btn-'+size":disable="disabled"></button>`
	})
</script>