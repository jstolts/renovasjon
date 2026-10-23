// Generert av scripts/sync-data.sh fra data/tidslinje.json. Ikke rediger denne filen for hånd.
window.__DATA = window.__DATA || {};
window.__DATA.tidslinje = {
  "versjon": 1,
  "overtakelse": "2027-01-04",
  "ansvarlige": ["oss", "rørlegger", "elektriker", "tømrer", "flislegger", "maler", "murer/feier", "taktekker", "entreprenør"],
  "faser": [
    { "id": "for", "navn": "Før overtakelse" },
    { "id": "riving", "navn": "Riving og rør/el grovarbeid" },
    { "id": "bad", "navn": "Bad" },
    { "id": "kjokken", "navn": "Kjøkken" },
    { "id": "kjeller", "navn": "Kjeller" },
    { "id": "loft", "navn": "Loft" },
    { "id": "overflater", "navn": "Overflater og ferdigstilling" },
    { "id": "senere", "navn": "Senere", "senere": true }
  ],
  "oppgaver": [
    { "id": "t01", "navn": "Innhente tilbud: rørlegger (2–3 firmaer)", "fase": "for", "startUke": -9, "varighetUker": 4, "avhengerAv": [], "ansvarlig": "oss", "status": "planlagt", "notat": "Be om pris på nytt avløp, rør-i-rør, bad, vaskerom og bereder samlet. Fastpris eller tak på timer." },
    { "id": "t02", "navn": "Innhente tilbud: elektriker (2–3 firmaer)", "fase": "for", "startUke": -9, "varighetUker": 4, "avhengerAv": [], "ansvarlig": "oss", "status": "planlagt", "notat": "Full rehabilitering 140 m², nytt sikringsskap, komfyrvakt, kurser til kjøkken og bad." },
    { "id": "t03", "navn": "Innhente tilbud: tømrer og flislegger (2–3 firmaer)", "fase": "for", "startUke": -9, "varighetUker": 4, "avhengerAv": [], "ansvarlig": "oss", "status": "planlagt", "notat": "Bad (sammenslåing bad + wc), kjøkkenmontering, branndører i kjeller, brannskille på loft." },
    { "id": "t04", "navn": "El-kontroll etter NEK 405-2", "fase": "for", "startUke": -8, "varighetUker": 1, "avhengerAv": [], "ansvarlig": "elektriker", "status": "planlagt", "notat": "Tilstandsvurdering av eksisterende anlegg. Gir grunnlag for omfang og tilbud. Krever tilgang til boligen – avtal via megler." },
    { "id": "t05", "navn": "Rørleggerbefaring og kamerainspeksjon av avløp", "fase": "for", "startUke": -8, "varighetUker": 1, "avhengerAv": [], "ansvarlig": "rørlegger", "status": "planlagt", "notat": "Sjekk soilrør, stakeluker og bunnledning under kjellergulv." },
    { "id": "t06", "navn": "Forhåndskonferanse/søknad: bad og evt. bærevegg", "fase": "for", "startUke": -7, "varighetUker": 6, "avhengerAv": ["t05"], "ansvarlig": "oss", "status": "planlagt", "notat": "Avklar med Trondheim kommune om sammenslåing av bad og wc og evt. inngrep i bærevegg er søknadspliktig. Trenger ansvarlig søker hvis ja." },
    { "id": "t07", "navn": "Avklare brannskille med naboer", "fase": "for", "startUke": -7, "varighetUker": 6, "avhengerAv": [], "ansvarlig": "oss", "status": "planlagt", "notat": "Gjelder kjeller og loft. Felles løsning med naboene kan gi lavere pris." },
    { "id": "t08", "navn": "Velge firmaer og signere kontrakter", "fase": "for", "startUke": -4, "varighetUker": 2, "avhengerAv": ["t01", "t02", "t03", "t04", "t05"], "ansvarlig": "oss", "status": "planlagt", "notat": "" },
    { "id": "t09", "navn": "Bestille kjøkken og baderomsutstyr", "fase": "for", "startUke": -2, "varighetUker": 2, "avhengerAv": ["t08"], "ansvarlig": "oss", "status": "planlagt", "notat": "Kjøkken har ofte 4–8 ukers leveringstid." },

    { "id": "t10", "navn": "Rive bad og wc (inkl. skillevegg)", "fase": "riving", "startUke": 0, "varighetUker": 1, "avhengerAv": ["t08", "t06"], "ansvarlig": "tømrer", "status": "planlagt", "notat": "" },
    { "id": "t11", "navn": "Rive kjøkken", "fase": "riving", "startUke": 0, "varighetUker": 1, "avhengerAv": ["t08"], "ansvarlig": "oss", "status": "planlagt", "notat": "" },
    { "id": "t12", "navn": "Nytt innvendig avløp inkl. soilrør", "fase": "riving", "startUke": 1, "varighetUker": 2, "avhengerAv": ["t10", "t05"], "ansvarlig": "rørlegger", "status": "planlagt", "notat": "" },
    { "id": "t13", "navn": "Rør-i-rør, hele huset", "fase": "riving", "startUke": 1, "varighetUker": 3, "avhengerAv": ["t10", "t11"], "ansvarlig": "rørlegger", "status": "planlagt", "notat": "" },
    { "id": "t14", "navn": "Nytt sikringsskap med jordfeilbrytere", "fase": "riving", "startUke": 1, "varighetUker": 1, "avhengerAv": ["t04", "t08"], "ansvarlig": "elektriker", "status": "planlagt", "notat": "" },
    { "id": "t15", "navn": "Nye kurser og grovinstallasjon el", "fase": "riving", "startUke": 2, "varighetUker": 3, "avhengerAv": ["t14", "t11"], "ansvarlig": "elektriker", "status": "planlagt", "notat": "" },

    { "id": "t20", "navn": "Bad: vegger, gulv med fall og sluk", "fase": "bad", "startUke": 4, "varighetUker": 2, "avhengerAv": ["t12", "t13"], "ansvarlig": "tømrer", "status": "planlagt", "notat": "" },
    { "id": "t21", "navn": "Bad: avtrekk og ventilasjon", "fase": "bad", "startUke": 5, "varighetUker": 1, "avhengerAv": ["t15"], "ansvarlig": "elektriker", "status": "planlagt", "notat": "" },
    { "id": "t22", "navn": "Bad: varmekabler og el-punkter", "fase": "bad", "startUke": 6, "varighetUker": 1, "avhengerAv": ["t20", "t15"], "ansvarlig": "elektriker", "status": "planlagt", "notat": "" },
    { "id": "t23", "navn": "Bad: membran", "fase": "bad", "startUke": 7, "varighetUker": 1, "avhengerAv": ["t22"], "ansvarlig": "flislegger", "status": "planlagt", "notat": "Bruk våtromssertifisert firma og ta bilder av membranen før flislegging." },
    { "id": "t24", "navn": "Bad: flislegging vegg og gulv", "fase": "bad", "startUke": 8, "varighetUker": 2, "avhengerAv": ["t23"], "ansvarlig": "flislegger", "status": "planlagt", "notat": "" },
    { "id": "t25", "navn": "Bad: sanitær (wc, servant, dusj)", "fase": "bad", "startUke": 10, "varighetUker": 1, "avhengerAv": ["t24"], "ansvarlig": "rørlegger", "status": "planlagt", "notat": "" },
    { "id": "t26", "navn": "Bad: dokumentasjon og ferdigmelding", "fase": "bad", "startUke": 11, "varighetUker": 1, "avhengerAv": ["t25"], "ansvarlig": "oss", "status": "planlagt", "notat": "Samle samsvarserklæringer og våtromsdokumentasjon." },

    { "id": "t30", "navn": "Kjøkken: klargjøre gulv og vegger", "fase": "kjokken", "startUke": 5, "varighetUker": 1, "avhengerAv": ["t15", "t13"], "ansvarlig": "tømrer", "status": "planlagt", "notat": "" },
    { "id": "t31", "navn": "Kjøkken: montere innredning", "fase": "kjokken", "startUke": 6, "varighetUker": 2, "avhengerAv": ["t30", "t09"], "ansvarlig": "tømrer", "status": "planlagt", "notat": "" },
    { "id": "t32", "navn": "Kjøkken: benkeplate, oppmåling og montering", "fase": "kjokken", "startUke": 8, "varighetUker": 2, "avhengerAv": ["t31"], "ansvarlig": "tømrer", "status": "planlagt", "notat": "Stein og kompaktlaminat måles etter montert innredning, 1–2 ukers leveringstid." },
    { "id": "t33", "navn": "Kjøkken: tilkobling vann, avløp og hvitevarer", "fase": "kjokken", "startUke": 10, "varighetUker": 1, "avhengerAv": ["t32"], "ansvarlig": "rørlegger", "status": "planlagt", "notat": "" },
    { "id": "t34", "navn": "Kjøkken: komfyrvakt og el-tilkobling", "fase": "kjokken", "startUke": 10, "varighetUker": 1, "avhengerAv": ["t32"], "ansvarlig": "elektriker", "status": "planlagt", "notat": "" },

    { "id": "t40", "navn": "Vaskerom: sluk, fall og membran", "fase": "kjeller", "startUke": 4, "varighetUker": 2, "avhengerAv": ["t12"], "ansvarlig": "rørlegger", "status": "planlagt", "notat": "" },
    { "id": "t41", "navn": "Vaskerom: flis og innredning", "fase": "kjeller", "startUke": 6, "varighetUker": 1, "avhengerAv": ["t40"], "ansvarlig": "flislegger", "status": "planlagt", "notat": "" },
    { "id": "t42", "navn": "Ny bereder 200 l med vannstopper", "fase": "kjeller", "startUke": 4, "varighetUker": 1, "avhengerAv": ["t13"], "ansvarlig": "rørlegger", "status": "planlagt", "notat": "" },
    { "id": "t43", "navn": "Montere 2 EI30-dører i kjeller", "fase": "kjeller", "startUke": 9, "varighetUker": 1, "avhengerAv": ["t07"], "ansvarlig": "tømrer", "status": "planlagt", "notat": "" },

    { "id": "t50", "navn": "Brannskille på loft mot naboer", "fase": "loft", "startUke": 12, "varighetUker": 2, "avhengerAv": ["t07"], "ansvarlig": "tømrer", "status": "planlagt", "notat": "Koordineres med naboene. Kan ses i sammenheng med omtekking av taket." },

    { "id": "t60", "navn": "Sparkling og maling", "fase": "overflater", "startUke": 11, "varighetUker": 3, "avhengerAv": ["t15", "t31"], "ansvarlig": "oss", "status": "planlagt", "notat": "" },
    { "id": "t61", "navn": "Gulv: sliping eller nytt gulv", "fase": "overflater", "startUke": 14, "varighetUker": 2, "avhengerAv": ["t60"], "ansvarlig": "oss", "status": "planlagt", "notat": "" },
    { "id": "t62", "navn": "Lister, dører og småarbeid", "fase": "overflater", "startUke": 16, "varighetUker": 2, "avhengerAv": ["t61"], "ansvarlig": "oss", "status": "planlagt", "notat": "" },
    { "id": "t63", "navn": "Samsvarserklæring el og sluttdokumentasjon", "fase": "overflater", "startUke": 17, "varighetUker": 1, "avhengerAv": ["t34", "t22"], "ansvarlig": "elektriker", "status": "planlagt", "notat": "" },
    { "id": "t65", "navn": "Tidligst innflytting (bad og kjøkken ferdige)", "fase": "overflater", "startUke": 12, "varighetUker": 1, "avhengerAv": ["t25", "t33", "t34"], "ansvarlig": "oss", "status": "planlagt", "notat": "Forutsetning: huset står tomt uke 0–12 mens rør, el, bad og kjøkken gjøres i ett samlet anbud. Maling, gulv og lister kan gjøres mens vi bor der, men gulvsliping er lettest før innflytting." },
    { "id": "t64", "navn": "Alt ferdig: rydde og vaske", "fase": "overflater", "startUke": 18, "varighetUker": 1, "avhengerAv": ["t62", "t26", "t63"], "ansvarlig": "oss", "status": "planlagt", "notat": "" },

    { "id": "t70", "navn": "Skifte 10 vinduer og 2 balkongdører", "fase": "senere", "startUke": 60, "varighetUker": 2, "avhengerAv": [], "ansvarlig": "tømrer", "status": "planlagt", "notat": "" },
    { "id": "t71", "navn": "Piperehabilitering", "fase": "senere", "startUke": 62, "varighetUker": 2, "avhengerAv": [], "ansvarlig": "murer/feier", "status": "planlagt", "notat": "Ukjent kostnad. Be feiervesenet om tilstandsvurdering først." },
    { "id": "t72", "navn": "Drenering og utvendig fuktsikring", "fase": "senere", "startUke": 64, "varighetUker": 3, "avhengerAv": [], "ansvarlig": "entreprenør", "status": "planlagt", "notat": "Ukjent kostnad. Vurder etter fuktmåling i kjeller." },
    { "id": "t73", "navn": "Omtekking tak (fellesprosjekt med 3 naboer)", "fase": "senere", "startUke": 70, "varighetUker": 4, "avhengerAv": [], "ansvarlig": "taktekker", "status": "planlagt", "notat": "Ukjent kostnad, fordeles mellom fire boenheter. Krever avtale med naboene." }
  ]
};
