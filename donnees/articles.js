var articles = [

  { 'ref': 'sa', 'nom': 'Salade', 'catégorie': 'Légume', 'photo': 'https://www.lesfoodies.com/_recipeimage/118317/astuce-conserver-la-salade.jpg',  'promotion': false },
  { 'ref': 'an', 'nom': 'Ananas', 'catégorie': 'Fruit', 'photo': 'https://www.lanutrition.fr/sites/default/files/ressources/shutterstock_124270765_ananas_comprese.jpg' },
  { 'ref': 'cv', 'nom': 'Citron Vert', 'catégorie': 'Fruit', 'photo': 'https://www.lessaveursdenoemie.fr/538-thickbox_default/citron-vert.jpg', 'promotion': false },
  { 'ref': 'cj', 'nom': 'Citron Jaune', 'catégorie': 'Fruit', 'photo': 'https://www.savibio.fr/29-large_default/citron-jaune.jpg' },
  { 'ref': 'ca', 'nom': 'Carotte', 'catégorie': 'Légume', 'photo': 'https://www.fermes-imagine.fr/wp-content/uploads/2019/06/carottes.jpg' },
  { 'ref': 'poi', 'nom': 'Poire', 'catégorie': 'Fruit', 'photo': 'https://laparra.fr/wp-content/uploads/2021/06/Poire-1024x1024-1.png' },
  { 'ref': 'pi', 'nom': 'Piment de Cayenne', 'catégorie': 'Légume', 'photo': 'https://produits.bienmanger.com/49721-0w600h600_Piment_Fort_Rouge_Cayenne_Bio.jpg', 'promotion': false },
  { 'ref': 'ne', 'nom': 'Nectarine', 'catégorie': 'Fruit', 'photo': 'https://fontestad.com/wp-content/uploads/2015/07/peche.jpg' },
  { 'ref': 'con', 'nom': 'Concombre', 'catégorie': 'Légume', 'photo': 'https://cdn.futura-sciences.com/sources/images/concombre-l%C3%A9gume.jpg' },
  { 'ref': 'ba', 'nom': 'Banane Jaune', 'catégorie': 'Fruit', 'photo': 'https://kadalys.com/cdn/shop/articles/Bio-Actif-Banane-Jaune-KADALYS-49416141.jpg?v=1716810725&width=2048' },
  { 'ref': 'bar', 'nom': 'Banane rouge', 'catégorie': 'Fruit', 'photo': 'https://www.bien-manger-selon-les-saisons.com/produits-de-saison/fruits/images/fruit-banane-rouge.jpg', 'promotion': false },
  { 'ref': 'pas', 'nom': 'Pastèque', 'catégorie': 'Fruit', 'photo': 'https://www.tout-un-fromage.com/media/Fruit/pasteque.jpg' },
  { 'ref': 'pa', 'nom': 'Pamplemousses', 'catégorie': 'Fruit', 'photo': 'https://www.aumaraicher.com/223-large_default/pamplemousse-rose.jpg' },
  { 'ref': 'be', 'nom': 'Betterave', 'catégorie': 'Légume', 'photo': 'https://static.750g.com/images/640-440/9d79b2714d3a361ca839bb1ddfadc639/adobestock-224358076.jpeg' },
  { 'ref': 'ki', 'nom': 'Kiwi', 'catégorie': 'Fruit', 'photo': 'https://www.grainesdefolie.com/3043-large_default/kiwi-actinidia-chinensis.jpg' },
  { 'ref': 'ra', 'nom': 'Raisin', 'catégorie': 'Fruit', 'photo': 'https://www.comptoirprimeur.fr/wp-content/uploads/2017/04/red-globe-grapes_large.jpg' },
  { 'ref': 'pr', 'nom': 'Poivrons rouges', 'catégorie': 'Légume', 'photo': 'https://media.auchan.fr/A0220100225000648660PRIMARY_2048x2048/B2CD/' },
  { 'ref': 'pj', 'nom': 'Poivrons jaunes', 'catégorie': 'Légume', 'photo': 'https://www.academiedugout.fr/images/12079/370-274/ffffff/fotolia_63637324_subscription_xl-copy.jpg?poix=50&poiy=50' },
  { 'ref': 'po', 'nom': 'Poivrons oranges', 'catégorie': 'Légume', 'photo': 'https://www.les-jardins-de-dounia.be/wp-content/uploads/DSC01048-1024x768.jpg' },
  { 'ref': 'or', 'nom': 'Oranges', 'catégorie': 'Fruit', 'photo': 'https://www.fruitselect.com/1442/orange-juteuses-sucrees-vitamines.jpg' },
  { 'ref': 'fr', 'nom': 'Fraises', 'catégorie': 'Fruit', 'photo': 'https://mapetiteassiette.com/wp-content/uploads/2021/06/AdobeStock_254635130-min-min.png' },
  { 'ref': 'av', 'nom': 'Avocats', 'catégorie': 'Fruit', 'photo': 'https://fr.termodizayn.com/thumb.php?p=./img/uploads/muhafazakosullari/icerik/45-avokado1.JPG&h=434' },
  
  // Ajouter le reste ici avec les bonnes URLs en ligne

  { 'ref': 'au', 'nom': 'Aubergine', 'catégorie': 'Légume', 'photo': 'https://bunny-wp-pullzone-j4jfpo06px.b-cdn.net/wp-content/uploads/2021/12/aubergine.jpg' },
  { 'ref': 'chf', 'nom': 'Choux fleur', 'catégorie': 'Légume', 'photo': 'https://www.academiedugout.fr/images/13971/1200-auto/chou-fleur_000.jpg?poix=50&poiy=50' },
  { 'ref': 'br', 'nom': 'Brocoli', 'catégorie': 'Légume', 'photo': 'https://mapetiteassiette.com/wp-content/uploads/2023/04/Design-sans-titre-1.png' },
  { 'ref': 'nx', 'nom': 'Noix de Coco', 'catégorie': 'Fruit', 'photo': 'https://www.compagnie-des-sens.fr/img/cmscover/3051/coco-458.jpg' },
  { 'ref': 'to', 'nom': 'Tomate orange', 'catégorie': 'Fruit', 'photo': 'https://www.georgesdelbard.com/pub/catalog/le_potager/plants_potagers/Orange_Queen_site_AdobeStock_213473545.jpg' },
  { 'ref': 'ma', 'nom': 'Mangue', 'catégorie': 'Fruit', 'photo': 'https://www.comptoirprimeur.fr/wp-content/uploads/2017/05/mangues-510x510.jpg' },
  { 'ref': 'cl', 'nom': 'Clémentine', 'catégorie': 'Fruit', 'photo': 'https://produits.bienmanger.com/35429-0w470h470_Clementines_Bio.jpg' },
  { 'ref': 'ch', 'nom': 'Choux blanc', 'catégorie': 'Légume', 'photo': 'https://bunny-wp-pullzone-j4jfpo06px.b-cdn.net/wp-content/uploads/2021/06/Chou-blanc.jpg' },


  //---------------------------------------------------------------------------------------------------------------------------------------------------------------//
  
  { 'ref': 'ml', 'nom': 'Melon', 'catégorie': 'Fruit', 'photo': 'https://jardinsdevartan.com/wp-content/uploads/2016/03/melon-charentais-jardins-de-vartan.jpg' },
  { 'ref': 'frm', 'nom': 'Framboise', 'catégorie': 'Fruit', 'photo': 'https://www.jaimefruitsetlegumes.ca/wp-content/uploads/2019/09/framboises-scaled-e1644263837892.jpg' },
  { 'ref': 'fg', 'nom': 'Figue', 'catégorie': 'Fruit', 'photo': 'https://media.gerbeaud.net/2019/11/640/figues.jpg' },
  { 'ref': 'gv', 'nom': 'Goyave', 'catégorie': 'Fruit', 'photo': 'https://www.santeetnutrition.com/liste-des-fruits/images/goyave.jpg' },
  { 'ref': 'gnd', 'nom': 'Grenade', 'catégorie': 'Fruit', 'photo': 'https://www.jaimefruitsetlegumes.ca/wp-content/uploads/2019/09/grenade-scaled-e1643120930744-700x700.jpg' },
  { 'ref': 'cs', 'nom': 'Cassis', 'catégorie': 'Fruit', 'photo': 'https://back.femininbio.com/attachments/2020/11/20/landscape/w1000/11133-cassis.jpg' },
  { 'ref': 'lt', 'nom': 'Litchi', 'catégorie': 'Fruit', 'photo': 'https://m.media-amazon.com/images/I/41zrtDaA9rL._AC_UF1000,1000_QL80_.jpg' },
  { 'ref': 'kk', 'nom': 'Kaki', 'catégorie': 'Fruit', 'photo': 'https://migustoimages.migros.ch/crop/v-w-1200-h-900-a-center_center/ad6efb539ee52f22a0967ce846fb85bc092327f7/kaki.jpg' },
  { 'ref': 'pv', 'nom': 'Poivron Vert', 'catégorie': 'Légume', 'photo': 'https://primeurdefrance.fr/wp-content/uploads/2021/05/poivron-vert-scaled.jpg' },
  { 'ref': 'pt', 'nom': 'Patate', 'catégorie': 'Légume', 'photo': 'https://konu-shop.com/cdn/shop/products/konupatate_700x700.png?v=1645268530' },
  { 'ref': 'ht', 'nom': 'Haricot', 'catégorie': 'Légume', 'photo': 'https://media.gerbeaud.net/2023/10/640/haricots-verts.jpg' },
  { 'ref': 'oi', 'nom': 'Oignon', 'catégorie': 'Légume', 'photo': 'https://pbs.twimg.com/media/CuyxONYW8AARD2K?format=jpg&name=4096x4096' },
  { 'ref': 'nv', 'nom': 'Navets', 'catégorie': 'Légume', 'photo': 'https://www.roseedeschamps.fr/wp-content/uploads/2019/01/navet.jpg' },
  { 'ref': 'ms', 'nom': 'Maïs', 'catégorie': 'Légume', 'photo': 'https://exoticterroirshop.com/285-large_default/mais-en-epis.jpg' },
  { 'ref': 'pd', 'nom': 'Patate Douce', 'catégorie': 'Légume', 'photo': 'https://swissbrothers.com/775-large_default/patate-douce-jaune-fraiche-500g.jpg' },

  //-------------------------------------------------------------------------------------------------------------------------------------------------------

  { 'ref': 'pmr', 'nom': 'Pomme rouge', 'catégorie': 'Fruit', 'photo': 'https://static.libertyprim.com/files/varietes/pomme-dalinette-large.jpg?1589283082','promotion' : false },
  { 'ref': 'pmv', 'nom': 'Pomme verte', 'catégorie': 'Fruit', 'photo': 'https://www.adjovan.com/wp-content/uploads/2020/05/arome-pomme-verte.jpg' },
  { 'ref': 'pmj', 'nom': 'Pomme jaune', 'catégorie': 'Fruit', 'photo': 'https://m.media-amazon.com/images/I/51TzUc-1BIL._AC_UF1000,1000_QL80_.jpg','promotion' : false },
  { 'ref': 'pmt', 'nom': 'Pomme de terre Spunta', 'catégorie': 'Légume', 'photo': 'https://www.comptoirprimeur.fr/wp-content/uploads/2017/05/0052146_041013_y_001_560-510x510.jpg'},
  { 'ref': 'pmtr', 'nom': 'Pomme de terre rudolph', 'catégorie': 'Fruit', 'photo': 'https://maison-laury.fr/wp-content/uploads/2021/02/pomme-de-terre-rouge.jpg' },
  { 'ref': 'tor', 'nom': 'Tomate rose de Berne', 'catégorie': 'Fruit', 'photo': 'https://modeleprimeur.monpetitdrive.fr/pub/banque_images/201907/legumes/tomate-rose.jpeg' ,'promotion' : false},
  { 'ref': 'tof', 'nom': 'Tomate fandango', 'catégorie': 'Fruit', 'photo': 'https://lesjardinsdelortal.fr/199-large_default/plant-de-tomate-montfavet.jpg'},
  { 'ref': 'toc', 'nom': 'Tomate cerise', 'catégorie': 'Fruit', 'photo': 'https://www.georgesdelbard.com/pub/catalog/le_potager/plants_potagers/Tomates/.Tomate_cocktail_Harmonie_site_AdobeStock_123993356_s.jpg'},
  { 'ref': 'tocb', 'nom': 'Tomate coeur de boeuf', 'catégorie': 'Fruit', 'photo': 'https://jardinsdevartan.com/wp-content/uploads/2016/04/TOMATECOEUR.png'},
  { 'ref': 'torg', 'nom': 'Tomate rio grande', 'catégorie': 'Fruit', 'photo': 'https://terrepromise.ca/web/image/product.template/697/image_1024?unique=400a390'},
  { 'ref': 'toal', 'nom': 'Tomate allongé', 'catégorie': 'Fruit', 'photo': 'https://www.universallys.com/theme/images/produits/53-o.jpg'},
  { 'ref': 'ton', 'nom': 'Tomate noire', 'catégorie': 'Fruit', 'photo': 'https://cdn.jacques-briant.fr/5602-thickbox_default/tomate-noire-de-crimee.jpg'},
  { 'ref': 'toa', 'nom': 'Tomate ananas', 'catégorie': 'Fruit', 'photo': 'https://www.celeirodahorta.pt/1208-home_default/tomate-ananas.jpg'},
  { 'ref': 'tov', 'nom': 'Tomate verte', 'catégorie': 'Fruit', 'photo': 'https://jardinierparesseux.com/wp-content/uploads/2020/09/200915b-www.mrswages.com_.jpg?w=1024'},
  { 'ref': 'cer', 'nom': 'Cerise', 'catégorie': 'Fruit', 'photo': 'https://media.auchan.fr/A0219960528000022387PRIMARY_468x468/B2CD/'},
  { 'ref': 'pay', 'nom': 'Papaye', 'catégorie': 'Fruit', 'photo': 'https://www.lanutrition.fr/sites/default/files/ressources/papaye.jpg'},
  { 'ref': 'drg', 'nom': 'Fruit du dragon', 'catégorie': 'Fruit', 'photo': 'https://static.libertyprim.com/files/familles/pitaya-large.jpg?1569344063'},
  { 'ref': 'abr', 'nom': 'Abricot', 'catégorie': 'Fruit', 'photo': 'https://www.oleronprimeurs.fr/pub/banque_images/201907/fruits/abricot1.jpeg'},
  { 'ref': 'dtsuk', 'nom': 'Datte sukkari', 'catégorie': 'Fruit', 'photo': 'https://www.maktaba-alikhlas.com/4683-pd_custom/sukkari-600g.jpg'},
  { 'ref': 'dtfr', 'nom': 'Datte fraiche', 'catégorie': 'Fruit', 'photo': 'https://static.libertyprim.com/files/familles/datte-fraiche-large.jpg?1578829373'},

  { 'ref': 'amd', 'nom': 'Amande', 'catégorie': 'Fruit', 'photo': 'https://www.miam-asso.fr/wp-content/uploads/2018/10/Amande.png'},
  { 'ref': 'clr', 'nom': 'Céleri', 'catégorie': 'Légume', 'photo': 'https://www.jaimefruitsetlegumes.ca/wp-content/uploads/2019/09/celeri-1-700x700.jpg'},
  { 'ref': 'cour', 'nom': 'Courge cireuse', 'catégorie': 'Légume', 'photo': 'https://marcwiner.com/wp-content/uploads/2022/10/courge-cireuse-en-tete-scaled.jpg'},
  { 'ref': 'epin', 'nom': 'Epinard', 'catégorie': 'Légume', 'photo': 'https://aucoeurdupanier.fr/wp-content/uploads/2020/09/epinard.jpg'},
  { 'ref': 'gin', 'nom': 'Gingembre', 'catégorie': 'Légume', 'photo': 'https://vracandgo.com/cdn/shop/products/FLG02_066_grande.jpg?v=1611415619'},
  { 'ref': 'har', 'nom': 'Haricot vert', 'catégorie': 'Légume', 'photo': 'https://media.gerbeaud.net/2023/10/640/haricots-verts.jpg'},
  { 'ref': 'man', 'nom': 'Manioc', 'catégorie': 'Légume', 'photo': 'https://glycemic-index.net/images/3VGiVVttVV.webp'},
  { 'ref': 'oinr', 'nom': 'Oignon rouge', 'catégorie': 'Légume', 'photo': 'https://boutique.jardindelaborde.com/804-large_default/oignon-rouge-cosnes-sur-loire-kg.jpg'},
  { 'ref': 'per', 'nom': 'Persil', 'catégorie': 'Légume', 'photo': 'https://fr-fr.bakker.com/cdn/shop/files/100149_2.jpg?v=1706106799&width=533'},
  { 'ref': 'pim', 'nom': 'Piment fort', 'catégorie': 'Légume', 'photo': 'https://www.academiedugout.fr/images/7525/1200-auto/piment-antillais-copy.jpg?poix=50&poiy=50'},
  { 'ref': 'tar', 'nom': 'Taro', 'catégorie': 'Légume', 'photo': 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/71d7/live/7c1f6c90-8e0c-11ee-833d-0f8d294ddc97.jpg.webp'},
  { 'ref': 'con', 'nom': 'Concombre', 'catégorie': 'Légume', 'photo': 'https://www.abcie.org/wp-content/uploads/2017/11/concombre.jpg'},
  { 'ref': 'chb', 'nom': 'Choux de Bruxelles', 'catégorie': 'Légume', 'photo': 'https://lespetitsfruits.ca/wp-content/uploads/2017/04/Recipe-BSprouts.jpg'},
  { 'ref': 'chr', 'nom': 'Choux rouge', 'catégorie': 'Légume', 'photo': 'https://www.aubouquetgarni.fr/pub/banque_images/201907/legumes/chou-rouge.jpeg'},
  { 'ref': 'mty', 'nom': 'Myrtille', 'catégorie': 'Fruit', 'photo': 'https://nordictemptations.com/wp-content/uploads/2021/10/Wild-blueberries-250-g.jpg'},
  { 'ref': 'prn', 'nom': 'Prune', 'catégorie': 'Fruit', 'photo': 'https://www.bonparfumeur.com/cdn/shop/files/Prune-1024x1024-1_1500x.png?v=1686043609'},

];







