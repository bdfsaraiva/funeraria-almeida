// ------------------------------------------------------------------
// Todos os conteúdos editáveis do site estão centralizados aqui.
// Alterar telefones, moradas ou textos neste ficheiro atualiza o site inteiro.
// ------------------------------------------------------------------

export const site = {
  name: 'Funerária Almeida',
  url: 'https://www.funerariaalmeida.pt',
  since: 1982,
  tagline: 'A melhor homenagem na hora da despedida',
  description:
    'Funerária Almeida — serviço funerário permanente 24 horas desde 1982. Funerais para sepultura, jazigo e cremação em Lisboa, Linda-a-Velha, Algés, Carnaxide, Amadora e Almada. Facilidades de pagamento.',
  email: 'geral@funerariaalmeida.pt',
  phoneMain: { label: '214 193 820', href: 'tel:+351214193820', note: 'Chamada para rede fixa nacional' },
  phones: [
    { label: '214 193 820', href: 'tel:+351214193820', note: 'Rede fixa nacional · 24 horas' },
    { label: '808 202 939', href: 'tel:808202939', note: 'Rede fixa nacional' },
    { label: '917 651 704', href: 'tel:+351917651704', note: 'Rede móvel nacional' },
  ],
  fax: '214 151 441',
  deco:
    'De acordo com o último estudo sobre funerárias da revista DECO PROTESTE, a Funerária Almeida obteve a classificação máxima (muito bom) na transparência do preço do funeral apresentado ao consumidor.',
  catalogPdf: '/docs/catalogo-precos.pdf',
};

// O logótipo no cabeçalho é o botão de início.
export const nav = [
  { label: 'Quem somos', href: '/funeraria-almeida/' },
  {
    label: 'Funerais',
    href: '/funerais/',
    children: [
      { label: 'Sepultura', href: '/funerais/sepultura/' },
      { label: 'Jazigo', href: '/funerais/jazigo/' },
      { label: 'Cremação', href: '/servicos-funerarios/cremacao/' },
      { label: 'Potes e urnas cinerárias', href: '/funerais/potes/' },
    ],
  },
  {
    label: 'Serviços',
    href: '/servicos-funerarios/',
    children: [
      { label: 'Exumação', href: '/servicos-funerarios/exumacao/' },
      { label: 'Trasladação', href: '/servicos-funerarios/trasladacao/' },
      { label: 'Serviços de florista', href: '/servicos-funerarios/servicos-de-florista/' },
      { label: 'Tanoestética / Tanopraxia', href: '/servicos-funerarios/tanoestetica-tanopraxia/' },
      { label: 'Publicação em jornais', href: '/servicos-funerarios/publicacao-em-jornais/' },
      { label: 'Funeral com música', href: '/servicos-funerarios/funeral-com-musica/' },
    ],
  },
  { label: 'Agências', href: '/funerarias/' },
  { label: 'Contactos', href: '/contactos/' },
];

export const awards = [
  { name: 'PME Líder 2025', img: '/images/premios/pme-lider-2025.png', w: 116, h: 138 },
  { name: 'Scoring Top 5% — Melhores PME de Portugal 2025', img: '/images/premios/scoring-top5-2025.png', w: 146, h: 147 },
  { name: 'Scoring Top 10 — Melhores PME do setor 2025', img: '/images/premios/scoring-top10-2025.png', w: 149, h: 143 },
  { name: 'PME Excelência 2022', img: '/images/premios/pme-excelencia-2022.png', w: 307, h: 242 },
  { name: 'PME Líder 2022', img: '/images/premios/pme-lider-2022.png', w: 119, h: 140 },
];

export type Agency = {
  slug: string;
  name: string;
  area: string;
  address?: string[];
  phones: { label: string; href: string }[];
  main?: boolean;
};

const P808 = { label: '808 202 939', href: 'tel:808202939' };
const P917 = { label: '917 651 704', href: 'tel:+351917651704' };

