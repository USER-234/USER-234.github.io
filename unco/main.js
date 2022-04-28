const brutto = 2688.7
const teiler = 143
console.log(halfUbersRech(brutto, teiler));

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
const textNutDefBon = document.querySelectorAll(".text-nutDefBon");
const textNutDefBonBetr = document.querySelectorAll(".text-nutDefBonBetr");

//HTML and JS connection lst-calc interactive
const freiZulLow = document.querySelector(".freiZulLow");
const freiZulHigh = document.querySelector(".freiZulHigh");
const freiBtnCnt = document.querySelectorAll(".freiBtnCnt");
const ignLstSymbol = document.querySelectorAll(".ignore-lst-symbol");
const ignoreLst = document.querySelectorAll(".ignoreLst");
const ignSvSymbol = document.querySelectorAll(".ignSvSymbol");
const ignoreSv = document.querySelectorAll(".ignoreSv");
const nutDefProz = document.querySelectorAll(".nutDefProz");
const nutDefStu = document.querySelectorAll(".nutDefStu");
const nutDefBonBetr = document.querySelectorAll(".nutDefBonBetr");

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
// employer tax connentions
// _DG
const btnGgAnz = document.querySelector(".btn-dg-anz");
const svDgaDg = document.querySelector(".sv-dga_DG");
const bvDg = document.querySelector(".bv_DG");
const dbDg = document.querySelector(".db_DG");
const dzProzDg = document.querySelector(".dz-proz_DG");
const dzDg = document.querySelector(".dz_DG");
const kommDG = document.querySelector(".komms_DG");
const wDgaWDg = document.querySelector(".w-dga-W_DG");
const wDgaDg = document.querySelector(".w-dga_DG");
const btnDgAbg = document.querySelector(".submit-DG-Abgaben");
const dgGrid = document.querySelector(".dg-abgaben");
// _GK
const svDnaGk = document.querySelector(".sv-dna_GK");
const svDgaGk = document.querySelector(".sv-dga_GK");
const bvGk = document.querySelector(".bv_GK");
const sumGk = document.querySelector(".summe_GK");
// _FA
const lstFa = document.querySelector(".lst_FA");
const dbFa = document.querySelector(".db_FA");
const dzFA = document.querySelector(".dz_FA");
const sumFA = document.querySelector(".summe_FA");
// _GE
const kommGe = document.querySelector(".komms_GE");
const wDgaGe = document.querySelector(".w-dga_GE");
const sumGe = document.querySelector(".summe_GE");

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

function sumAll(...nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
}

// smaller console log function
const l = (x) => console.log(x);

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
      Number((Number(halbInEur).toFixed(2) * (Number(halb) - 10)).toFixed(2)) +
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

// calculats the pay per hour
function payPerHour() {
  return Number((Number(brutEnt.value) / Number(usTeil.value)).toFixed(2));
}

// incoma tax free value
let lstFreiBetr = 0;
//  social insurance free value
let svFreiBetr = 0;
// custom bonuses value
let nutDefBonSum = 0;

// sv calculator Arbeiter/Angestellte
function svRechAA(num) {
  if (num < 0) {
    return alert("error Sozialversischerung Arbeiter/Angestellte");
  }
  if (num >= 0 && num < 485.85) {
    return 0;
  }
  if (num >= 485.85 && num <= 1828) {
    return num * 0.1512;
  }
  if (num >= 1828.01 && num <= 1994) {
    return num * 0.1612;
  }
  if (num >= 1994.01 && num <= 2161) {
    return num * 0.1712;
  }
  if (num >= 2161.01 && num <= 5670) {
    return num * 0.1812;
  }
  return 1027.4;
}

