export interface HabitItem {
  id: string;
  name: string;
  det: string;
  meta: string;
  optional?: boolean;
}

export interface Section {
  id: string;
  title: string;
  desc: string;
  items: HabitItem[];
}

export const habitSections: Section[] = [
  {
    id: 'supl-podstawowe',
    title: 'Suplementy — codzienne fundamenty',
    desc: 'Cztery filary, dla których dowody są najsolidniejsze.',
    items: [
      {
        id: 'vit-d3',
        name: 'Witamina D3 (+ K2 MK-7)',
        det: 'D3 dla kości i mięśni; K2 kieruje wapń do kości, nie do naczyń. Z posiłkiem tłuszczowym.',
        meta: '2000–4000 IU + 100–200 µg',
      },
      {
        id: 'omega3',
        name: 'Omega-3 (EPA+DHA)',
        det: 'Antyzapalnie, redukuje anabolic resistance, łagodzi ból w OA. Forma rTG, certyfikat IFOS.',
        meta: '1–2 g',
      },
      {
        id: 'magnez',
        name: 'Magnez',
        det: 'Bisglicynian (bonus glicyny) lub cytrynian. Wieczorem — wspomaga sen i regenerację.',
        meta: '200–400 mg',
      },
      {
        id: 'wapn',
        name: 'Wapń',
        det: 'Najlepiej z diety: nabiał, tofu wapniowane, sezam, jarmuż, sardynki z ośćmi. Suplement tylko przy luce dietetycznej.',
        meta: 'cel 1000–1200 mg',
        optional: true,
      },
    ],
  },
  {
    id: 'supl-celowane',
    title: 'Suplementy — celowane na kości, stawy, mięśnie',
    desc: 'Specyficzne dla okresu menopauzalnego, dobrze umotywowane mechanistycznie.',
    items: [
      {
        id: 'glicyna',
        name: 'Glicyna',
        det: 'Działa na kości w osteopenii, skórę, glutation, sen.',
        meta: '10 g',
      },
      {
        id: 'kolagen',
        name: 'Kolagen hydrolizowany',
        det: 'Bonus dipeptydów Pro-Hyp',
        meta: '10 g',
      },
      {
        id: 'kreatyna',
        name: 'Kreatyna monohydrat',
        det: 'Siła, masa mięśniowa, BMD przy treningu, funkcje poznawcze. Bez fazy ładowania.',
        meta: '3–5 g',
      },
      {
        id: 'bialko-whey',
        name: 'Białko serwatkowe lub izolat sojowy',
        det: 'Uzupełnienie posiłku do progu leucyny. Whey ma najwyższą leucynę i kinetykę.',
        meta: '25 g wg potrzeby',
      },
      {
        id: 'b12',
        name: 'Witamina B12',
        det: 'Przy diecie roślinnej obowiązkowa. Forma metylo- lub adenozylokobalamina.',
        meta: '500–1000 µg',
        optional: true,
      },
    ],
  },
  {
    id: 'supl-opcjonalne',
    title: 'Suplementy — opcjonalne, sytuacyjne',
    desc: 'Dodatki przy specyficznych wskazaniach.',
    items: [
      {
        id: 'hmb',
        name: 'HMB (β-hydroksy-β-metylomaślan)',
        det: 'Okresy unieruchomienia, hospitalizacji, choroby. Chroni masę mięśniową w katabolizmie.',
        meta: '3 g warunkowo',
        optional: true,
      },
      {
        id: 'uc2',
        name: 'UC-II (kolagen niezdenaturowany)',
        det: 'Choroba zwyrodnieniowa stawów — alternatywa lub uzupełnienie NLPZ. Mechanizm immunologiczny.',
        meta: '40 mg jeśli OA',
      },
      {
        id: 'tauryna',
        name: 'Tauryna',
        det: 'Funkcja mitochondrialna, kardioprotekcja. Niska u wegetarian. Dowody umiarkowane, profil bezpieczeństwa świetny.',
        meta: '1–2 g',
      },
      {
        id: 'cholina',
        name: 'Cholina (bitartrate lub CDP)',
        det: 'Jeśli rzadkie jajka. Wątroba, mózg, metylacja DNA.',
        meta: '250–500 mg',
        optional: true,
      },
      {
        id: 'nac',
        name: 'N-acetylocysteina (NAC)',
        det: 'Z glicyną razem = GlyNAC. Glutation, mitochondria. Eksperymentalne ale bardzo obiecujące u starszych.',
        meta: '600 mg',
      },
    ],
  },
  {
    id: 'bialko',
    title: 'Białko — fundament dla mięśni i kości',
    desc: 'Najważniejsza interwencja dietetyczna po menopauzie. Rozłożenie ważniejsze niż sam total.',
    items: [
      {
        id: 'bialko-cel',
        name: 'Cel ilościowy',
        det: '1.5+ g białka na kg masy ciała dziennie. RDA 0.8 jest niewystarczająca.',
        meta: '1.5+ g/kg',
      },
      {
        id: 'leucyna',
        name: 'Próg leucyny',
        det: '~2.5–3 g leucyny w każdym posiłku dla pełnej stymulacji syntezy białek mięśniowych.',
        meta: '~2.5–3 g/posilek',
      },
      {
        id: 'nrf2',
        name: 'Aktywatory NRF2 (glutation)',
        det: 'Czosnek, cebula, brokuły, kapusta, brukselka, rzeżucha. Codziennie któreś z nich.',
        meta: 'ilosc dowolna',
      },
    ],
  },
  {
    id: 'trening-oporowy',
    title: 'Trening oporowy — niepodlega negocjacji',
    desc: 'Najsilniejsza interwencja na sarkopenię, dynapenię i utratę BMD. Mocniejsza niż jakikolwiek suplement.',
    items: [
      {
        id: 'trening-czestotliwosc',
        name: 'Trening silowy',
        det: '2–3 sesje tygodniowo, 30–45 min. Z dniem przerwy między sesjami obciążającymi te same partie.',
        meta: '2–3×/tydz.',
      },
      {
        id: 'trening-wielostawowe',
        name: 'Ćwiczenia wielostawowe',
        det: 'Przysiad, wstawanie z krzesła z obciążeniem, wyciskanie, wiosłowanie, martwy ciąg modyfikowany, wykroki.',
        meta: 'codziennie',
      },
    ],
  },
  {
    id: 'aerobik',
    title: 'Aerobik i równowaga',
    desc: 'Uzupełnienie treningu siłowego — kardioprotekcja, mózg, profilaktyka upadków.',
    items: [
      {
        id: 'kardio',
        name: 'Kardio umiarkowane',
        det: 'Marsz, nordic walking, rower, pływanie. Co najmniej 150 min/tydzień strefy 2.',
        meta: '150 min/tydz.',
      },
      {
        id: 'rownowaga',
        name: 'Trening równowagi',
        det: 'Tai chi, joga, ćwiczenia na jednej nodze, bosu. Profilaktyka upadków = profilaktyka złamań.',
        meta: '2×/tydz.',
        optional: true,
      },
      {
        id: 'neat',
        name: 'Aktywność dnia codziennego (NEAT)',
        det: 'Schody zamiast windy, długie spacery, ogród, prace domowe. NEAT — kluczowy poza treningami.',
        meta: 'codziennie',
      },
    ],
  },
  {
    id: 'mobilnosc',
    title: 'Mobilność i rozciąganie',
    desc: 'Krótko, regularnie. Statyczne rozciąganie po treningu, nie przed.',
    items: [
      {
        id: 'mob-dynamiczna',
        name: 'Dynamiczna mobilność',
        det: 'Biodra, kręgosłup piersiowy, ramiona. 5–10 min rano lub przed treningiem.',
        meta: 'codziennie',
      },
      {
        id: 'mob-rolowanie',
        name: 'Rolowanie powięziowe',
        det: 'Foam roller — łydki, ITB, plecy, klatka. Po treningu lub w dni wolne.',
        meta: '2–3×/tydz.',
      },
      {
        id: 'mob-statyczne',
        name: 'Statyczne rozciąganie',
        det: 'Po treningu, na rozgrzanych mięśniach. 30 s na grupę. Nie przed treningiem siłowym (osłabia siłę).',
        meta: 'po treningu',
      },
    ],
  },
];

