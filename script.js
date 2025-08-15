/* 

# 1 Desafio Classificador de Nivel de Heroi

**O que deve ser utilizado**

- Variaveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variavel para armazenar o nome e a quantidade de experiencia (XP)
de um heroi, depois utilize uma estrutura de decisão para apresentar alguma
das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 6.000 = Ouro
Se XP for entre 6.001 e 8.000 = Platina 
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000 = Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** est[a no nível de **{nivel}**"

*/

// Ideias: Fazer um bestiario, fazer um controle de xp por bestas mortas

const prompt = require("prompt-sync")();

const nome = prompt("Digite seu nome de herói: \n");
console.log(`
  Olá, ${nome}!
  Seja bem-vindo para contar sua historia de guerreiro e seus feitos lendarios!
  aqui, iremos contabilizar seus abates no bestiario e definir seu ranking
  podendo ele ser Ferro(o mais baixo) ou Radiante(o mais alto).
  
  Vamos contar sua lenda!
  
`);

console.log("Para fazer isso, precisamos saber da sua quantidade de abates");

let RatosAbatidos = 0;
let MorcegosVenenososAbatidos = 0;
let GoblinsCovardesAbatidos = 0;

let LobosFamintosAbatidos = 0;
let SlimesAcidosAbatidos = 0;
let GoblinsGuerreirosAbatidos = 0;

let EsqueletosGuerreirosAbatidos = 0;
let HarpiasAbatidas = 0;
let OrcsSelvagensAbatidos = 0;

let TrollsDaMontanhaAbatidos = 0;
let GolemsDePedraAbatidos = 0;
let SerpentesGigantesAbatidas = 0;

let OgrosBrutamontesAbatidos = 0;
let ManticorasAbatidas = 0;
let CavaleirosAmaldicoadoAbatidos = 0;

let DragoesMenoresAbatidos = 0;
let QuimerasAbatidas = 0;
let FenixesNegrasAbatidas = 0;

let DragoesAnciaosAbatidos = 0;
let LeviatasAbatidos = 0;
let AracnesRainhasAbatidas = 0;

let TitasPrimordiaisAbatidos = 0;
let SerafinsDaRuinaAbatidos = 0;
let DevoradoresDeMundosAbatidos = 0;

// Lista com todas as variáveis de abates
let TotalAbates = [
  RatosAbatidos +
    MorcegosVenenososAbatidos +
    GoblinsCovardesAbatidos +
    LobosFamintosAbatidos +
    SlimesAcidosAbatidos +
    GoblinsGuerreirosAbatidos +
    EsqueletosGuerreirosAbatidos +
    HarpiasAbatidas +
    OrcsSelvagensAbatidos +
    TrollsDaMontanhaAbatidos +
    GolemsDePedraAbatidos +
    SerpentesGigantesAbatidas +
    OgrosBrutamontesAbatidos +
    ManticorasAbatidas +
    CavaleirosAmaldicoadoAbatidos +
    DragoesMenoresAbatidos +
    QuimerasAbatidas +
    FenixesNegrasAbatidas +
    DragoesAnciaosAbatidos +
    LeviatasAbatidos +
    AracnesRainhasAbatidas +
    TitasPrimordiaisAbatidos +
    SerafinsDaRuinaAbatidos +
    DevoradoresDeMundosAbatidos,
];

//Aqui vamos definir quantos monstros de Level F foram abatidos.

RatosAbatidos = Number(
  prompt(
    "Nos conte sobre seus abates aventureiro, quantos Ratos das Sombras você abateu: \n"
  )
);

while (RatosAbatidos > 1000) {
  console.log(`
    Na nossa historia, prezamos pela honestidade e a guilda dos 
    aventureiros, não permite uma quantidade de abates tão grande para um só
    aventureiro de um unico monstro, no bestiario o limite de abates desse
    monstro é 1000, por favor, digite o numero verdadeiro. `);
  RatosAbatidos = Number(prompt("Quantos Ratos das Sombras você abateu: \n"));
}
let XPRatos = RatosAbatidos * 0.3;
console.log(XPRatos);

if (XPRatos < 1001) {
  MorcegosAbatidos = Number(
    prompt("Quantos morcegos Venenosos você abateu: \n")
  );
  while (MorcegosAbatidos > 1000) {
    console.log(`
    No bestiario o limite de abates desse monstro é 1000, 
    por favor, digite o numero verdadeiro `);
    MorcegosAbatidos = Number(
      prompt("Quantos Morcegos Venenosos você abateu: \n")
    );
  }
}
let XPMorcegos = MorcegosAbatidos * 0.35;