// sv calculator Lehrling
function svRechLeh(num) {
  if (num < 0) {
    return alert("error Sozialversischerung Lehrling");
  }
  if (num >= 0 && num < 485.85) {
    return 0;
  }
  if (num >= 485.85 && num <= 1828) {
    return num * 0.1192;
  }
  if (num >= 1828.01 && num <= 1994) {
    return num * 0.1292;
  }
  if (num >= 1994.01 && num <= 5670) {
    return num * 0.1312;
  }
  return 1027.4;
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
    return 32.5;
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
  20: [218.86, 260.03, 274.61, 292.94, 311.27, 329.6],
  32.5: [407.74, 448.91, 463.49, 481, 82.59, 500.15, 518.48],
  42: [654.2, 695.37, 709.95, 728.28, 746.61, 764.94],
  48: [954.86, 996.03, 1010.61, 1028.94, 1047.27, 1065.6],
  50: [1105, 08, 1146.25, 1160.83, 1179.16, 1197.49, 1215.82],
  55: [5272.3, 5313.47, 5328.05, 5346.38, 5364.71, 5383.04],
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
btnSubLstCalc.addEventListener("click", () => {
  // setting incoma tax free value to 0
  lstFreiBetr = 0;
  // setting social insurance free value to 0
  svFreiBetr = 0;
  // setting custom bonuses value to 0
  nutDefBonSum = 0;

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

  // custom bonuses calculator
  // decides if the values are incoma tax and/or social insurance free
  for (let i = 0; i < 8; i++) {
    if (nutDefProz[i].value === "" && nutDefStu[i].value === "") {
      nutDefBonBetr[i].value = nutDefBonBetr[i].value;
    } else {
      nutDefBonBetr[i].value = (
        (payPerHour() / 100) *
        Number(nutDefProz[i].value) *
        Number(nutDefStu[i].value)
      ).toFixed(2);
    }

    nutDefBonSum += Number(nutDefBonBetr[i].value);

    if (ignoreLst[i].checked === true) {
      lstFreiBetr += Number(nutDefBonBetr[i].value);
    }

    if (ignoreSv[i].checked === true) {
      svFreiBetr += Number(nutDefBonBetr[i].value);
    }
  }

  // passing uzFrei value to steuFreiBe
  steuFreiBe.textContent = nullToEmpty(
    nanToZero(
      Number(
        maxZuschBetrRech(
          Number(uzFrei.textContent) + lstFreiBetr,
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
      nutDefBonSum
    ).toFixed(2);
  } else gesBruEnt.value = gesBruEnt.value;

  // AA or Leh rad btn interaction
  // SV calculator result
  if (btnRadAA.checked === true) {
    svBetLstCalc.textContent = svRechAA(gesBruEnt.value - svFreiBetr).toFixed(
      2
    );
  } else
    svBetLstCalc.textContent = svRechLeh(gesBruEnt.value - svFreiBetr).toFixed(
      2
    );

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
deleteAll.addEventListener("click", () => {
  // interactive fields
  brutEnt.value = "";
  usHalf.value = "";
  usFull.value = "";
  usTeil.value = "";
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
  wDgaWDg.value = "";
  dzProzDg.value = "";
  lstFa.value = "";
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
  svDgaDg.textContent = "";
  bvDg.textContent = "";
  dbDg.textContent = "";
  dzProzDg.textContent = "";
  dzDg.textContent = "";
  kommDG.textContent = "";
  wDgaWDg.textContent = "";
  wDgaDg.textContent = "";
  svDnaGk.textContent = "";
  svDgaGk.textContent = "";
  bvGk.textContent = "";
  sumGk.textContent = "";
  sumGk.textContent = "";
  dbFa.textContent = "";
  dzFA.textContent = "";
  sumFA.textContent = "";
  kommGe.textContent = "";
  wDgaGe.textContent = "";
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
  // multiple decleration
  for (let i = 0; i < 8; i++) {
    // interactive fields
    freiBtnCnt[i].value = "";
    textNutDefBon[i].value = "";
    textNutDefBonBetr[i].value = "";
    nutDefProz[i].value = "";
    nutDefStu[i].value = "";
    nutDefBonBetr[i].value = "";
    ignSvSymbol[i].value = "";
    ignLstSymbol[i].value = "";
    // checkbox
    ignoreLst[i].checked = false;
    ignoreSv[i].checked = false;
  }
});

// shows/hides overtime pay section
btnUsAnze.addEventListener("click", () => {
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
btnZuAnze.addEventListener("click", () => {
  btnZuAnze.classList.toggle("blue-1");
  freiZulLow.classList.toggle("hidden");
  freiZulHigh.classList.toggle("hidden");
  textFreiZulLow.classList.toggle("hidden");
  textFreiZulHigh.classList.toggle("hidden");

  for (let i = 0; i < 8; i++) {
    freiBtnCnt[i].classList.toggle("hidden");
    textNutDefBon[i].classList.toggle("hidden");
    textNutDefBonBetr[i].classList.toggle("hidden");
    ignoreLst[i].classList.toggle("hidden");
    ignoreSv[i].classList.toggle("hidden");
    nutDefProz[i].classList.toggle("hidden");
    nutDefStu[i].classList.toggle("hidden");
    nutDefBonBetr[i].classList.toggle("hidden");
    ignSvSymbol[i].classList.toggle("hidden");
    ignLstSymbol[i].classList.toggle("hidden");
  }
});

// DZ calculator
function dzRech(bund, num) {
  let result = 0;
  switch (bund) {
    case "Wien  0,38 %":
      result = num * 0.0038;
      break;
    case "Burg. 0,42 %":
      result = num * 0.0042;
      break;
    case "Ober. 0,34 %":
      result = num * 0.0034;
      break;
    case "Kärn. 0,39 %":
      result = num * 0.0039;
      break;
    case "Nied. 0,38 %":
      result = num * 0.0038;
      break;
    case "Salz. 0,39 %":
      result = num * 0.0039;
      break;
    case "Stei. 0,37 %":
      result = num * 0.0037;
      break;
    case "Tiro. 0,41 %":
      result = num * 0.0041;
      break;
    case "Vora. 0,37 %":
      result = num * 0.0037;
      break;
    default:
      alert("Error. Wähl einen Bundesland aus!");
      break;
  }
  return result.toFixed(2);
}

// Wien-DGA calculator
function wDgaRech(wochen) {
  return Number(wochen) * 2;
}

// SV-DGA calculator
function svDgaRech(num) {
  return Number(num) * 0.2123;
}

// BV calculator
function bvRech(num) {
  return Number(num) * 0.0153;
}

// DB calculator
function dbRech(num) {
  return Number(num) * 0.039;
}

// Kommst calculator
function kommRech(num) {
  return Number(num) * 0.03;
}

// button employer tax calculator
btnDgAbg.addEventListener("click", () => {
  svDgaDg.textContent = svDgaRech(gesBruEnt.value).toFixed(2);
  bvDg.textContent = bvRech(gesBruEnt.value).toFixed(2);
  dbDg.textContent = dbRech(gesBruEnt.value).toFixed(2);
  dzDg.textContent = dzRech(dzProzDg.value, gesBruEnt.value);
  kommDG.textContent = kommRech(gesBruEnt.value).toFixed(2);
  wDgaDg.textContent = nullToEmpty(wDgaRech(wDgaWDg.value).toFixed(2));
  // Gesundheitskassa
  svDnaGk.textContent = svBetLstCalc.textContent;
  svDgaGk.textContent = svDgaDg.textContent;
  bvGk.textContent = bvDg.textContent;
  sumGk.textContent = sumAll(
    Number(svDnaGk.textContent),
    Number(svDgaGk.textContent),
    Number(bvGk.textContent)
  ).toFixed(2);
  // Finanzamt
  dbFa.textContent = dbDg.textContent;
  dzFA.textContent = dzDg.textContent;
  sumFA.textContent = sumAll(
    Number(lstFa.value),
    Number(dbFa.textContent),
    Number(dzFA.textContent)
  ).toFixed(2);
  // Gemeinde
  kommGe.textContent = kommDG.textContent;
  wDgaGe.textContent = wDgaDg.textContent;
  sumGe.textContent = sumAll(
    Number(kommGe.textContent),
    Number(wDgaGe.textContent)
  );
});

// shows/hides employer tax section
btnGgAnz.addEventListener("click", () => {
  dgGrid.classList.toggle("hidden");
  btnGgAnz.classList.toggle("blue-1");
});
