// MapSchool — Base de dados nacional de Angola
// Todas as instituições organizadas por província

const INSTITUICOES = [

  // ==================== LUANDA ====================
  { id:'itel', sigla:'ITEL', nome:'Instituto de Telecomunicações de Luanda', provincia:'Luanda', tipo:'escola', area:'Tecnologia',
    descricao:'Instituto de referência nacional em Telecomunicações, Informática e Electrónica. Forma técnicos especializados desde 1978.',
    cursos:['Telecomunicações','Informática','Electrónica','Multimédia','Redes e Sistemas'],
    contacto:'+244 222 321 045', localizacao:'Rua do Escol, Luanda', ranking:88,
    tags:['telecomunicações','informatica','electronica','tecnologia','multimedia','redes'],
    url:'itel/itel.html', map:'Instituto+de+Telecomunicacoes+Luanda+Angola' },

  { id:'ipil', sigla:'IPIL', nome:'Instituto Politécnico Industrial de Luanda', provincia:'Luanda', tipo:'escola', area:'Industrial',
    descricao:'Referência em formação técnica industrial, com laboratórios modernos de mecânica, química e construção civil.',
    cursos:['Mecânica Industrial','Química Industrial','Electrotecnia','Construção Civil','Informática','Mecatrónica','Automóvel'],
    contacto:'+244 222 350 100', localizacao:'Rua Direita, Luanda', ranking:85,
    tags:['industrial','mecanica','quimica','eletricidade','construção civil','informatica','mecatronica'],
    url:'ipil/ipil.html', map:'Instituto+Politecnico+Industrial+Luanda+Angola' },

  { id:'imel', sigla:'IMEL', nome:'Instituto Médio de Economia de Luanda', provincia:'Luanda', tipo:'escola', area:'Economia',
    descricao:'Formação em economia, contabilidade e administração para o mercado de trabalho angolano.',
    cursos:['Economia','Contabilidade e Auditoria','Gestão de Empresas','Finanças','Comércio','Comunicação Social'],
    contacto:'+244 222 310 200', localizacao:'Largo Luther King, Luanda', ranking:80,
    tags:['economia','contabilidade','gestão','finanças','comercio','administração'],
    url:'imel/imel.html', map:'Instituto+Medio+Economia+Luanda+Angola' },

  { id:'imcl', sigla:'IMCL', nome:'Instituto Médio Comercial de Luanda', provincia:'Luanda', tipo:'escola', area:'Comércio',
    descricao:'Escola técnica especializada em comércio, secretariado e recursos humanos.',
    cursos:['Comércio Geral','Contabilidade','Secretariado Executivo','Gestão de RH','Finanças'],
    contacto:'+244 222 331 570', localizacao:'Rua Amílcar Cabral, Luanda', ranking:78,
    tags:['comercial','comercio','contabilidade','secretariado','finanças','gestão','recursos humanos'],
    url:'imcl/imcl.html', map:'Instituto+Medio+Comercial+Luanda+Angola' },

  { id:'alda', sigla:'IMPAL', nome:'Instituto Médio Politécnico Alda Lara', provincia:'Luanda', tipo:'escola', area:'Politécnico',
    descricao:'Instituto técnico que oferece cursos em eletricidade, construção civil e informática.',
    cursos:['Electrotecnia','Construção Civil','Informática','Obras Públicas','Topografia'],
    contacto:'+244 222 440 500', localizacao:'Viana, Luanda', ranking:75,
    tags:['alda lara','eletricidade','construção civil','informatica','politecnico'],
    url:'alda/alda.html', map:'Instituto+Politecnico+Alda+Lara+Viana+Angola' },

  { id:'imne', sigla:'IMNE', nome:'Instituto Médio Normal de Educação Marista', provincia:'Luanda', tipo:'escola', area:'Educação',
    descricao:'Instituto ligado à congregação marista, especializado na formação de professores.',
    cursos:['Formação de Professores','Psicopedagogia','Educação Especial','Língua Portuguesa'],
    contacto:'+244 222 443 120', localizacao:'Palanca, Luanda', ranking:76,
    tags:['educação','formação de professores','pedagogia','marista','psicopedagogia'],
    url:'imne/imne.html', map:'Instituto+Medio+Normal+Educacao+Marista+Luanda' },

  { id:'mutu', sigla:'MUTU', nome:'Magistério Primário Mutu-ya-Kevela', provincia:'Luanda', tipo:'escola', area:'Magistério',
    descricao:'Instituição de formação de professores do ensino primário, com longa tradição em Angola.',
    cursos:['Magistério Primário','Educação de Infância','Educação Especial'],
    contacto:'+244 222 320 800', localizacao:'Ingombota, Luanda', ranking:72,
    tags:['magisterio','formação de professores','primário','educação especial','infância'],
    url:'mutu/mutu.html', map:'Magisterio+Mutu+ya+Kevela+Luanda' },

  { id:'imaa', sigla:'IMAA', nome:'Instituto Médio de Artes de Angola', provincia:'Luanda', tipo:'escola', area:'Artes',
    descricao:'Único instituto médio especializado em artes visuais, música, teatro e design em Angola.',
    cursos:['Artes Visuais','Pintura','Escultura','Design Gráfico','Teatro','Dança','Música'],
    contacto:'+244 222 390 450', localizacao:'Maianga, Luanda', ranking:82,
    tags:['artes','pintura','escultura','design','teatro','dança','música','artes visuais'],
    url:'imaa/imaa.html', map:'Instituto+Medio+Artes+Angola+Luanda' },

  { id:'emab', sigla:'EMAB', nome:'Escola do Magistério Benvindos do Lar', provincia:'Luanda', tipo:'escola', area:'Magistério',
    descricao:'Escola de magistério voltada para a formação de professores da educação infantil e especial.',
    cursos:['Magistério Primário','Educação de Infância','Educação Especial'],
    contacto:'+244 222 480 100', localizacao:'Viana, Luanda', ranking:70,
    tags:['magisterio','formação de professores','educação especial','infância','viana'],
    url:'emab/emab.html', map:'Escola+Magisterio+Benvindos+Lar+Luanda' },

  { id:'puniv', sigla:'PUNIV', nome:'Instituto Politécnico Universal', provincia:'Luanda', tipo:'escola', area:'Politécnico',
    descricao:'Instituto técnico privado com forte ênfase em informática, redes e gestão empresarial.',
    cursos:['Informática','Redes e Sistemas','Programação','Secretariado','Contabilidade','Gestão Comercial'],
    contacto:'+244 222 500 700', localizacao:'Rangel, Luanda', ranking:73,
    tags:['politecnico','informatica','redes','programação','secretariado','contabilidade'],
    url:'puniv/puniv.html', map:'Instituto+Politecnico+Universal+Luanda+Angola' },

  { id:'uan', sigla:'UAN', nome:'Universidade Agostinho Neto', provincia:'Luanda', tipo:'universidade', area:'Pública',
    descricao:'A maior e mais antiga universidade pública de Angola, fundada em 1962. Oferece licenciatura, mestrado e doutoramento em diversas áreas do conhecimento.',
    cursos:['Direito','Medicina','Enfermagem','Engenharia Civil','Engenharia Informática','Economia','Letras','Ciências','Farmácia','Arquitectura'],
    contacto:'+244 222 333 003', localizacao:'Avenida 4 de Fevereiro, Cidade Alta, Luanda', ranking:95,
    tags:['universidade','publica','direito','medicina','engenharia','economia','letras','ciencias','enfermagem'],
    url:'uan/uan.html', map:'Universidade+Agostinho+Neto+Luanda+Angola' },

  { id:'isptec', sigla:'ISPTEC', nome:'Instituto Superior Politécnico de Tecnologias e Ciências', provincia:'Luanda', tipo:'universidade', area:'Privada',
    descricao:'Universidade privada de referência em tecnologia, ciências da saúde e gestão, com parcerias internacionais.',
    cursos:['Engenharia Informática','Engenharia de Telecomunicações','Contabilidade','Enfermagem','Análises Clínicas','Gestão'],
    contacto:'+244 222 430 050', localizacao:'Talatona, Luanda Sul', ranking:91,
    tags:['universidade','privada','isptec','engenharia','informatica','contabilidade','enfermagem','telecomunicações'],
    url:'isptec/isptec.html', map:'ISPTEC+Talatona+Luanda+Angola' },

  { id:'unipiaget', sigla:'Uni-Piaget', nome:'Universidade Jean Piaget de Angola', provincia:'Luanda', tipo:'universidade', area:'Privada',
    descricao:'Universidade privada com raízes em Portugal, especializada em ciências da saúde, direito e engenharias.',
    cursos:['Medicina','Farmácia','Fisioterapia','Psicologia','Direito','Engenharia','Educação','Arquitectura'],
    contacto:'+244 222 638 300', localizacao:'Via S10, Luanda', ranking:89,
    tags:['universidade','privada','piaget','medicina','farmacia','fisioterapia','psicologia','direito'],
    url:'unipiaget/unipiaget.html', map:'Universidade+Jean+Piaget+Angola+Luanda' },

  { id:'ual', sigla:'UAL', nome:'Universidade Atlântico de Angola', provincia:'Luanda', tipo:'universidade', area:'Privada',
    descricao:'Universidade privada focada em gestão, comunicação, direito e tecnologias de informação.',
    cursos:['Gestão de Empresas','Direito','Jornalismo','Comunicação Social','Informática','Marketing','Relações Internacionais'],
    contacto:'+244 222 447 800', localizacao:'Talatona, Luanda', ranking:82,
    tags:['universidade','privada','atlantico','gestão','direito','jornalismo','comunicação','informatica'],
    url:'ual/ual.html', map:'Universidade+Atlantico+Angola+Luanda' },

  { id:'unilari', sigla:'UniLARI', nome:"Universidade Lueji A'Nkonde", provincia:'Luanda', tipo:'universidade', area:'Privada',
    descricao:'Universidade privada com foco em engenharia, direito e relações internacionais.',
    cursos:['Engenharia Civil','Engenharia Informática','Direito','Relações Internacionais','Administração Pública','Gestão'],
    contacto:'+244 222 320 900', localizacao:'Luanda', ranking:79,
    tags:['universidade','privada','lueji','engenharia','direito','relacoes internacionais'],
    url:'unilarilambarene/unilarilambarene.html', map:'Universidade+Lueji+Nkonde+Luanda' },

  { id:'unimetro', sigla:'UniMetro', nome:'Universidade Metropolitana de Angola', provincia:'Luanda', tipo:'universidade', area:'Privada',
    descricao:'Universidade privada com forte presença na área da saúde, petróleo e engenharia.',
    cursos:['Medicina','Farmácia','Petróleo e Gás','Engenharia','Direito','Psicologia','Contabilidade'],
    contacto:'+244 222 390 100', localizacao:'Luanda', ranking:80,
    tags:['universidade','privada','metropolitana','medicina','farmacia','petroleo','engenharia','direito'],
    url:'unimetroangola/unimetroangola.html', map:'Universidade+Metropolitana+Angola+Luanda' },

  // ==================== BENGUELA ====================
  { id:'isced-benguela', sigla:'ISCED-B', nome:'Instituto Superior de Ciências da Educação de Benguela', provincia:'Benguela', tipo:'universidade', area:'Pública',
    descricao:'Instituição pública de ensino superior focada na formação de docentes para o sistema educativo angolano.',
    cursos:['Pedagogia','Psicologia da Educação','Matemática','Física','Biologia','Química','História','Língua Portuguesa'],
    contacto:'+244 272 220 100', localizacao:'Benguela, Benguela', ranking:84,
    tags:['universidade','publica','isced','pedagogia','educação','ciencias'],
    url:'#', map:'ISCED+Benguela+Angola' },

  { id:'uan-benguela', sigla:'UAN-B', nome:'Universidade Agostinho Neto — Benguela', provincia:'Benguela', tipo:'universidade', area:'Pública',
    descricao:'Extensão da Universidade Agostinho Neto na província de Benguela.',
    cursos:['Direito','Economia','Engenharia Civil','Medicina','Enfermagem'],
    contacto:'+244 272 222 222', localizacao:'Benguela', ranking:87,
    tags:['universidade','publica','benguela','direito','medicina','engenharia'],
    url:'#', map:'Universidade+Agostinho+Neto+Benguela+Angola' },

  { id:'imel-benguela', sigla:'IMEL-B', nome:'Instituto Médio de Economia de Benguela', provincia:'Benguela', tipo:'escola', area:'Economia',
    descricao:'Escola técnica média em economia e contabilidade na cidade de Benguela.',
    cursos:['Contabilidade','Gestão','Finanças','Secretariado'],
    contacto:'+244 272 230 400', localizacao:'Benguela', ranking:70,
    tags:['economia','contabilidade','gestão','secretariado','benguela'],
    url:'#', map:'Instituto+Medio+Economia+Benguela+Angola' },

  { id:'ipib', sigla:'IPIB', nome:'Instituto Politécnico Industrial de Benguela', provincia:'Benguela', tipo:'escola', area:'Industrial',
    descricao:'Formação técnica industrial com cursos de mecânica, eletricidade e construção civil.',
    cursos:['Mecânica','Electrotecnia','Construção Civil','Informática'],
    contacto:'+244 272 240 100', localizacao:'Benguela', ranking:72,
    tags:['industrial','mecanica','eletricidade','construção civil','benguela'],
    url:'#', map:'Instituto+Politecnico+Industrial+Benguela+Angola' },

  // ==================== HUÍLA ====================
  { id:'isced-huila', sigla:'ISCED-H', nome:'Instituto Superior de Ciências da Educação da Huíla', provincia:'Huíla', tipo:'universidade', area:'Pública',
    descricao:'Principal instituição de formação de professores e pesquisa educacional no sul de Angola.',
    cursos:['Pedagogia','Ciências da Educação','Matemática','Biologia','Física','Química','Língua Portuguesa','História'],
    contacto:'+244 261 220 300', localizacao:'Lubango, Huíla', ranking:85,
    tags:['universidade','publica','isced','educação','pedagogia','huila','lubango'],
    url:'#', map:'ISCED+Lubango+Huila+Angola' },

  { id:'unikev', sigla:'UNIKEV', nome:'Universidade Katyavala Bwila', provincia:'Huíla', tipo:'universidade', area:'Pública',
    descricao:'Universidade pública sediada em Lubango, com foco em engenharia, saúde e ciências sociais.',
    cursos:['Medicina','Engenharia Civil','Direito','Economia','Arquitectura','Agronomia','Enfermagem'],
    contacto:'+244 261 221 500', localizacao:'Lubango, Huíla', ranking:88,
    tags:['universidade','publica','lubango','huila','medicina','engenharia','direito'],
    url:'#', map:'Universidade+Katyavala+Bwila+Lubango+Angola' },

  { id:'imel-lubango', sigla:'IMEL-L', nome:'Instituto Médio de Economia do Lubango', provincia:'Huíla', tipo:'escola', area:'Economia',
    descricao:'Escola técnica média em economia, contabilidade e gestão no Lubango.',
    cursos:['Economia','Contabilidade','Gestão Comercial','Secretariado'],
    contacto:'+244 261 225 100', localizacao:'Lubango, Huíla', ranking:72,
    tags:['economia','contabilidade','gestão','lubango','huila'],
    url:'#', map:'Instituto+Medio+Economia+Lubango+Angola' },

  // ==================== HUAMBO ====================
  { id:'isced-huambo', sigla:'ISCED-Hb', nome:'Instituto Superior de Ciências da Educação do Huambo', provincia:'Huambo', tipo:'universidade', area:'Pública',
    descricao:'Instituição de formação de professores e pesquisa educacional na região central de Angola.',
    cursos:['Pedagogia','Educação Física','Biologia','Química','Matemática','História'],
    contacto:'+244 241 220 100', localizacao:'Huambo', ranking:83,
    tags:['universidade','publica','isced','huambo','pedagogia','educação'],
    url:'#', map:'ISCED+Huambo+Angola' },

  { id:'unihuambo', sigla:'UniHuambo', nome:'Universidade José Eduardo dos Santos', provincia:'Huambo', tipo:'universidade', area:'Pública',
    descricao:'Universidade pública do Huambo com oferta diversificada em saúde, engenharia e ciências sociais.',
    cursos:['Medicina Veterinária','Agronomia','Engenharia','Direito','Economia','Enfermagem'],
    contacto:'+244 241 222 900', localizacao:'Huambo', ranking:84,
    tags:['universidade','publica','huambo','agronomia','engenharia','medicina','direito'],
    url:'#', map:'Universidade+Jose+Eduardo+Santos+Huambo+Angola' },

  { id:'ipih', sigla:'IPIH', nome:'Instituto Politécnico Industrial do Huambo', provincia:'Huambo', tipo:'escola', area:'Industrial',
    descricao:'Formação técnica especializada em mecânica, electricidade e construção civil no Huambo.',
    cursos:['Mecânica Automóvel','Electrotecnia','Construção Civil','Informática'],
    contacto:'+244 241 225 000', localizacao:'Huambo', ranking:70,
    tags:['industrial','mecanica','eletricidade','construção','huambo'],
    url:'#', map:'Instituto+Politecnico+Industrial+Huambo+Angola' },

  // ==================== MALANJE ====================
  { id:'isced-malanje', sigla:'ISCED-M', nome:'Instituto Superior de Ciências da Educação de Malanje', provincia:'Malanje', tipo:'universidade', area:'Pública',
    descricao:'Instituto de ensino superior dedicado à formação de professores e pesquisa educacional em Malanje.',
    cursos:['Pedagogia','Educação Física','Biologia','Matemática','Língua Portuguesa'],
    contacto:'+244 252 222 300', localizacao:'Malanje', ranking:78,
    tags:['universidade','publica','isced','malanje','pedagogia','educação'],
    url:'#', map:'ISCED+Malanje+Angola' },

  { id:'uan-malanje', sigla:'UAN-M', nome:'Universidade Agostinho Neto — Malanje', provincia:'Malanje', tipo:'universidade', area:'Pública',
    descricao:'Polo da UAN em Malanje, oferecendo cursos em ciências, engenharia e ciências sociais.',
    cursos:['Agronomia','Engenharia','Economia','Direito','Enfermagem'],
    contacto:'+244 252 222 100', localizacao:'Malanje', ranking:80,
    tags:['universidade','publica','malanje','agronomia','engenharia','direito'],
    url:'#', map:'Universidade+Agostinho+Neto+Malanje+Angola' },

  // ==================== CABINDA ====================
  { id:'isced-cabinda', sigla:'ISCED-C', nome:'Instituto Superior de Ciências da Educação de Cabinda', provincia:'Cabinda', tipo:'universidade', area:'Pública',
    descricao:'Instituto de formação de professores na região de Cabinda.',
    cursos:['Pedagogia','Biologia','Matemática','História','Língua Portuguesa'],
    contacto:'+244 231 222 500', localizacao:'Cabinda', ranking:76,
    tags:['universidade','publica','isced','cabinda','pedagogia'],
    url:'#', map:'ISCED+Cabinda+Angola' },

  { id:'uni-cabinda', sigla:'UniCabinda', nome:'Universidade Lueji A\'Nkonde — Cabinda', provincia:'Cabinda', tipo:'universidade', area:'Privada',
    descricao:'Polo universitário em Cabinda com foco em petróleo, gestão e engenharia.',
    cursos:['Engenharia Petrolífera','Gestão','Direito','Informática','Contabilidade'],
    contacto:'+244 231 225 000', localizacao:'Cabinda', ranking:79,
    tags:['universidade','privada','cabinda','petroleo','engenharia','gestão'],
    url:'#', map:'Universidade+Cabinda+Angola' },

  // ==================== KWANZA SUL ====================
  { id:'isced-sumbe', sigla:'ISCED-KS', nome:'Instituto Superior de Ciências da Educação do Kwanza Sul', provincia:'Kwanza Sul', tipo:'universidade', area:'Pública',
    descricao:'Formação de professores e pesquisa educacional no Kwanza Sul.',
    cursos:['Pedagogia','Matemática','Biologia','Química','Física'],
    contacto:'+244 236 222 100', localizacao:'Sumbe, Kwanza Sul', ranking:74,
    tags:['universidade','publica','isced','kwanza sul','sumbe','pedagogia'],
    url:'#', map:'ISCED+Sumbe+Kwanza+Sul+Angola' },

  // ==================== UÍGE ====================
  { id:'isced-uige', sigla:'ISCED-U', nome:'Instituto Superior de Ciências da Educação do Uíge', provincia:'Uíge', tipo:'universidade', area:'Pública',
    descricao:'Instituição de ensino superior dedicada à formação de professores no Uíge.',
    cursos:['Pedagogia','Ciências da Educação','Língua Portuguesa','Matemática','Biologia'],
    contacto:'+244 233 222 800', localizacao:'Uíge', ranking:73,
    tags:['universidade','publica','isced','uige','pedagogia'],
    url:'#', map:'ISCED+Uige+Angola' },

  // ==================== ZAIRE ====================
  { id:'isced-zaire', sigla:'ISCED-Z', nome:'Instituto Superior de Ciências da Educação do Zaire', provincia:'Zaire', tipo:'universidade', area:'Pública',
    descricao:'Formação superior de professores na província do Zaire, norte de Angola.',
    cursos:['Pedagogia','Matemática','Biologia','História'],
    contacto:'+244 232 222 100', localizacao:'M\'banza Kongo, Zaire', ranking:70,
    tags:['universidade','publica','isced','zaire','mbanza kongo'],
    url:'#', map:'ISCED+Zaire+Angola+Mbanza+Kongo' },

  // ==================== BIÉ ====================
  { id:'isced-bie', sigla:'ISCED-B2', nome:'Instituto Superior de Ciências da Educação do Bié', provincia:'Bié', tipo:'universidade', area:'Pública',
    descricao:'Instituição de formação de professores na província do Bié.',
    cursos:['Pedagogia','Educação Física','Biologia','Matemática'],
    contacto:'+244 248 222 300', localizacao:'Kuito, Bié', ranking:71,
    tags:['universidade','publica','isced','bie','kuito'],
    url:'#', map:'ISCED+Kuito+Bie+Angola' },

  // ==================== MOXICO ====================
  { id:'isced-moxico', sigla:'ISCED-Mx', nome:'Instituto Superior de Ciências da Educação do Moxico', provincia:'Moxico', tipo:'universidade', area:'Pública',
    descricao:'Formação superior de professores na região do Moxico, leste de Angola.',
    cursos:['Pedagogia','Biologia','Matemática','Língua Portuguesa'],
    contacto:'+244 254 222 100', localizacao:'Luena, Moxico', ranking:68,
    tags:['universidade','publica','isced','moxico','luena'],
    url:'#', map:'ISCED+Luena+Moxico+Angola' },

  // ==================== LUNDA NORTE ====================
  { id:'isced-lundanorte', sigla:'ISCED-LN', nome:'Instituto Superior de Ciências da Educação da Lunda Norte', provincia:'Lunda Norte', tipo:'universidade', area:'Pública',
    descricao:'Formação de professores na região diamantífera da Lunda Norte.',
    cursos:['Pedagogia','Ciências da Educação','Matemática','Biologia'],
    contacto:'+244 255 222 000', localizacao:'Dundo, Lunda Norte', ranking:69,
    tags:['universidade','publica','isced','lunda norte','dundo'],
    url:'#', map:'ISCED+Dundo+Lunda+Norte+Angola' },

  // ==================== LUNDA SUL ====================
  { id:'isced-lundasul', sigla:'ISCED-LS', nome:'Instituto Superior de Ciências da Educação da Lunda Sul', provincia:'Lunda Sul', tipo:'universidade', area:'Pública',
    descricao:'Formação superior de docentes na Lunda Sul.',
    cursos:['Pedagogia','Matemática','Biologia'],
    contacto:'+244 257 222 000', localizacao:'Saurimo, Lunda Sul', ranking:67,
    tags:['universidade','publica','isced','lunda sul','saurimo'],
    url:'#', map:'ISCED+Saurimo+Lunda+Sul+Angola' },

  // ==================== CUANDO CUBANGO ====================
  { id:'isced-cuandocubango', sigla:'ISCED-CC', nome:'Instituto Superior de Ciências da Educação do Cuando Cubango', provincia:'Cuando Cubango', tipo:'universidade', area:'Pública',
    descricao:'Instituição de formação de professores no sudeste de Angola.',
    cursos:['Pedagogia','Biologia','Matemática','Língua Portuguesa'],
    contacto:'+244 249 222 000', localizacao:'Menongue, Cuando Cubango', ranking:65,
    tags:['universidade','publica','isced','cuando cubango','menongue'],
    url:'#', map:'ISCED+Menongue+Angola' },

  // ==================== CUNENE ====================
  { id:'isced-cunene', sigla:'ISCED-Cn', nome:'Instituto Superior de Ciências da Educação do Cunene', provincia:'Cunene', tipo:'universidade', area:'Pública',
    descricao:'Formação de professores na província do Cunene, sul de Angola.',
    cursos:['Pedagogia','Matemática','Biologia'],
    contacto:'+244 265 222 000', localizacao:'Ondjiva, Cunene', ranking:65,
    tags:['universidade','publica','isced','cunene','ondjiva'],
    url:'#', map:'ISCED+Ondjiva+Cunene+Angola' },

  // ==================== NAMIBE ====================
  { id:'isced-namibe', sigla:'ISCED-N', nome:'Instituto Superior de Ciências da Educação do Namibe', provincia:'Namibe', tipo:'universidade', area:'Pública',
    descricao:'Instituto de formação de professores na região do Namibe.',
    cursos:['Pedagogia','Educação Física','Biologia','Matemática'],
    contacto:'+244 264 222 000', localizacao:'Moçâmedes, Namibe', ranking:68,
    tags:['universidade','publica','isced','namibe','mocamedes'],
    url:'#', map:'ISCED+Namibe+Mocamedes+Angola' },

  // ==================== KWANZA NORTE ====================
  { id:'isced-kwanzanorte', sigla:'ISCED-KN', nome:'Instituto Superior de Ciências da Educação do Kwanza Norte', provincia:'Kwanza Norte', tipo:'universidade', area:'Pública',
    descricao:'Formação de professores na região do Kwanza Norte.',
    cursos:['Pedagogia','Matemática','Biologia','Língua Portuguesa'],
    contacto:'+244 235 222 000', localizacao:'N\'Dalatando, Kwanza Norte', ranking:68,
    tags:['universidade','publica','isced','kwanza norte','ndalatando'],
    url:'#', map:'ISCED+Kwanza+Norte+Angola' },

  // ==================== BENGO ====================
  { id:'isced-bengo', sigla:'ISCED-Bg', nome:'Instituto Superior de Ciências da Educação do Bengo', provincia:'Bengo', tipo:'universidade', area:'Pública',
    descricao:'Formação de professores na região do Bengo.',
    cursos:['Pedagogia','Biologia','Matemática'],
    contacto:'+244 234 222 000', localizacao:'Caxito, Bengo', ranking:66,
    tags:['universidade','publica','isced','bengo','caxito'],
    url:'#', map:'ISCED+Bengo+Angola' },

];

