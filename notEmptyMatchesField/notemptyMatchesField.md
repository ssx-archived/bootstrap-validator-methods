# notEmptyMatchesField

This is to be used in conjuction with the [robinherbots/jquery.inputmask(https://github.com/RobinHerbots/jquery.inputmask) plugin to handle the validation of email address entry and that one field matches another.

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
				        notEmptyMatchesField: {
				            message: 'Your email address and confirmation email address do not match',
				            target: '#email_confirmation'
				        }
				    }
				},
				'email_confirmation': {
				    validators: {
				        notEmptyMatchesField: {
				            message: 'Your email address and confirmation email address do not match',
				            target: '#email'
				        }
				    }
				}
	        }
	    });
	});