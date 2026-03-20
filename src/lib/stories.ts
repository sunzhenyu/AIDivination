import type { Lang } from "@/lib/i18n";

type StorySection = { heading: string; body: string[] };
type StoryLocalized = {
  title: string;
  subtitle: string;
  teaser: string;
  plot: StorySection[];
  themeTakeaway: string;
  modeInsight: string;
};

export type Story = {
  slug: string;
  mode: "tarot" | "career" | "face" | "palm";
  culture: "east" | "west";
  publishedAt: string;
  source: {
    title: string;
    url: string;
  };
  content: Record<Lang, StoryLocalized>;
};

type StorySeed = {
  slug: string;
  mode: Story["mode"];
  culture: Story["culture"];
  titleEn: string;
  titleZh: string;
  titleFr: string;
  titleJa: string;
  sourceTitle: string;
  sourceUrl: string;
};

const seeds: StorySeed[] = [
  { slug: "white-snake-vow", mode: "tarot", culture: "east", titleEn: "Legend of the White Snake", titleZh: "白蛇传", titleFr: "La Légende du Serpent Blanc", titleJa: "白蛇伝", sourceTitle: "Legend of the White Snake", sourceUrl: "https://en.wikipedia.org/wiki/Legend_of_the_White_Snake" },
  { slug: "psyche-and-cupid", mode: "tarot", culture: "west", titleEn: "Psyche and Cupid", titleZh: "普绪克与丘比特", titleFr: "Psyché et Cupidon", titleJa: "プシュケとキューピッド", sourceTitle: "Psyche", sourceUrl: "https://www.britannica.com/topic/Psyche-classical-mythology" },
  { slug: "butterfly-lovers", mode: "tarot", culture: "east", titleEn: "Butterfly Lovers", titleZh: "梁山伯与祝英台", titleFr: "Les Amants Papillons", titleJa: "梁山伯と祝英台", sourceTitle: "Butterfly Lovers", sourceUrl: "https://en.wikipedia.org/wiki/Butterfly_Lovers" },
  { slug: "tristan-and-isolde", mode: "tarot", culture: "west", titleEn: "Tristan and Isolde", titleZh: "特里斯坦与伊索尔德", titleFr: "Tristan et Iseult", titleJa: "トリスタンとイゾルデ", sourceTitle: "Tristan and Isolde", sourceUrl: "https://www.britannica.com/topic/Tristan-and-Isolde" },
  { slug: "peony-pavilion", mode: "tarot", culture: "east", titleEn: "The Peony Pavilion", titleZh: "牡丹亭", titleFr: "Le Pavillon aux Pivoines", titleJa: "牡丹亭", sourceTitle: "The Peony Pavilion", sourceUrl: "https://en.wikipedia.org/wiki/The_Peony_Pavilion" },
  { slug: "beauty-and-the-beast", mode: "tarot", culture: "west", titleEn: "Beauty and the Beast", titleZh: "美女与野兽", titleFr: "La Belle et la Bête", titleJa: "美女と野獣", sourceTitle: "Beauty and the Beast", sourceUrl: "https://en.wikipedia.org/wiki/Beauty_and_the_Beast" },
  { slug: "cowherd-and-weaver-girl", mode: "tarot", culture: "east", titleEn: "The Cowherd and the Weaver Girl", titleZh: "牛郎织女", titleFr: "Le Bouvier et la Tisserande", titleJa: "牽牛と織女", sourceTitle: "Qixi Festival", sourceUrl: "https://en.wikipedia.org/wiki/Qixi_Festival" },
  { slug: "romeo-and-juliet", mode: "tarot", culture: "west", titleEn: "Romeo and Juliet", titleZh: "罗密欧与朱丽叶", titleFr: "Roméo et Juliette", titleJa: "ロミオとジュリエット", sourceTitle: "Romeo and Juliet", sourceUrl: "https://en.wikipedia.org/wiki/Romeo_and_Juliet" },
  { slug: "nie-xiaoqian", mode: "tarot", culture: "east", titleEn: "Nie Xiaoqian", titleZh: "聂小倩", titleFr: "Nie Xiaoqian", titleJa: "聶小倩", sourceTitle: "Strange Tales from a Chinese Studio", sourceUrl: "https://en.wikipedia.org/wiki/Strange_Tales_from_a_Chinese_Studio" },
  { slug: "swan-lake", mode: "tarot", culture: "west", titleEn: "Swan Lake", titleZh: "天鹅湖", titleFr: "Le Lac des Cygnes", titleJa: "白鳥の湖", sourceTitle: "Swan Lake", sourceUrl: "https://en.wikipedia.org/wiki/Swan_Lake" },
  { slug: "yue-lao-red-thread", mode: "tarot", culture: "east", titleEn: "Yue Lao and the Red Thread", titleZh: "月老红线", titleFr: "Yue Lao et le Fil Rouge", titleJa: "月老と赤い糸", sourceTitle: "Yue Xia Lao Ren", sourceUrl: "https://en.wikipedia.org/wiki/Yue_Xia_Lao_Ren" },
  { slug: "little-mermaid", mode: "tarot", culture: "west", titleEn: "The Little Mermaid", titleZh: "小美人鱼", titleFr: "La Petite Sirène", titleJa: "人魚姫", sourceTitle: "The Little Mermaid", sourceUrl: "https://en.wikipedia.org/wiki/The_Little_Mermaid" },
  { slug: "mulan", mode: "career", culture: "east", titleEn: "Mulan", titleZh: "花木兰", titleFr: "Mulan", titleJa: "花木蘭", sourceTitle: "Hua Mulan", sourceUrl: "https://www.britannica.com/biography/Hua-Mulan" },
  { slug: "arthur-round-table", mode: "career", culture: "west", titleEn: "King Arthur and the Round Table", titleZh: "亚瑟王与圆桌骑士", titleFr: "Le Roi Arthur et la Table Ronde", titleJa: "アーサー王と円卓の騎士", sourceTitle: "Arthurian Legend", sourceUrl: "https://www.britannica.com/summary/Arthurian-legend" },
  { slug: "three-visits-cottage", mode: "career", culture: "east", titleEn: "Three Visits to the Thatched Cottage", titleZh: "三顾茅庐", titleFr: "Trois Visites à la Chaumière", titleJa: "三顧の礼", sourceTitle: "Romance of the Three Kingdoms", sourceUrl: "https://en.wikipedia.org/wiki/Romance_of_the_Three_Kingdoms" },
  { slug: "joan-of-arc", mode: "career", culture: "west", titleEn: "Joan of Arc", titleZh: "圣女贞德", titleFr: "Jeanne d'Arc", titleJa: "ジャンヌ・ダルク", sourceTitle: "Joan of Arc", sourceUrl: "https://www.britannica.com/biography/Saint-Joan-of-Arc" },
  { slug: "dayu-controls-flood", mode: "career", culture: "east", titleEn: "Yu the Great Controls the Flood", titleZh: "大禹治水", titleFr: "Yu le Grand Dompte les Crues", titleJa: "大禹の治水", sourceTitle: "Yu the Great", sourceUrl: "https://en.wikipedia.org/wiki/Yu_the_Great" },
  { slug: "odysseus-journey", mode: "career", culture: "west", titleEn: "Odysseus Returns Home", titleZh: "奥德修斯归航", titleFr: "Le Retour d'Ulysse", titleJa: "オデュッセウスの帰還", sourceTitle: "Odysseus", sourceUrl: "https://www.britannica.com/topic/Odyssey-epic-by-Homer" },
  { slug: "fan-li-retreat", mode: "career", culture: "east", titleEn: "Fan Li's Strategic Retreat", titleZh: "范蠡功成身退", titleFr: "La Retraite Stratégique de Fan Li", titleJa: "范蠡の功成り身退く", sourceTitle: "Fan Li", sourceUrl: "https://en.wikipedia.org/wiki/Fan_Li" },
  { slug: "robin-hood", mode: "career", culture: "west", titleEn: "Robin Hood", titleZh: "罗宾汉", titleFr: "Robin des Bois", titleJa: "ロビン・フッド", sourceTitle: "Robin Hood", sourceUrl: "https://en.wikipedia.org/wiki/Robin_Hood" },
  { slug: "yue-fei", mode: "career", culture: "east", titleEn: "Yue Fei", titleZh: "岳飞", titleFr: "Yue Fei", titleJa: "岳飛", sourceTitle: "Yue Fei", sourceUrl: "https://en.wikipedia.org/wiki/Yue_Fei" },
  { slug: "king-solomon-judgment", mode: "career", culture: "west", titleEn: "The Judgment of Solomon", titleZh: "所罗门断案", titleFr: "Le Jugement de Salomon", titleJa: "ソロモンの裁き", sourceTitle: "Judgment of Solomon", sourceUrl: "https://en.wikipedia.org/wiki/Judgment_of_Solomon" },
  { slug: "bao-zheng", mode: "career", culture: "east", titleEn: "Bao Zheng", titleZh: "包拯", titleFr: "Bao Zheng", titleJa: "包拯", sourceTitle: "Bao Zheng", sourceUrl: "https://en.wikipedia.org/wiki/Bao_Zheng" },
  { slug: "benjamin-franklin", mode: "career", culture: "west", titleEn: "Benjamin Franklin's Self-Discipline", titleZh: "富兰克林的自我管理", titleFr: "La Discipline de Benjamin Franklin", titleJa: "ベンジャミン・フランクリンの自己管理", sourceTitle: "Benjamin Franklin", sourceUrl: "https://www.britannica.com/biography/Benjamin-Franklin" },
  { slug: "zhuge-liang-borrowed-arrows", mode: "career", culture: "east", titleEn: "Borrowing Arrows with Straw Boats", titleZh: "草船借箭", titleFr: "Emprunter des Flèches avec des Bateaux de Paille", titleJa: "草船借箭", sourceTitle: "Romance of the Three Kingdoms", sourceUrl: "https://en.wikipedia.org/wiki/Romance_of_the_Three_Kingdoms" },
  { slug: "faust-choice", mode: "career", culture: "west", titleEn: "Faust's Bargain", titleZh: "浮士德的交易", titleFr: "Le Pacte de Faust", titleJa: "ファウストの取引", sourceTitle: "Faust", sourceUrl: "https://en.wikipedia.org/wiki/Faust" },
  { slug: "lin-daiyu", mode: "face", culture: "east", titleEn: "Lin Daiyu", titleZh: "林黛玉", titleFr: "Lin Daiyu", titleJa: "林黛玉", sourceTitle: "Dream of the Red Chamber", sourceUrl: "https://en.wikipedia.org/wiki/Dream_of_the_Red_Chamber" },
  { slug: "elizabeth-bennet", mode: "face", culture: "west", titleEn: "Elizabeth Bennet", titleZh: "伊丽莎白·班纳特", titleFr: "Elizabeth Bennet", titleJa: "エリザベス・ベネット", sourceTitle: "Pride and Prejudice", sourceUrl: "https://en.wikipedia.org/wiki/Pride_and_Prejudice" },
  { slug: "painted-skin", mode: "face", culture: "east", titleEn: "Painted Skin", titleZh: "画皮", titleFr: "La Peau Peinte", titleJa: "画皮", sourceTitle: "Painted Skin", sourceUrl: "https://en.wikipedia.org/wiki/Painted_Skin" },
  { slug: "dorian-gray", mode: "face", culture: "west", titleEn: "The Picture of Dorian Gray", titleZh: "道林·格雷的画像", titleFr: "Le Portrait de Dorian Gray", titleJa: "ドリアン・グレイの肖像", sourceTitle: "The Picture of Dorian Gray", sourceUrl: "https://en.wikipedia.org/wiki/The_Picture_of_Dorian_Gray" },
  { slug: "sun-wukong", mode: "face", culture: "east", titleEn: "Sun Wukong", titleZh: "孙悟空", titleFr: "Sun Wukong", titleJa: "孫悟空", sourceTitle: "Journey to the West", sourceUrl: "https://en.wikipedia.org/wiki/Journey_to_the_West" },
  { slug: "don-quixote", mode: "face", culture: "west", titleEn: "Don Quixote", titleZh: "堂吉诃德", titleFr: "Don Quichotte", titleJa: "ドン・キホーテ", sourceTitle: "Don Quixote", sourceUrl: "https://en.wikipedia.org/wiki/Don_Quixote" },
  { slug: "nezha", mode: "face", culture: "east", titleEn: "Nezha", titleZh: "哪吒", titleFr: "Nezha", titleJa: "哪吒", sourceTitle: "Nezha", sourceUrl: "https://en.wikipedia.org/wiki/Nezha" },
  { slug: "sherlock-holmes", mode: "face", culture: "west", titleEn: "Sherlock Holmes", titleZh: "夏洛克·福尔摩斯", titleFr: "Sherlock Holmes", titleJa: "シャーロック・ホームズ", sourceTitle: "Sherlock Holmes", sourceUrl: "https://en.wikipedia.org/wiki/Sherlock_Holmes" },
  { slug: "wang-xifeng", mode: "face", culture: "east", titleEn: "Wang Xifeng", titleZh: "王熙凤", titleFr: "Wang Xifeng", titleJa: "王熙鳳", sourceTitle: "Dream of the Red Chamber", sourceUrl: "https://en.wikipedia.org/wiki/Dream_of_the_Red_Chamber" },
  { slug: "jane-eyre", mode: "face", culture: "west", titleEn: "Jane Eyre", titleZh: "简·爱", titleFr: "Jane Eyre", titleJa: "ジェーン・エア", sourceTitle: "Jane Eyre", sourceUrl: "https://en.wikipedia.org/wiki/Jane_Eyre" },
  { slug: "xue-baochai", mode: "face", culture: "east", titleEn: "Xue Baochai", titleZh: "薛宝钗", titleFr: "Xue Baochai", titleJa: "薛宝釵", sourceTitle: "Dream of the Red Chamber", sourceUrl: "https://en.wikipedia.org/wiki/Dream_of_the_Red_Chamber" },
  { slug: "cinderella", mode: "face", culture: "west", titleEn: "Cinderella", titleZh: "灰姑娘", titleFr: "Cendrillon", titleJa: "シンデレラ", sourceTitle: "Cinderella", sourceUrl: "https://en.wikipedia.org/wiki/Cinderella" },
  { slug: "true-and-false-monkey-king", mode: "face", culture: "east", titleEn: "The True and False Monkey King", titleZh: "真假美猴王", titleFr: "Le Vrai et le Faux Roi Singe", titleJa: "真偽の美猴王", sourceTitle: "Journey to the West", sourceUrl: "https://en.wikipedia.org/wiki/Journey_to_the_West" },
  { slug: "phantom-of-the-opera", mode: "face", culture: "west", titleEn: "The Phantom of the Opera", titleZh: "歌剧魅影", titleFr: "Le Fantôme de l'Opéra", titleJa: "オペラ座の怪人", sourceTitle: "The Phantom of the Opera", sourceUrl: "https://en.wikipedia.org/wiki/The_Phantom_of_the_Opera" },
  { slug: "nuwa-repairs-sky", mode: "palm", culture: "east", titleEn: "Nuwa Repairs the Sky", titleZh: "女娲补天", titleFr: "Nuwa Répare le Ciel", titleJa: "女媧の天補い", sourceTitle: "Nüwa", sourceUrl: "https://en.wikipedia.org/wiki/N%C3%BCwa" },
  { slug: "sleeping-beauty", mode: "palm", culture: "west", titleEn: "Sleeping Beauty", titleZh: "睡美人", titleFr: "La Belle au Bois Dormant", titleJa: "眠れる森の美女", sourceTitle: "Sleeping Beauty", sourceUrl: "https://en.wikipedia.org/wiki/Sleeping_Beauty" },
  { slug: "jingwei-fills-sea", mode: "palm", culture: "east", titleEn: "Jingwei Fills the Sea", titleZh: "精卫填海", titleFr: "Jingwei Comble la Mer", titleJa: "精衛の海埋め", sourceTitle: "Jingwei", sourceUrl: "https://en.wikipedia.org/wiki/Jingwei" },
  { slug: "persephone-seasons", mode: "palm", culture: "west", titleEn: "Persephone and the Seasons", titleZh: "珀耳塞福涅与四季", titleFr: "Perséphone et les Saisons", titleJa: "ペルセポネと四季", sourceTitle: "Persephone", sourceUrl: "https://en.wikipedia.org/wiki/Persephone" },
  { slug: "meng-jiangnu", mode: "palm", culture: "east", titleEn: "Meng Jiangnu", titleZh: "孟姜女", titleFr: "Meng Jiangnu", titleJa: "孟姜女", sourceTitle: "Meng Jiangnu", sourceUrl: "https://en.wikipedia.org/wiki/Meng_Jiangn%C3%BC" },
  { slug: "penelope-weaving", mode: "palm", culture: "west", titleEn: "Penelope Weaves by Night", titleZh: "佩涅洛佩的织与拆", titleFr: "Pénélope Tisse la Nuit", titleJa: "ペネロペの機織り", sourceTitle: "Penelope", sourceUrl: "https://en.wikipedia.org/wiki/Penelope" },
  { slug: "koi-leaps-dragon-gate", mode: "palm", culture: "east", titleEn: "Koi Leaps the Dragon Gate", titleZh: "鲤鱼跃龙门", titleFr: "La Carpe Saute la Porte du Dragon", titleJa: "鯉の滝登り", sourceTitle: "Dragon Gate", sourceUrl: "https://en.wikipedia.org/wiki/Longmen_(mythology)" },
  { slug: "pinocchio-growth", mode: "palm", culture: "west", titleEn: "Pinocchio", titleZh: "木偶奇遇记", titleFr: "Pinocchio", titleJa: "ピノキオ", sourceTitle: "Pinocchio", sourceUrl: "https://en.wikipedia.org/wiki/The_Adventures_of_Pinocchio" },
  { slug: "chang-e-moon", mode: "palm", culture: "east", titleEn: "Chang'e on the Moon", titleZh: "嫦娥奔月", titleFr: "Chang'e sur la Lune", titleJa: "嫦娥の月への飛翔", sourceTitle: "Chang'e", sourceUrl: "https://en.wikipedia.org/wiki/Chang%27e" },
  { slug: "aladdin-lamp", mode: "palm", culture: "west", titleEn: "Aladdin and the Magic Lamp", titleZh: "阿拉丁神灯", titleFr: "Aladdin et la Lampe Magique", titleJa: "アラジンと魔法のランプ", sourceTitle: "Aladdin", sourceUrl: "https://en.wikipedia.org/wiki/Aladdin" },
  { slug: "wukong-seventy-two", mode: "palm", culture: "east", titleEn: "Sun Wukong's 72 Transformations", titleZh: "七十二变", titleFr: "Les 72 Transformations de Sun Wukong", titleJa: "孫悟空の七十二変", sourceTitle: "Journey to the West", sourceUrl: "https://en.wikipedia.org/wiki/Journey_to_the_West" },
  { slug: "wizard-of-oz", mode: "palm", culture: "west", titleEn: "The Wizard of Oz", titleZh: "绿野仙踪", titleFr: "Le Magicien d'Oz", titleJa: "オズの魔法使い", sourceTitle: "The Wonderful Wizard of Oz", sourceUrl: "https://en.wikipedia.org/wiki/The_Wonderful_Wizard_of_Oz" },
  { slug: "eight-immortals-sea", mode: "palm", culture: "east", titleEn: "The Eight Immortals Crossing the Sea", titleZh: "八仙过海", titleFr: "Les Huit Immortels Traversent la Mer", titleJa: "八仙過海", sourceTitle: "Eight Immortals", sourceUrl: "https://en.wikipedia.org/wiki/Eight_Immortals" },
  { slug: "snow-white", mode: "palm", culture: "west", titleEn: "Snow White", titleZh: "白雪公主", titleFr: "Blanche-Neige", titleJa: "白雪姫", sourceTitle: "Snow White", sourceUrl: "https://en.wikipedia.org/wiki/Snow_White" }
];

