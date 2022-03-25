<template>
  <div class="home container container--column">
    <v-row>
      <v-col><div class="sheet"></div></v-col>
      <v-col><div class="sheet"></div></v-col>
    </v-row>
    <v-row>
      <v-col><div class="sheet"></div></v-col>
      <v-col><div class="sheet"></div></v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  created() {
    this.$store
      .dispatch("test/getTestData")
      .then(() => console.log("hello"))
      .catch((err) => {
        console.log(err);
      });
    // TODO: move this in router
    this.$store.dispatch("header/changeTitle", "Home");
  },
  computed: {
    ...mapGetters({
      testData: "test/getTestData",
    }),
  },
};
</script>