if (XPRatos + XPMorcegos <= 1001) {
  GoblinsCovardesAbatidos = Number(
    prompt("Quantos Goblins Covardes você abateu: \n")
  );
  while (GoblinsCovardesAbatidos > 750) {
    console.log(`
    No bestiario o limite de abates desse monstro é 750, 
    por favor, digite o numero verdadeiro `);
    GoblinsCovardesAbatidos = Number(
      prompt("Quantos Goblins Covardes você abateu: \n")
    );
  }
}
let XPGoblinsC = GoblinsCovardesAbatidos * 0.5;

let totalXPlvlF = Number([XPRatos + XPMorcegos + XPGoblinsC]);
console.log(`Seu XP é ${totalXPlvlF}`);

// Agora vamos definir quantos monstros de Level E foram abatidos.

if (totalXPlvlF >= 1001) {
  LobosFamintosAbatidos = Number(
    prompt("Quantos Lobos Famintos você abateu: \n")
  );
}
while (LobosFamintosAbatidos > 400) {
  console.log(`
    No bestiario o limite de abates desse monstro é 400, 
    por favor, digite o numero verdadeiro `);
  LobosFamintosAbatidos = Number(
    prompt("Quantos Lobos Famintos você abateu: \n")
  );
}
let XPLobos = LobosFamintosAbatidos * 0.7;

if (XPLobos + totalXPlvlF >= 1001 && XPLobos + totalXPlvlF < 2000) {
  SlimesAcidosAbatidos = Number(
    prompt("Quantos Slimes Ácidos você abateu: \n")
  );
  while (SlimesAcidosAbatidos > 400) {
    console.log(`
    No bestiario o limite de abates desse monstro é 400, 
    por favor, digite o numero verdadeiro `);
    SlimesAcidosAbatidos = Number(
      prompt("Quantos Slimes Ácidos você abateu: \n")
    );
  }
}
let XPSlime = SlimesAcidosAbatidos * 0.8;

if (
  XPLobos + XPSlime + totalXPlvlF >= 1001 &&
  XPLobos + XPSlime + totalXPlvlF < 2000
) {
  GoblinsGuerreirosAbatidos = Number(
    prompt("Quantos Goblins Guerreiros você abateu: \n")
  );
  while (GoblinsGuerreirosAbatidos > 420) {
    console.log(`
    No bestiario o limite de abates desse monstro é 420, 
    por favor, digite o numero verdadeiro `);
    GoblinsGuerreirosAbatidos = Number(
      prompt("Quantos Goblins Guerreiros você abateu: \n")
    );
  }
}
let XPGoblinsG = GoblinsGuerreirosAbatidos * 1;
let totalXPlvlE = Number([XPLobos + XPSlime + XPGoblinsG]);

// Agora vamos definir quantos monstros de Level D foram abatidos.
if (totalXPlvlF + totalXPlvlE >= 2001) {
  EsqueletosGuerreirosAbatidos = Number(
    prompt("Quantos Esqueletos Guerreiros você abateu: \n")
  );
}
while (EsqueletosGuerreirosAbatidos > 70) {
  console.log(`
    No bestiario o limite de abates desse monstro é 70, 
    por favor, digite o numero verdadeiro `);
  EsqueletosGuerreirosAbatidos = Number(
    prompt("Quantos Esqueletos Guerreiros você abateu: \n")
  );
}
let XPEsqueletosG = EsqueletosGuerreirosAbatidos * 16;

if (
  XPEsqueletosG + totalXPlvlE + totalXPlvlF >= 2001 &&
  XPEsqueletosG + totalXPlvlE + totalXPlvlF < 5000
) {
  HarpiasAbatidas = Number(prompt("Quantas Harpias você abateu: \n"));
  while (HarpiasAbatidas > 60) {
    console.log(`
    No bestiario o limite de abates desse monstro é 60, 
    por favor, digite o numero verdadeiro `);
    HarpiasAbatidas = Number(prompt("Quantas Harpias você abateu: \n"));
  }
}
let XPHarpias = HarpiasAbatidas * 18;