const modeSubtitleEn: Record<Story["mode"], string[]> = {
  tarot: [
    `In "{title}", affection and fate collide through difficult choices and emotional consequences.`,
    `"{title}" turns romance into a symbolic map of desire, responsibility, and personal cost.`,
    `This tale around "{title}" captures how love becomes a test of values under pressure.`,
    `"{title}" is a classic emotional arc where choice matters more than certainty.`
  ],
  career: [
    `"{title}" reads like a strategic growth case on timing, commitment, and leadership.`,
    `In "{title}", progress is built through preparation, decision ownership, and execution rhythm.`,
    `"{title}" explores how responsibility and ambition reshape a person's long-term path.`,
    `This story of "{title}" frames growth as disciplined action under real constraints.`
  ],
  face: [
    `"{title}" highlights personality through expression, posture, and behavior under stress.`,
    `In "{title}", identity is revealed in reactions, tone, and social presence rather than labels.`,
    `"{title}" is a character mirror that shows how temperament shapes relationships.`,
    `This narrative around "{title}" focuses on inner traits made visible through interaction.`
  ],
  palm: [
    `"{title}" follows a rhythm of pause, breakthrough, and phase transition over time.`,
    `In "{title}", fate unfolds as cycles, not lines, with each turning point prepared in advance.`,
    `"{title}" is a timeline story about momentum, patience, and strategic timing.`,
    `This tale around "{title}" reflects how long arcs are formed through repeated small shifts.`
  ]
};

