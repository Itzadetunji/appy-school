<?php error_reporting(0); ?>
<?php require ('config.php'); ?>

<?php
  if ( isset($_GET['type']) && isset($_GET['from']) && isset($_GET['to']) ){
    $m_type = mysqli_real_escape_string($conn, $_GET['type']);
    $m_from = mysqli_real_escape_string($conn, $_GET['from']);
    $m_to = mysqli_real_escape_string($conn, $_GET['to']);
  } else {
    $m_type = "";
    $m_from = "";
    $m_to = "";
  }
?>





<!-- Modal Header -->
<div class="modal-header chat_header">
  <h4 class="modal-title"><span class="fa fa-comments"></span> <?php chat_modal_name($m_type, $m_to); ?></h4>
  <button class="close chat_close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
</div>
<!-- //Modal Header -->





<!-- Modal Body -->
<div class="modal-body">
  <div class="messanger">
    <div class="container">
      <div class="messages" send-to="<?php echo $m_to; ?>" send-from="<?php echo $m_from; ?>" send-type="<?php echo $m_type; ?>">
      </div>
      <div class="sender">
        <textarea type="text" name="message" id="chat_message" placeholder="Enter Message..."></textarea>
        <button class="btn btn-primary" type="button" id="send_chat" send-to="<?php echo $m_to; ?>" send-from="<?php echo $m_from; ?>" send-type="<?php echo $m_type; ?>"><i class="fa fa-lg fa-fw fa-paper-plane"></i></button>
      </div>
    </div>
  </div>
</div>
<!-- //Modal Body -->






<!-- Modal Footer -->
<br>
<div class="modal-footer chat_footer">
  <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
</div>
<!-- //Modal Footer -->