if (
  XPEsqueletosG + XPHarpias + totalXPlvlF + totalXPlvlE >= 2001 &&
  XPEsqueletosG + XPHarpias + totalXPlvlF + totalXPlvlE < 5000
) {
  OrcsSelvagensAbatidos = Number(
    prompt("Quantos Orcs Selvagens você abateu: \n")
  );
  while (OrcsSelvagensAbatidos > 40) {
    console.log(`
    No bestiario o limite de abates desse monstro é 40, 
    por favor, digite o numero verdadeiro `);
    OrcsSelvagensAbatidos = Number(
      prompt("Quantos Orcs Selvagens você abateu: \n")
    );
  }
}
let XPOrcsS = OrcsSelvagensAbatidos * 19;
let totalXPlvlD = Number([XPEsqueletosG + XPHarpias + XPOrcsS]);

// Agora vamos definir quantos monstros de Level C foram abatidos.
if (totalXPlvlF + totalXPlvlE + totalXPlvlD >= 5001) {
  TrollsDaMontanhaAbatidos = Number(
    prompt("Quantos Trolls da Montanha você abateu: \n")
  );
}
while (TrollsDaMontanhaAbatidos > 14) {
  console.log(`
    No bestiario o limite de abates desse monstro é 14, 
    por favor, digite o numero verdadeiro `);
  TrollsDaMontanhaAbatidos = Number(
    prompt("Quantos Trolls da Montanha você abateu: \n")
  );
}
let XPTrolls = TrollsDaMontanhaAbatidos * 30;

if (
  XPTrolls + totalXPlvlE + totalXPlvlF + totalXPlvlD >= 5001 &&
  XPTrolls + totalXPlvlE + totalXPlvlF + totalXPlvlD < 6000
) {
  GolemsDePedraAbatidos = Number(
    prompt("Quantos Golens de Pedra você abateu: \n")
  );
  while (GolemsDePedraAbatidos > 10) {
    console.log(`
    No bestiario o limite de abates desse monstro é 10, 
    por favor, digite o numero verdadeiro `);
    GolemsDePedraAbatidos = Number(
      prompt("Quantos Slimes Ácidos você abateu: \n")
    );
  }
}
let XPGolens = GolemsDePedraAbatidos * 32;

if (
  XPGolens + XPTrolls + totalXPlvlF + totalXPlvlE + totalXPlvlD >= 5001 &&
  XPGolens + XPTrolls + totalXPlvlF + totalXPlvlE + totalXPlvlD < 6000
) {
  SerpentesGigantesAbatidas = Number(
    prompt("Quantas Serpentes Gigantes você abateu: \n")
  );
  while (SerpentesGigantesAbatidas > 10) {
    console.log(`
    No bestiario o limite de abates desse monstro é 10, 
    por favor, digite o numero verdadeiro `);
    SerpentesGigantesAbatidas = Number(
      prompt("Quantas Serpentes Gigantes você abateu: \n")
    );
  }
}
let XPSerpentes = SerpentesGigantesAbatidas * 28;
let totalXPlvlC = Number([XPTrolls + XPGolens + XPSerpentes]);

// Agora vamos definir quantos monstros de Level B foram abatidos.
if (totalXPlvlF + totalXPlvlE + totalXPlvlD + totalXPlvlC >= 6001) {
  OgrosBrutamontesAbatidos = Number(
    prompt("Quantos Ogros Brutamontes você abateu: \n")
  );
}
while (OgrosBrutamontesAbatidos > 15) {
  console.log(`
    No bestiario o limite de abates desse monstro é 15, 
    por favor, digite o numero verdadeiro `);
  OgrosBrutamontesAbatidos = Number(
    prompt("Quantos Ogros Brutamontes você abateu: \n")
  );
}
let XPOgrosB = OgrosBrutamontesAbatidos * 42;

if (
  XPOgrosB + totalXPlvlE + totalXPlvlF + totalXPlvlD + totalXPlvlC > 6001 &&
  XPOgrosB + totalXPlvlE + totalXPlvlF + totalXPlvlD + totalXPlvlC <= 8000
) {
  ManticorasAbatidas = Number(prompt("Quantas Mantícoras você abateu: \n"));
  while (ManticorasAbatidas > 15) {
    console.log(`
    No bestiario o limite de abates desse monstro é 15, 
    por favor, digite o numero verdadeiro `);
    ManticorasAbatidas = Number(
      prompt("Quantos Slimes Ácidos você abateu: \n")
    );
  }
}
let XPManticoras = ManticorasAbatidas * 50;

