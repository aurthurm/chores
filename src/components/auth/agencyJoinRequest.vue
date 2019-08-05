<template>
    <div class="modal fade" id="agencyJoinRequest" tabindex="-1" role="dialog" aria-labelledby="agencyJoinRequestLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Agency Join Request</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mx-3">
        <div class="md-form mb-1 d-flex justify-content-between">
          <i class="fas fa-user prefix text-success"></i>
          <input type="text" id="form3" class="form-control validate mb-0">
          <label data-error="wrong" data-success="right" for="form3">Agency CODE</label>
        </div>
      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button class="btn btn-success">Send Join Request<i class="fas fa-paper-plane-o ml-1"></i></button>
      </div>
    </div>
  </div>
</div>
</template>