const modeSubtitleZh: Record<Story["mode"], string[]> = {
  tarot: [
    `《{title}》把情感与命运放在同一条线索里，呈现选择与代价的连续碰撞。`,
    `围绕《{title}》展开的叙事，把"浪漫"写成一场价值排序的考验。`,
    `《{title}》最核心的张力，是在不确定中做出真正负责的情感选择。`,
    `在《{title}》里，比答案更重要的是你愿意为选择承担什么。`
  ],
  career: [
    `《{title}》像一份成长样本，重点在时机判断、责任承担与执行节奏。`,
    `围绕《{title}》的叙事展示了长期准备如何在关键节点兑现价值。`,
    `《{title}》把野心与秩序放在同一框架里，强调可持续推进能力。`,
    `在《{title}》中，真正决定走向的不是口号，而是持续行动。`
  ],
  face: [
    `《{title}》通过人物反应与表达方式，呈现更真实的人格结构。`,
    `围绕《{title}》的角色互动揭示了气质、边界与沟通风格的差异。`,
    `《{title}》让你看到：身份并非标签，而是长期行为模式的外化。`,
    `在《{title}》里，面向他人的姿态往往比语言更早暴露内在状态。`
  ],
  palm: [
    `《{title}》强调节奏感：停顿、推进、转折共同构成阶段命运。`,
    `围绕《{title}》的时间线说明，关键变化通常来自前期累积。`,
    `《{title}》是典型的阶段叙事，提醒你在不同周期采取不同策略。`,
    `在《{title}》中，命运不是直线推进，而是由波峰波谷组成。`
  ]
};

