<template>    
<!-- Central Modal Medium Success -->
<div class="modal fade" id="placeReview" tabindex="-1" role="dialog" aria-labelledby="placeReviewLabel"
  aria-hidden="true">
	<div class="modal-dialog modal-notify modal-success modal-lg" role="document">
			<div class="modal-content">
					<div class="modal-header">
							<h5 class="heading lead" id="placeReviewLabel">Place a Review for this Chore</h5>
							<button class="close" type="button" data-dismiss="modal"><span class="white-text" aria-hidden="true">×</span></button>
					</div>
					<div class="modal-body mx-3">

						<div class="md-form">
							<i class="fas fa-pencil prefix grey-text"></i>
							<textarea type="text" id="reviewMessage" class="md-textarea form-control" rows="4" placeholder="Your review message"></textarea>
							<label data-error="wrong" data-success="right" for="reviewMessage"></label>
						</div>

					</div>
					<div class="modal-footer justify-content-center">
							<button class="btn btn-success" type="button">Place Review</button>
							<button class="btn btn-outline-success"  data-dismiss="modal">Cancel review</button>
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


