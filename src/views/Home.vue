<template>
  <div v-if="!jobposts || !jobposts.length">
    <div class="row">
      <div class="col">
        <h2>All Job posts</h2>
        <div class="text-center">
          <img
            class="my-4 img-fluid"
            src="~@/assets/svg/jobpost.svg"
            alt="Job Post"
          />
          <h2 class="my-4">No job adverts yet</h2>
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-primary my-4 col-6 mx-auto" type="button">
            Create JD
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="d-flex justify-content-between">
      <h2>All Job posts</h2>
      <div>
        <button
          class="btn btn-primary"
          type="button"
          @click="$router.push('/job')"
        >
          Create JD
        </button>
      </div>
    </div>
    <div class="row">
      <div v-for="jp in jobposts" :key="jp.id" class="col-md-4 my-4">
        <div
          class="p-4 bg-white jobpost-box"
          @click="$router.push(`/job/${jp.id}`)"
        >
          <h4>{{ jp.jobTitle }}</h4>
          <p>
            {{ jp.detailedDescription }}
          </p>
          <p>{{ jp.location }}</p>
          <p>
            {{ jp.briefDescription }}
          </p>
          <hr />
          <div class="d-flex justify-content-between">
            <div>{{ jp.jobtype }}</div>
            <div>{{ jp.created }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../App.scss";
.jobpost-box {
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 1px 16px rgba(201, 210, 226, 0.4);
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import globalVar from "../utils/env";

export default class Home extends Vue {
  msg!: string;
  public jobposts: any = [];
  mounted() {
    console.log("home mounted----");
    axios.get(`${globalVar.apiUrl}/jobDetails`).then((response) => {
      this.jobposts = response.data;
    });
  }
}
</script>