const modeFocusEn: Record<Story["mode"], string> = {
  tarot: "You notice that every relationship scene is also a values decision scene.",
  career: "You notice that each turning point rewards preparation, discipline, and timing.",
  face: "You notice that expression, posture, and reaction style reveal the hidden script of identity.",
  palm: "You notice that progress moves in waves, and timing matters as much as effort."
};

const modeFocusZh: Record<Story["mode"], string> = {
  tarot: "你会发现，关系里的每个情节其实都在考验价值排序。",
  career: "你会发现，关键转折往往奖励长期准备、执行力与时机感。",
  face: "你会发现，表情、姿态与反应方式会泄露真实的人格脚本。",
  palm: "你会发现，成长不是直线，而是阶段性起伏与节奏切换。"
};

const modeActionEn: Record<Story["mode"], string> = {
  tarot: "After reading, write one concrete relationship action for this week.",
  career: "After reading, translate one insight into a measurable 7-day career action.",
  face: "After reading, observe one communication habit and test a softer alternative.",
  palm: "After reading, set one short cycle goal and review your pace at the end of the week."
};

const modeActionZh: Record<Story["mode"], string> = {
  tarot: "读完后，为本周写下一条可执行的关系行动。",
  career: "读完后，把一个洞察翻译成 7 天内可衡量的职业动作。",
  face: "读完后，观察一个沟通习惯，并尝试更温和的替代方式。",
  palm: "读完后，设定一个短周期目标，并在周末复盘节奏。"
};

const teaserTemplatesEn = [
  `In "{title}", a quiet beginning grows into a decisive turning point where no one can keep every option.`,
  `"{title}" unfolds through desire, duty, and consequence, making every emotional move feel strategically important.`,
  `At first "{title}" looks romantic, but underneath it is a story about timing, pressure, and hard choices.`,
  `"{title}" becomes most powerful when characters must choose what to protect and what to let go.`,
  `Behind the iconic scenes of "{title}" sits a practical pattern: tension rises, values collide, action follows.`,
  `"{title}" is not only about what happened, but why each decision changed the final outcome.`,
  `Reading "{title}" reveals how misunderstanding, status, and timing can reshape fate in a few scenes.`,
  `"{title}" moves from emotion to responsibility, offering a clear narrative model for real decision-making.`,
  `The emotional arc of "{title}" hides a structural lesson: choices become real only when cost appears.`,
  `"{title}" shows how one small moment can trigger a chain of consequences far beyond expectation.`
] as const;

const teaserTemplatesZh = [
  `《{title}》从一个看似平常的开端，走向必须取舍的关键转折。`,
  `《{title}》表面是传奇，内核却是欲望、责任与后果的连续碰撞。`,
  `当你读《{title}》，会发现它真正讲的是时机压力下的艰难选择。`,
  `《{title}》最动人的部分，在于角色终于决定"守护什么、放下什么"。`,
  `《{title}》把情感推向行动，让每一步代价都变得清晰可见。`,
  `《{title}》不仅在讲发生了什么，更在讲"为什么会走向这个结局"。`,
  `读《{title}》时你会看到，误解、身份和时间差如何改写命运轨迹。`,
  `《{title}》从情绪走到承担，是非常典型的"成长型故事结构"。`,
  `《{title}》告诉你：真正的选择，总是在代价出现后才成立。`,
  `《{title}》证明一个微小瞬间，也可能引发连锁性的命运变化。`
] as const;

const modeInsightTemplatesEn: Record<Story["mode"], string[]> = {
  tarot: [
    `Insight Cards AI Divination insight: In "{title}", treat the arc as three cards: emotional trigger, conflict pressure, and mature resolution.`,
    `Insight Cards AI Divination insight: "{title}" works as a relationship spread where value ranking matters more than temporary emotion.`,
    `Insight Cards AI Divination insight: Use "{title}" to read how desire, fear, and responsibility compete in one symbolic timeline.`,
    `Insight Cards AI Divination insight: "{title}" highlights that clarity appears after consequence, not before action.`
  ],
  career: [
    `Growth Path AI Divination insight: "{title}" shows that long-term preparation usually beats short-term brilliance at critical moments.`,
    `Growth Path AI Divination insight: Read "{title}" as a strategy case on role choice, timing, and accountable execution.`,
    `Growth Path AI Divination insight: "{title}" reminds you to align values with incentives before committing to a path.`,
    `Growth Path AI Divination insight: The core lesson in "{title}" is decision ownership under pressure, not perfect conditions.`
  ],
  face: [
    `Personality Lens AI Divination insight: In "{title}", identity is revealed through expression, reaction, and social posture more than labels.`,
    `Personality Lens AI Divination insight: "{title}" helps you read personality under stress: who masks, who confronts, who adapts.`,
    `Personality Lens AI Divination insight: Use "{title}" to observe how communication style predicts relationship outcomes.`,
    `Personality Lens AI Divination insight: "{title}" demonstrates that behavioral micro-signals often tell the real emotional story.`
  ],
  palm: [
    `Life Rhythm AI Divination insight: "{title}" is a rhythm story; progress appears in waves of effort, pause, and renewed movement.`,
    `Life Rhythm AI Divination insight: Read "{title}" as a timing map for when to push forward and when to consolidate.`,
    `Life Rhythm AI Divination insight: "{title}" teaches that turning points are prepared long before they become visible.`,
    `Life Rhythm AI Divination insight: The pattern in "{title}" supports short-cycle review: observe pace, adjust, then advance.`
  ]
};