export const badaniaSections: Section[] = [
  {
    id: 'badania-podstawowe',
    title: 'Badania — panel podstawowy',
    desc: 'Co 6–12 miesięcy. Większość dostępna z NFZ, niektóre prywatnie.',
    items: [
      {
        id: 'bad-morfologia',
        name: 'Morfologia + ferrytyna',
        det: 'Ferrytyna cel powyżej 50 µg/L (nie minimum 10 jak w „normach" laboratoryjnych).',
        meta: '1×/rok',
      },
      {
        id: 'bad-vit-d',
        name: '25(OH)D',
        det: 'Cel 30–50 ng/ml (75–125 nmol/L). Niedobór masywny w Polsce zimą.',
        meta: '1–2×/rok',
      },
      {
        id: 'bad-tarczyca',
        name: 'Tarczyca: TSH, fT3, fT4, anty-TPO',
        det: 'Subkliniczna niedoczynność u kobiet po menopauzie częsta. Nasila sarkopenię i utratę BMD.',
        meta: '1×/rok',
      },
      {
        id: 'bad-glukoza',
        name: 'Glukoza, insulina, HOMA-IR, HbA1c',
        det: 'Insulinooporność po menopauzie częsta i nasila anabolic resistance.',
        meta: '1×/rok',
      },
      {
        id: 'bad-lipidogram',
        name: 'Lipidogram',
        det: 'Cholesterol, LDL, HDL, TG, ApoB jeśli dostępne. Po menopauzie ryzyko CVD wyraźnie rośnie.',
        meta: '1×/rok',
      },
      {
        id: 'bad-b12',
        name: 'Active B12 (lub MMA) + homocysteina',
        det: 'Czulsze niż samo B12. Homocysteina jako integracyjny marker B12, folianów, B6, choliny.',
        meta: '1×/rok',
      },
      {
        id: 'bad-albumina',
        name: 'Albumina',
        det: 'Status białkowy. Cel powyżej 4.0 g/dl. Niska sygnalizuje niedożywienie białkowe.',
        meta: '1×/rok',
      },
      {
        id: 'bad-nerki',
        name: 'Kreatynina, eGFR, mocznik',
        det: 'Funkcja nerek. Uwaga: kreatyna podnosi kreatyninę bez uszkodzenia nerek — poinformuj lekarza.',
        meta: '1×/rok',
      },
      {
        id: 'bad-mineraly',
        name: 'Wapń, fosfor, magnez (RBC)',
        det: 'Magnez RBC, nie z surowicy — surowicowy jest mało informacyjny.',
        meta: '1×/rok',
      },
      {
        id: 'bad-watroba',
        name: 'ALT, AST, GGT, ALP',
        det: 'Wątroba. ALP też pośredni marker obrotu kostnego (rośnie przy wysokiej resorpcji).',
        meta: '1×/rok',
      },
    ],
  },
  {
    id: 'badania-rozszerzone',
    title: 'Badania — rozszerzone i screening',
    desc: 'Co 1–2 lata lub jednorazowo jako baseline. Część prywatnie.',
    items: [
      {
        id: 'bad-dxa',
        name: 'DXA — gęstość mineralna kości',
        det: 'Kręgosłup lędźwiowy + szyjka kości udowej. Bezwzględnie po menopauzie. T-score, Z-score, FRAX.',
        meta: 'co 2 lata',
      },
      {
        id: 'bad-ctx-p1np',
        name: 'CTX i P1NP — markery obrotu kostnego',
        det: 'CTX (resorpcja) + P1NP (synteza). Pokazuje, czy kość jest aktywnie tracona, niezależnie od BMD.',
        meta: 'co 1–2 lata',
      },
      {
        id: 'bad-omega-index',
        name: 'Omega-3 Index',
        det: 'EPA+DHA w erytrocytach. Cel powyżej 8%. Pozwala precyzyjnie dobrać dawkę suplementacji.',
        meta: 'baseline',
      },
      {
        id: 'bad-selen',
        name: 'Selen w surowicy',
        det: 'Przed suplementacją. Cel 100–130 µg/L. Polska — gleby umiarkowanie ubogie w selen.',
        meta: 'jednorazowo',
      },
      {
        id: 'bad-sila-chwytu',
        name: 'Pomiar siły chwytu (dynamometr)',
        det: 'Screening sarkopenii. Poniżej 20 kg u kobiety = czerwona flaga. Tani, szybki test.',
        meta: '1×/rok',
      },
      {
        id: 'bad-krzeslo',
        name: 'Test wstawania z krzesła (5×)',
        det: 'Powyżej 15 sekund = funkcjonalna sarkopenia. Wskaźnik dynapenii. Bez sprzętu.',
        meta: '1×/rok',
      },
    ],
  },
];
