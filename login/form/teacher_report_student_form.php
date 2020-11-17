<form method="post" action="javascript:void(0);" id="report_student_form">
  <div class="tile-body">
    <div class="form-group">
      <label class="control-label">Report</label>
      <textarea class="form-control" name="report_content" id="report_content" required rows="5" placeholder="Enter your report"></textarea>
    </div>
    <div class="form-group">
      <label class="control-label">Student</label>
      <select class="form-control special_select" style="width: 100%;" id="student" name="student" required>
        <optgroup label="Select student"></optgroup>
        <option value=""> ------------------------------ </option>
        <?php
          $show_all_students_sql = "SELECT * FROM tbl_student";
          $show_all_students_result = mysqli_query($conn, $show_all_students_sql);

          while ($show_all_students_row = mysqli_fetch_assoc($show_all_students_result)){
            $student_id = $show_all_students_row['student_system_code'];
            $student_fname = $show_all_students_row['student_fname'];
            $student_lname = $show_all_students_row['student_lname'];
            $student_fullname = ''.$student_fname.' '.$student_lname.'';
            ?>
              <option value="<?php echo $student_id; ?>"><?php echo $student_fullname; ?></option>
            <?php
          }
        ?>
      </select>
    </div>
  </div>
  <div class="tile-footer">
    <button class="btn btn-primary" type="submit"><i class="fa fa-fw fa-lg fa-check-circle"></i>Report</button>
  </div>
</form>