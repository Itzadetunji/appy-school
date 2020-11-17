<form method="post" action="javascript:void(0);" id="claim_child_form">
  <div class="tile-body">
    <div class="form-group">
      <label class="control-label">Child Admission No.</label>
      <input class="form-control" id="child_admission_number" name="child_admission_number" type="text" required placeholder="Enter your child's admission number">
    </div>
    <div class="form-group">
      <label class="control-label">Parent Confirm Code</label>
      <input class="form-control" id="parent_confirm_code" name="parent_confirm_code" type="text" required placeholder="Enter parent confirmation code">
    </div>
    <div class="form-group">
      <label class="control-label">Gender</label>
      <select class="form-control" id="gender" required name="gender">
        <option value="">Select Gender</option>
        <option value="M">Male</option>
        <option value="F">Female</option>
      </select>
    </div>
    <div class="form-group">
      <label class="control-label">Relationship</label>
      <select class="form-control" id="relationship" required name="relationship">
        <option value="">Select Relationship</option>
        <option value="DAD">DAD</option>
        <option value="MUM">MUM</option>
        <option value="GUARDIAN">GUARDIAN</option>
      </select>
    </div>
  </div>
  <div class="tile-footer">
    <button class="btn btn-primary" type="submit"><i class="fa fa-fw fa-lg fa-check-circle"></i>Claim child</button>
  </div>
</form>