if (
  XPOgrosB +
    XPManticoras +
    totalXPlvlE +
    totalXPlvlF +
    totalXPlvlD +
    totalXPlvlC >
    6001 &&
  XPOgrosB +
    XPManticoras +
    totalXPlvlE +
    totalXPlvlF +
    totalXPlvlD +
    totalXPlvlC <=
    8000
) {
  CavaleirosAmaldicoadoAbatidos = Number(
    prompt("Quantos Cavaleiros Amaldiçoados você abateu: \n")
  );
  while (CavaleirosAmaldicoadoAbatidos > 13) {
    console.log(`
    No bestiario o limite de abates desse monstro é 13, 
    por favor, digite o numero verdadeiro `);
    CavaleirosAmaldicoadoAbatidos = Number(
      prompt("Quantos Cavaleiros Amaldiçoados você abateu: \n")
    );
  }
}
let XPCavaleiros = CavaleirosAmaldicoadoAbatidos * 48;
let totalXPlvlB = Number([XPOgrosB + XPManticoras + XPCavaleiros]);

let BossMenor = 0;
let BossMedio = 0;
let BossLendario = 0;
let XPpreBoss = Number([
  totalXPlvlE + totalXPlvlF + totalXPlvlD + totalXPlvlC + totalXPlvlB,
]);

// Agora vamos definir quantos monstros de Level B foram abatidos.
if (XPpreBoss >= 8001) {
  console.log(`
  Até agora sua historia está incrivel aventureiro!
  Mas chegou um ponto em que gostariamos de saber de uma de suas proezas menores
  Qual Boss menor você já abateu?
  
  1 = Dragão Menor;
  2 = Quimera;
  3 = Fênix negra;
`);
  let escolhaBossMenor = Number(prompt());
  if (escolhaBossMenor == 1) {
    DragoesMenoresAbatidos++;
    BossMenor += 1000;
    console.log(
      "O quê?! Você enfrentou um Dragão Menor e sobreviveu? Muitos guerreiros tombaram só de ouvir seu rugido!"
    );
  } else if (escolhaBossMenor == 2) {
    QuimerasAbatidas++;
    BossMenor += 1000;
    console.log(
      "Uma Quimera derrotada? Três cabeças, três vezes mais perigo... e ainda assim você voltou vivo para contar!"
    );
  } else if (escolhaBossMenor == 3) {
    FenixesNegrasAbatidas++;
    BossMenor += 1000;
    console.log(
      "A Fênix Negra?! Renascendo em chamas sombrias… e você a derrotou? Isso dará uma balada que ecoará por séculos!"
    );
  } else {
    console.log(
      "Hmmm… então você ainda não cruzou caminho com os Dragões Menores, Quimeras ou mesmo a Fênix Negra... O público da taverna esperava uma faísca de fogo em sua história!"
    );
  }
}

let XPBoss1 = Number([XPpreBoss + BossMenor]);
console.log(XPBoss1);
// Agora vamos definir quantos monstros de Level A foram abatidos.
if (XPBoss1 >= 9001) {
  console.log(`
  Até agora sua historia está incrivel aventureiro!
  Mas chegou um ponto em que gostariamos de saber de uma de suas proezas medianas
  Qual Boss de nivel médio você já abateu?
  
  1 = Dragão Ancião;
  2 = Leviatã;
  3 = Aracne Rainha;
`);
  let escolhaBossMedio = Number(prompt());
  if (escolhaBossMedio == 1) {
    DragoesAnciaosAbatidos++;
    BossMedio += 971;
    console.log(
      "Por todos os deuses! O Dragão Ancião caiu diante de sua espada? Nem reis ousaram desafiá-lo!"
    );
  } else if (escolhaBossMedio == 2) {
    LeviatasAbatidos++;
    BossMedio += 971;
    console.log(
      "Você lutou contra o Leviatã, senhor dos mares? As ondas devem ter cantado sua vitória até o horizonte!"
    );
  } else if (escolhaBossMedio == 3) {
    AracnesRainhasAbatidas++;
    BossMedio += 971;
    console.log(
      "A Aracne Rainha, tecelã de pesadelos, caiu diante de ti? Suas teias jamais prenderão outro aventureiro!"
    );
  } else {
    console.log(
      "Ahh, entendi… nenhum Dragão Ancião, Leviatã ou Aracne Rainha cruzou seu destino. Ainda há um espaço vazio na balada, esperando por esse capítulo!"
    );
  }
}

