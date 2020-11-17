<form method="post" action="api/upload_note.php" enctype="multipart/form-data">
  <div class="tile-body">
    <div class="form-group">
      <label class="control-label">Note title</label>
      <input class="form-control" type="text" id="note_title" name="note_title" required placeholder="Enter your note title">
    </div>
    <div class="form-group">
      <label class="control-label">Note Class</label>
      <select class="form-control special_select" style="width: 100%;" id="note_class" name="note_class" required>
        <optgroup label="Select class"></optgroup>
        <option value=""> ------------------------------ </option>
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
    <div class="form-group">
      <label class="control-label">Note Subject</label>
      <select class="form-control special_select" style="width: 100%;" id="note_subject" name="note_subject" required>
        <optgroup label="Select subject"></optgroup>
        <option value=""> ------------------------------ </option>
        <?php
          $get_subjects_sql = "SELECT * FROM tbl_subject";
          $get_subjects_result = mysqli_query($conn, $get_subjects_sql);

          while ($get_subjects_row = mysqli_fetch_assoc($get_subjects_result)){
            $subject_id = $get_subjects_row['subject_id'];
            $subject_name = $get_subjects_row['subject_name'];
            $subject_class_id = $get_subjects_row['subject_class_id'];

            $class_sql = "SELECT * FROM tbl_class WHERE class_id = '$subject_class_id'";
            $class_result = mysqli_query($conn, $class_sql);
            $class_row = mysqli_fetch_assoc($class_result);

            $class = $class_row['class_name']; 
            ?>
              <option value="<?php echo $subject_id; ?>"><?php echo $subject_name; ?> [<?php echo $class; ?>]</option>
            <?php
          }
        ?>
      </select>
    </div>
    <div class="form-group">
      <label class="control-label">Upload Note</label>
      <input class="form-control-file" id="upload_note" name="upload_note" type="file" accept=".pdf" required>
    </div>
  </div>
  <div class="tile-footer">
    <button class="btn btn-primary" type="submit" name="upload_note_btn"><i class="fa fa-fw fa-lg fa-check-circle"></i>Upload Note</button>
  </div>
</form>