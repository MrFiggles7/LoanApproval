$(document).ready(
    function () {
        //event handlers
        $('#tab2').hide();
        $('#tab3').hide();
        $('#tab4').hide();
        $('#tab5').hide();
        //other functions
        var currentTab = 1;
        var salary;
        var credit;
        var months;

        $("form[name='Salary']").validate({
            // Specify validation rules
            rules: {
                // The key name on the left side is the name attribute
                // of an input field. Validation rules are defined
                // on the right side
                checkbox: "required",
            },
            // Specify validation error messages
            messages: {
                checkbox: "Please check Yes or No",
            },
            // Make sure the form is submitted to the destination defined
            // in the "action" attribute of the form when valid
            submitHandler: function (form) {
                $('#SalarySubmit').click(function (event) {
                    event.preventDefault();
                    salary = $('input[name="checkbox"]:checked').val();

                    currentTab++;
                    $('#tab' + currentTab).show().siblings().hide();
                });
            }
        });

        $("form[name='Credit']").validate({
            // Specify validation rules
            rules: {
                // The key name on the left side is the name attribute
                // of an input field. Validation rules are defined
                // on the right side
                inputCredit: {required: true,
                min: 300,
                max: 850}
            },
            // Specify validation error messages
            messages: {
                inputCredit: {required: "Please Enter a Valid Credit Score",
                min: "Please Enter a Valid Credit Score",
                max: "Please Enter a Valid Credit Score"}
            },
            // Make sure the form is submitted to the destination defined
            // in the "action" attribute of the form when valid
            submitHandler: function (form) {
                $('#CreditSubmit').click(function (event) {
                    event.preventDefault();
                    credit = parseFloat($('#inputCredit').val());
                    if(salary === "yes" && credit >= 600)
                    {
                        currentTab = 4;
                        $('#tab' + currentTab).show().siblings().hide();
                    }
                    else if(salary === "yes" && credit < 600)
                    {
                        currentTab++;
                        $('#tab' + currentTab).show().siblings().hide();
                    }
                    else if(salary === "no" && credit < 600)
                    {
                        currentTab = 5;
                        $('#tab' + currentTab).show().siblings().hide();
                    }
                    else if(salary === "no" && credit >= 600){
                        currentTab++;
                        $('#tab' + currentTab).show().siblings().hide();
                    }
                });
            }
        });

        $("form[name='Months']").validate({
            // Specify validation rules
            rules: {
                // The key name on the left side is the name attribute
                // of an input field. Validation rules are defined
                // on the right side
                inputMonths: {required: true,
                    min: 1,
                    max: 750}
            },
            // Specify validation error messages
            messages: {
                inputMonths: {required: "Please Enter a Number",
                    min: "Number of months cannot be negative",
                    max: "Maximum months is 750"}
            },
            // Make sure the form is submitted to the destination defined
            // in the "action" attribute of the form when valid
            submitHandler: function (form) {
                $('#fullSubmit').click(function (event) {
                    event.preventDefault();
                    months = parseFloat($('#inputMonths').val());

                    if(salary === "yes" && credit < 600 && months > 12)
                    {
                        currentTab = 4;
                        $('#tab' + currentTab).show().siblings().hide();
                    }
                    else if(salary === "yes" && credit < 600 && months <= 12)
                    {
                        currentTab = 5;
                        $('#tab' + currentTab).show().siblings().hide();
                    }
                    else if(salary === "no" && credit >= 600 && months > 12)
                    {
                        currentTab = 4;
                        $('#tab' + currentTab).show().siblings().hide();
                    }
                    else if(salary === "no" && credit >= 600 && months <= 12)
                    {
                        currentTab = 5;
                        $('#tab' + currentTab).show().siblings().hide();
                    }
                });
            }
        });
    }
);