let XPBoss2 = Number([XPBoss1 + BossMedio]);

// Agora vamos definir quantos monstros de Level S foram abatidos.
if (XPBoss2 >= 10000) {
  console.log(`
  Até agora sua historia está incrivel aventureiro!
  Mas chegou um ponto em que gostariamos de saber de uma de suas proezas lendarias!!!
  Qual Boss de nivel médio você já abateu?
  
  1 = Titã Primordial;
  2 = Serafim da Ruína;
  3 = Devorador de Mundos;
`);
  let escolhaBossLendario = Number(prompt());
  if (escolhaBossLendario == 1) {
    TitasPrimordiaisAbatidos++;
    BossLendario += 9999999999;
    console.log(
      "O Titã Primordial… você o derrubou? Os bardos mal ousavam falar seu nome! Agora, eu cantarei sua lenda em cada taverna!"
    );
  } else if (escolhaBossLendario == 2) {
    SerafinsDaRuinaAbatidos++;
    BossLendario += 9999999999;
    console.log(
      "O Serafim da Ruína, anjo corrompido, tombou diante de você? Que história de luz e trevas! Isso merece um épico inteiro!"
    );
  } else if (escolhaBossLendario == 3) {
    DevoradoresDeMundosAbatidos++;
    BossLendario += 9999999999;
    console.log(
      "O Devorador de Mundos?! Ninguém acreditará em mim quando eu cantar isso! Você enfrentou o próprio fim e retornou vitorioso!"
    );
  } else {
    console.log(
      "Ohhh… então o Titã Primordial, o Serafim da Ruína e o Devorador de Mundos permanecem intocados. Quando esse dia chegar, meu alaúde mal suportará tamanha lenda!"
    );
  }
}

let XPBoss3 = Number([XPBoss2 + BossLendario]);

let ranking = "";

let XPHeroi = Number(XPBoss3);
console.log(XPHeroi);
//mudança após finalizar while(ranking == "")

while (ranking == "") {
  if (XPHeroi < 1001) {
    ranking = "Ferro";
    console.log(`
    Parabéns ${nome}, seu ranking atual é **${ranking}**.  
    Suas missões serão de atribuição de nível F.  
    Se for chamado para missão, será para controle de ratos/morcegos ou goblins covardes.
    `);
  } else if (XPHeroi >= 1001 && XPHeroi <= 2000) {
    ranking = "Bronze";
    console.log(`
    Parabéns ${nome}, seu ranking atual é ${ranking}, 
    suas missões serão de atribuição de nivel E, se for chamado 
    para missão é para algum controle de slimes superiores/goblins guerreiros ou lobos.
    `);
  } else if (XPHeroi >= 2001 && XPHeroi <= 5000) {
    ranking = "Prata";
    console.log(`
    Parabéns ${nome}, seu ranking atual é ${ranking}, 
    suas missões serão de atribuição de nivel D, se for chamado  para missão
    é para enfrentar uma orda de goblins, explorar cavernas ou segurança
    para transporte de mercadorias.
    `);
  } else if (XPHeroi >= 5001 && XPHeroi <= 6000) {
    ranking = "Ouro";
    console.log(`
    Parabéns ${nome}, seu ranking atual é **${ranking}**.  
    Suas missões serão de atribuição de nível C.  
    Prepare-se para reconhecimento em territórios hostis, recuperação de 
    itens raros ou proteção de figuras nobres de alto escalão.  
    Sua reputação começa a ecoar entre aventureiros experientes.
    `);
  } else if (XPHeroi >= 6001 && XPHeroi <= 8000) {
    ranking = "Platina";
    console.log(`
    Parabéns ${nome}, seu ranking atual é **${ranking}**.  
    Suas missões serão de atribuição de nível B.  
    Você será convocado para caçadas a criaturas lendárias, escoltas em zonas de guerra e investigações em ruínas antigas.  
    Muitos já o veem como um herói que transcende o comum.
    `);
  } else if (XPHeroi >= 8001 && XPHeroi <= 9000) {
    ranking = "Ascendente";
    console.log(`
    Parabéns ${nome}, seu ranking atual é **${ranking}**.  
    Suas missões serão de atribuição de nível A.  
    O Conselho dos Heróis confia a você tarefas de impacto continental — deter 
    cultos profanos, negociar com líderes de reinos rivais e enfrentar 
    calamidades que ameaçam nações inteiras.  
    Sua presença inspira tanto esperança quanto temor.
    `);
  } else if (XPHeroi >= 9001 && XPHeroi <= 10000) {
    ranking = "Imortal";
    console.log(`
    Parabéns ${nome}, seu ranking atual é **${ranking}**.  
    Suas missões serão de atribuição de nível S — o mais alto nível concedido.  
    Você é um talento nascido a cada 1 milhão de anos ou o protagonista do destino.  
    Caso seja chamado, esteja pronto para enfrentar uma nação inteira, conter um colapso em massa ou impedir o fim do mundo.
    `);
  } else {
    ranking = "Radiante";
    console.log(`
    Parabéns ${nome}, você alcançou o ápice da lenda — **${ranking}**.  
    Suas ações moldam eras inteiras.  
    Missões? Não mais. Agora, são as eras que esperam a sua decisão.  
    Apenas você pode salvar — ou condenar — a história.
    `);
    break;
  }
}

