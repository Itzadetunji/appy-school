<form method="post" action="javascript:void(0);" id="notify_student_form">
  <div class="tile-body">
    <div class="form-group">
      <label class="control-label">Notify</label>
      <textarea class="form-control" name="notify_content" id="notify_content" required rows="5" placeholder="Enter your notification"></textarea>
    </div>
    <div class="form-group">
      <label class="control-label">Class</label>
      <select class="form-control special_select" style="width: 100%;" id="class" name="class" required>
        <optgroup label="Select class"></optgroup>
        <option value=""> ------------------------------ </option>
        <option value="0"> All Students </option>
        <?php
          $show_all_class_sql = "SELECT * FROM tbl_class";
          $show_all_class_result = mysqli_query($conn, $show_all_class_sql);

          while ($show_all_class_row = mysqli_fetch_assoc($show_all_class_result)){
            $class_id = $show_all_class_row['class_id'];
            $class_name = $show_all_class_row['class_name'];
            ?>
              <option value="<?php echo $class_id; ?>"><?php echo $class_name; ?></option>
            <?php
          }
        ?>
      </select>
    </div>
  </div>
  <div class="tile-footer">
    <button class="btn btn-primary" type="submit"><i class="fa fa-fw fa-lg fa-check-circle"></i>Notify</button>
  </div>
</form>