<template>
  <form action="#">
    <b-row class="form-row">
        <label class="col"><span class="input-label">Nome Cognome</span>
            <b-form-input type='text' class="form__input"></b-form-input>
        </label>    
    </b-row>
    <b-row class="form-row">
        <label class="col-5  label--left"><span class="input-label">Telefono</span>
            <b-form-input type='number' class="form__input"></b-form-input>
            <span class=" form__input--flag" >IT</span>
            <span class=" form__input--code" >+39</span>
        </label>
        <label class="col-7nlabel--right"><span class="input-label"></span>
            <b-form-input type='tel' class="form__input"></b-form-input>
        </label>
        
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