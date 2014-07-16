# checkNationalInsuranceNumber

This is to be used in to validate a UK National Insurance number.

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
				        checkNationalInsuranceNumber: {
				            message: 'Your national insurance number does not appear to be valid'
				        }
				    }
				}
	        }
	    });
	});