<template>    
<!-- Central Modal Medium Success -->
<div class="modal fade" id="placeBid" tabindex="-1" role="dialog" aria-labelledby="placeBidLabel"
  aria-hidden="true">
	<div class="modal-dialog modal-notify modal-success modal-lg" role="document">
			<div class="modal-content">
					<div class="modal-header">
							<h5 class="heading lead" id="bidModalLabel">Place a bid for this Chore</h5>
							<button class="close" type="button" data-dismiss="modal"><span class="white-text" aria-hidden="true">×</span></button>
					</div>
					<div class="modal-body mx-3">

						<div class="md-form mb-5">
							<i class="fas fa-dollar prefix grey-text"></i>
							<input type="number" id="bidAmount" class="form-control" placeholder="Bid Amount ($)">
							<label for="bidAmount"></label>
						</div>

						<div class="md-form">
							<i class="fas fa-pencil prefix grey-text"></i>
							<textarea type="text" id="bidMessage" class="md-textarea form-control" rows="4" placeholder="Your message"></textarea>
							<label data-error="wrong" data-success="right" for="bidMessage"></label>
						</div>

					</div>
					<div class="modal-footer justify-content-center">
							<button class="btn btn-success" type="button">Place Bid</button>
							<button class="btn btn-outline-success"  data-dismiss="modal">Cancel Bid</button>
					</div>
			</div>
	</div>
</div>
<!-- Central Modal Medium Success-->
</template>

<script>
export default {

}
</script>

<style scoped>

</style>


