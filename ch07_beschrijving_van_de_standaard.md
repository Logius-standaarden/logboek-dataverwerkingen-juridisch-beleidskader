# Beschrijving van de standaard

## Doel van de standaard

Om verantwoording te kunnen afleggen, zowel als overheidsorganisatie, maar met name ook om als “de overheid” te kunnen verantwoorden, dat wil zeggen als “samenwerkende overheidsorganisaties”, is het van belang dat de wijze waarop overheden verslag leggen van hun activiteiten eenduidig is, en dat de verschillende verslagleggingen aan elkaar te relateren zijn. Dat is de basis voor onderlinge samenwerking op dit terrein.

De standaard “Logboek Dataverwerkingen” zorgt daarvoor.

De standaard beoogt (technische) interoperabiliteit van loggen van dataverwerkingen te realiseren, door voor een aantal loghandelingen de koppelvlakken en werkwijze voor te schrijven:

- Het vastleggen van logs van dataverwerkingen
- Het aan elkaar relateren van deze logs.
- Het aan elkaar relateren van dataverwerkingen over grenzen van systemen (binnen organisaties) en verantwoordelijkheden (organisatie-overstijgend)

De standaard is ontwikkeld vanuit de behoefte om als overheid eenduidige verantwoording over overheidsorganisaties heen te kunnen realiseren. Echter, de systematiek zoals beschreven is breder toepasbaar voor organisaties buiten de overheid, die de verslaglegging onderling willen afstemmen en relateren.

## Beschrijving van systematiek van processen in organisaties

Organisaties hebben taken toebedeeld gekregen. Om deze taken uit te voeren is het nodig om (persoons)gegevens te verwerken.

De standaard schrijft voor dat deze per taak als “verwerkingsactiviteit” worden onderkend. Om de verschillende taken uit te voeren heeft een organisatie in de regel meerdere verwerkingsactiviteiten onderkend.

De standaard schrijft voor dat deze verwerkingsactiviteiten in een “register” moeten worden opgenomen. Daarin wordt onder meer het doel van de verwerkingen opgenomen, zoals dit op grond van de art. 30 AVG voor verwerkingen van persoonsgegevens al verplicht is. Het register in het kader van de standaard beoogt een bredere reikwijdte dan persoonsgegevens.

Vervolgens schrijft de standaard voor dat binnen de onderkende verwerkingsactiviteiten “dataverwerkingen” worden gelogd. Dit gebeurt door iedere applicatie die een dataverwerking uitvoert op gestandaardiseerde manier een logregel te laten vastleggen in een Logboek dataverwerkingen.

De handelingen die worden gelogd kunnen alle handelingen betreffen die met gegevens plaatsvinden.

Elke dataverwerking wordt apart gelogd en krijgt een kenmerk (“trace”) toegekend, waardoor bij elkaar horende dataverwerkingen binnen de grenzen van een systeem worden gegroepeerd en kunnen worden gerelateerd. Dit betekent dat de handelingen die ten behoeve van een specifieke taak (context) zijn uitgevoerd aan elkaar te relateren zijn, en daarmee **te verantwoorden** zijn.

Omdat dataverwerkingen kunnen of zullen plaatsvinden voor meerdere taken (contexten, verwerkingsactiviteiten), ook over organisaties heen, is het nodig dat ook de relatie (link) kan worden gelegd tussen de verschillende taken. De standaard realiseert dit door informatie over de “trace”, “verwerkingsactiviteit” en registers (de statische informatie over de dataverwerking) mee te geven aan de uitwisseling van gegevens. Op deze wijze zijn de dataverwerkingen te relateren over verschillende taken en organisaties heen, en kan **verantwoording** worden afgelegd.

## Standaard als basis voor verantwoording: logging is “neutraal”

Op deze wijze wordt door de standaard geborgd dat de dataverwerkingen worden gelogd zonder dat relevant is in welke context of voor welk doel dat gebeurt (de wijze van logging is “neutraal”). 

Echter op het moment dat doelen, context en onderlinge samenhang van belang is kan een verband worden gelegd en wordt de logging betekenisvol, bijvoorbeeld om verantwoording af te leggen over een specifieke handeling die is uitgevoerd in het kader van een taak door één of meerdere overheidsorganisaties (basale usecase).

## Extensies: Het gebruik van logging voor verschillende doeleinden

Op basis van de algemene relateerbaarheid die de standaard realiseert over de logging van verschillende dataverwerkingen, is het - naast de algemene verantwoording die op basis daarvan kan worden afgelegd - mogelijk om diverse andere doeleinden en processen te faciliteren. De standaard maakt dat mogelijk door extensies, toe te staan waarmee specifieke functionaliteit wordt toegevoegd aan de standaard.

Een voorbeeld daarvan is de “Extensie Betrokkenen”. Daarmee kan meer precies worden uitgewerkt hoe de identiteit van een betrokkene wordt gerelateerd aan een dataverwerking. Dat maakt het mogelijk om de koppeling te maken tussen de verwerkingen van persoonsgegevens, waarmee bijvoorbeeld inzageverzoeken geautomatiseerd mogelijk gemaakt kunnen worden. Een ander voorbeeld is de “Extensie Inzage”, waarmee de wijze waarop op basis van de logs op een gestandaardiseerde manier de verwerkingen van gegevens over een persoon ter inzage kunnen worden aangeboden (interface).

Organisaties en sectoren die een extensie maken, moeten deze extensie conform het beheerproces van de standaard laten vaststellen waarmee extensie een optioneel onderdeel wordt van de standaard.

## Profielen: beperkingen en verplichtingen in het gebruik van de standaard

De standaard zorgt ervoor dat eenduidige relaties gelegd kunnen worden tussen dataverwerkingen. De standaard legt daar in de basis geen beperkingen of aanvullingen aan op, en ook niet aan de tijdsduur waarbinnen de relaties moeten kunnen worden gelegd (bewaartermijn). Door middel van profielen kunnen dergelijke aanvullingen wel gemaakt worden, bijvoorbeeld door extensies, aanvullende eisen, of bewaartermijnen. Dit kan binnen een organisatie of binnen een groep van organisaties, bijvoorbeeld een sector die op een bepaalde wijze met elkaar samenwerking en afspraken wil maken. 

## Integriteit van logging

Een belangrijk aspect bij verantwoording is dat op de informatie kan worden vertrouwd. Dit betekent dat de wijze waarop logging wordt weggeschreven en bewaard zodanig is dat deze beschermd is en dat eventuele manipulaties van de logging kunnen worden aangetoond. Deze onweerlegbaarheid is belangrijk voor de bewijskracht van de logging. Als dit generiek is geregeld hoeven organisaties niet separaat meer aan te tonen of te regelen dat de logging ook daadwerkelijk klopt.

## Tussenconclusie

Het is van belang dat de wijze waarop overheden hun activiteiten vastleggen eenduidig is, en dat de verschillende verslagleggingen aan elkaar te relateren zijn. Dat is de basis om de onderlinge informatieuitwisseling te kunnen relateren. De standaard bevat om deze reden conceptuele afspraken, bedoeld om rekening te houden met verschillende processen, dataverwerkingen en de wijze waarop deze zijn worden gerelateerd. Dit vormt de basis waarmee het mogelijk is om voor verschillende toepassingen of doelen nadere toevoegingen op de standaard te maken. Daarbij is er ruimte om dit per organisatie of per groep organisaties (sector) aan te vullen afhankelijk van de specifieke behoeften.
