import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  specStatus: "CV",
  specType: "PR",
  pubDomain: "logboek",
  shortName: "juridisch",
  publishDate: "2025-11-27",
  publishVersion: "1.0.0",
  // TODO: verwijder voor publicatie
  latestVersion: "https://logius-standaarden.github.io/logboek-dataverwerkingen-juridisch-beleidskader/",
  sotdText: {
    nl: {
      sotd: "Status van dit document",
      cv: `Dit is een consultatieversie. We moedigen gebruikers aan om meldingen of suggesties aan te maken via GitHub. Mocht dit niet mogelijk zijn, dan kunt u ook een e-mail sturen naar api@logius.nl`,
    },
  },
  prevVersion: [],

  edDraftURI: "https://logius-standaarden.github.io/logboek-dataverwerkingen-juridisch-beleidskader/",

  editors:
    [
      {
        name: "Vedran Bilanovic",
        company: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      },
      {
        name: "Eelco Hotting",
        company: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      },
      {
        name: "Jeroen Mulder",
        company: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      },
      {
        name: "Pieter Teekens",
        company: "Ministerie van Binnelandse Zaken en Koninkrijksrelaties",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      },
      {
        name: "Nil Barua",
        company: "Logius",
        companyURL: "https://logius.nl",
      },
      {
        name: "Martin van der Plas",
        company: "Logius",
        companyURL: "https://logius.nl",
      },
      {
        name: "Tim van der Lippe",
        company: "Logius",
        companyURL: "https://logius.nl",
      }
    ],
  authors:
    [
      {
        name: "Wouter Diephuis",
        company: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      },
      {
        name: "Mirian van Ansem",
        company: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      }
    ],
  github: "https://github.com/Logius-standaarden/logboek-dataverwerkingen-juridisch-beleidskader",
});