// Províncias de Angola
const PROVINCIAS = [
  'Luanda','Benguela','Huíla','Huambo','Malanje','Cabinda',
  'Kwanza Sul','Uíge','Zaire','Bié','Moxico',
  'Lunda Norte','Lunda Sul','Cuando Cubango','Cunene','Namibe',
  'Kwanza Norte','Bengo'
];

// Função de normalização para pesquisa
function norm(s) {
  return (s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim();
}

// Pesquisa com filtros
function pesquisarInstituicoes({ texto='', provincia='', tipo='', curso='' } = {}) {
  const n = norm(texto);
  const p = norm(provincia);
  const t = norm(tipo);
  const c = norm(curso);
  return INSTITUICOES.filter(e => {
    const matchTxt = !n || norm(e.sigla).includes(n) || norm(e.nome).includes(n) ||
      e.tags.some(tag => norm(tag).includes(n)) ||
      e.cursos.some(cur => norm(cur).includes(n));
    const matchProv = !p || norm(e.provincia).includes(p);
    const matchTipo = !t || norm(e.tipo) === t;
    const matchCurso = !c || e.cursos.some(cur => norm(cur).includes(c));
    return matchTxt && matchProv && matchTipo && matchCurso;
  });
}

// Top rankings
function getTopRanking(tipo='', limit=5) {
  let lista = [...INSTITUICOES];
  if (tipo) lista = lista.filter(e => e.tipo === tipo);
  return lista.sort((a,b) => b.ranking - a.ranking).slice(0, limit);
}
