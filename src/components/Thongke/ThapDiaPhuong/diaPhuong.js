import React, { Component } from 'react';
import { firebaseDemo } from '../../../Firebase/firebaseconnectio';
class diaPhuong extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data001: [],
      data002: [],
      data004: [],
      data006: [],
      data008: [],
      data010: [],
      data011: [],
      data012: [],
      data014: [],
      data015: [],
      data017: [],
      data019: [],
      data020: [],
      data022: [],
      data024: [],
      data025: [],
      data026: [],
      data027: [],
      data030: [],
      data031: [],
      data033: [],
      data034: [],
      data035: [],
      data036: [],
      data037: [],
      data038: [],
      data040: [],
      data042: [],
      data044: [],
      data045: [],
      data046: [],
      data048: [],
      data049: [],
      data051: [],
      data052: [],
      data054: [],
      data056: [],
      data058: [],
      data060: [],
      data062: [],
      data064: [],
      data066: [],
      data067: [],
      data068: [],
      data070: [],
      data072: [],
      data074: [],
      data075: [],
      data077: [],
      data079: [],
      data080: [],
      data082: [],
      data083: [],
      data084: [],
      data086: [],
      data087: [],
      data089: [],
      data091: [],
      data092: [],
      data093: [],
      data094: [],
      data095: [],
      data096: [],
      datasun: []
    };
  }


  componentDidMount() {






    let ghinhandata = firebaseDemo;
    ghinhandata.on('value', (snapshort) => {
      var Mang001 = [];
      var Mang002 = [];
      var Mang004 = [];
      var Mang006 = [];
      var Mang008 = [];
      var Mang010 = [];
      var Mang011 = [];
      var Mang012 = [];
      var Mang014 = [];
      var Mang015 = [];
      var Mang017 = [];
      var Mang019 = [];
      var Mang020 = [];
      var Mang022 = [];
      var Mang024 = [];
      var Mang025 = [];
      var Mang026 = [];
      var Mang027 = [];
      var Mang030 = [];
      var Mang031 = [];
      var Mang033 = [];
      var Mang034 = [];
      var Mang035 = [];
      var Mang036 = [];
      var Mang037 = [];
      var Mang038 = [];
      var Mang040 = [];
      var Mang042 = [];
      var Mang044 = [];
      var Mang045 = [];
      var Mang046 = [];
      var Mang048 = [];
      var Mang049 = [];
      var Mang051 = [];
      var Mang052 = [];
      var Mang054 = [];
      var Mang056 = [];
      var Mang058 = [];
      var Mang060 = [];
      var Mang062 = [];
      var Mang064 = [];
      var Mang066 = [];
      var Mang067 = [];
      var Mang068 = [];
      var Mang070 = [];
      var Mang072 = [];
      var Mang074 = [];
      var Mang075 = [];
      var Mang077 = [];
      var Mang079 = [];
      var Mang080 = [];
      var Mang082 = [];
      var Mang083 = [];
      var Mang084 = [];
      var Mang086 = [];
      var Mang087 = [];
      var Mang089 = [];
      var Mang091 = [];
      var Mang092 = [];
      var Mang093 = [];
      var Mang094 = [];
      var Mang095 = [];
      var Mang096 = [];
      var Sun = [];
      snapshort.forEach((element) => {
        ghinhandata
          .child(element.key)
          .child('DataCard')
          .on('value', (datas) => {
            datas.forEach((elementChinhThuc) => {
              const key = elementChinhThuc.key;
              const dob = elementChinhThuc.val().id;

              const demso = dob.slice(0, 3);

              if (demso === "001") {
                Mang001.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "002") {
                Mang002.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "004") {
                Mang004.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "006") {
                Mang006.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "008") {
                Mang008.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "010") {
                Mang010.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "011") {
                Mang011.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "012") {
                Mang012.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "014") {
                Mang014.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "015") {
                Mang015.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "017") {
                Mang017.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "019") {
                Mang019.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "020") {
                Mang020.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "022") {
                Mang022.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "024") {
                Mang024.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "025") {
                Mang025.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "026") {
                Mang026.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "027") {
                Mang027.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "030") {
                Mang030.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "031") {
                Mang031.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "033") {
                Mang033.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "034") {
                Mang034.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "035") {
                Mang035.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "036") {
                Mang036.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "037") {
                Mang037.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "038") {
                Mang038.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "040") {
                Mang040.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "042") {
                Mang042.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "044") {
                Mang044.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "045") {
                Mang045.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "046") {
                Mang046.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "048") {
                Mang048.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "049") {
                Mang049.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "051") {
                Mang051.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "052") {
                Mang052.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "054") {
                Mang054.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "056") {
                Mang056.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "058") {
                Mang058.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "060") {
                Mang060.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "062") {
                Mang062.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "064") {
                Mang064.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "066") {
                Mang066.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "067") {
                Mang067.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "068") {
                Mang068.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "070") {
                Mang070.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "072") {
                Mang072.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "074") {
                Mang074.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "075") {
                Mang075.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "077") {
                Mang077.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "079") {
                Mang079.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "080") {
                Mang080.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "082") {
                Mang082.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "083") {
                Mang083.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "084") {
                Mang084.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "086") {
                Mang086.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "087") {
                Mang087.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "089") {
                Mang089.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "091") {
                Mang091.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "092") {
                Mang092.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "093") {
                Mang093.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "094") {
                Mang094.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "095") {
                Mang095.push({
                  key: key,
                  dob: demso
                })
              }
              if (demso === "096") {
                Mang096.push({
                  key: key,
                  dob: demso
                })
              }
              Sun.push({
                key: key
              })
            });
          });
      })
      this.setState({
        data001: Mang001,
        data002: Mang002,
        data004: Mang004,
        data006: Mang006,
        data008: Mang008,
        data010: Mang010,
        data011: Mang011,
        data012: Mang012,
        data014: Mang014,
        data015: Mang015,
        data017: Mang017,
        data019: Mang019,
        data020: Mang020,
        data022: Mang022,
        data024: Mang024,
        data025: Mang025,
        data026: Mang026,
        data027: Mang027,
        data030: Mang030,
        data031: Mang031,
        data033: Mang033,
        data034: Mang034,
        data035: Mang035,
        data036: Mang036,
        data037: Mang037,
        data038: Mang038,
        data040: Mang040,
        data042: Mang042,
        data044: Mang044,
        data045: Mang045,
        data046: Mang046,
        data048: Mang048,
        data049: Mang049,
        data051: Mang051,
        data052: Mang052,
        data054: Mang054,
        data056: Mang056,
        data058: Mang058,
        data060: Mang060,
        data062: Mang062,
        data064: Mang064,
        data066: Mang066,
        data067: Mang067,
        data068: Mang068,
        data070: Mang070,
        data072: Mang072,
        data074: Mang074,
        data075: Mang075,
        data077: Mang077,
        data079: Mang079,
        data080: Mang080,
        data082: Mang082,
        data083: Mang083,
        data084: Mang084,
        data086: Mang086,
        data087: Mang087,
        data089: Mang089,
        data091: Mang091,
        data092: Mang092,
        data093: Mang093,
        data094: Mang094,
        data095: Mang095,
        data096: Mang096,
        datasun: Sun
      });
    })
  }


  phantich1 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data001.length;
    return Math.ceil((thuctai / tongthe) * 100);
  }

  Phantich2 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data002.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }


  Phantich3 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data004.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }

  Phantich4 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data006.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }

  Phantich5 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data008.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }

  Phantich6 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data010.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }

  Phantich7 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data011.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }


  Phantich8 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data012.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }



  Phantich9 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data014.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }



  Phantich10 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data015.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }


  Phantich11 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data017.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }



  Phantich12 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data019.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }


  Phantich13 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data020.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }

  Phantich14 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data022.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }


  Phantich15 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data024.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }


  Phantich16 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data025.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }



  Phantich17 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data026.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }




  Phantich18 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data027.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }



  Phantich19 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data030.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }



  Phantich20 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data031.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }



  Phantich21 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data033.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }

  Phantich22 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data034.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }



  Phantich23 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data035.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }



  Phantich24 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data036.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich25 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data037.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }

  Phantich26 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data038.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }

  Phantich27 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data040.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich28 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data042.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich29 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data044.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich30 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data045.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich31 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data046.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich32 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data048.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich33 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data049.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich34 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data051.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich35 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data052.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich36 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data054.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }

  Phantich37 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data056.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }

  Phantich38 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data058.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }

  Phantich39 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data060.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich40 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data062.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }

  Phantich41 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data064.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich42 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data066.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich43 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data067.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich44 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data068.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich45 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data070.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich46 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data072.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich47 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data074.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich48 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data075.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich49 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data077.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich50 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data079.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich51 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data080.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }

  Phantich52 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data082.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich53 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data083.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich54 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data084.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich55 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data086.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich56 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data087.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich57 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data089.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich58 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data091.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich59 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data092.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich60 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data093.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich61 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data094.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich62 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data095.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  Phantich63 = () => {
    let tongthe = this.state.datasun.length;
    let thuctai = this.state.data096.length;
    return Math.ceil((thuctai / tongthe) * 100)
  }
  giaTriMax = () => {
    let max = Math.max(this.phantich1(), this.Phantich2(), this.Phantich3(), this.Phantich4(), this.Phantich5(), this.Phantich6(), this.Phantich7(), this.Phantich8(), this.Phantich9(), this.Phantich10(), this.Phantich11(), this.Phantich12(), this.Phantich13(), this.Phantich14(), this.Phantich15(), this.Phantich16(), this.Phantich17(), this.Phantich18(), this.Phantich19(), this.Phantich20(), this.Phantich21(), this.Phantich22(), this.Phantich23(), this.Phantich24(), this.Phantich25(), this.Phantich26(), this.Phantich27(), this.Phantich28(), this.Phantich29(), this.Phantich30(), this.Phantich31(), this.Phantich32(), this.Phantich33(), this.Phantich34(), this.Phantich35(), this.Phantich36(), this.Phantich37(), this.Phantich38(), this.Phantich39(), this.Phantich40(), this.Phantich41(), this.Phantich42(), this.Phantich43(), this.Phantich44(), this.Phantich45(), this.Phantich46(), this.Phantich47(), this.Phantich48(), this.Phantich49(), this.Phantich50(), this.Phantich51(), this.Phantich52(), this.Phantich53(), this.Phantich54(), this.Phantich55(), this.Phantich56(), this.Phantich57(), this.Phantich58(), this.Phantich59(), this.Phantich60(), this.Phantich61(), this.Phantich62(), this.Phantich63());
    if (max === this.phantich1()) {
      return (
        <div className="alert alert-primary" role="alert">
          TP h?? n???i ??ang c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich2()) {
      return (
        <div className="alert alert-primary" role="alert">
          H?? giang c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich3()) {
      return (
        <div className="alert alert-primary" role="alert">
          cao b???ng c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich4()) {
      return (
        <div className="alert alert-primary" role="alert">
          b???c c???n c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich5()) {
      return (
        <div className="alert alert-primary" role="alert">
          tuy??n quang c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich6()) {
      return (
        <div className="alert alert-primary" role="alert">
          l??o cai c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich7()) {
      return (
        <div className="alert alert-primary" role="alert">
          ??i???n bi??n c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich8()) {
      return (
        <div className="alert alert-primary" role="alert">
          lai ch??u c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich9()) {
      return (
        <div className="alert alert-primary" role="alert">
          s??n la c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich10()) {
      return (
        <div className="alert alert-primary" role="alert">
          y??n b??i c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich11()) {
      return (
        <div className="alert alert-primary" role="alert">
          h??a b??nh c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich12()) {
      return (
        <div className="alert alert-primary" role="alert">
          th??i nguy??n c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich13()) {
      return (
        <div className="alert alert-primary" role="alert">
          l???ng s??n c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich14()) {
      return (
        <div className="alert alert-primary" role="alert">
          qu???ng ninh c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich15()) {
      return (
        <div className="alert alert-primary" role="alert">
          b???c giang c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich16()) {
      return (
        <div className="alert alert-primary" role="alert">
          ph?? th??? c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich17()) {
      return (
        <div className="alert alert-primary" role="alert">
          v??nh ph??c c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich18()) {
      return (
        <div className="alert alert-primary" role="alert">
          b???c ninh c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich19()) {
      return (
        <div className="alert alert-primary" role="alert">
          h???i d????ng c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich20()) {
      return (
        <div className="alert alert-primary" role="alert">
          TP h???i ph??ng c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich21()) {
      return (
        <div className="alert alert-primary" role="alert">
          h??ng y??n c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich22()) {
      return (
        <div className="alert alert-primary" role="alert">
          th??i b??nh c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich23()) {
      return (
        <div className="alert alert-primary" role="alert">
          h?? nam c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich24()) {
      return (
        <div className="alert alert-primary" role="alert">
          nam ?????nh c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich25()) {
      return (
        <div className="alert alert-primary" role="alert">
          ninh b??nh c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich26()) {
      return (
        <div className="alert alert-primary" role="alert">
          thanh h??a c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich27()) {
      return (
        <div className="alert alert-primary" role="alert">
          ngh??? an c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich28()) {
      return (
        <div className="alert alert-primary" role="alert">
          h?? t??nh c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich29()) {
      return (
        <div className="alert alert-primary" role="alert">
          qu???ng b??nh c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich30()) {
      return (
        <div className="alert alert-primary" role="alert">
          qu???ng tr??? c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich31()) {
      return (
        <div className="alert alert-primary" role="alert">
          th???a thi??n hu??? c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich32()) {
      return (
        <div className="alert alert-primary" role="alert">
          TP ???? n???ng c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich33()) {
      return (
        <div className="alert alert-primary" role="alert">
          qu???ng nam c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich34()) {
      return (
        <div className="alert alert-primary" role="alert">
          qu???ng ng??i c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich35()) {
      return (
        <div className="alert alert-primary" role="alert">
          b??nh ?????nh c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich36()) {
      return (
        <div className="alert alert-primary" role="alert">
          ph?? y??n c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich37()) {
      return (
        <div className="alert alert-primary" role="alert">
          kh??nh h??a c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich38()) {
      return (
        <div className="alert alert-primary" role="alert">
          ninh thu???n c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich39()) {
      return (
        <div className="alert alert-primary" role="alert">
          b??nh thu???n c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich40()) {
      return (
        <div className="alert alert-primary" role="alert">
          komtum c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich41()) {
      return (
        <div className="alert alert-primary" role="alert">
          gia lai c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich42()) {
      return (
        <div className="alert alert-primary" role="alert">
          ????k l???k c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich43()) {
      return (
        <div className="alert alert-primary" role="alert">
          ????k n??ng c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich44()) {
      return (
        <div className="alert alert-primary" role="alert">
          l??m ?????ng c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich45()) {
      return (
        <div className="alert alert-primary" role="alert">
          b??nh ph?????c c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich46()) {
      return (
        <div className="alert alert-primary" role="alert">
          t??y ninh c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich47()) {
      return (
        <div className="alert alert-primary" role="alert">
          b??nh d????ng c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich48()) {
      return (
        <div className="alert alert-primary" role="alert">
          ?????ng nai c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich49()) {
      return (
        <div className="alert alert-primary" role="alert">
          b?? r???a v??ng t??u c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich50()) {
      return (
        <div className="alert alert-primary" role="alert">
          TP H??? Ch?? Minh c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich51()) {
      return (
        <div className="alert alert-primary" role="alert">
          long an c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich52()) {
      return (
        <div className="alert alert-primary" role="alert">
          ti???n giang c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich53()) {
      return (
        <div className="alert alert-primary" role="alert">
          b???n tre c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich54()) {
      return (
        <div className="alert alert-primary" role="alert">
          tr?? vinh c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich55()) {
      return (
        <div className="alert alert-primary" role="alert">
          v??nh long c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich56()) {
      return (
        <div className="alert alert-primary" role="alert">
          ?????ng th??p c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich57()) {
      return (
        <div className="alert alert-primary" role="alert">
          an giang c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich58()) {
      return (
        <div className="alert alert-primary" role="alert">
          ki??n giang c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich59()) {
      return (
        <div className="alert alert-primary" role="alert">
          c???n th?? c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich60()) {
      return (
        <div className="alert alert-primary" role="alert">
          h???u giang c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich61()) {
      return (
        <div className="alert alert-primary" role="alert">
          s??c tr??ng c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich62()) {
      return (
        <div className="alert alert-primary" role="alert">
          b???c li??u c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
    else if (max === this.Phantich63()) {
      return (
        <div className="alert alert-primary" role="alert">
          c?? mau c?? s??? l?????ng d??n s??? ????ng ?????o
			</div>
      )
    }
  }

  render() {

    return (
      <div>
        <div className="text-uppercase">
          <h1>TH???NG K?? ?????A PH????NG</h1>
          <small className="ash">????a ra ???????c s??? l?????ng gi???y t??? ?????u ng?????i c???a ?????a ph????ng <u style={{ "color": "red" }}>(??ANG TH??? NGHI???M TR??N C??N C?????C C??NG D??N)</u></small><br />
        </div>
        <dl>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.phantich1()}><span className="text" style={{ color: 'black', height: '20px' }}>01 - TP H?? N???i</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich2()}><span className="text" style={{ color: 'black', height: '20px' }}>02 - H?? Giang</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich3()}><span className="text" style={{ color: 'black', height: '20px' }}>04 - Cao B???ng</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich4()}><span className="text" style={{ color: 'black', height: '20px' }}>06 - B???c C???n</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich5()}><span className="text" style={{ color: 'black', height: '20px' }}>08 - Tuy???n Quang</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich6()}><span className="text" style={{ color: 'black', height: '20px' }}>10 - L??o Cai</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich7()}><span className="text" style={{ color: 'black', height: '20px' }}>11 - ??i???n Bi??n</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich8()}><span className="text" style={{ color: 'black', height: '20px' }}>12 - Lai Ch??u</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich9()}><span className="text" style={{ color: 'black', height: '20px' }}>14 - S??n La</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich10()}><span className="text" style={{ color: 'black', height: '20px' }}>15 - Y??n B??i</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich11()}><span className="text" style={{ color: 'black', height: '20px' }}>17 - H??a B??nh</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich12()}><span className="text" style={{ color: 'black', height: '20px' }}>19 - Th??i Nguy??n</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich13()}><span className="text" style={{ color: 'black', height: '20px' }}>20 - L???ng S??n</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich14()}><span className="text" style={{ color: 'black', height: '20px' }}>22 - Qu???ng Ninh</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich15()}><span className="text" style={{ color: 'black', height: '20px' }}>24 - B???c Giang</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich16()}><span className="text" style={{ color: 'black', height: '20px' }}>25 - Ph?? Th???</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich17()}><span className="text" style={{ color: 'black', height: '20px' }}>26 - V??nh Ph??c</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich18()}><span className="text" style={{ color: 'black', height: '20px' }}>27 - B???c Ninh</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich19()}><span className="text" style={{ color: 'black', height: '20px' }}>30 - H???i D????ng</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich20()}><span className="text" style={{ color: 'black', height: '20px' }}>31 - H???i Ph??ng</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich21()}><span className="text" style={{ color: 'black', height: '20px' }}>33 - H??ng Y??n</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich22()}><span className="text" style={{ color: 'black', height: '20px' }}>34 - Th??i B??nh</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich23()}><span className="text" style={{ color: 'black', height: '20px' }}>35 - H?? Nam</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich24()}><span className="text" style={{ color: 'black', height: '20px' }}>36 - Nam ?????nh</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich25()}><span className="text" style={{ color: 'black', height: '20px' }}>37 - Ninh B??nh</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich26()}><span className="text" style={{ color: 'black', height: '20px' }}>38 - Thanh H??a</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich27()}><span className="text" style={{ color: 'black', height: '20px' }}>40 - Ngh??? An</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich28()}><span className="text" style={{ color: 'black', height: '20px' }}>42 - H?? T??nh</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich29()}><span className="text" style={{ color: 'black', height: '20px' }}>44 - Qu???ng B??nh</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich30()}><span className="text" style={{ color: 'black', height: '20px' }}>45 - Qu???ng Tr???</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich31()}><span className="text" style={{ color: 'black', height: '20px' }}>46 - Th???a Thi??n Hu???</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich32()}><span className="text" style={{ color: 'black', height: '20px' }}>48 - TP ???? N???ng</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich33()}><span className="text" style={{ color: 'black', height: '20px' }}>49 - Qu???ng Nam</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich34()}><span className="text" style={{ color: 'black', height: '20px' }}>51 - Qu???ng Ng??i</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich35()}><span className="text" style={{ color: 'black', height: '20px' }}>52 - B??nh ?????nh</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich36()}><span className="text" style={{ color: 'black', height: '20px' }}>54 - Ph?? Y??n</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich37()}><span className="text" style={{ color: 'black', height: '20px' }}>56 - Kh??nh H??a</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich38()}><span className="text" style={{ color: 'black', height: '20px' }}>58 - Ninh Thu???n</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich39()}><span className="text" style={{ color: 'black', height: '20px' }}>60 - B??nh Thu???n</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich40()}><span className="text" style={{ color: 'black', height: '20px' }}>62 - Kom Tum</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich41()}><span className="text" style={{ color: 'black', height: '20px' }}>64 - Gia Lai</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich42()}><span className="text" style={{ color: 'black', height: '20px' }}>66 - ?????k L???k</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich43()}><span className="text" style={{ color: 'black', height: '20px' }}>67 - ?????k N??ng</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich44()}><span className="text" style={{ color: 'black', height: '20px' }}>68 - L??m ?????ng</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich45()}><span className="text" style={{ color: 'black', height: '20px' }}>70 - B??nh Ph?????c</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich46()}><span className="text" style={{ color: 'black', height: '20px' }}>72 - T??y Ninh</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich47()}><span className="text" style={{ color: 'black', height: '20px' }}>74 - B??nh D????ng</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich48()}><span className="text" style={{ color: 'black', height: '20px' }}>75 - ?????ng Nai</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich49()}><span className="text" style={{ color: 'black', height: '20px' }}>77 - B?? R???a V??ng T??u</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich50()}><span className="text" style={{ color: 'black', height: '20px' }}>79 - TP H??? Ch?? Minh</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich51()}><span className="text" style={{ color: 'black', height: '20px' }}>80 - Long An</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich52()}><span className="text" style={{ color: 'black', height: '20px' }}>82 - Ti???n Giang</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich53()}><span className="text" style={{ color: 'black', height: '20px' }}>83 - B???n Tre</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich54()}><span className="text" style={{ color: 'black', height: '20px' }}>84 - Tr?? Vinh</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich55()}><span className="text" style={{ color: 'black', height: '20px' }}>86 - V??nh Long</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich56()}><span className="text" style={{ color: 'black', height: '20px' }}>87 - ?????ng Th??p</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich57()}><span className="text" style={{ color: 'black', height: '20px' }}>89 - An Giang</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich58()}><span className="text" style={{ color: 'black', height: '20px' }}>91 - Ki??n Giang</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich59()}><span className="text" style={{ color: 'black', height: '20px' }}>92 - TP C???n Th??</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich60()}><span className="text" style={{ color: 'black', height: '20px' }}>93 - H???u Giang</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich61()}><span className="text" style={{ color: 'black', height: '20px' }}>94 - S??c Tr??ng</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich62()}><span className="text" style={{ color: 'black', height: '20px' }}>95 - B???c Li??u</span></dd>
          <dd style={{ "height": "20px" }} className={"percentage percentage-" + this.Phantich63()}><span className="text" style={{ color: 'black', height: '20px' }}>96 - C?? Mau</span></dd>
        </dl>
        <div className="col-12 d-flex justify-content-center">
          {this.giaTriMax()}
        </div>
      </div>
    );
  }
}

export default diaPhuong;