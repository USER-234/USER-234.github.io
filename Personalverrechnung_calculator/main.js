// description
const descTit = document.querySelector(".besch-tit");
const descText = document.querySelector(".besch-text");
// ################################################
// overtime pay calculator connentions
//HTML and JS connection lst-calc non interactive
const btnUsAnze = document.querySelector(".btn-ubers-anz");
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

//HTML and JS connection lst-calc interactive
const brutEnt = document.querySelector(".brutEnt");
const usHalf = document.querySelector(".usHalf");
const usFull = document.querySelector(".usFull");
const usTeil = document.querySelector(".usTeil");

// ################################################
// bonuses calculator connentions
//HTML and JS connection lst-calc non interactive
const btnZuAnze = document.querySelector(".btn-zu-anz");
const textFreiZulLow = document.querySelector(".text-freiZulLow");
const textFreiZulHigh = document.querySelector(".text-freiZulHigh");

const textNutDefBon1 = document.querySelector(".text-nutDefBon1");
const textNutDefBon2 = document.querySelector(".text-nutDefBon2");
const textNutDefBon3 = document.querySelector(".text-nutDefBon3");
const textNutDefBon4 = document.querySelector(".text-nutDefBon4");
const textNutDefBon5 = document.querySelector(".text-nutDefBon5");
const textNutDefBon6 = document.querySelector(".text-nutDefBon6");
const textNutDefBon7 = document.querySelector(".text-nutDefBon7");
const textNutDefBon8 = document.querySelector(".text-nutDefBon8");

const textNutDefBonBetr1 = document.querySelector(".text-nutDefBonBetr1");
const textNutDefBonBetr2 = document.querySelector(".text-nutDefBonBetr2");
const textNutDefBonBetr3 = document.querySelector(".text-nutDefBonBetr3");
const textNutDefBonBetr4 = document.querySelector(".text-nutDefBonBetr4");
const textNutDefBonBetr5 = document.querySelector(".text-nutDefBonBetr5");
const textNutDefBonBetr6 = document.querySelector(".text-nutDefBonBetr6");
const textNutDefBonBetr7 = document.querySelector(".text-nutDefBonBetr7");
const textNutDefBonBetr8 = document.querySelector(".text-nutDefBonBetr8");

//HTML and JS connection lst-calc interactive
const freiZulLow = document.querySelector(".freiZulLow");
const freiZulHigh = document.querySelector(".freiZulHigh");
const sonsZusch = document.querySelector(".sonsZusch");

const freiBtnCnt = document.querySelectorAll(".freiBtnCnt");

const ignLstSymbol1 = document.querySelector(".ignore-lst-symbol1");
const ignLstSymbol2 = document.querySelector(".ignore-lst-symbol2");
const ignLstSymbol3 = document.querySelector(".ignore-lst-symbol3");
const ignLstSymbol4 = document.querySelector(".ignore-lst-symbol4");
const ignLstSymbol5 = document.querySelector(".ignore-lst-symbol5");
const ignLstSymbol6 = document.querySelector(".ignore-lst-symbol6");
const ignLstSymbol7 = document.querySelector(".ignore-lst-symbol7");
const ignLstSymbol8 = document.querySelector(".ignore-lst-symbol8");

const ignoreLst1 = document.querySelector(".ignoreLst1");
const ignoreLst2 = document.querySelector(".ignoreLst2");
const ignoreLst3 = document.querySelector(".ignoreLst3");
const ignoreLst4 = document.querySelector(".ignoreLst4");
const ignoreLst5 = document.querySelector(".ignoreLst5");
const ignoreLst6 = document.querySelector(".ignoreLst6");
const ignoreLst7 = document.querySelector(".ignoreLst7");
const ignoreLst8 = document.querySelector(".ignoreLst8");