const modeInsightTemplatesZh: Record<Story["mode"], string[]> = {
  tarot: [
    `灵感卡图AI占卜解读：在《{title}》里，可以把主线看成三张牌：情绪起点、冲突阻力、成熟选择。`,
    `灵感卡图AI占卜解读：《{title}》更像关系牌阵，真正关键是价值排序，而不是一时情绪。`,
    `灵感卡图AI占卜解读：借《{title}》可以清楚看到欲望、恐惧与责任如何在同一时间线上竞争。`,
    `灵感卡图AI占卜解读：《{title}》提示你，清晰往往在承担后出现，而不是在行动前出现。`
  ],
  career: [
    `成长轨迹AI占卜解读：《{title}》说明关键阶段里，长期准备通常比短期爆发更可靠。`,
    `成长轨迹AI占卜解读：可把《{title}》当成策略案例，重点看角色选择、时机判断与执行闭环。`,
    `成长轨迹AI占卜解读：《{title}》提醒你在做重大决定前，先对齐"价值观"与"激励机制"。`,
    `成长轨迹AI占卜解读：《{title}》的核心不在完美条件，而在压力下的决策承担能力。`
  ],
  face: [
    `性格映像AI占卜解读：在《{title}》中，身份信息更多通过表情、反应和社会姿态被呈现。`,
    `性格映像AI占卜解读：《{title}》适合观察压力场景下的人格模式：谁隐藏、谁对抗、谁调整。`,
    `性格映像AI占卜解读：借《{title}》可训练你识别"沟通风格"如何提前决定关系走向。`,
    `性格映像AI占卜解读：《{title}》证明微小行为信号，往往比口头立场更接近真实情绪。`
  ],
  palm: [
    `人生节律AI占卜解读：《{title}》是典型"节奏型叙事"，成长通常以推进、停顿、再推进出现。`,
    `人生节律AI占卜解读：把《{title}》当成时机地图，判断何时加速、何时稳住、何时转向。`,
    `人生节律AI占卜解读：《{title}》告诉你关键转折并非偶然，而是前期累积到阈值后的结果。`,
    `人生节律AI占卜解读：《{title}》适合做短周期复盘模板：看节奏、调步伐、再前进。`
  ]
};

const modeSubtitleFr: Record<Story["mode"], string[]> = {
  tarot: [
    `Dans «{title}», affection et destin s'entrechoquent à travers des choix difficiles et leurs conséquences émotionnelles.`,
    `«{title}» transforme la romance en carte symbolique du désir, de la responsabilité et du coût personnel.`,
    `Ce récit autour de «{title}» capture comment l'amour devient un test de valeurs sous pression.`,
    `«{title}» est un arc émotionnel classique où le choix compte plus que la certitude.`
  ],
  career: [
    `«{title}» se lit comme un cas de croissance stratégique sur le timing, l'engagement et le leadership.`,
    `Dans «{title}», le progrès se construit par la préparation, la prise de décision et le rythme d'exécution.`,
    `«{title}» explore comment la responsabilité et l'ambition remodèlent le parcours à long terme.`,
    `Cette histoire de «{title}» cadre la croissance comme une action disciplinée sous contraintes réelles.`
  ],
  face: [
    `«{title}» met en lumière la personnalité à travers l'expression, la posture et le comportement sous stress.`,
    `Dans «{title}», l'identité se révèle dans les réactions, le ton et la présence sociale plutôt que dans les étiquettes.`,
    `«{title}» est un miroir de caractère qui montre comment le tempérament façonne les relations.`,
    `Ce récit autour de «{title}» se concentre sur les traits intérieurs rendus visibles par l'interaction.`
  ],
  palm: [
    `«{title}» suit un rythme de pause, percée et transition de phase au fil du temps.`,
    `Dans «{title}», le destin se déroule en cycles, pas en lignes, chaque tournant préparé à l'avance.`,
    `«{title}» est une histoire de chronologie sur l'élan, la patience et le timing stratégique.`,
    `Ce récit autour de «{title}» reflète comment les grands arcs se forment par de petits changements répétés.`
  ]
};

const modeSubtitleJa: Record<Story["mode"], string[]> = {
  tarot: [
    `「{title}」では、愛情と運命が困難な選択と感情的な結果を通じて衝突します。`,
    `「{title}」は、ロマンスを欲望・責任・個人的コストの象徴的な地図に変えます。`,
    `「{title}」を巡るこの物語は、愛がいかにして圧力下での価値観の試練になるかを捉えています。`,
    `「{title}」は、確実性よりも選択が重要な古典的な感情の弧です。`
  ],
  career: [
    `「{title}」は、タイミング・コミットメント・リーダーシップに関する戦略的成長ケースとして読めます。`,
    `「{title}」では、準備・意思決定・実行リズムを通じて進歩が築かれます。`,
    `「{title}」は、責任と野心が長期的な道筋をどのように再形成するかを探ります。`,
    `「{title}」の物語は、現実の制約下での規律ある行動として成長を描きます。`
  ],
  face: [
    `「{title}」は、ストレス下での表情・姿勢・行動を通じて個性を浮き彫りにします。`,
    `「{title}」では、アイデンティティはラベルではなく、反応・口調・社会的存在感に現れます。`,
    `「{title}」は、気質が関係をどのように形成するかを示す性格の鏡です。`,
    `「{title}」を巡るこの物語は、交流を通じて可視化される内面の特性に焦点を当てます。`
  ],
  palm: [
    `「{title}」は、時間をかけた休止・突破・フェーズ移行のリズムをたどります。`,
    `「{title}」では、運命は直線ではなくサイクルとして展開し、各転換点は事前に準備されています。`,
    `「{title}」は、勢い・忍耐・戦略的タイミングに関するタイムライン物語です。`,
    `「{title}」を巡るこの物語は、大きな弧が繰り返される小さな変化によって形成されることを反映しています。`
  ]
};

const modeFocusFr: Record<Story["mode"], string> = {
  tarot: "Vous remarquez que chaque scène relationnelle est aussi une scène de décision de valeurs.",
  career: "Vous remarquez que chaque tournant récompense la préparation, la discipline et le timing.",
  face: "Vous remarquez que l'expression, la posture et le style de réaction révèlent le script caché de l'identité.",
  palm: "Vous remarquez que le progrès avance par vagues, et le timing compte autant que l'effort."
};

