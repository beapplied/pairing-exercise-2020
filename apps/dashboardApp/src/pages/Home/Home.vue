<template>
  <PageLayout>
    <Card>
      <h2>Edit invite email</h2>
      <Button color="primary" :class="$style.buttonRow" @clicked="handleClick"><span slot="buttonText">Manage template</span></Button>
    </Card>
    <Card>
      <h2>Edit reminder email</h2>
      <Button color="primary" :class="$style.buttonRow" disabled @clicked="notHandleClick"><span slot="buttonText">Manage template</span></Button>
    </Card>
    <Card>
      <h2>Edit submitted email</h2>
      <Button color="primary" :class="$style.buttonRow" disabled @clicked="notHandleClick"><span slot="buttonText">Manage template</span></Button>
    </Card>
  </PageLayout>
</template>

<script>
import PageLayout from "@/Layouts/PageLayout";
import Card from "@/components/Card/Card.vue";
import Button from "@/components/Button/Button.vue";

export default {
  name: "Home",
  components: {
    PageLayout,
    Card,
    Button
  },
  methods: {
      handleClick() {
          console.log('heello')
          this.$router.push('/email-templates')
      },
      notHandleClick() {
          console.log('nope')
      }
  }
};
</script>

<style module src="./Home.css" />