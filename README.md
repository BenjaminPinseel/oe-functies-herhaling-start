oe-functies-herhaling-start
Toepassing op programmeerstructuren en functies
# Doelstelling
In deze oefening worden een aantal oefeningen op lussen in een dynamische lay-out toegepast.
Naargelang de oefening worden er 1 of 2 textboxen getoond en wordt de code die uitgevoerd wordt bij een klik op btnVoerUit gewijzigd.
Gebruik functions waar mogelijk om je code overzichtelijk en compact te houden
# Screenshots
![Screenshot winst](/img/Winst1.png)

![Screenshot verlies](/img/Winst2.png)

![Screenshot dieren](/img/Dieren.png)

![Screenshot 1 tafel](/img/Tafel1.png)

![Screenshot tafels](/img/Tafels.png)
# Functionaliteiten
## Opstarten
Voeg code toe aan 
- KoppelDomElementen: koppel alle DOM-elementen. Gebruik hiervoor de reeds gedeclareerde variabelen.
- VerbergElementen: Alle controls onder hdrFunctionaliteit worden verborgen.
## Aanpassing lay-out bij muisbeweging
- Alle controls onder hdrFunctionaliteit worden verborgen.
- De input van de textboxen wordt gewist
- De tekst in divFeedBack wordt gewist
- In hdrFunctionaliteit verschijnt de uitleg van de knop. Gebruik hiervoor de omschrijvingen uit de constanten die globaal gedeclareerd zijn.
## Aanpassing lay-out bij muisklik: function ToonFunctionaliteit
- De tekst in de label(s) wordt aangepast.
    - Bij 'Winst': Aankoopprijs en Verkoopprijs
    - Bij 'Dieren': Aantal huisdieren
    - Bij 'Tafel van': Tafel van
    - Bij 'Tafels van ... tot ...': "Tafel van" en "tot"
- Al naargelang het geval worden er 1 of 2 textboxen met hun resp. labels getoond.
Gebruik hiervoor de property .style.display.
- Er wordt een standaardwaarde ingevuld in de textboxen
## Winst: function VoerUit en GeefBedrijfsResultaat
- De input van de twee textboxes wordt opgehaald
- Er wordt nagegaan of de input wel degelijk een getal is. Zoniet verschijnt er in divFeedBack  "De input moet numeriek zijn"
- Op basis van de gekozen functionaliteit wordt de function GeefBedrijfsResultaat uitgevoerd.
- GeefBedrijfsResultaat: Afhankelijk van het verschil tussen de aan- en verkoopprijs wordt er een boodschap getoond:
    - Het resultaat is break even
    - De winst bedraagt: ...
    - Het verlies bedraagt: ...
## Dieren: function VoerUit en GeefNiveauDierenLiefde
- Het aantal dieren wordt opgehaald
- Er wordt nagegaan of het ingegeven getal positief is. Zoniet verschijnt de boodschap "Be positive".
- Bij een positief getal verschijnt de boodschap 'U meldde dat u x huisdier(en) bezat.' gevolgd door één van de volgende boodschappen
  - geen dieren: Geen dierenvriend?
  - één dier: Is het beestje niet eenzaam?
  - twee dieren: Komen ze een beetje overeen?
  - drie dieren: Leuke bende!
  - vier dieren: Gezellige beestenboel!
  - vijf of meer dieren: Amaai, wie geeft dat allemaal te eten?
## Tafel: function VoerUit en GeefTafelVan
- De ingetikte tafel wordt opgehaald
- Check of er een positief geheel getal is ingetikt en geef eventueel passende feedback.
- Dit getal wordt vermenigvuldigd van 1 ... 10
- Gebruik een do while lus als het om een paar/even getal gaat (bvb. de tafel van 2)
- Gebruik een for lus bij onpare/oneven getallen
- De bewerkingen en het resultaat worden afgebeeld
## Tafels van ... tot: VoerUit en function GeefTafelsVanTot
- De ingetikte getallen wordt opgehaald
- Check of er positieve gehele getal zijn ingetikt en geef eventueel passende feedback.
- Zorg ervoor dat in de variabele waarin de tafel van wordt bijgehouden het kleinste getal zit
- Geef de tafels naast elkaar weer
- De achtergrondkleur bij een tafel van een even getal is gainsboro
- De achtergrondkleur bij een tafel van een oneven getal is aquamarine




