<template>
  <div class="wrapper">
    <header class="header">
        <ButtonArow />
        <HeaderMain class="header-arow" />
    </header>
    <main class="content">
        <div class="content-item"></div>
        <FormRegister />
    </main>    
    <footer class="footer">
      <ButtonNext />
    </footer>
  </div>
</template>

<script>
import ButtonArow from '../components/ButtonArow'
import HeaderMain from '../components/HeaderMain'
import FormRegister from '../components/FormRegister'
import ButtonNext from '../components/ButtonNext'


export default {
  name: 'App',
  components: {
    ButtonArow,
    HeaderMain,
    FormRegister,
    ButtonNext
   }
}
</script>

