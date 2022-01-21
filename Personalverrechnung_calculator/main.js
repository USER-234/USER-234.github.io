// description
const descTit = document.querySelector(".besch-tit");
const descText = document.querySelector(".besch-text");
// ### Lst-BG calculator connentions
//HTML and JS connection lst-calc non interactive
const svBetLstCalc = document.querySelector(".sv-betrag");
const steuFreiBe = document.querySelector(".steuFreiBe");

//HTML and JS connection lst-calc interactive
const btnUsAnze = document.querySelector(".btn-ubers-anz");
const brutEnt = document.querySelector(".brutEnt");
const usHalf = document.querySelector(".usHalf");
const usFull = document.querySelector(".usFull");
const usTeil = document.querySelector(".usTeil");
const ignValUG = document.querySelector(".ignValUG");
const ignValUZf = document.querySelector(".ignValUZf");
const ignValUZs = document.querySelector(".ignValUZs");
const sonsZusch = document.querySelector(".sonsZusch");
const btnRadAA = document.querySelector(".radAA");
const btnRadLeh = document.querySelector(".radLeh");
const gesBruEnt = document.querySelector(".gesBruEnt");
const FB = document.querySelector(".FB");
const PP = document.querySelector(".PP");
const GB = document.querySelector(".GB");
const SE = document.querySelector(".SE");

// ### Lst calculator connentions
//HTML and JS connection lst-calc non interactive
const textBrutEnt = document.querySelector(".text-brutEnt");
const textUsHalf = document.querySelector(".text-usHalf");
const textUsFull = document.querySelector(".text-usFull");
const textUsTeil = document.querySelector(".text-usTeil");
const textUg = document.querySelector(".text-ug");
const textUzFrei = document.querySelector(".text-uz-frei");
const textUzPfli = document.querySelector(".text-uz-pfli");
const textSonsZusch = document.querySelector(".text-sonsZusch");

const ug = document.querySelector(".ug");
const uzFrei = document.querySelector(".uz-frei");
const uzPfli = document.querySelector(".uz-pfli");
const lstBg = document.querySelector(".Lst-BG");
const lstBgTe = document.querySelector(".Lst-BG-teil");
const lstBgRe = document.querySelector(".Lst-BG-redu");
const steSatz = document.querySelector(".bg-proz");
const abzug = document.querySelector(".abzug");
const faboErg = document.querySelector(".faboErg");
const PEBetr = document.querySelector(".pe-betr");
const lst = document.querySelector(".lst");

//HTML and JS connection lst-calc interactive
const abzAnzKind = document.querySelector(".anz-kind");
const btnRadVoll = document.querySelector(".fabo-btn-voll");
const btnRadHalb = document.querySelector(".fabo-btn-halb");
const anzMindKind = document.querySelector(".anz-mind-kind");
const anzVollKind = document.querySelector(".anz-voll-kind");
const PEkm = document.querySelector(".pe-km");
// lst-calc button
const btnSubLstCalc = document.querySelector(".submit-lstCalc");

// ### Netto Entgelt calculator connections
//HTML and JS connection netto-calc non interactive
const brutEntNetCalc = document.querySelector(".gesBruEnt-netCalc");
const svNetCalc = document.querySelector(".sv-betrag-netCalc");
const lstNetCalc = document.querySelector(".lst-netCalc");
const SEnetCalc = document.querySelector(".SE-netCalc");
const GBnetCalc = document.querySelector(".GB-netCalc");
const NettoEntg = document.querySelector(".nettoEntgelt-netCalc");

//HTML and JS connection netto-calc interactive
const KUWFNetCalc = document.querySelector(".KU-WF-netCalc");
const betUmlNetCalc = document.querySelector(".bet-uml-netCalc");
const sonsAbzNetCalc = document.querySelector(".sont-abz-netCalc");
const akZNetCalc = document.querySelector(".akZ-netCalc");
const ruckZNetCalc = document.querySelector(".ruckZ-netCalc");

// netto-calc button
const btnSubNettoCalc = document.querySelector(".submit-netCalc");

// delete everything button
const deleteAll = document.querySelector(".delete");

// prevents minus value
function noZero(num) {
  if (num < 0) {
    return 0;
  }
  return num;
}

// prevents a value to be "NaN" and instead returns 0
function nanToZero(num) {
  if (num === "NaN") {
    return (num.textContent = 0);
  }
  return num;
}

// turns "0.00" to ""
function nullToEmpty(num) {
  if (num == 0.0 || num == 0) {
    return "";
  }
  return num;
}

// ÜG calculator
function uegRech(entg, uesT, halb, voll) {
  return (
    (Number(entg) / Number(uesT)).toFixed(2) * (Number(halb) + Number(voll))
  );
}

