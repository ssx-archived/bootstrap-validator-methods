$.fn.bootstrapValidator.validators.checkNationalInsuranceNumber = {
    /**
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field The jQuery object represents the field element
     * @param {Object} options The validator options
     * @returns {boolean}
     */
    validate: function(validator, $field, options) {

        if ($field.val().length > 0) {
            var fieldValue = $field.val();
            var fieldPattern = new RegExp("^[A-CEGHJ-PR-TW-Z]{1}[A-CEGHJ-NPR-TW-Z]{1}[0-9]{6}[A-DFM]{0,1}$");
            return fieldPattern.test(fieldValue);
        } else
        {
            // This will return true and allow empty submission
            return true;
        }
    }
};