export const agencies: Agency[] = [
  {
    slug: 'linda-a-velha',
    name: 'Linda-a-Velha',
    area: 'Oeiras',
    main: true,
    address: ['Rua Rodrigues Sampaio, 17', '2795-102 Linda-a-Velha'],
    phones: [{ label: '214 193 820', href: 'tel:+351214193820' }, P808, P917],
  },
  {
    slug: 'lisboa-campo-de-ourique',
    name: 'Lisboa — Campo de Ourique',
    area: 'Lisboa',
    address: ['Rua Saraiva de Carvalho, 209-B', '1350-301 Lisboa'],
    phones: [P808, P917],
  },
  {
    slug: 'lisboa-necessidades',
    name: 'Lisboa — Necessidades',
    area: 'Lisboa',
    address: ['Rampa das Necessidades, 9', '1350-216 Lisboa'],
    phones: [P808, P917],
  },
  {
    slug: 'alges',
    name: 'Algés',
    area: 'Oeiras',
    address: ['Av. Bombeiros Voluntários de Algés, 75-C', '1495-027 Algés'],
    phones: [P808, P917],
  },
  {
    slug: 'carnaxide',
    name: 'Carnaxide',
    area: 'Oeiras',
    address: ['Rua Tenente General Zeferino Sequeira, 20', '2790-156 Carnaxide'],
    phones: [P808, P917],
  },
  {
    slug: 'almada',
    name: 'Almada',
    area: 'Almada',
    address: ['Rua Dom João de Castro, 76 C', '2800-104 Almada'],
    phones: [{ label: '212 541 027', href: 'tel:+351212541027' }, P808, P917],
  },
  {
    slug: 'amadora',
    name: 'Amadora',
    area: 'Amadora',
    phones: [P808, P917],
  },
];

export const mapsLink = (a: Agency) =>
  a.address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Funerária Almeida ' + a.address.join(', '))}`
    : undefined;

// ------------------------------------------------------------------
// Tipos de funeral
// ------------------------------------------------------------------
export type Product = { name: string; detail?: string; image?: string };