// extra fee free overtime pay calulator
function uezFrei100Rech(entg, uesT, voll) {
  return ((Number(entg) / Number(uesT)).toFixed(2) * Number(voll)).toFixed(2);
}

// half of the overtime pay calulator
function halfUbersRech(entg, uesT) {
  return ((Number(entg) / Number(uesT)).toFixed(2) / 2).toFixed(2);
}

// calculates the max 50% fee free overtime pay and the max worked hour can be only 10
function uezFrei50Rech(halbInEur, halb) {
  if (Number(halb) <= 10) {
    return (Number(halbInEur) * Number(halb)).toFixed(2);
  }
  return (Number(halbInEur) * 10).toFixed(2);
}

// if the 50% fee free overtime pay bigger than the max 50% fee free overtime pay it returns the max 50% fee free overtime pay
function usMaxBetrRech(betr50Prou, maxBetr) {
  if (Number(betr50Prou) <= maxBetr) {
    return betr50Prou;
  }
  return maxBetr.toFixed(2);
}

// calculates the diffrent between the 50% fee free overtime pay and max 50% fee free overtime pay
function restBetrRech(betrEin, betrZwei) {
  return (Number(betrEin) - Number(betrZwei)).toFixed(2);
}

// fee required overtime pay calculator
function uzPfliRech(halbInEur, halb, restBetr) {
  if (halb > 10) {
    return (
      Number((Number(halbInEur) * (Number(halb) - 10)).toFixed(2)) +
      Number(restBetr)
    );
  }
  return 0 + Number(restBetr);
}

// decides if the value overstepps the max value
function maxZuschBetrRech(betr, maxBetr) {
  if (Number(betr) < maxBetr) {
    return Number(betr);
  } else return 0;
}

// sv calculator Arbeiter/Angestellte
function svRechAA(num) {
  if (num < 0) {
    return alert("error Sozialversischerung Arbeiter/Angestellte");
  }
  if (num >= 0 && num < 475.86) {
    return 0;
  }
  if (num >= 475.86 && num <= 1790) {
    return num * 0.1512;
  }
  if (num >= 1790.01 && num <= 1953) {
    return num * 0.1612;
  }
  if (num >= 1953.01 && num <= 2117) {
    return num * 0.1712;
  }
  if (num >= 2117.01 && num <= 5550) {
    return num * 0.1812;
  }
  return 1005.66;
}

// sv calculator Lehrling
function svRechLeh(num) {
  if (num < 0) {
    return alert("error Sozialversischerung Lehrling");
  }
  if (num >= 0 && num < 475.86) {
    return 0;
  }
  if (num >= 475.86 && num <= 1790) {
    return num * 0.1192;
  }
  if (num >= 1790.01 && num <= 1953) {
    return num * 0.1292;
  }
  if (num >= 1953.01 && num <= 5550) {
    return num * 0.1312;
  }
  return 1005.66;
}

// Lst-BG calculator
function lstBgRech(a, b, c, d, e, f, g) {
  return (
    Number(a) -
    Number(b) -
    Number(c) -
    Number(d) -
    Number(e) -
    Number(f) -
    Number(g)
  );
}

// Lst-BG prozent calculator
function LstProz(num) {
  if (num < 0) {
    return alert("error Lohnstreuerbemessungsgrundlage Prozet");
  }
  if (num <= 927.67) {
    return 0;
  }
  if (num <= 1511 && num >= 927.68) {
    return 20;
  }
  if (num <= 2594.33 && num >= 1511.01) {
    return 35;
  }
  if (num <= 5011 && num >= 2594.34) {
    return 42;
  }
  if (num <= 7511 && num >= 5011.01) {
    return 48;
  }
  if (num <= 83344.33 && num >= 7511.01) {
    return 50;
  }
  if (num >= 83344.34) {
    return 55;
  }
}

// smaller Lst-BG calculator
function smaLstBg() {
  return Number(lstBg.textContent) * (steSatz.textContent / 100);
}

// regulates in case the AVAB nummber would be too high
function AVABcontrol(num) {
  if (num < 0) {
    return 0;
  }
  if (num <= 5) {
    return num;
  }
  if (num > 5) {
    return 5;
  }
}

//AVAB table
const AVABTable = {
  0: [0, 0, 0, 0, 0, 0],
  20: [218, 260.03, 274.61, 292.94, 311.27, 329.6],
  35: [445.51, 486.68, 501.26, 519.59, 537.92, 556.25],
  42: [627.12, 668.29, 682.87, 701.2, 719.53, 737.86],
  48: [927.78, 968.95, 983.53, 1001.86, 1020.19, 1038.52],
  50: [1078, 1119.17, 1133.75, 1152.08, 1170.41, 1118.74],
  55: [5245.21, 5286.38, 5300.96, 5319.29, 5337.62, 5355.95],
};

