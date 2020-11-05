<template>
  <div class="wrapper" id="app">
    <header class="header">
      <ButtonArow />
      <Logo />
    </header>
    <main class="content">
      <b-row>
        <b-col>
          <p class="content__title">Grazie per aver scelto Go Cervinia</p>
        </b-col>  
      </b-row>
      <b-row>
        <b-col>
          <div class="comment">
            <img class="comment__img" src="comment1.svg" width="70" alt="comment">
            <div class="comment-container">
              <p class="comment__txt">
                Per informazioni, assistenza e chiarimenti sarà disponibile un consulente che diventerà personale. Vi seguirà su tutto il percorso della registrazione e personalizazione della vostra attività.
              </p>
            </div>
          </div>
        </b-col>
      </b-row>
      <input type='time'>
      <input type='time'>
      
    </main>
    <footer class="footer">
      <ButtonNext />
    </footer>
  </div>
</template>

<script>
import ButtonArow from '../components/ButtonArow'
import Logo from '../components/Logo'
import ButtonNext from '../components/ButtonNext'

export default {
  name: 'App',
  components: {
    ButtonArow,
    Logo,
    ButtonNext
   }
}
</script>