export const funerals = [
  {
    slug: 'sepultura',
    href: '/funerais/sepultura/',
    icon: 'cross',
    title: 'Funeral para sepultura',
    short: 'Urnas de várias gamas, madeiras e estilos para funerais de sepultura.',
    lead:
      'Na hora de escolher a última morada, a sepultura é a opção mais solicitada pelos portugueses: vai ao encontro da tradição judaico-cristã e é, de facto, a mais económica.',
    body: [
      'É o tipo de funeral mais comum em Portugal. Dispomos de urnas de várias gamas, tamanhos, madeiras e estilos, e ajudamos a família a escolher a solução mais adequada ao seu desejo e ao seu orçamento.',
      'Para qualquer informação adicional sobre campas para cemitério, não hesite em falar com a nossa equipa — estamos disponíveis 24 horas por dia.',
    ],
    productsTitle: 'Algumas das nossas urnas',
    products: [
      { name: 'Mar', image: '/images/produtos/mar_01.jpg' },
      { name: 'Céu', image: '/images/produtos/ceu_01.jpg' },
      { name: 'Paz', image: '/images/produtos/paz_01.jpg' },
      { name: 'Luz', image: '/images/produtos/luz_01.jpg' },
      { name: 'Paraíso', image: '/images/produtos/paraiso_01.jpg' },
      { name: 'Silêncio', detail: 'Folheada a mogno', image: '/images/produtos/silencio_04.jpg' },
      { name: 'Eterno Silêncio', detail: 'Folheada a mogno', image: '/images/produtos/eterno_silencio_01.jpg' },
      { name: 'Tranquilidade' },
      { name: 'Harmonia', image: '/images/produtos/harmonia_01.jpg' },
      { name: 'Eterna Harmonia', image: '/images/produtos/eterna_harmonia_01.jpg' },
    ] as Product[],
  },
  {
    slug: 'jazigo',
    href: '/funerais/jazigo/',
    icon: 'columns',
    title: 'Funeral para jazigo',
    short: 'Todos os materiais adequados para funerais de jazigo.',
    lead:
      'O funeral em jazigo é uma opção com grande tradição em Portugal, com características muito específicas que exigem materiais próprios.',
    body: [
      'Os nossos técnicos aconselham sobre todos os procedimentos necessários e ajudam a escolher a urna adequada, entre as muitas opções disponíveis.',
      'Caso pretenda saber mais sobre esta modalidade, contacte-nos: temos soluções diferenciadas para cada família.',
    ],
    productsTitle: 'Urnas para jazigo',
    products: [
      { name: 'Silêncio', detail: 'Folheada a mogno', image: '/images/produtos/silencio_04.jpg' },
      { name: 'Eterno Silêncio', detail: 'Folheada a mogno', image: '/images/produtos/eterno_silencio_01.jpg' },
      { name: 'Silêncio', detail: 'Mogno', image: '/images/produtos/silencio_mogno_01.jpg' },
      { name: 'Eterno Silêncio', detail: 'Mogno', image: '/images/produtos/eterno_silencio_mogno_01.jpg' },
      { name: 'Delicadeza', detail: 'Mutene', image: '/images/produtos/delicadeza_01.jpg' },
    ] as Product[],
  },
  {
    slug: 'cremacao',
    href: '/servicos-funerarios/cremacao/',
    icon: 'flame',
    title: 'Cremação',
    short: 'Serviço de cremação em todo o país e materiais para depósito de cinzas.',
    lead:
      'A cremação é cada vez mais uma realidade nos funerais em Portugal. A Funerária Almeida é especialista neste serviço e pode realizá-lo em qualquer parte do país.',
    body: [
      'Acompanhamos a família em todas as fases da cerimónia de cremação, com a mesma dignidade e cuidado de um funeral tradicional.',
      'Após a cerimónia, disponibilizamos os materiais adequados ao depósito das cinzas — em jazigo, sepultura, cendrário ou ossário. Em regra, a cremação tem um custo inferior ao de um funeral tradicional.',
    ],
    productsTitle: 'Coleções para cremação',
    products: [
      { name: 'Mar', image: '/images/produtos/mar_01.jpg' },
      { name: 'Liberdade', image: '/images/produtos/liberdade_01.jpg' },
      { name: 'Luz', image: '/images/produtos/luz_01.jpg' },
      { name: 'Luz Eterna', image: '/images/produtos/luz_eterna_01.jpg' },
    ] as Product[],
  },
  {
    slug: 'potes',
    href: '/funerais/potes/',
    icon: 'urn',
    title: 'Potes e urnas cinerárias',
    short: 'Potes para depósito de cinzas em vários materiais e acabamentos.',
    lead:
      'Uma seleção de potes e urnas cinerárias para guardar as cinzas de quem partiu, com diferentes materiais e acabamentos.',
    body: [
      'Ajudamos a escolher o pote mais adequado ao local de depósito — jazigo, cendrário, ossário ou outro destino pretendido pela família.',
    ],
    productsTitle: 'Modelos disponíveis',
    products: [
      { name: 'Luz Eterna', image: '/images/produtos/pote_luz_eterna.jpg' },
      { name: 'Silêncio', image: '/images/produtos/pote_silencio.jpg' },
      { name: 'Prata', image: '/images/produtos/pote_prata.jpg' },
      { name: 'Note', image: '/images/produtos/pote_note.jpg' },
      { name: 'Pedra', image: '/images/produtos/pote_pedra_1.jpg' },
      { name: 'Pedra II', image: '/images/produtos/pote_pedra2.jpg' },
      { name: 'Equilíbrio', image: '/images/produtos/pote_equilibrio.jpg' },
    ] as Product[],
  },
];

