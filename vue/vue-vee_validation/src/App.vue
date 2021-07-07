<template>
  <div id="app" class="px-20 py-16">
    <h1 class="font-bold text-2xl">Sign up</h1>
    <ValidationObserver v-slot="{ passes }">
      <form @submit.prevent="passes(onSubmit)">
        <TextInput rules="required" label="First Name"/>
        <TextInput rules="required" label="Last Name"/>
        <TextInput rules="required|email" label="Email Address" name="email"/>
        <TextInput rules="required|min:6|{regex : /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/ }|confirmed:pass" label="Password"/>
        <TextInput rules="required" vid="pass" label="Password Confirmation"/>
        <button class="btn text-brand-gray mt-10">Submit</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import TextInput from "./components/TextInput";

export default {
  name: "App",
  components: {
    TextInput,
    ValidationObserver
  },
  methods: {
    onSubmit () {
      alert('Form Submitted!');
    }
  }
};
</script>


<style lang="scss" scoped>
.btn {
  border: 1px solid currentColor;
  border-radius: 999999px;
  padding: 0.75rem 3rem;
  text-align: center;
  background: transparent;
  cursor: pointer;
  border-color: currentColor;
  width: fit-content;
  font-weight: 700;
  position: relative;
  transition: color 0.3s ease;
}
</style>
