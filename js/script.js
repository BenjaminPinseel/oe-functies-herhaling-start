"use strict";

window.addEventListener("load", Initialiseer);

// Globale variabelen
var lblOmschrijving1, lblOmschrijving2;
var txtInput1, txtInput2;
var hdrFunctionaliteit;
var divFeedBack;
var btnVoerUit, btnWinstVerlies, btnDieren, btnTafel, btnTafels;
var gekozenFunctionaliteit;
const winstOfVerlies = 'Bereken je winst of verlies...';
const dieren ='Test je dierenliefde...';
const tafel= "Toon de tafels van ..." ;
const tafelVanTot='Toon de tafels van ... tot ...';

// InitialiseerFunctie (na inlezen HTML)
function Initialiseer() {
      KoppelDomElementen();
      VoegEventHandlersToe();
      VerbergElementen(`Omschrijving Functionaliteit`);
      txtInput2.value = 0;
}

function KoppelDomElementen() {
      // Labels
      lblOmschrijving1 = document.getElementById(`lblOmschrijving1`);
      lblOmschrijving2 = document.getElementById(`lblOmschrijving2`)
      // Invoervelden
      txtInput1 = document.getElementById(`txtInput1`);
      txtInput2 = document.getElementById(`txtInput2`);
      // Headers
      hdrFunctionaliteit = document.getElementById(`hdrFunctionaliteit`);
      // Divisies
      divFeedBack = document.getElementById(`divFeedBack`);
      // Buttons
      btnDieren = document.getElementById(`btnDieren`);
      btnWinstVerlies = document.getElementById(`btnWinstVerlies`);
      btnTafel = document.getElementById(`btnTafel`);
      btnTafels = document.getElementById(`btnTafels`);
      btnVoerUit = document.getElementById(`btnVoerUit`);

}

function VoegEventHandlersToe() {
      btnWinstVerlies.addEventListener(`mouseenter`,function(){VerbergElementen(winstOfVerlies)});
      btnDieren.addEventListener(`mouseenter`,function(){VerbergElementen(dieren)});
      btnTafel.addEventListener(`mouseenter`,function(){VerbergElementen(tafel)});
      btnTafels.addEventListener(`mouseenter`,function(){VerbergElementen(tafelVanTot)});

      btnWinstVerlies.addEventListener(`click`,function(){ToonFunctionaliteit(winstOfVerlies)});
      btnDieren.addEventListener(`click`,function(){ToonFunctionaliteit(dieren)});
      btnTafel.addEventListener(`click`,function(){ToonFunctionaliteit(tafel)});
      btnTafels.addEventListener(`click`,function(){ToonFunctionaliteit(tafelVanTot)});

      btnVoerUit.addEventListener(`click`,VoerUit);

}

function VerbergElementen(titel) {
      lblOmschrijving1.style.visibility = `hidden`;
      lblOmschrijving2.style.visibility = `hidden`;
      txtInput1.style.visibility = `hidden`;
      txtInput2.style.visibility = `hidden`;
      btnVoerUit.style.visibility = `hidden`;
      divFeedBack.style.visibility = `hidden`;

      txtInput1.value = ``;
      txtInput2.value = ``;
      divFeedBack.innerHTML = ``;
      hdrFunctionaliteit.innerHTML = titel;


}

function ToonFunctionaliteit(titel) {

      switch(titel){
            case winstOfVerlies:
                  lblOmschrijving1.innerHTML = `Aankoopprijs`;
                  lblOmschrijving1.style.visibility = `visible`;
                  txtInput1.style.visibility = `visible`
                  txtInput1.value = `1`;
                  lblOmschrijving2.innerHTML = `Verkoopprijs`;
                  lblOmschrijving2.style.visibility = `visible`;
                  txtInput2.style.visibility = `visible`
                  txtInput2.value = `3`;
                  break;
            case dieren:
                  lblOmschrijving1.innerHTML = `Aantal huisdieren`;
                  lblOmschrijving1.style.visibility = `visible`;
                  txtInput1.style.visibility = `visible`
                  txtInput1.value = `1`;
                  lblOmschrijving2.style.visibility = `hidden`;
                  txtInput2.style.visibility = `hidden`;
                  break;
            case tafel:
                  lblOmschrijving1.innerHTML = `Tafel van`
                  lblOmschrijving1.style.visibility = `visible`;
                  txtInput1.style.visibility = `visible`
                  txtInput1.value = `1`;
                  lblOmschrijving2.style.visibility = `hidden`;
                  txtInput2.style.visibility = `hidden`;
                  break;
            case tafelVanTot:
                  lblOmschrijving1.innerHTML = `Tafel van`;
                  lblOmschrijving1.style.visibility = `visible`;
                  txtInput1.style.visibility = `visible`
                  txtInput1.value = `1`;
                  lblOmschrijving2.innerHTML = `tot`;
                  txtInput2.style.visibility = `visible`
                  txtInput2.value = `3`;
                  lblOmschrijving2.style.visibility = `visible`;
                  break;
      }
      btnVoerUit.style.visibility = `visible`


   
}

function GeefBedrijfsResultaat(waarde1, waarde2) {
      let resultaat,feedbackString;
      resultaat = waarde2 - waarde1;

      if(resultaat > 0){
            feedbackString = `De winst bedraagt: ${resultaat}`;
      }
      else if(resultaat == 0){
            feedbackString = `Het resultaat is break-even`;
      }
      else if(resultaat < 0){
            feedbackString = `Het verlies bedraagt: ${resultaat}`;
      }
      divFeedBack.style.visibility = `visible`;
      divFeedBack.innerHTML = feedbackString;

}

function GeefNiveauDierenLiefde() {

}

function GeefTafelsVanTot() {

}

function GeefTafelVan() {

}

function VoerUit() {
      let waarde1, waarde2, resultaat;
      let nummerControle = false;

      waarde1 = parseInt(txtInput1.value) ;
      waarde2 = parseInt(txtInput2.value);

      if(txtInput2.style.visibility == `hidden`){
            if(!isNaN(waarde1)){
                  nummerControle = true;
            }
      }
      else{
            if(!isNaN(waarde1) && !isNaN(waarde2)){
                  nummerControle = true;
            }
      }
      if(nummerControle == false){
            divFeedBack.style.visibility = `visible`;
            divFeedBack.innerHTML = `De input moet numeriek zijn`;
      }
      else{
            GeefBedrijfsResultaat(waarde1,waarde2);
      }

}