// ------------------------------------------------------------------
// Serviços complementares
// ------------------------------------------------------------------
export const services = [
  {
    slug: 'exumacao',
    icon: 'doc',
    title: 'Exumação',
    short: 'Tratamos de todas as formalidades, documentos e licenças da exumação.',
    lead:
      'A Funerária Almeida trata de todo o processo de exumação — desde o pedido aos órgãos competentes até à gestão de documentos, pagamentos e licenças.',
    body: [
      'Os familiares não têm de se preocupar com formalidades nem burocracias. Apenas, se assim o entenderem, poderão estar presentes na data acordada.',
      'Por norma, a exumação realiza-se 3 a 5 anos após a inumação. Se o funeral foi realizado por nós, será informado atempadamente da proximidade dessa data.',
    ],
  },
  {
    slug: 'trasladacao',
    icon: 'route',
    title: 'Trasladação',
    short: 'Tratamos de todas as fases do processo de trasladação.',
    lead:
      'A trasladação corresponde ao transporte do corpo ou das ossadas para outro destino — no mesmo ou noutro cemitério — para inumação, cremação ou ossário.',
    body: [
      'Responsabilizamo-nos por todas as fases do processo: pedidos, requerimentos, documentos e custos.',
      'Realizamos trasladações nacionais e internacionais. Para mais informações, contacte-nos 24 horas por dia, 7 dias por semana.',
    ],
  },
  {
    slug: 'servicos-de-florista',
    icon: 'flower',
    title: 'Serviços de florista',
    short: 'Coroas, palmas, bouquets e arranjos florais personalizados.',
    lead:
      'Dispomos de um serviço de florista completo e permanente, com todo o tipo de flores fúnebres: coroas, palmas, bouquets e arranjos personalizados.',
    body: [
      'As flores são uma verdadeira homenagem — ao falecido e à família. Ornamentamos a urna, a sala de velório e os restantes locais da cerimónia de acordo com o que a família pretender.',
    ],
  },
  {
    slug: 'tanoestetica-tanopraxia',
    icon: 'sparkle',
    title: 'Tanoestética / Tanopraxia',
    short: 'Técnicas especializadas para preservar o aspeto natural.',
    lead:
      'Serviços profissionais e discretos de tanoestética e tanopraxia, que preservam o aspeto natural de quem partiu e permitem, quando necessário, prolongar o velório.',
    body: [
      'Contamos com profissionais especializados que utilizam técnicas avançadas, preparados para responder mesmo aos casos mais exigentes.',
    ],
  },
  {
    slug: 'publicacao-em-jornais',
    icon: 'news',
    title: 'Publicação em jornais',
    short: 'Anúncios de necrologia, missas e agradecimentos.',
    lead:
      'São muitos os pormenores de um ato fúnebre e nem sempre a família está em condições de pensar em todos. Nós tratamos disso.',
    body: [
      'Publicamos em jornais de referência os anúncios de necrologia, a comunicação de missas e os agradecimentos de presença.',
    ],
  },
  {
    slug: 'funeral-com-musica',
    icon: 'music',
    title: 'Funeral com música',
    short: 'Música ao vivo na cerimónia, na missa de 7.º dia e de 1 mês.',
    lead:
      'A música pode tornar a despedida ainda mais significativa. Garantimos que não falta música na missa de corpo presente, de 7.º dia e de 1 mês.',
    body: [
      'Para funerais com música recomendamos o projeto Vox Angelis, com o cantor lírico profissional Pedro Nunes.',
    ],
  },
];

// Serviços adicionais listados na página "Serviços"
export const extras = [
  {
    title: 'Altares e preparação do velório',
    text: 'Personalizamos a sala de vigília com altares, flores e velas, para que o velório decorra num ambiente de paz, de acordo com a vontade da família.',
  },
  {
    title: 'Manutenção e limpeza de jazigos e sepulturas',
    text: 'Para as famílias que não o podem assegurar, tratamos da manutenção e limpeza de jazigos e sepulturas.',
  },
  {
    title: 'Reportagem em vídeo e fotografia',
    text: 'Registo do velório, do cortejo e da despedida no cemitério, para as famílias que o desejem.',
  },
  {
    title: 'Câmaras frigoríficas',
    text: 'Asseguram a preservação do corpo e permitem acertar com tranquilidade as datas do funeral, cremação ou trasladação.',
  },
  {
    title: 'Agendamento de missas',
    text: 'Missas de corpo presente, de 7.º dia e de 1 mês.',
  },
  {
    title: 'Facilidades de pagamento',
    text: 'Sabemos que um funeral é uma despesa inesperada. Consulte-nos sobre as nossas condições de pagamento.',
  },
];

