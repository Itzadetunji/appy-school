$(document).ready(function() {
    "use strict";
    $("#page_loader").fadeOut("medium");
    $(".special_select").select2();
    $("#dtable").DataTable();
    var treeviewMenu = $(".app-menu");
    // Toggle Sidebar
        $('[data-toggle="sidebar"]').click(function(event) {
        event.preventDefault();
        $(".app").toggleClass("sidenav-toggled");
    });
    // Activate sidebar treeview toggle
        $("[data-toggle='treeview']").click(function(event) {
        event.preventDefault();
        if (!$(this).parent().hasClass("is-expanded")) {
            treeviewMenu.find("[data-toggle='treeview']").parent().removeClass("is-expanded");
        }
        $(this).parent().toggleClass("is-expanded");
    });
    // Set initial active toggle
        $("[data-toggle='treeview.'].is-expanded").parent().toggleClass("is-expanded");
    //Activate bootstrip tooltips
        $("[data-toggle='tooltip']").tooltip();
    // Login Page Flipbox control
        $('.login-content [data-toggle="flip"]').click(function() {
        $(".login-box").toggleClass("flipped");
        return false;
    });
    // $("#custom_search").on("keyup", function() {
    //   var value = $(this).val().toLowerCase();
    //   $(".mini_search *").filter(function() {
    //   $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    //   if( $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1) == "" ){
    //	 // $('#no_result').hide();
    //	 $('#no_result').css("display", "none");
    //   } else {
    //	 $('#no_result').show();
    //   }
    //   });
    // });
    // $("#custom_search").on("keyup", function() {
    //   var value = $(this).val().toLowerCase();
    //   $("#mini_search *").filter(function() {
    // 		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    //   });
    // });
        $(document).ready(function() {
        $(".respond-table").basictable();
        $("#table-breakpoint").basictable({
            breakpoint: 768
        });
        $("#table-swap-axis").basictable({
            swapAxis: true
        });
        $("#table-force-off").basictable({
            forceResponsive: false
        });
        $("#table-no-resize").basictable({
            noResize: true
        });
        $("#table-two-axis").basictable();
        $("#table-max-height").basictable({
            tableWrapper: true
        });
    });
    $(".openmodal").on("click", function() {
        var dataURL = $(this).attr("data-href");
        $(".modal-content").load(dataURL, function() {
            $("#chat_modal").modal({
                show: true
            });
        });
    });
    $("#chat_modal").on("shown.bs.modal", function() {
        setInterval(function() {
            fetch_user_chat_history();
        }, 1500);
    });
    function fetch_user_chat_history() {
        var to_user_id = $(".messages").attr("send-to");
        var from_user_id = $(".messages").attr("send-from");
        var message_type = $(".messages").attr("send-type");
        if (to_user_id != "" && from_user_id != "" && message_type != "") {
            $.ajax({
                url: "api/get_chat_history.php",
                method: "POST",
                data: {
                    to_user_id: to_user_id,
                    from_user_id: from_user_id,
                    message_type: message_type
                },
                success: function(data) {
                    $(".messages").html(data);
                }
            });
        }
    }
    $(document).on("click", "#send_chat", function() {
        var to_user_id = $(this).attr("send-to");
        var from_user_id = $(this).attr("send-from");
        var message_type = $(this).attr("send-type");
        var chat_message_val = $("#chat_message").val();
        if (chat_message != "") {
            $.ajax({
                url: "api/insert_chat.php",
                method: "POST",
                data: {
                    to_user_id: to_user_id,
                    from_user_id: from_user_id,
                    message_type: message_type,
                    chat_message: chat_message_val
                },
                success: function(data) {
                    $("#chat_message").val("");
                    $(".messages").html(data);
                }
            });
        } else {}
    });
    $(document).on("submit", "#claim_child_form", function() {
        var child_admission_number_val = $("#child_admission_number").val();
        var parent_confirm_code_val = $("#parent_confirm_code").val();
        var gender_val = $("#gender").val();
        var relationship_val = $("#relationship").val();
        $.ajax({
            url: "api/claim_child.php",
            method: "POST",
            data: {
                child_admission_number: child_admission_number_val,
                parent_confirm_code: parent_confirm_code_val,
                gender: gender_val,
                relationship: relationship_val
            },
            beforeSend: function() {
                $("#claim_child_status").html('<div class="alert alert-warning"><strong><i class="fa fa-spin fa-spinner"></i> Loading ...</strong></div>');
            },
            success: function(data) {
                $("#claim_child_status").html(data);
                $("#child_admission_number").val("");
                $("#parent_confirm_code").val("");
                $("#gender").val("");
                $("#relationship").val("");
            }
        });
    });
    $(document).on("submit", "#report_student_form", function() {
        var report_content_val = $("#report_content").val();
        var student_val = $("#student").val();
        $.ajax({
            url: "api/report_student.php",
            method: "POST",
            data: {
                report_content: report_content_val,
                student: student_val
            },
            beforeSend: function() {
                $("#report_student_status").html('<div class="alert alert-warning"><strong><i class="fa fa-spin fa-spinner"></i> Loading ...</strong></div>');
            },
            success: function(data) {
                $("#report_student_status").html(data);
                $("#report_content").val("");
                $("#student").val("");
            }
        });
    });
    $(document).on("submit", "#parent_update_profile_form", function() {
        var title_val = $("#title").val();
        var first_name_val = $("#first_name").val();
        var last_name_val = $("#last_name").val();
        var email_address_val = $("#email_address").val();
        var phone_contact_val = $("#phone_contact").val();
        $.ajax({
            url: "api/update_profile_parent.php",
            method: "POST",
            data: {
                title: title_val,
                first_name: first_name_val,
                last_name: last_name_val,
                email_address: email_address_val,
                phone_contact: phone_contact_val
            },
            beforeSend: function() {
                $("#parent_update_profile_status").html('<div class="alert alert-warning"><strong><i class="fa fa-spin fa-spinner"></i> Loading ...</strong></div>');
            },
            success: function(data) {
                $("#parent_update_profile_status").html(data);
                // $('#title').val("");
                // $('#first_name').val("");
                // $('#last_name').val("");
                // $('#email_address').val("");
                // $('#phone_contact').val("");
                        }
        });
    });
    $(document).on("submit", "#teacher_update_profile_form", function() {
        var title_val = $("#title").val();
        var first_name_val = $("#first_name").val();
        var last_name_val = $("#last_name").val();
        var email_address_val = $("#email_address").val();
        var phone_contact_val = $("#phone_contact").val();
        $.ajax({
            url: "api/update_profile_teacher.php",
            method: "POST",
            data: {
                title: title_val,
                first_name: first_name_val,
                last_name: last_name_val,
                email_address: email_address_val,
                phone_contact: phone_contact_val
            },
            beforeSend: function() {
                $("#teacher_update_profile_status").html('<div class="alert alert-warning"><strong><i class="fa fa-spin fa-spinner"></i> Loading ...</strong></div>');
            },
            success: function(data) {
                $("#teacher_update_profile_status").html(data);
                // $('#title').val("");
                // $('#first_name').val("");
                // $('#last_name').val("");
                // $('#email_address').val("");
                // $('#phone_contact').val("");
                        }
        });
    });
    $(document).on("submit", "#parent_update_password_form", function() {
        var current_password_val = $("#current_password").val();
        var new_password_val = $("#new_password").val();
        var confirm_new_password_val = $("#confirm_new_password").val();
        $.ajax({
            url: "api/update_parent_password.php",
            method: "POST",
            data: {
                current_password: current_password_val,
                new_password: new_password_val,
                confirm_new_password: confirm_new_password_val
            },
            beforeSend: function() {
                $("#parent_update_password_status").html('<div class="alert alert-warning"><strong><i class="fa fa-spin fa-spinner"></i> Loading ...</strong></div>');
            },
            success: function(data) {
                $("#parent_update_password_status").html(data);
                $("#current_password").val("");
                $("#new_password").val("");
                $("#confirm_new_password").val("");
            }
        });
    });
    $(document).on("submit", "#teacher_update_password_form", function() {
        var current_password_val = $("#current_password").val();
        var new_password_val = $("#new_password").val();
        var confirm_new_password_val = $("#confirm_new_password").val();
        $.ajax({
            url: "api/update_teacher_password.php",
            method: "POST",
            data: {
                current_password: current_password_val,
                new_password: new_password_val,
                confirm_new_password: confirm_new_password_val
            },
            beforeSend: function() {
                $("#teacher_update_password_status").html('<div class="alert alert-warning"><strong><i class="fa fa-spin fa-spinner"></i> Loading ...</strong></div>');
            },
            success: function(data) {
                $("#teacher_update_password_status").html(data);
                $("#current_password").val("");
                $("#new_password").val("");
                $("#confirm_new_password").val("");
            }
        });
    });
    $(document).on("submit", "#notify_student_form", function() {
        var notify_content_val = $("#notify_content").val();
        var class_val = $("#class").val();
        $.ajax({
            url: "api/notify_student.php",
            method: "POST",
            data: {
                notify_content: notify_content_val,
                class: class_val
            },
            beforeSend: function() {
                $("#notify_student_status").html('<div class="alert alert-warning"><strong><i class="fa fa-spin fa-spinner"></i> Loading ...</strong></div>');
            },
            success: function(data) {
                $("#notify_student_status").html(data);
                $("#notify_content").val("");
                $("#class").val("");
            }
        });
    });
    $(document).on("submit", "#forget_password_teacher_form", function() {
        var teacher_email_val = $("#teacher_email").val();
        $.ajax({
            url: "api/teacher_forget_password.php",
            method: "POST",
            data: {
                teacher_email: teacher_email_val
            },
            beforeSend: function() {
                $("#forget_password_teacher_status").html('<div class="alert alert-warning"><strong><i class="fa fa-spin fa-spinner"></i> Loading ...</strong></div>');
            },
            success: function(data) {
                $("#forget_password_teacher_status").html(data);
                $("#teacher_email").val("");
            }
        });
    });
    $(document).on("submit", "#forget_password_parent_form", function() {
        var parent_email_val = $("#parent_email").val();
        $.ajax({
            url: "api/parent_forget_password.php",
            method: "POST",
            data: {
                parent_email: parent_email_val
            },
            beforeSend: function() {
                $("#forget_password_parent_status").html('<div class="alert alert-warning"><strong><i class="fa fa-spin fa-spinner"></i> Loading ...</strong></div>');
            },
            success: function(data) {
                $("#forget_password_parent_status").html(data);
                $("#parent_email").val("");
            }
        });
    });
    $(document).on("submit", "#reset_password_form", function() {
        var new_password_val = $("#new_password").val();
        var token_val = $("#token").val();
        $.ajax({
            url: "api/reset_password.php",
            method: "POST",
            data: {
                new_password: new_password_val,
                token: token_val
            },
            beforeSend: function() {
                $("#reset_password_status").html('<div class="alert alert-warning"><strong><i class="fa fa-spin fa-spinner"></i> Loading ...</strong></div>');
            },
            success: function(data) {
                $("#reset_password_status").html(data);
                $("#new_password").val("");
                $("#token").val("");
            }
        });
    });
});

function filter_list() {
    // needed variables
    var input, filter, ul, li, a, i, txtValue, no_result;
    input = document.getElementById("custom_search");
    filter = input.value.toLowerCase();
    ul = document.getElementById("mini_search");
    li = ul.getElementsByTagName("li");
    no_result = document.getElementById("no_result");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.innerText;
 // a.textContent ||
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}