var express = require ('express');
var router = express.Router();
const datepicker = require('js-datepicker')


router.get('/', (req,res,next)=> {
    res.render('turno');
})

$(function () {
    $('#datepicker').datepicker({
        format: "dd/mm/yyyy",
        autoclose: true,
        todayHighlight: true,
        showOtherMonths: true,
        selectOtherMonths: true,
        autoclose: true,
        changeMonth: true,
        changeYear: true,
        orientation: "button"
    });
});












module.exports = router;datepicker;