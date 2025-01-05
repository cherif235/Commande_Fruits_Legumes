
var tarifs = [
  {
    'ref':'pr',
    'origine':'France',
    'prix':2,
    'unité':'Kg'
  },
  {
    'ref':'pj',
    'origine':'France',
    'prix':2,
    'unité':'Kg'
  },
  {
    'ref':'po',
    'origine':'France',
    'prix':2,
    'unité':'Kg'
  },
  {
    'ref':'or',
    'origine':'Maroc',
    'prix':1.5,
    'unité':'Kg'
  },
  {
    'ref':'av',
    'origine':'Pérou',
    'prix':1.5,
    'unité':'Pièce'
  },
  {
    'ref':'fr',
    'origine':'France',
    'prix':3,
    'unité':'Barquette 250g'
  },
  {
    'ref':'fr',
    'origine':'France',
    'prix':5,
    'unité':'Barquette 500g'
  },
  {
    'ref':'fr',
    'origine':'Espagne',
    'prix':8,
    'unité':'Plateau 1kg'
  },
  {
    'ref':'pa',
    'origine':'Maroc',
    'prix':3,
    'unité':'Kg'
  },
/* Début modif */
  { // betterave
    'ref':'be',
    'origine':'France',
    'prix':4.5,
    'unité':'Kg'
  },
  { // salade batavia
    'ref':'sa',
    'origine':'France',
    'prix':1,
    'unité':'Pièce'
  },
  { // ananas
    'ref':'an',
    'origine':'Ile Maurice',
    'prix':3.9,
    'unité':'Pièce'
  },
  { // citron vert
    'ref':'cv',
    'origine':'Brésil',
    'prix':9,
    'unité':'Kg'
  },
  {// citron jaune
    'ref':'cj',
    'origine':'Espagne',
    'prix':3.2,
    'unité':'Kg'
  },
  { // carotte
    'ref':'ca',
    'origine':'France',
    'prix':1.7,
    'unité':'Kg'
  },
  { // pastèque
    'ref':'pas',
    'origine':'Espagne',
    'prix':1.8,
    'unité':'Kg'
  },
  { // kiwi
    'ref':'ki',
    'origine':'France',
    'prix':4.2,
    'unité':'Kg'
  },
  { // raisin
    'ref':'ra',
    'origine':'Italie',
    'prix':6,
    'unité':'Kg'
  },
  { // poire
    'ref':'poi',
    'origine':'France',
    'prix':2.2,
    'unité':'Kg'
  },
  { // poire william
    'ref':'pw',
    'origine':'France',
    'prix':4.2,
    'unité':'Kg'
  },
  { // piment de cayenne
    'ref':'pi',
    'origine':'Guyane',
    'prix':19,
    'unité':'Kg'
  },
  { // nectarine
    'ref':'ne',
    'origine':'Espagne',
    'prix':1.5,
    'unité':'Kg'
  },
  { // concombre
    'ref':'con',
    'origine':'Espagne',
    'prix':1.2,
    'unité':'Kg'
  },
  { // pomme granny smith
    'ref':'pg',
    'origine':'France',
    'prix':2.6,
    'unité':'Kg'
  },
  { // choux fleur
    'ref':'chf',
    'origine':'France',
    'prix':2.5,
    'unité':'Pièce'
  },
  { // banane jaune
    'ref':'ba',
    'origine':'Dominicaine',
    'prix':2,
    'unité':'Kg'
  },
  { // banane rouge
    'ref':'bar',
    'origine':'Guadeloupe',
    'prix':4,
    'unité':'Kg'
  },
  { // aubergine
    'ref':'au',
    'origine':'Espagne',
    'prix':2.5,
    'unité':'Kg'
  },
   { // brocoli
    'ref':'br',
    'origine':'Espagne',
    'prix':4,
    'unité':'Kg'
  },
  { // noix de coco
    'ref':'nx',
    'origine':'Côte d\'Ivoire',
    'prix':1.5,
    'unité':'Kg'
  },
  { // pamplemouse jaune
    'ref':'pj',
    'origine':'Floride',
    'prix':4.5,
    'unité':'Kg'
  },
  { // tomate
    'ref':'to',
    'origine':'Espagne',
    'prix':3,
    'unité':'Kg'
  },
   { // mangue
    'ref':'ma',
    'origine':'Brésil',
    'prix':2.4,
    'unité':'Pièce'
  },
  { // clémantine
    'ref':'cl',
    'origine':'Espagne',
    'prix':1,
    'unité':'Kg'
  },
  { // Choux blanc
    'ref':'ch',
    'origine':'France',
    'prix':1.9,
    'unité':'Pièce'
  },
// -----------------ajout des nouveau ------------------------------------------

  { // mélon
    'ref':'ml',
    'origine':'Floride',
    'prix':2,
    'unité':'Pièce'
  },

  { // framboise
    'ref':'frm',
    'origine':'Floride',
    'prix':3,
    'unité':'kg'
  },

  { // figue
    'ref':'fg',
    'origine':'France',
    'prix':7.5,
    'unité':'kg'
  },

  { // goyave
    'ref':'gv',
    'origine':'Espagne',
    'prix':8,
    'unité':'kg'
  },

  { // grenade
    'ref':'gnd',
    'origine':'Brésil',
    'prix':5,
    'unité':'kg'
  },

  { // cassis
    'ref':'cs',
    'origine':'France',
    'prix':4,
    'unité':'kg'
  },

  { // litchi
    'ref':'lt',
    'origine':'Floride',
    'prix':5,
    'unité':'kg'
  },


  { // kaki
    'ref':'kk',
    'origine':'France',
    'prix':4,
    'unité':'kg'
  },

  { // Poivre vert
    'ref':'pv',
    'origine':'Maroc',
    'prix':2,
    'unité':'pièce'
  },

  { // Patate
    'ref':'pt',
    'origine':'Pérou',
    'prix':5,
    'unité':'kg'
  },


  { // Haricot vert
    'ref':'ht',
    'origine':'Guadeloupe',
    'prix':5,
    'unité':'kg'
  },

  { // aignon
    'ref':'oi',
    'origine':'France',
    'prix':5,
    'unité':'kg'
  },

  { // navets
    'ref':'nv',
    'origine':'Brésil',
    'prix':1,
    'unité':'pièce'
  },

  { // maîs
    'ref':'ms',
    'origine':'France',
    'prix':2.50,
    'unité':'pièce'
  },

  { // Patate douce
    'ref':'pd',
    'origine':'France',
    'prix':5,
    'unité':'kg'
  },


  { // pomme rouge
    'ref':'pmr',
    'origine':'France',
    'prix':6,
    'unité':'kg'
  },

  { // pomme verte
    'ref':'pmv',
    'origine':'France',
    'prix':4.50,
    'unité':'kg'
  },

  { // pomme jaune
    'ref':'pmj',
    'origine':'Brésil',
    'prix':8,
    'unité':'kg'
  },

  { // pomme de terre
    'ref':'pmt',
    'origine':'Espagne',
    'prix':3.50,
    'unité':'kg'
  },

  { // pomme de terre rouge
    'ref':'pmtr',
    'origine':'France',
    'prix':6,
    'unité':'kg'
  },

  { // tomate Rose de Berne
    'ref':'pmtr',
    'origine':'France',
    'prix':2,
    'unité':'pièce'
  },

  { // tomate cerise 
    'ref':'tor',
    'origine':'France',
    'prix':4.50,
    'unité':'kg'
  },

  { // tomate fandango
    'ref':'tof',
    'origine':'Espagne',
    'prix':5,
    'unité':'kg'
  },

  { // tomate coeur de boeuf
    'ref':'tocb',
    'origine':'Espagne',
    'prix':9,
    'unité':'kg'
  },
  { // tomate rio grande
    'ref':'torg',
    'origine':'Pérou',
    'prix':3.50,
    'unité':'kg'
  },
  { // tomate rio grande
    'ref':'toal',
    'origine':'Italie',
    'prix':5.50,
    'unité':'kg'
  },{ // tomate noir
    'ref':'ton',
    'origine':'France',
    'prix':8.50,
    'unité':'kg'
  },
  { // tomate ananas
    'ref':'toa',
    'origine':'France',
    'prix':3,
    'unité':'pièce'
  },
  { // tomate verte
    'ref':'tov',
    'origine':'Espagne',
    'prix':3.50,
    'unité':'kg'
  },

//----------------------------------------------------
  { // cerise
    'ref':'cer',
    'origine':'Espagne',
    'prix':5.50,
    'unité':'kg'
  },

  { // Papaye
    'ref':'pay',
    'origine':'Maroc',
    'prix':2.50,
    'unité':'pièce'
  },

  { // Fruit de dragon
    'ref':'drg',
    'origine':'Pérou',
    'prix':5.50,
    'unité':'kg'
  },

  { // Abricot
    'ref':'abr',
    'origine':'Brésil',
    'prix':4,
    'unité':'kg'
  },

  { // dattes sukkari
    'ref':'dtsuk',
    'origine':'Algérie',
    'prix':5,
    'unité':'pièce'
  },
  { // datte fraiche
    'ref':'dtfr',
    'origine':'Algérie',
    'prix':4,
    'unité':'kg'
  },

  { // Amande
    'ref':'amd',
    'origine':'Brésil',
    'prix':3,
    'unité':'kg'
  },
  { // Célero
    'ref':'clr',
    'origine':'France',
    'prix':0.50,
    'unité':'pièce'
  },
  { // Courge cireuse
    'ref':'cour',
    'origine':'Espagne',
    'prix':3,
    'unité':'pièce'
  },
  { // epinard
    'ref':'epin',
    'origine':'France',
    'prix':3,
    'unité':'kg'
  },
  { // gingimbre
    'ref':'gin',
    'origine':'Guyane',
    'prix':9,
    'unité':'kg'
  },
  { // haricot vert
    'ref':'har',
    'origine':'France',
    'prix':4,
    'unité':'kg'
  },


  { // manioc
    'ref':'man',
    'origine':'Côte d\'Ivoire',
    'prix':5.50,
    'unité':'kg'
  },

  { // oignon rouge
    'ref':'oinr',
    'origine':'France',
    'prix':8,
    'unité':'kg'
  },

  { // Percil
    'ref':'per',
    'origine':'France',
    'prix':0.80,
    'unité':'pièce'
  },

  { // piment
    'ref':'pim',
    'origine':'Côte d\'Ivoire',
    'prix':6.39,
    'unité':'kg'
  },
  { // Taro
    'ref':'tar',
    'origine':'Côte d\'Ivoire',
    'prix':3.90,
    'unité':'kg'
  },

  { // concombre
    'ref':'con',
    'origine':'France',
    'prix':0.5,
    'unité':'pièce'
  },
  { // choux de bruxelles
    'ref':'chb',
    'origine':'France',
    'prix':4,
    'unité':'kg'
  },
  { // choux rouge
    'ref':'chr',
    'origine':'Espagne',
    'prix':4.50,
    'unité':'pièce'
  },
  { // Myrtille
    'ref':'mty',
    'origine':'Brésil',
    'prix':8,
    'unité':'kg'
  },
  { // Prune
    'ref':'prn',
    'origine':'France',
    'prix':6,
    'unité':'kg'
  },


  

]
