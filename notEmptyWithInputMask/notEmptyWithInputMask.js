$.fn.bootstrapValidator.validators.notEmptyWithInputMask = {
    /**
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field The jQuery object represents the field element
     * @param {Object} options The validator options
     * @returns {boolean}
     */
    validate: function(validator, $field, options) {
    	if ($field.inputmask('unmasked value').length > 0)
    	{
			if ($field.inputmask('isComplete') ==  true) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
    }
};