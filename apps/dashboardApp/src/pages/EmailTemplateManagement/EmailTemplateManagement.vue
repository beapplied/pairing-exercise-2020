<template>
  <PageLayout>
    <Card :fullWidth="true">
      <h3>Edit applicant invite email</h3>
      <div :class="$style.row">
        <p>Type:</p>
        <strong><p style="padding-left:12px">applicant-invite</p></strong>
      </div>
      <div :class="$style.row">
        <p>Subject:</p>
        <input type="text" :value="subjectLine" />
      </div>
      <div :class="$style.row">
        <p>Email body:</p>
        <textarea rows="10" type="text" v-model="text" />
      </div>
      <div :class="$style.row">
        <Button @clicked="saveEmail"><span slot="buttonText">Update template</span></Button>
      </div>
    </Card>
  </PageLayout>
</template>

<script>
import Button from "@/components/Button/Button.vue";
import Card from "@/components/Card/Card.vue";
import PageLayout from "@/Layouts/PageLayout";
import config from "./config";

export default {
  name: "EmailTemplateManagement",
  components: {
    PageLayout,
    Card,
    Button
  },
  data() {
    return {
      subjectLine: "",
      text: ""
    };
  },
  mounted() {
    //   This whole thing... not great. Mounted runs while computed is still undefined
    // - it's a known issue and in the real code this editing is a modal so it actually
    // gets passed the custom email as props which works... SORRY!
    // You're totally not expected to fix this issue
    // also GOOD LUCK!!!

    this.subjectLine = !!this.customEmail ? this.customEmail.subject : this.defaultEmail.subject;
    this.text = !!this.customEmail ? this.customEmail.text : this.defaultEmail.emailText;
  },
  methods: {
    saveEmail() {
      if (this.customEmail) {
        this.$store.dispatch("updateEmail", {
          id: this.customEmail.id,
          text: this.text,
          Type: "application-invite"
        });
      } else {
        this.$store.dispatch("saveEmail", { text: this.text, Type: "application-invite" });
      }
    }
  },
  computed: {
    defaultEmail() {
      return config["application-invite"];
    },
    customEmail() {
      return this.$store.state.emailTemplates["application-invite"];
    }
  }
};
</script>

<style module src="./EmailTemplateManagement.css" />
