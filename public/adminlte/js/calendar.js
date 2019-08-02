
$(document).ready(function () {
    $('#datetimepicker-from').datetimepicker({
        format: 'YYYY-MM-DD',
        locale: 'ja',
        toolbarPlacement: 'bottom',
        showTodayButton: false,
	      showClear: false,
        ignoreReadonly: true,
        allowInputToggle: true,
        useCurrent : false,
	      maxDate: new Date($('#dateto').val())
    });

    $('#datetimepicker-to').datetimepicker({
        format: 'YYYY-MM-DD',
        locale: 'ja',
        toolbarPlacement: 'bottom',
        showTodayButton: false,
	      showClear: false,
        ignoreReadonly: true,
        allowInputToggle: true,
        useCurrent: false,
        minDate: new Date($('#datefrom').val()),
        maxDate: new Date($('#dateto').val())
    });
    $("#datetimepicker-from").on("dp.change", function (e) {
        $('#datetimepicker-to').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker-to").on("dp.change", function (e) {
        $('#datetimepicker-from').data("DateTimePicker").maxDate(e.date);
    });
});
