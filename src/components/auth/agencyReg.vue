<template>
    <div class="modal fade" id="registerAgency" tabindex="-1" role="dialog" aria-labelledby="registerAgencyLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Agency Registration</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mx-0">
        <div class="md-form mb-1 d-flex justify-content-between">
          <i class="fas fa-user prefix text-success"></i>
          <input type="text" id="orangeForm-name" class="form-control validate mb-1">
          <label data-error="wrong" data-success="right" for="orangeForm-name">Ageny Name</label>
        </div>
        <div class="md-form mb-1 d-flex justify-content-between">
          <i class="fas fa-envelope prefix text-success"></i>
          <input type="email" id="orangeForm-email" class="form-control validate mb-1">
          <label data-error="wrong" data-success="right" for="orangeForm-email">Agency Email</label>
        </div>
        <div class="md-form mb-1 d-flex justify-content-between">
          <i class="fas fa-envelope prefix text-success"></i>
          <input type="email" id="orangeForm-email" class="form-control validate mb-1">
          <label data-error="wrong" data-success="right" for="orangeForm-email">Agency username</label>
        </div>

        <div class="md-form mb-1 d-flex justify-content-between">
          <i class="fas fa-lock prefix text-success"></i>
          <input type="password" id="orangeForm-pass" class="form-control validate mb-1">
          <label data-error="wrong" data-success="right" for="orangeForm-pass">Agency Password</label>
        </div>

        <div class="md-form mb-1 d-flex justify-content-between">
          <i class="fas fa-lock prefix text-success"></i>
          <input type="password" id="orangeForm-pass" class="form-control validate mb-1">
          <label data-error="wrong" data-success="right" for="orangeForm-pass">Confirm Password</label>
        </div>

      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button class="btn btn-success">Register Agency</button>
      </div>
    </div>
  </div>
</div>
</template>
