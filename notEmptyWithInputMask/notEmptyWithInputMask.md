# notEmptyWithInputMask

This is to be used in combination with the inputmask.js plugin to ensure that a
value has been filled in correctly.

	$(document).ready(function() {
	    $('#form').bootstrapValidator({
	        feedbackIcons: {
	            valid: 'glyphicon glyphicon-ok',
	            invalid: 'glyphicon glyphicon-remove',
	            validating: 'glyphicon glyphicon-refresh'
	        },
	        live: 'enabled',
	        excluded: ':disabled',
	        fields: {
				'email': {
				    validators: {
				        notEmptyWithInputMask: {
				            message: 'This field is required'
				        }
				    }
				}
	        }
	    });
	});