const modeFocusJa: Record<Story["mode"], string> = {
  tarot: "関係のすべての場面が、実は価値観の優先順位を問う場面でもあることに気づきます。",
  career: "各転換点が、長期的な準備・規律・タイミングを報いることに気づきます。",
  face: "表情・姿勢・反応スタイルが、アイデンティティの隠れたスクリプトを明かすことに気づきます。",
  palm: "進歩は波のように動き、タイミングが努力と同じくらい重要であることに気づきます。"
};

const modeActionFr: Record<Story["mode"], string> = {
  tarot: "Après la lecture, écrivez une action relationnelle concrète pour cette semaine.",
  career: "Après la lecture, traduisez un insight en une action de carrière mesurable sur 7 jours.",
  face: "Après la lecture, observez une habitude de communication et testez une alternative plus douce.",
  palm: "Après la lecture, fixez un objectif de cycle court et révisez votre rythme en fin de semaine."
};

const modeActionJa: Record<Story["mode"], string> = {
  tarot: "読んだ後、今週の具体的な関係行動を一つ書き出してください。",
  career: "読んだ後、一つの洞察を7日間で測定可能なキャリア行動に変換してください。",
  face: "読んだ後、一つのコミュニケーション習慣を観察し、より穏やかな代替案を試してください。",
  palm: "読んだ後、短期サイクルの目標を設定し、週末にペースを振り返ってください。"
};

const teaserTemplatesFr = [
  `Dans «{title}», un début tranquille se transforme en tournant décisif où personne ne peut garder toutes les options.`,
  `«{title}» se déroule à travers désir, devoir et conséquence, rendant chaque mouvement émotionnel stratégiquement important.`,
  `À première vue «{title}» semble romantique, mais en dessous c'est une histoire de timing, pression et choix difficiles.`,
  `«{title}» devient le plus puissant quand les personnages doivent choisir ce qu'ils protègent et ce qu'ils laissent partir.`,
  `Derrière les scènes emblématiques de «{title}» se cache un schéma pratique : la tension monte, les valeurs s'affrontent, l'action suit.`,
  `«{title}» ne parle pas seulement de ce qui s'est passé, mais pourquoi chaque décision a changé le résultat final.`,
  `Lire «{title}» révèle comment incompréhension, statut et timing peuvent remodeler le destin en quelques scènes.`,
  `«{title}» passe de l'émotion à la responsabilité, offrant un modèle narratif clair pour la prise de décision réelle.`,
  `L'arc émotionnel de «{title}» cache une leçon structurelle : les choix deviennent réels seulement quand le coût apparaît.`,
  `«{title}» montre comment un petit moment peut déclencher une chaîne de conséquences bien au-delà des attentes.`
] as const;

const teaserTemplatesJa = [
  `「{title}」では、静かな始まりが、誰も全ての選択肢を保てない決定的な転換点へと成長します。`,
  `「{title}」は欲望・義務・結果を通じて展開し、すべての感情的な動きが戦略的に重要に感じられます。`,
  `最初「{title}」はロマンティックに見えますが、その下にはタイミング・プレッシャー・困難な選択の物語があります。`,
  `「{title}」は、登場人物が何を守り何を手放すかを選ばなければならない時に最も力強くなります。`,
  `「{title}」の象徴的な場面の裏には実践的なパターンがあります：緊張が高まり、価値観が衝突し、行動が続きます。`,
  `「{title}」は何が起きたかだけでなく、なぜ各決断が最終的な結果を変えたかについての物語です。`,
  `「{title}」を読むと、誤解・地位・タイミングがいくつかの場面で運命をどのように再形成できるかが明らかになります。`,
  `「{title}」は感情から責任へと移行し、現実の意思決定のための明確な物語モデルを提供します。`,
  `「{title}」の感情的な弧には構造的な教訓が隠れています：選択はコストが現れて初めて現実になります。`,
  `「{title}」は、小さな瞬間が期待をはるかに超えた結果の連鎖を引き起こす可能性を示しています。`
] as const;

const modeInsightTemplatesFr: Record<Story["mode"], string[]> = {
  tarot: [
    `Cartes Intuitives IA : Dans «{title}», traitez l'arc comme trois cartes : déclencheur émotionnel, pression de conflit, résolution mature.`,
    `Cartes Intuitives IA : «{title}» fonctionne comme un tirage relationnel où le classement des valeurs compte plus que l'émotion temporaire.`,
    `Cartes Intuitives IA : Utilisez «{title}» pour lire comment désir, peur et responsabilité se disputent dans une chronologie symbolique.`,
    `Cartes Intuitives IA : «{title}» souligne que la clarté apparaît après la conséquence, pas avant l'action.`
  ],
  career: [
    `Trajectoire IA : «{title}» montre que la préparation à long terme bat généralement le brillant à court terme aux moments critiques.`,
    `Trajectoire IA : Lisez «{title}» comme un cas stratégique sur le choix de rôle, le timing et l'exécution responsable.`,
    `Trajectoire IA : «{title}» vous rappelle d'aligner valeurs et incitations avant de vous engager sur une voie.`,
    `Trajectoire IA : La leçon centrale de «{title}» est la prise de décision sous pression, pas dans des conditions parfaites.`
  ],
  face: [
    `Profil Perso. IA : Dans «{title}», l'identité se révèle par l'expression, la réaction et la posture sociale plutôt que par les étiquettes.`,
    `Profil Perso. IA : «{title}» vous aide à lire la personnalité sous stress : qui masque, qui confronte, qui s'adapte.`,
    `Profil Perso. IA : Utilisez «{title}» pour observer comment le style de communication prédit les résultats relationnels.`,
    `Profil Perso. IA : «{title}» démontre que les micro-signaux comportementaux racontent souvent la vraie histoire émotionnelle.`
  ],
  palm: [
    `Rythme de Vie IA : «{title}» est une histoire de rythme ; le progrès apparaît en vagues d'effort, pause et mouvement renouvelé.`,
    `Rythme de Vie IA : Lisez «{title}» comme une carte de timing pour savoir quand avancer et quand consolider.`,
    `Rythme de Vie IA : «{title}» enseigne que les tournants sont préparés longtemps avant de devenir visibles.`,
    `Rythme de Vie IA : Le schéma dans «{title}» soutient la révision à cycle court : observer le rythme, ajuster, puis avancer.`
  ]
};

