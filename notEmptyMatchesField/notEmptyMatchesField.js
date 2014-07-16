$.fn.bootstrapValidator.validators.notEmptyMatchesField = {
    /**
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field The jQuery object represents the field element
     * @param {Object} options The validator options
     * @returns {boolean}
     */
    validate: function(validator, $field, options) {
    	if (($field.inputmask('unmaskedvalue').length > 0) && ($field.inputmask('unmaskedvalue').length > 0))
    	{
			if (($field.inputmask('isComplete') ==  true) && ($field.inputmask('isComplete') ==  true))
			{
	        	var valueField = $field.inputmask('unmaskedvalue');
	        	var valueTarget = $(options.target).inputmask('unmaskedvalue');

	        	if (valueField == valueTarget)
	        	{
	        		// This field matches the target field
					return true;
	        	} else
	        	{
	        		// The fields do not match, fail
					return false;
	        	}
			} else {
				// One of the fields isn't complete
				return false;
			}
		} else {
		 	// This field or the target field isn't complete
			return false;
		}
    }
};