// fabo+ full or half bonus interaction
function faboVollOrHalb() {
  if (btnRadVoll.checked === true) {
    return 1;
  }
  if (btnRadHalb.checked === true) {
    return 0.5;
  }
  return 0;
}

// fabo plus calculator
function faboPlusReh(mindj, vollj) {
  return (mindj * 125 + vollj * 41.68) * faboVollOrHalb();
}

// fabo plus kind regulation
function faboPlusKind(num) {
  if (num == "") {
    return 0;
  }
  return num;
}

// PE calculator
function pendeurRech(num) {
  return (num * 2) / 12;
}

// Lst calculator
function lstRech(a, b, c, d) {
  return Number(a) - (Number(b) + Number(c) + Number(d));
}

// button lst calc
btnSubLstCalc.addEventListener("click", function () {
  // overtime pay base calculator
  ug.textContent = nullToEmpty(
    nanToZero(
      uegRech(brutEnt.value, usTeil.value, usHalf.value, usFull.value).toFixed(
        2
      )
    )
  );

  // this can turn off overtime pay calculator and returns 0
  if (ignValUG.checked === true) {
    ug.textContent = 0;
  }

  // extra overtime pay fee free calulator
  uzFrei.textContent = nullToEmpty(
    nanToZero(
      (
        Number(uezFrei100Rech(brutEnt.value, usTeil.value, usFull.value)) +
        Number(
          usMaxBetrRech(
            uezFrei50Rech(
              halfUbersRech(brutEnt.value, usTeil.value),
              usHalf.value
            ),
            86
          )
        )
      ).toFixed(2)
    )
  );

  // this can turn off extra overtime pay fee free calulator and returns 0
  if (ignValUZf.checked === true) {
    uzFrei.textContent = 0;
  }

  // extra overtime pay with fee calulator
  if (usHalf.value != "") {
    uzPfli.textContent = nanToZero(
      uzPfliRech(
        halfUbersRech(brutEnt.value, usTeil.value),
        usHalf.value,
        restBetrRech(
          uezFrei50Rech(
            halfUbersRech(brutEnt.value, usTeil.value),
            usHalf.value
          ),
          usMaxBetrRech(
            uezFrei50Rech(
              halfUbersRech(brutEnt.value, usTeil.value),
              usHalf.value
            ),
            86
          )
        )
      )
    ).toFixed(2);
  } else uzPfli.textContent = "";

  // prevents value to return "NaN"
  if (uzPfli.textContent === "NaN") {
    uzPfli.textContent = 0;
  } else uzPfli.textContent = uzPfli.textContent;

  // this can turn off extra overtime pay with fee calulator and returns 0
  if (ignValUZs.checked === true) {
    uzPfli.textContent = 0;
  }

  // passing uzFrei value to steuFreiBe
  steuFreiBe.textContent = nullToEmpty(
    nanToZero(
      Number(uzFrei.textContent) +
        Number(maxZuschBetrRech(sonsZusch.value, 360))
    )
  );

  // decides if the overtime has to be added to the brutto wage
  // calculates total wage
  if (Number(brutEnt.value) != 0) {
    gesBruEnt.value = (
      Number(brutEnt.value) +
      Number(ug.textContent) +
      Number(uzFrei.textContent) +
      Number(uzPfli.textContent) +
      Number(sonsZusch.value)
    ).toFixed(2);
  } else gesBruEnt.value = gesBruEnt.value;

  // AA or Leh rad btn interaction
  // SV calculator result
  if (btnRadAA.checked === true) {
    svBetLstCalc.textContent = svRechAA(gesBruEnt.value).toFixed(2);
  } else svBetLstCalc.textContent = svRechLeh(gesBruEnt.value).toFixed(2);

  // Lst-BG calculator
  lstBg.textContent = lstBgRech(
    gesBruEnt.value,
    FB.value,
    PP.value,
    GB.value,
    SE.value,
    steuFreiBe.textContent,
    svBetLstCalc.textContent
  ).toFixed(2);

  // passing lstBg value to lstBgTe
  lstBgTe.textContent = lstBg.textContent;

  // Lst-BG prozent calculator
  steSatz.textContent = LstProz(lstBg.textContent);

  // smaller Lst-BG calculator
  lstBgRe.textContent = smaLstBg().toFixed(2);

  // abzug calculator
  abzug.textContent =
    AVABTable[steSatz.textContent][AVABcontrol(abzAnzKind.value)];

  // fabo plus calculator
  faboErg.textContent = nullToEmpty(
    faboPlusReh(
      Number(faboPlusKind(anzMindKind.value)),
      Number(faboPlusKind(anzVollKind.value))
    ).toFixed(2)
  );

  // PE calculator
  PEBetr.textContent = nullToEmpty(pendeurRech(PEkm.value).toFixed(2));

  // AA or Leh rad btn interaction
  // Lst calculator
  if (btnRadAA.checked === true) {
    lst.textContent = noZero(
      lstRech(
        lstBgRe.textContent,
        abzug.textContent,
        faboErg.textContent,
        PEBetr.textContent
      ).toFixed(2)
    );
  } else lst.textContent = 0;

  // passing Lst calculator values to Netto Entgelt calculator
  (brutEntNetCalc.textContent = gesBruEnt.value),
    (svNetCalc.textContent = svBetLstCalc.textContent),
    (lstNetCalc.textContent = lst.textContent),
    (SEnetCalc.textContent = SE.value),
    (GBnetCalc.textContent = GB.value);
});

