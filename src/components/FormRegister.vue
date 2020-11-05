<template>
  <form action="#">
    <b-row>
        <label class="col col-reset"><span class="input-label">Nome Utente</span>
            <b-form-input type="email" placeholder="cervinia@gmail.com" class="form__input 
            form__register"></b-form-input>
        </label>    
    </b-row>
    <b-row>
        <label class="col col-reset"><span class="input-label">Password</span>
            <b-form-input type="password" placeholder="choose a password" class="form__input
            form__register"></b-form-input>
        </label>
    </b-row>  
    <b-row>
        <label class="col col-reset"><span class="input-label">Repeat password</span>
            <b-form-input type="password" placeholder="repeat password" class="form__input
            form__register"></b-form-input>
        </label>
    </b-row>
    <b-row class="form-register__row--bottom">
        <b-col cols="10" class="form-col__text">
            <p class="form-register__text">Dichiaro di avere 18 anni e di Accettare i Termini & Condizione e il tratamento dei dati personali</p>
        </b-col>  
        <b-col>
            <b-form-checkbox></b-form-checkbox>
        </b-col>
    </b-row>
    
  </form>
</template>

<script>
  export default {
    data() {
      return {
        text: ''
      }
    }
  }
</script>