<template>
<div class="container">
  <h4 class="my-5">Update Profile</h4>
  <hr>
  <div class="row">
    <div class="col-3">
      <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <div class="text-left h4">Mark Ottongo <hr></div>
        <a class="nav-link active" id="v-pills-general-tab" data-toggle="pill" href="#v-pills-general" role="tab"
          aria-controls="v-pills-general" aria-selected="true">General</a>
        <a class="nav-link" id="v-pills-handler-tab" data-toggle="pill" href="#v-pills-handler" role="tab"
          aria-controls="v-pills-handler" aria-selected="false">Handler</a>
        <a class="nav-link" id="v-pills-payment-tab" data-toggle="pill" href="#v-pills-payment" role="tab"
          aria-controls="v-pills-payment" aria-selected="false">Payment</a>
        <a class="nav-link" id="v-pills-security-tab" data-toggle="pill" href="#v-pills-security" role="tab"
          aria-controls="v-pills-security" aria-selected="false">Security</a>
      </div>
    </div>
    <div class="col-9">
      <div class="tab-content text-left" id="v-pills-tabContent">
        <div class="tab-pane fade show active " id="v-pills-general" role="tabpanel" aria-labelledby="v-pills-general-tab">

          <table class="table">
            <tbody>
              <tr class="table-borderless">
                <th scope="row">Full Name</th>
                <td>Mark Ottongo</td>
              </tr>
              <tr>
                <th scope="row">Adress</th>
                <td>124 Nkulumane West <br> Bulawayo, ZW</td>
              </tr>
              <tr>
                <th scope="row">Contact Numbers</th>
                <td >0776406399 <br>0732406399</td>
              </tr>
              <tr>
                <th scope="row">Are you a chore handler</th>
                <td >Yes</td>
              </tr>
            </tbody>
          </table>

        </div>
        <div class="tab-pane fade" id="v-pills-handler" role="tabpanel" aria-labelledby="v-pills-handler-tab">
          <table class="table">
            <tbody>
              <tr class="table-borderless">
                <th scope="row">Skills</th>
                <td>
                  <div class="chip green lighten-1">TV Mounting<i class="close fas fa-times"></i></div>
                  <div class="chip green lighten-1">HandyMan<i class="close fas fa-times"></i></div>
                </td>
                <td><span class="badge badge-light">Edit <i class="fas fa-pencil ml-2" aria-hidden="true"></i></span></td>
              </tr>
              <tr>
                <th scope="row">Cover</th>
                <td>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi neque quia nisi a adipisci minima natus, 
                    nostrum quaerat molestiae nemo rem cumque eius, consequatur delectus. 
                    Iste, eveniet necessitatibus! Reprehenderit, nemo!</p>                    
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi neque quia nisi a adipisci minima natus, 
                    nostrum quaerat molestiae nemo rem cumque eius, consequatur delectus. 
                    Iste, eveniet necessitatibus! Reprehenderit, nemo!</p>
                </td>
                <td><span class="badge badge-light">Edit <i class="fab fa-pencil ml-2" aria-hidden="true"></i></span></td>
              </tr>
              <tr>
                <th scope="row">Agencies <br> <small class="text-muted">(work for)</small> </th>
                <td>
                  <span class="badge badge-default mx-2">ZED Analytics</span>
                  <span class="badge badge-default">D3SAGE</span>
                </td>
                <td>
                  <a class="trigger success-color text-white p-1" data-toggle="modal" data-target="#agencyJoinRequest">JOIN</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Agencies <br> <small class="text-muted">(own)</small> </th>
                <td>
                  <span class="badge badge-primary mx-2">Super Calibro</span>
                </td>
                <td>
                  <a class="trigger success-color text-white p-1" data-toggle="modal" data-target="#registerAgency">Register</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="tab-pane fade" id="v-pills-payment" role="tabpanel" aria-labelledby="v-pills-payment-tab">

          <table class="table">
            <tbody>
              <tr class="table-borderless">
                <th scope="row">ecocash</th>
                <td>0776406399</td>
                <td><span class="badge badge-light">Edit <i class="fab fa-pencil ml-2" aria-hidden="true"></i></span></td>
              </tr>
              <tr>
                <th scope="row">telecash</th>
                <td>0732406399</td>
                <td><span class="badge badge-light">Edit <i class="fab fa-pencil ml-2" aria-hidden="true"></i></span></td>
              </tr>
            </tbody>
          </table>

        </div>
        <div class="tab-pane fade" id="v-pills-security" role="tabpanel" aria-labelledby="v-pills-security-tab">

          <table class="table">
            <tbody>
              <tr class="table-borderless">
                <th scope="row">username</th>
                <td>mottongo33</td>
                <td><span class="badge badge-light">Edit <i class="fab fa-pencil ml-2" aria-hidden="true"></i></span></td>
              </tr>
              <tr>
                <th scope="row">Email Adress</th>
                <td>mottogno@sunset.net</td>
                <td><span class="badge badge-light">Edit <i class="fab fa-pencil ml-2" aria-hidden="true"></i></span></td>
              </tr>
              <tr>
                <th scope="row">Password</th>
                <td >(Unchanged)</td>
                <td><span class="badge badge-light">Edit <i class="fab fa-pencil ml-2" aria-hidden="true"></i></span></td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  </div>
  <!-- modals -->
  <div>
    <register-agency></register-agency>
    <join-request></join-request>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import registerAgency from '@/components/auth/agencyReg.vue'
import joinRequest from '@/components/auth/agencyJoinRequest.vue'
export default {
  name: "profile",
  data(){
    return {}
  },
  components: {
    registerAgency,
    joinRequest
  }
};
</script>

<style scoped>
  .nav-link {
    color: #00C851!important;
  }
  .nav-link.active {
    background-color: #00C851!important;
    color: #ffffff!important;
  }
  th {
    font-weight: 600;
  }

</style>
