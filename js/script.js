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
                  txtInput2.value = `1`;
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
                  txtInput2.value = `1`;
                  lblOmschrijving2.style.visibility = `visible`;
                  break;
      }


   
}

function GeefBedrijfsResultaat() {

}

function GeefNiveauDierenLiefde() {

}

function GeefTafelsVanTot() {

}

function GeefTafelVan() {

}

function VoerUit() {

}

