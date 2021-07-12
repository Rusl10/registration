<template>
    <form @submit.prevent="submitForm" action="#" class="reg__form form">
                        <h2 class="form__title">Реєстрація</h2>
                        <div class="form__line">
                            <label class="form__mail-label" for="mail">E-mail</label>
                            <input id="mail" type="text" placeholder="RandomEmail@gmail.com" class="input input_mail" v-model="email" :class="status(v$.email)">
                            <div class="error" v-if="v$.email.$error">this must be an email</div>
                        </div>
                        <div class="form__line">
                            <input type="password" placeholder="Пароль" class="input input_pass" v-model="password" :class="status(v$.password)">
                        </div>
                        <div class="form__line">
                            <div class="options">
                                <label class="options__item">
                                    <input class="options__input" v-model="user" type="radio" checked value="jobseeker">
                                    <span class="options__text"><span><span class="bold">Я кандидат -</span> шукаю пропозицiї</span></span>
                                </label>
                                <label class="options__item">
                                    <input class="options__input" v-model="user" type="radio" value="interviewer">
                                    <span class="options__text"><span><span class="bold">Я рекрутер -</span> шукаю розробникiв</span></span>
                                </label>
                                <label class="options__item active">
                                    <input class="options__input" v-model="user" type="radio" value="recruiter">
                                    <span class="options__text"><span><span class="bold">Я iнтервьюер -</span> проводжу спiвбесiди</span></span>
                                </label>
                            </div>
                        </div>
                        <div class="form__accept">
                            Ви приймаєте <a href="">правила сайту</a> та <a href="">політику конфіденційності</a>
                        </div>
                        <button type="submit" class="form__btn btn btn_submit _fw">Зареєструватися</button>
                        <div class="form__either">Або увiйти за допомогою</div>
                        <div class="form__actions">
                            <a href="" class="form__action btn btn_action _icon-google">Google</a>
                            <a href="" class="form__action btn btn_action _icon-in">LinkedIn</a>
                        </div>
                    </form>
</template>
<script>
import { email, required, minLength } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';    
import { request } from '../api.js';
export default {
  name: 'AppRegistration',
  data () {
    return {
        v$: useVuelidate(),
        password: '',
      email: '',
      user: ''
    }
  },
  methods: {
    async submitForm() {
        console.log('this.v$', this.v$)
      if (this.v$.$invalid) {
        console.log('error')
        this.v$.$touch()
        return
      }

      const regData = {
        username: "string",
email: this.email,
password1: this.password,
password2: "PAS",
account_type: this.user
      }
       const response = await request('http://www.interview.top/api/v1/auth/registration/', regData)
      console.log('response', response)
    },
    status(validation) {
        return {
        invalid: validation.$error,
        //invalid: validation.$dirty
      }
    },

  },
  validations () {
    return {

        password: { required, minLength: minLength(6) },
        email: { required, email }
      }
  }
}
</script>
<style lang="css" scoped>
</style>