//Dentro desse bestiario, vou colocar o nome de cada besta, seu nivel de
//dificuldade e a quantidade de xp que rende.

const nivelEXPdosMonstros = [
  ["Rato das Sombras", "F", 0.3, RatosAbatidos],
  ["Morcego venenoso", "F", 0.35, MorcegosVenenososAbatidos],
  ["Goblin Covarde", "F", 0.5, GoblinsCovardesAbatidos],
  ["Lobo Faminto", "E", 0.7, LobosFamintosAbatidos],
  ["Slime Ácido", "E", 0.8, SlimesAcidosAbatidos],
  ["Goblin Guerreiro", "E", 1, GoblinsGuerreirosAbatidos],
  ["Esqueleto Guerreiro", "D", 16, EsqueletosGuerreirosAbatidos],
  ["Harpia", "D", 18, HarpiasAbatidas],
  ["Orc Selvagem", "D", 19, OrcsSelvagensAbatidos],
  ["Troll da Montanha", "C", 30, TrollsDaMontanhaAbatidos],
  ["Golem de Pedra", "C", 32, GolemsDePedraAbatidos],
  ["Serpente Gigante", "C", 28, SerpentesGigantesAbatidas],
  ["Ogro brutamontes", "B", 42, OgrosBrutamontesAbatidos],
  ["Mantícora", "B", 50, ManticorasAbatidas],
  ["Cavaleiro Amaldiçoado", "B", 48, CavaleirosAmaldicoadoAbatidos],
  ["Dragão menor", "A", 1000, DragoesMenoresAbatidos],
  ["Quimera", "A", 1000, QuimerasAbatidas],
  ["Fênix Negra", "A", 1000, FenixesNegrasAbatidas],
  ["Dragão Ancião", "S", 971, DragoesAnciaosAbatidos],
  ["Leviatã", "S", 971, LeviatasAbatidos],
  ["Aracne rainha", "S", 971, AracnesRainhasAbatidas],
  ["Titã Primordial", "SS", 9999999999, TitasPrimordiaisAbatidos],
  ["Serafim da Ruína", "SS", 9999999999, SerafinsDaRuinaAbatidos],
  ["Devorador de Mundos", "SS", 9999999999, DevoradoresDeMundosAbatidos],
];

let imprimirBestiario = prompt(
  "Você gostaria de imprimir nosso bestiario? (sim/nao) \n "
);

while (
  imprimirBestiario.toLocaleUpperCase() !== "SIM" &&
  imprimirBestiario.toLocaleUpperCase() !== "NAO"
) {
  console.log(
    `A resposta ${imprimirBestiario} não foi computada, por favor, digite novamente`
  );
  imprimirBestiario = prompt(
    "Você Gostaria de imprimir nosso bestiario? sim/nao"
  );
}

if (imprimirBestiario.toLocaleUpperCase() == "SIM") {
  console.log(
    "Nome                   | Nível | Exp        | Monstros Abatidos"
  );
  console.log("-----------------------|-------|------------|");
  for (const [nome, nivel, exp, monstrosA] of nivelEXPdosMonstros) {
    console.log(
      nome.padEnd(22) +
        " | " +
        nivel.padEnd(5) +
        " | " +
        String(exp).padEnd(10) +
        " | " +
        monstrosA
    );
  }
} else {
  console.log(`Tudo bem!`);
}

console.log(`
  O héroi de nome ${nome} tem seu rank classifico como ${ranking}`);
