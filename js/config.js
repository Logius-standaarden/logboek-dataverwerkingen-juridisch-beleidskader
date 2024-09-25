var respecConfig = {
  useLogo: true,
  useLabel: true,
  license: "cc0",
  specStatus: "WV",
  specType: "PR",
  pubDomain: "API",
  shortName: "Logboek_Juridisch",
  publishDate: "2024-09-25",
  publishVersion: "0.1.0",
  title: "Juridisch Beleidskader - Logboek Dataverwerking",
  // previousPublishVersion: "(none)",
  content: {"ch01": "informative", "ch02": "", "mermaid": ""},
  editors:
    [
      {
        name: "Vedran Bilanovic",
        company: "Ministerie van Binnelandse Zaken en Koninkrijksrelaties",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      },
      {
        name: "Eelco Hotting",
        company: "Ministerie van Binnelandse Zaken en Koninkrijksrelaties",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      },
      {
        name: "Jeroen Mulder",
        company: "Ministerie van Binnelandse Zaken en Koninkrijksrelaties",
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
        companyURL: "https://github.com/Logius-standaarden",
      },
      {
        name: "Martin van der Plas",
        company: "Logius",
        companyURL: "https://github.com/Logius-standaarden",
      }
    ],
  authors:
    [
      {
        name: "Wouter Diephuis",
        company: "Ministerie van Binnelandse Zaken en Koninkrijksrelaties",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      },
      {
        name: "Mirian van Ansem",
        company: "Ministerie van Binnelandse Zaken en Koninkrijksrelaties",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      }
    ],
  github: "https://github.com/Logius-standaarden/logboek-dataverwerkingen_Juridisch-beleidskader",


  // Create PDF and link to file in header (optional):
  alternateFormats: [
      {
          label: "pdf",
          uri: "template.pdf",
      },
  ],
  postProcess: [window.respecMermaid.createFigures]
};