const modeInsightTemplatesJa: Record<Story["mode"], string[]> = {
  tarot: [
    `インサイトカードAI占い：「{title}」では、弧を3枚のカードとして扱ってください：感情的トリガー・葛藤の圧力・成熟した解決。`,
    `インサイトカードAI占い：「{title}」は、一時的な感情よりも価値観の優先順位が重要な関係スプレッドとして機能します。`,
    `インサイトカードAI占い：「{title}」を使って、欲望・恐れ・責任が一つの象徴的なタイムラインでどのように競合するかを読み取ってください。`,
    `インサイトカードAI占い：「{title}」は、明確さは行動の前ではなく結果の後に現れることを強調しています。`
  ],
  career: [
    `成長の軌跡AI占い：「{title}」は、長期的な準備が重要な瞬間に短期的な輝きを上回ることを示しています。`,
    `成長の軌跡AI占い：「{title}」を役割選択・タイミング・責任ある実行に関する戦略ケースとして読んでください。`,
    `成長の軌跡AI占い：「{title}」は、道にコミットする前に価値観とインセンティブを一致させることを思い出させます。`,
    `成長の軌跡AI占い：「{title}」の核心的な教訓は、完璧な条件ではなく圧力下での意思決定の所有権です。`
  ],
  face: [
    `パーソナリティAI占い：「{title}」では、アイデンティティはラベルよりも表情・反応・社会的姿勢を通じて明らかになります。`,
    `パーソナリティAI占い：「{title}」はストレス下での個性を読む助けになります：誰が隠し、誰が対峙し、誰が適応するか。`,
    `パーソナリティAI占い：「{title}」を使って、コミュニケーションスタイルが関係の結果をどのように予測するかを観察してください。`,
    `パーソナリティAI占い：「{title}」は、行動の微小なシグナルが真の感情的な物語を語ることが多いことを示しています。`
  ],
  palm: [
    `人生のリズムAI占い：「{title}」はリズムの物語です；進歩は努力・休止・新たな動きの波として現れます。`,
    `人生のリズムAI占い：「{title}」を、いつ前進しいつ固めるかのタイミングマップとして読んでください。`,
    `人生のリズムAI占い：「{title}」は、転換点は見えるようになるずっと前から準備されていることを教えています。`,
    `人生のリズムAI占い：「{title}」のパターンは短期サイクルのレビューを支持します：ペースを観察し、調整し、前進する。`
  ]
};

function hashIndex(input: string, size: number) {
  let sum = 0;
  for (let i = 0; i < input.length; i += 1) {
    sum += input.charCodeAt(i);
  }
  return sum % size;
}

function applyTitle(template: string, title: string) {
  return template.replaceAll("{title}", title);
}