// ------------------------------------------------------------------
// Páginas locais (mantêm os endereços atuais para não perder SEO)
// ------------------------------------------------------------------
export const localPages = [
  {
    slug: 'agencias-funerarias-lisboa',
    city: 'Lisboa',
    agencies: ['lisboa-campo-de-ourique', 'lisboa-necessidades'],
    text: [
      'Há muitas funerárias em Lisboa; a nossa distingue-se pelo profissionalismo e por ter sempre uma resposta adequada nestes momentos de dor.',
      'Na Funerária Almeida em Lisboa encontra serviços fúnebres de qualidade, preços acessíveis e facilidades de pagamento — seja no funeral, no serviço de florista ou na manutenção e limpeza de jazigos e sepulturas.',
    ],
  },
  {
    slug: 'funeraria-linda-a-velha',
    city: 'Linda-a-Velha',
    agencies: ['linda-a-velha'],
    text: [
      'Confie nos serviços profissionais da Funerária Almeida em Linda-a-Velha e em mais de 40 anos de experiência em serviços fúnebres.',
      'Tratamos de todos os pormenores para simplificar a cerimónia e dar conforto à família nos momentos mais difíceis.',
    ],
  },
  {
    slug: 'agencias-funerarias-oeiras',
    city: 'Oeiras',
    agencies: ['linda-a-velha', 'alges', 'carnaxide'],
    text: [
      'No concelho de Oeiras, a Funerária Almeida tem agências em Linda-a-Velha, Algés e Carnaxide, com serviço funerário permanente 24 horas.',
      'Tratamos de velórios, cremações, exumações, trasladações, tanoestética, anúncios de necrologia e florista.',
    ],
  },
  {
    slug: 'agencias-funerarias-almada',
    city: 'Almada',
    agencies: ['almada'],
    text: [
      'A Funerária Almeida em Almada garante-lhe o melhor serviço de funeral, cremação, trasladação ou exumação.',
      'Temos uma equipa com formação específica para lhe proporcionar um serviço tranquilo na despedida de quem mais gosta.',
    ],
  },
  {
    slug: 'agencias-funerarias-amadora',
    city: 'Amadora',
    agencies: ['amadora'],
    text: [
      'Se procura um serviço profissional de funerais na Amadora, fale connosco. Tratamos de todos os pormenores para lhe dar a máxima tranquilidade.',
      'Dispomos de colocação de altares, manutenção e limpeza de jazigos e sepulturas, música nas missas, florista e reportagem em vídeo e fotografia.',
    ],
  },
  {
    slug: 'agencias-funerarias-cascais',
    city: 'Cascais',
    agencies: ['linda-a-velha', 'alges'],
    text: [
      'Quando precisar de uma funerária em Cascais, conte com o nosso serviço permanente 24 horas. Realizamos todo o tipo de funerais, nacionais e internacionais.',
      'Cuidamos de tudo para a realização tranquila de funerais, cremações, exumações ou trasladações, com facilidades de pagamento em todos os serviços.',
    ],
  },
];

// ------------------------------------------------------------------
// Perguntas frequentes (conteúdo novo — validar com o cliente)
// ------------------------------------------------------------------
export const faqs = [
  {
    q: 'O que devo fazer quando um familiar falece?',
    a: 'Ligue-nos para o 214 193 820, a qualquer hora. Um dos nossos profissionais explica-lhe os passos seguintes, desloca-se ao local e trata de toda a documentação necessária para que a família se possa concentrar na despedida.',
  },
  {
    q: 'Funcionam ao fim de semana e feriados?',
    a: 'Sim. O nosso serviço funerário é permanente: 24 horas por dia, 7 dias por semana, incluindo feriados.',
  },
  {
    q: 'Quanto custa um funeral?',
    a: 'Depende do tipo de funeral (sepultura, jazigo ou cremação) e das opções escolhidas. Apresentamos sempre um orçamento claro e detalhado antes de avançar — a DECO PROTESTE atribuiu-nos a classificação máxima na transparência de preço. Pode também consultar o nosso catálogo de produtos.',
  },
  {
    q: 'Existem facilidades de pagamento?',
    a: 'Sim. Sabemos que um funeral é uma despesa inesperada e disponibilizamos facilidades de pagamento. Fale connosco para conhecer as condições.',
  },
  {
    q: 'Realizam funerais fora da zona de Lisboa ou no estrangeiro?',
    a: 'Sim. Realizamos funerais em todo o país e funerais internacionais, incluindo trasladações.',
  },
  {
    q: 'Quem trata da burocracia e dos documentos?',
    a: 'Nós. Tratamos da documentação do funeral, dos pedidos às entidades competentes, das publicações em jornais e do agendamento das missas.',
  },
];