const ignSvSymbol1 = document.querySelector(".ignSvSymbol1");
const ignSvSymbol2 = document.querySelector(".ignSvSymbol2");
const ignSvSymbol3 = document.querySelector(".ignSvSymbol3");
const ignSvSymbol4 = document.querySelector(".ignSvSymbol4");
const ignSvSymbol5 = document.querySelector(".ignSvSymbol5");
const ignSvSymbol6 = document.querySelector(".ignSvSymbol6");
const ignSvSymbol7 = document.querySelector(".ignSvSymbol7");
const ignSvSymbol8 = document.querySelector(".ignSvSymbol8");

const ignoreSv1 = document.querySelector(".ignoreSv1");
const ignoreSv2 = document.querySelector(".ignoreSv2");
const ignoreSv3 = document.querySelector(".ignoreSv3");
const ignoreSv4 = document.querySelector(".ignoreSv4");
const ignoreSv5 = document.querySelector(".ignoreSv5");
const ignoreSv6 = document.querySelector(".ignoreSv6");
const ignoreSv7 = document.querySelector(".ignoreSv7");
const ignoreSv8 = document.querySelector(".ignoreSv8");

const nutDefProz1 = document.querySelector(".nutDefProz1");
const nutDefProz2 = document.querySelector(".nutDefProz2");
const nutDefProz3 = document.querySelector(".nutDefProz3");
const nutDefProz4 = document.querySelector(".nutDefProz4");
const nutDefProz5 = document.querySelector(".nutDefProz5");
const nutDefProz6 = document.querySelector(".nutDefProz6");
const nutDefProz7 = document.querySelector(".nutDefProz7");
const nutDefProz8 = document.querySelector(".nutDefProz8");

const nutDefStu1 = document.querySelector(".nutDefStu1");
const nutDefStu2 = document.querySelector(".nutDefStu2");
const nutDefStu3 = document.querySelector(".nutDefStu3");
const nutDefStu4 = document.querySelector(".nutDefStu4");
const nutDefStu5 = document.querySelector(".nutDefStu5");
const nutDefStu6 = document.querySelector(".nutDefStu6");
const nutDefStu7 = document.querySelector(".nutDefStu7");
const nutDefStu8 = document.querySelector(".nutDefStu8");

const NutDefBonBetr1 = document.querySelector(".nutDefBonBetr1");
const NutDefBonBetr2 = document.querySelector(".nutDefBonBetr2");
const NutDefBonBetr3 = document.querySelector(".nutDefBonBetr3");
const NutDefBonBetr4 = document.querySelector(".nutDefBonBetr4");
const NutDefBonBetr5 = document.querySelector(".nutDefBonBetr5");
const NutDefBonBetr6 = document.querySelector(".nutDefBonBetr6");
const NutDefBonBetr7 = document.querySelector(".nutDefBonBetr7");
const NutDefBonBetr8 = document.querySelector(".nutDefBonBetr8");

// ################################################
// Lst-BG calculator connentions
//HTML and JS connection lst-calc non interactive
const svBetLstCalc = document.querySelector(".sv-betrag");
const steuFreiBe = document.querySelector(".steuFreiBe");

//HTML and JS connection lst-calc interactive
const btnRadAA = document.querySelector(".radAA");
const btnRadLeh = document.querySelector(".radLeh");
const gesBruEnt = document.querySelector(".gesBruEnt");
const ignSvBetrag = document.querySelector(".ignSvBetrag");
const FB = document.querySelector(".FB");
const PP = document.querySelector(".PP");
const GB = document.querySelector(".GB");
const SE = document.querySelector(".SE");

// ################################################
// Lst calculator connentions
//HTML and JS connection lst-calc non interactive
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
const ignLst = document.querySelector(".ignLst");

// ################################################
// Netto Entgelt calculator connections
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
const ignSvBetragNetCalc = document.querySelector(".ignSvBetragNetCalc");
const ignLstNetCalc = document.querySelector(".ignLstNetCalc");