function localized(seed: StorySeed, lang: Lang): StoryLocalized {
  if (lang === "zh") {
    return {
      title: seed.titleZh,
      subtitle: applyTitle(
        modeSubtitleZh[seed.mode][hashIndex(`zh:subtitle:${seed.slug}`, modeSubtitleZh[seed.mode].length)],
        seed.titleZh
      ),
      teaser: applyTitle(teaserTemplatesZh[hashIndex(`zh:${seed.slug}`, teaserTemplatesZh.length)], seed.titleZh),
      plot: [
        {
          heading: "故事背景：你先看见时代与处境",
          body: [
            `你像站在故事现场一样，先看见人物所处的社会规则、身份限制与情感期待。`,
            `《${seed.titleZh}》真正迷人的地方，不是传奇设定本身，而是人物在现实边界里仍要做选择。`,
            `当你把自己代入后，你会更容易理解：很多"命运感"，其实来自长期累积的处境。`
          ]
        },
        {
          heading: "核心冲突：你会被迫回答的难题",
          body: [
            `剧情推进后，人物不再能"都要"，而必须在忠诚、欲望、责任、体面之间给出排序。`,
            `你会被迫思考：如果你处在同样压力里，你会舍弃什么，又会坚持什么？`,
            modeFocusZh[seed.mode]
          ]
        },
        {
          heading: "关键转折：你看见代价如何发生",
          body: [
            `真正的戏剧张力来自代价：每一次前进都伴随某种失去，每一次守住都要承受外部压力。`,
            `你会看见角色如何在误解、时间差、权力结构与情绪波动中不断修正选择。`,
            `这一步最有启发的是，它让"做决定"从抽象口号变成了可观察的过程。`
          ]
        },
        {
          heading: "结局余韵：你得到的不只是结论",
          body: [
            `无论结局偏向圆满还是遗憾，故事都会留下一个共同问题：如果重来一次，你会不会做同样选择？`,
            `你会意识到，成熟并不等于永远正确，而是愿意承担选择后的后果并继续前行。`,
            `这也是阅读经典最大的价值：它帮你建立一种可复用的判断框架。`
          ]
        },
        {
          heading: "现实映射：你如何把故事用于当下",
          body: [
            `真正有价值的阅读，不是记住谁赢谁输，而是把叙事里的方法迁移到你的日常决策。`,
            modeActionZh[seed.mode],
            `当你下一次面对关系、职业、表达或节奏问题时，可以直接调用这次阅读形成的"判断模板"。`
          ]
        }
      ],
      themeTakeaway: `《${seed.titleZh}》给你的提醒：先看清自己真正想守护什么，再决定下一步。`,
      modeInsight: applyTitle(
        modeInsightTemplatesZh[seed.mode][hashIndex(`zh:mode:${seed.slug}`, modeInsightTemplatesZh[seed.mode].length)],
        seed.titleZh
      )
    };
  }

  if (lang === "fr") {
    return {
      title: seed.titleFr,
      subtitle: applyTitle(
        modeSubtitleFr[seed.mode][hashIndex(`fr:subtitle:${seed.slug}`, modeSubtitleFr[seed.mode].length)],
        seed.titleFr
      ),
      teaser: applyTitle(teaserTemplatesFr[hashIndex(`fr:${seed.slug}`, teaserTemplatesFr.length)], seed.titleFr),
      plot: [
        {
          heading: "Contexte : le monde que vous découvrez en premier",
          body: [
            "Vous commencez par voir les règles sociales, les pressions cachées et les attentes émotionnelles entourant chaque personnage.",
            `La puissance durable de «${seed.titleFr}» ne réside pas seulement dans sa surface mythique, mais dans la façon dont les gens choisissent sous de vraies contraintes.`,
            "En tant que lecteur, vous ne consommez pas seulement du folklore ; vous reconnaissez des schémas qui apparaissent aussi dans votre propre vie."
          ]
        },
        {
          heading: "Conflit central : la question que vous ne pouvez éviter",
          body: [
            "Quand la tension monte, les personnages ne peuvent plus garder toutes les options ouvertes. Ils doivent classer loyauté, désir, responsabilité et identité.",
            "Vous êtes poussé à demander : si cette pression était la mienne, que protégerais-je et que relâcherais-je ?",
            modeFocusFr[seed.mode]
          ]
        },
        {
          heading: "Tournant : comment le coût devient visible",
          body: [
            "Les scènes les plus fortes sont construites sur les conséquences. Chaque pas en avant demande quelque chose en retour.",
            "Vous pouvez suivre comment incompréhension, timing, structure sociale et réactivité émotionnelle façonnent les résultats.",
            "C'est là que l'histoire devient pratique : la prise de décision n'est plus abstraite, mais observable."
          ]
        },
        {
          heading: "Fin et résonance : ce qui reste avec vous",
          body: [
            "Que la fin soit tendre ou tragique, une question réflexive demeure : choisiriez-vous le même chemin à nouveau ?",
            "La maturité ici n'est pas la perfection. C'est la volonté de porter les conséquences et de continuer avec clarté.",
            "C'est pourquoi les classiques restent utiles : ils fournissent des modèles mentaux réutilisables, pas seulement un impact émotionnel."
          ]
        },
        {
          heading: "Traduction dans la vie réelle : ce que vous faites ensuite",
          body: [
            "La valeur pratique n'est pas dans le souvenir de la fin, mais dans l'emprunt du schéma pour votre prochaine vraie décision.",
            modeActionFr[seed.mode],
            "Quand votre prochain dilemme de relation, travail, expression ou timing apparaît, ce récit devient un modèle de décision."
          ]
        }
      ],
      themeTakeaway: `«${seed.titleFr}» vous rappelle : définissez d'abord ce que vous protégez, puis choisissez votre prochain mouvement.`,
      modeInsight: applyTitle(
        modeInsightTemplatesFr[seed.mode][hashIndex(`fr:mode:${seed.slug}`, modeInsightTemplatesFr[seed.mode].length)],
        seed.titleFr
      )
    };
  }

  if (lang === "ja") {
    return {
      title: seed.titleJa,
      subtitle: applyTitle(
        modeSubtitleJa[seed.mode][hashIndex(`ja:subtitle:${seed.slug}`, modeSubtitleJa[seed.mode].length)],
        seed.titleJa
      ),
      teaser: applyTitle(teaserTemplatesJa[hashIndex(`ja:${seed.slug}`, teaserTemplatesJa.length)], seed.titleJa),
      plot: [
        {
          heading: "背景：あなたが最初に入る世界",
          body: [
            "各登場人物を取り巻く社会的ルール・隠れたプレッシャー・感情的な期待を見ることから始まります。",
            `「${seed.titleJa}」の持続的な力は、その神話的な表面だけでなく、現実の制約の下で人々がどのように選択するかにあります。`,
            "読者として、あなたは単に民話を消費しているのではなく、自分の人生にも現れるパターンを認識しています。"
          ]
        },
        {
          heading: "核心的な葛藤：避けられない問い",
          body: [
            "緊張が高まると、登場人物はもはやすべての選択肢を開いたままにできません。忠誠・欲望・責任・アイデンティティを順位付けしなければなりません。",
            "あなたはこう問われます：このプレッシャーが自分のものだったら、何を守り、何を手放すか？",
            modeFocusJa[seed.mode]
          ]
        },
        {
          heading: "転換点：コストがどのように見えるようになるか",
          body: [
            "最も強い場面はコストの上に構築されています。前進するたびに何かを求められます。",
            "誤解・タイミング・社会構造・感情的な反応性が結果をどのように形成するかを追うことができます。",
            "ここで物語は実践的になります：意思決定はもはや抽象的ではなく、観察可能です。"
          ]
        },
        {
          heading: "結末と余韻：あなたの中に残るもの",
          body: [
            "結末が優しくても悲劇的でも、一つの内省的な問いが残ります：同じ道をもう一度選びますか？",
            "ここでの成熟は完璧さではありません。結果を受け入れ、明確さを持って前進し続ける意志です。",
            "だからこそ古典は有用であり続けます：感情的な影響だけでなく、再利用可能なメンタルモデルを提供します。"
          ]
        },
        {
          heading: "現実への翻訳：次に何をするか",
          body: [
            "実践的な価値は結末を覚えることではなく、次の現実の決断のためにパターンを借りることにあります。",
            modeActionJa[seed.mode],
            "次の関係・仕事・表現・タイミングのジレンマが現れたとき、この物語が意思決定のテンプレートになります。"
          ]
        }
      ],
      themeTakeaway: `「${seed.titleJa}」はあなたに思い出させます：まず何を守るかを定義し、次の動きを選んでください。`,
      modeInsight: applyTitle(
        modeInsightTemplatesJa[seed.mode][hashIndex(`ja:mode:${seed.slug}`, modeInsightTemplatesJa[seed.mode].length)],
        seed.titleJa
      )
    };
  }

  return {
    title: seed.titleEn,
    subtitle: applyTitle(
      modeSubtitleEn[seed.mode][hashIndex(`en:subtitle:${seed.slug}`, modeSubtitleEn[seed.mode].length)],
      seed.titleEn
    ),
    teaser: applyTitle(teaserTemplatesEn[hashIndex(`en:${seed.slug}`, teaserTemplatesEn.length)], seed.titleEn),
    plot: [
      {
        heading: "Setting: the world you first enter",
        body: [
          "You begin by seeing the social rules, hidden pressures, and emotional expectations surrounding each character.",
          `The lasting power of "${seed.titleEn}" is not only in its mythic surface, but in how people choose under real constraints.`,
          "As a reader, you are not just consuming folklore; you are recognizing patterns that also appear in your own life."
        ]
      },
      {
        heading: "Core conflict: the question you cannot avoid",
        body: [
          "As tension rises, characters can no longer keep every option open. They must rank loyalty, desire, responsibility, and identity.",
          "You are pushed to ask: if this pressure were mine, what would I protect and what would I release?",
          modeFocusEn[seed.mode]
        ]
      },
      {
        heading: "Turning point: how cost becomes visible",
        body: [
          "The strongest scenes are built on consequence. Every step forward asks for something in return.",
          "You can track how misunderstanding, timing, social structure, and emotional reactivity shape outcomes.",
          "This is where the story becomes practical: decision-making is no longer abstract, but observable."
        ]
      },
      {
        heading: "Ending and afterglow: what stays with you",
        body: [
          "Whether the ending is tender or tragic, one reflective question remains: would you choose the same path again?",
          "Maturity here is not perfection. It is the willingness to carry consequence and keep moving with clarity.",
          "That is why classics stay useful: they provide reusable mental models, not just emotional impact."
        ]
      },
      {
        heading: "Real-life translation: what you do next",
        body: [
          "The practical value is not in remembering the ending, but in borrowing the pattern for your next real decision.",
          modeActionEn[seed.mode],
          "When your next relationship, work, expression, or timing dilemma appears, this narrative becomes a decision template."
        ]
      }
    ],
    themeTakeaway: `"${seed.titleEn}" reminds you: define what you protect first, then choose your next move.`,
    modeInsight: applyTitle(
      modeInsightTemplatesEn[seed.mode][hashIndex(`en:mode:${seed.slug}`, modeInsightTemplatesEn[seed.mode].length)],
      seed.titleEn
    )
  };
}

export const stories: Story[] = seeds.map((seed) => ({
  slug: seed.slug,
  mode: seed.mode,
  culture: seed.culture,
  publishedAt: "2026-03-18",
  source: {
    title: seed.sourceTitle,
    url: seed.sourceUrl
  },
  content: {
    zh: localized(seed, "zh"),
    en: localized(seed, "en"),
    fr: localized(seed, "fr"),
    ja: localized(seed, "ja")
  }
}));

export function getStoryBySlug(slug: string) {
  return stories.find((item) => item.slug === slug) || null;
}
