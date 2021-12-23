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
          @click="$router.push('job')"
        >
          Create JD
        </button>
      </div>
    </div>
    <div class="row">
      <div v-for="jp in jobposts" :key="jp.id" class="col-md-4 my-4">
        <div class="p-4 bg-white jobpost-box">
          <h4>{{ jp.jobtitle }}</h4>
          <p>
            {{ jp.shortdesc }}
          </p>
          <p>{{ jp.location }}</p>
          <p>
            {{ jp.description }}
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
  border-radius: 10px;
  box-shadow: 0px 1px 16px rgba(201, 210, 226, 0.4);
}
</style>

<script lang="ts">
export default {
  name: "Home",
  data() {
    return {
      jobposts: [
        {
          id: 1,
          jobtitle: "Product designer",
          shortdesc:
            "This is a short job description to catch the attention of your target audience. Keep it simple.",
          location: "Chennai, India",
          description:
            "Ideas2it is looking for talented software developers for our Summer 2019 internship program to create a free virtual classroom for the world. Join us on our mission to provide a free world-class education for anyone, anywhere.",
          jobtype: "Personalised",
          created: "Created : Yesterday",
        },
        {
          id: 2,
          jobtitle: "Fullstack Engineer",
          shortdesc:
            "This is a short job description to catch the attention of your target audience. Keep it simple.",
          location: "Chennai, India",
          description:
            "Ideas2it is looking for talented software developers for our Summer 2019 internship program to create a free virtual classroom for the world. Join us on our mission to provide a free world-class education for anyone, anywhere.",
          jobtype: "Personalised",
          created: "Created : Yesterday",
        },
        {
          id: 3,
          jobtitle: "Software Engineer",
          shortdesc:
            "This is a short job description to catch the attention of your target audience. Keep it simple.",
          location: "Chennai, India",
          description:
            "Ideas2it is looking for talented software developers for our Summer 2019 internship program to create a free virtual classroom for the world. Join us on our mission to provide a free world-class education for anyone, anywhere.",
          jobtype: "Job post",
          created: "Created : 2 days ago",
        },
        {
          id: 4,
          jobtitle: "Software Engineer trainee",
          shortdesc:
            "This is a short job description to catch the attention of your target audience. Keep it simple.",
          location: "Chennai, India",
          description:
            "Ideas2it is looking for talented software developers for our Summer 2019 internship program to create a free virtual classroom for the world. Join us on our mission to provide a free world-class education for anyone, anywhere.",
          jobtype: "Job post",
          created: "Created : 4 july 2020",
        },
        {
          id: 5,
          jobtitle: "Fullstack developer",
          shortdesc:
            "This is a short job description to catch the attention of your target audience. Keep it simple.",
          location: "Chennai, India",
          description:
            "Ideas2it is looking for talented software developers for our Summer 2019 internship program to create a free virtual classroom for the world. Join us on our mission to provide a free world-class education for anyone, anywhere.",
          jobtype: "Job post",
          created: "Created : 22 June 2020",
        },
        {
          id: 6,
          jobtitle: "Senior marketing designer",
          shortdesc:
            "This is a short job description to catch the attention of your target audience. Keep it simple.",
          location: "Chennai, India",
          description:
            "Ideas2it is looking for talented software developers for our Summer 2019 internship program to create a free virtual classroom for the world. Join us on our mission to provide a free world-class education for anyone, anywhere.",
          jobtype: "Job post",
          created: "Created : 7 June 2020",
        },
      ],
    };
  },
};
</script>
