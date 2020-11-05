<template>
  <div class="wrapper">
    <header class="header">
      <ButtonArow />
    </header>
    <main class="content">
        <p class="content__txt">Completa la tua registrazione.<br> Inizia a ricevere le prime prenotazioni.</p>
        <CardItem />
    </main>
    <footer class="footer">
      <ButtonNext />
    </footer>
  </div>
</template>

<script>
import ButtonArow from '../components/ButtonArow'
import CardItem from '../components/CardItem'
import ButtonNext from '../components/ButtonNext'

export default {
  components: {
    ButtonArow,
    CardItem,
    ButtonNext
   }
}
</script>