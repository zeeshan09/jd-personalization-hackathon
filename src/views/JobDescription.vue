<template>
  <div class="job-description">
    <div class="d-flex justify-content-between mb-4">
      <h2>Create Job post</h2>
      <button
        type="button"
        class="btn btn-primary"
        @click="onProceedClick(job)"
      >
        Proceed
      </button>
    </div>
    <div class="content row">
      <div class="description-section col-4">
        <h4 class="mb-2">Job description details</h4>
        <div class="form-group">
          <label for="email">Job title</label>
          <input
            type="text"
            id="title"
            class="form-control"
            v-model="job.title"
          />
        </div>
        <div class="form-group">
          <label for="email">Location</label>
          <input
            type="text"
            id="location"
            class="form-control"
            v-model="job.location"
          />
        </div>
        <div class="form-group">
          <label for="email">Short Job description</label>
          <textarea
            type="text"
            id="description"
            class="form-control"
            v-model="job.description"
          />
        </div>
        <div class="form-group">
          <label for="email">Company name</label>
          <input
            type="text"
            id="company"
            class="form-control"
            v-model="job.company"
          />
        </div>
        <div class="form-group">
          <label for="email">CTA(Call to action)</label>
          <input type="text" id="cta" class="form-control" v-model="job.cta" />
        </div>
        <div class="divider mb-3"></div>
        <div class="d-flex justify-content-between mb-3">
          <div>
            <h4 class="mb-2">Detailed Job description</h4>
            <div class="secondary-text">Job description</div>
          </div>
          <button type="button" class="btn btn-secondary">Upload JD</button>
        </div>
        <div class="form-group">
          <editor
            v-model="job.detail"
            api-key="no-api-key"
            :init="{
              height: 450,
              menubar: true,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help',
            }"
          />
        </div>
        <div class="form-group">
          <label for="email"
            >Enter email (Candidates CV details will be sent to this
            email)</label
          >
          <input
            type="email"
            id="email"
            class="form-control"
            v-model="job.email"
          />
        </div>
      </div>
      <div class="preview-section col-8">
        <div class="d-flex justify-content-between mb-3">
          <h4>Your generated Job description</h4>
          <div class="gray-text align-items-center d-flex">
            Preview settings
          </div>
        </div>
        <div class="overview row m-0 mb-4">
          <div class="col-8">
            <h2 class="mb-3">{{ job.title }}</h2>
            <div class="mb-3">{{ job.description }}</div>
            <div class="">{{ job.location }}</div>
            <button v-if="job.cta" type="button" class="btn btn-green mt-5">
              {{ job.cta }}
            </button>
          </div>
          <div class="col-4">
            <img
              class="float-end"
              alt="Company logo"
              src="../assets/company-logo.svg"
            />
          </div>
        </div>
        <div v-if="job.detail" class="overview row m-0 mb-4">
          <div v-html="job.detail" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { Options, Vue } from "vue-class-component";
import Editor from "@tinymce/tinymce-vue";
export default {
  data() {
    return {
      job: {
        detail: "",
        title: "",
        location: "",
        description: "",
        company: "",
        cta: "",
        email: "",
      },
    };
  },
  methods: {
    onProceedClick(job: any): void {
      console.log("jobdata----", job);
    },
  },
  components: {
    editor: Editor,
  },
};
// @Options({
//   components: {},
// })
// export default class JobDescription extends Vue {}
</script>
<style scoped lang="scss">
@import "../App.scss";
.job-description {
  .content {
    height: 100%;
    .description-section {
      border-right: 1px solid $border-lite;
    }
    .preview-section {
      .overview {
        background: $white;
        box-shadow: 0px 1px 46px rgba(20, 20, 42, 0.07);
        border-radius: 7px;
        padding: 30px 20px 20px 30px;
      }
    }
  }
}
</style>
