<template>
  <div class="wrapper">
    <HeaderMain />
    <main class="content">
        <b-row>
            <b-col>      
                <p class="content__txt">Integreaza-ti activitatea cu sistemele moderne de comunicare si digital marketing turistic</p>
            </b-col>  
        </b-row>
      <FirstForm />
      <p class="content__txt">Tutto il necesario per poter gestire la tua attività online</p>
      <div class="advantages">
         <img src="../icons/credit-card.svg" width="30" alt="" class="advantages__img">
         <p class="advantages__txt">Itegrazioni con i sistemi di pagamento online per ricevere i soldi diretamente sul tuo conto.</p>
      </div>
      <div class="advantages">
         <img src="../icons/calendar.svg" width="30" alt="" class="advantages__img">
         <p class="advantages__txt">Gestione delle prenotazioni disponibile su tutti i dispositivi.</p>
      </div>
      <div class="advantages">
         <img src="../icons/megafon.svg" width="30" alt="" class="advantages__img">
         <p class="advantages__txt">Strumenti per la promozione della tua attività sul teritorio e tutti i canali di digital marketing.</p>
      </div>
      <div class="advantages">
         <img src="../icons/money.svg" width="30" alt="" class="advantages__img">
         <p class="advantages__txt">Strumenti per la promozione della tua attività sul teritorio e tutti i canali di digital marketing.</p>
      </div>
    </main> 
    <footer class="footer">
        <b-row>
            <buttonCancel class="col-6" />
            <ButtonNext class="col-6" />
        </b-row>
    </footer>
  </div>
</template>

<script>
import HeaderMain from '../components/HeaderMain'
import FirstForm from '../components/FirstForm'
import ButtonCancel from '../components/ButtonCancel'
import ButtonNext from '../components/ButtonNext'

export default {
  components: {
    HeaderMain,
    FirstForm,
    ButtonCancel,
    ButtonNext
   }
}
</script>