// netto wage calculator
function nettoEntRech(a, b, c, d, e, f, g, h, i, j) {
  return (
    Number(a) -
    (Number(b) +
      Number(c) +
      Number(d) +
      Number(e) +
      Number(f) +
      Number(g) +
      Number(h) +
      Number(i) +
      Number(j))
  );
}

// button netto calc
btnSubNettoCalc.addEventListener("click", function () {
  // netto wage calculator
  NettoEntg.textContent = nettoEntRech(
    brutEntNetCalc.textContent,
    svNetCalc.textContent,
    KUWFNetCalc.value,
    lstNetCalc.textContent,
    SEnetCalc.textContent,
    GBnetCalc.textContent,
    betUmlNetCalc.value,
    sonsAbzNetCalc.value,
    akZNetCalc.value,
    ruckZNetCalc.value
  ).toFixed(2);
});

// shows/hides the description text
function description() {
  descText.classList.toggle("visible");
}

// deletes every content in the interactive and non interactive fields
deleteAll.addEventListener("click", function () {
  // interactive fields
  brutEnt.value = "";
  usHalf.value = "";
  usFull.value = "";
  usTeil.value = "";
  sonsZusch.value = "";
  btnRadAA.value = "";
  btnRadLeh.value = "";
  gesBruEnt.value = "";
  FB.value = "";
  PP.value = "";
  GB.value = "";
  SE.value = "";
  abzAnzKind.value = "";
  btnRadVoll.value = "";
  btnRadHalb.value = "";
  anzMindKind.value = "";
  anzVollKind.value = "";
  PEkm.value = "";
  KUWFNetCalc.value = "";
  betUmlNetCalc.value = "";
  sonsAbzNetCalc.value = "";
  akZNetCalc.value = "";
  ruckZNetCalc.value = "";
  // non interactive fields
  svBetLstCalc.textContent = "";
  steuFreiBe.textContent = "";
  ug.textContent = "";
  uzFrei.textContent = "";
  uzPfli.textContent = "";
  lstBg.textContent = "";
  lstBgTe.textContent = "________";
  lstBgRe.textContent = "";
  steSatz.textContent = "__";
  abzug.textContent = "";
  faboErg.textContent = "";
  PEBetr.textContent = "";
  lst.textContent = "";
  brutEntNetCalc.textContent = "";
  svNetCalc.textContent = "";
  lstNetCalc.textContent = "";
  SEnetCalc.textContent = "";
  GBnetCalc.textContent = "";
  NettoEntg.textContent = "";
  // radio button
  btnRadVoll.checked = false;
  btnRadHalb.checked = false;
  // checkbox
  ignValUG.checked = false;
  ignValUZf.checked = false;
  ignValUZs.checked = false;
});

btnUsAnze.addEventListener("click", function () {
  textBrutEnt.classList.toggle("hidden");
  textUsHalf.classList.toggle("hidden");
  textUsFull.classList.toggle("hidden");
  textUsTeil.classList.toggle("hidden");
  textUg.classList.toggle("hidden");
  textUzFrei.classList.toggle("hidden");
  textUzPfli.classList.toggle("hidden");
  textSonsZusch.classList.toggle("hidden");
  brutEnt.classList.toggle("hidden");
  usHalf.classList.toggle("hidden");
  usFull.classList.toggle("hidden");
  usTeil.classList.toggle("hidden");
  ug.classList.toggle("hidden");
  uzFrei.classList.toggle("hidden");
  uzPfli.classList.toggle("hidden");
  sonsZusch.classList.toggle("hidden");
  btnUsAnze.classList.toggle("blue-1");
});