// buttons
const btnSubLstCalc = document.querySelector(".submit-lstCalc");
const btnSubNettoCalc = document.querySelector(".submit-netCalc");
const deleteAll = document.querySelector(".delete");
const ignValUG = document.querySelector(".ignValUG");
const ignValUZf = document.querySelector(".ignValUZf");
const ignValUZs = document.querySelector(".ignValUZs");

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

// decides the height of max free payment
function twoStatesOfmaxZusch() {
  if (freiZulLow.checked === true) {
    return 360;
  } else return 540;
}

// decides if the value overstepps the max value
function maxZuschBetrRech(betr, maxBetr) {
  if (Number(betr) < maxBetr) {
    return Number(betr);
  } else return maxBetr;
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

  // this can turn off extra overtime pay fee free calulator and forces 0
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

  // this can turn off extra overtime pay with fee calulator and forces 0
  if (ignValUZs.checked === true) {
    uzPfli.textContent = 0;
  }

  // passing uzFrei value to steuFreiBe
  steuFreiBe.textContent = nullToEmpty(
    nanToZero(
      Number(
        maxZuschBetrRech(
          Number(sonsZusch.value) + Number(uzFrei.textContent),
          twoStatesOfmaxZusch()
        )
      )
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

  // this can turn off overtime pay calculator and forces 0
  if (ignSvBetrag.checked === true) {
    svBetLstCalc.textContent = 0;
  }

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

  // this can turn off Lst calculator and forces 0
  if (ignLst.checked === true) {
    lst.textContent = 0;
  }

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
  // forces 0 at SV netto wage calculator
  if (ignSvBetragNetCalc.checked === true) {
    svNetCalc.textContent = 0;
  }

  // forces 0 at Lst netto wage calculator
  if (ignLstNetCalc.checked === true) {
    lstNetCalc.textContent = 0;
  }

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
  btnRadAA.checked = true;
  btnRadLeh.checked = false;
  // checkbox
  ignValUG.checked = false;
  ignValUZf.checked = false;
  ignValUZs.checked = false;
  ignLstNetCalc.checked = false;
  ignSvBetragNetCalc.checked = false;
  ignLst.checked = false;
  ignSvBetrag.checked = false;
});

// shows/hides overtime pay section
btnUsAnze.addEventListener("click", function () {
  btnUsAnze.classList.toggle("blue-1");
  textBrutEnt.classList.toggle("hidden");
  textUsHalf.classList.toggle("hidden");
  textUsFull.classList.toggle("hidden");
  textUsTeil.classList.toggle("hidden");
  textUg.classList.toggle("hidden");
  textUzFrei.classList.toggle("hidden");
  textUzPfli.classList.toggle("hidden");
  brutEnt.classList.toggle("hidden");
  usHalf.classList.toggle("hidden");
  usFull.classList.toggle("hidden");
  usTeil.classList.toggle("hidden");
  ug.classList.toggle("hidden");
  uzFrei.classList.toggle("hidden");
  uzPfli.classList.toggle("hidden");
});

// shows/hides bonuses section
btnZuAnze.addEventListener("click", function () {
  btnZuAnze.classList.toggle("blue-1");
  textSonsZusch.classList.toggle("hidden");
  sonsZusch.classList.toggle("hidden");
  freiZulLow.classList.toggle("hidden");
  freiZulHigh.classList.toggle("hidden");
  textFreiZulLow.classList.toggle("hidden");
  textFreiZulHigh.classList.toggle("hidden");

  textNutDefBon1.classList.toggle("hidden");
  textNutDefBon2.classList.toggle("hidden");
  textNutDefBon3.classList.toggle("hidden");
  textNutDefBon4.classList.toggle("hidden");
  textNutDefBon5.classList.toggle("hidden");
  textNutDefBon6.classList.toggle("hidden");
  textNutDefBon7.classList.toggle("hidden");
  textNutDefBon8.classList.toggle("hidden");

  textNutDefBonBetr1.classList.toggle("hidden");
  textNutDefBonBetr2.classList.toggle("hidden");
  textNutDefBonBetr3.classList.toggle("hidden");
  textNutDefBonBetr4.classList.toggle("hidden");
  textNutDefBonBetr5.classList.toggle("hidden");
  textNutDefBonBetr6.classList.toggle("hidden");
  textNutDefBonBetr7.classList.toggle("hidden");
  textNutDefBonBetr8.classList.toggle("hidden");

  ignoreLst1.classList.toggle("hidden");
  ignoreLst2.classList.toggle("hidden");
  ignoreLst3.classList.toggle("hidden");
  ignoreLst4.classList.toggle("hidden");
  ignoreLst5.classList.toggle("hidden");
  ignoreLst6.classList.toggle("hidden");
  ignoreLst7.classList.toggle("hidden");
  ignoreLst8.classList.toggle("hidden");

  ignoreSv1.classList.toggle("hidden");
  ignoreSv2.classList.toggle("hidden");
  ignoreSv3.classList.toggle("hidden");
  ignoreSv4.classList.toggle("hidden");
  ignoreSv5.classList.toggle("hidden");
  ignoreSv6.classList.toggle("hidden");
  ignoreSv7.classList.toggle("hidden");
  ignoreSv8.classList.toggle("hidden");

  nutDefProz1.classList.toggle("hidden");
  nutDefProz2.classList.toggle("hidden");
  nutDefProz3.classList.toggle("hidden");
  nutDefProz4.classList.toggle("hidden");
  nutDefProz5.classList.toggle("hidden");
  nutDefProz6.classList.toggle("hidden");
  nutDefProz7.classList.toggle("hidden");
  nutDefProz8.classList.toggle("hidden");

  nutDefStu1.classList.toggle("hidden");
  nutDefStu2.classList.toggle("hidden");
  nutDefStu3.classList.toggle("hidden");
  nutDefStu4.classList.toggle("hidden");
  nutDefStu5.classList.toggle("hidden");
  nutDefStu6.classList.toggle("hidden");
  nutDefStu7.classList.toggle("hidden");
  nutDefStu8.classList.toggle("hidden");

  NutDefBonBetr1.classList.toggle("hidden");
  NutDefBonBetr2.classList.toggle("hidden");
  NutDefBonBetr3.classList.toggle("hidden");
  NutDefBonBetr4.classList.toggle("hidden");
  NutDefBonBetr5.classList.toggle("hidden");
  NutDefBonBetr6.classList.toggle("hidden");
  NutDefBonBetr7.classList.toggle("hidden");
  NutDefBonBetr8.classList.toggle("hidden");

  ignSvSymbol1.classList.toggle("hidden");
  ignSvSymbol2.classList.toggle("hidden");
  ignSvSymbol3.classList.toggle("hidden");
  ignSvSymbol4.classList.toggle("hidden");
  ignSvSymbol5.classList.toggle("hidden");
  ignSvSymbol6.classList.toggle("hidden");
  ignSvSymbol7.classList.toggle("hidden");
  ignSvSymbol8.classList.toggle("hidden");

  ignLstSymbol1.classList.toggle("hidden");
  ignLstSymbol2.classList.toggle("hidden");
  ignLstSymbol3.classList.toggle("hidden");
  ignLstSymbol4.classList.toggle("hidden");
  ignLstSymbol5.classList.toggle("hidden");
  ignLstSymbol6.classList.toggle("hidden");
  ignLstSymbol7.classList.toggle("hidden");
  ignLstSymbol8.classList.toggle("hidden");

  freiBtnCnt[0].classList.toggle("hidden");
  freiBtnCnt[1].classList.toggle("hidden");
  freiBtnCnt[2].classList.toggle("hidden");
  freiBtnCnt[3].classList.toggle("hidden");
  freiBtnCnt[4].classList.toggle("hidden");
  freiBtnCnt[5].classList.toggle("hidden");
  freiBtnCnt[6].classList.toggle("hidden");
  freiBtnCnt[7].classList.toggle("hidden");
});
