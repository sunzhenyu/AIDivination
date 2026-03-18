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
  sourceTitle: string;
  sourceUrl: string;
};

const seeds: StorySeed[] = [
  { slug: "white-snake-vow", mode: "tarot", culture: "east", titleEn: "Legend of the White Snake", titleZh: "白蛇传", sourceTitle: "Legend of the White Snake", sourceUrl: "https://en.wikipedia.org/wiki/Legend_of_the_White_Snake" },
  { slug: "psyche-and-cupid", mode: "tarot", culture: "west", titleEn: "Psyche and Cupid", titleZh: "普绪克与丘比特", sourceTitle: "Psyche", sourceUrl: "https://www.britannica.com/topic/Psyche-classical-mythology" },
  { slug: "butterfly-lovers", mode: "tarot", culture: "east", titleEn: "Butterfly Lovers", titleZh: "梁山伯与祝英台", sourceTitle: "Butterfly Lovers", sourceUrl: "https://en.wikipedia.org/wiki/Butterfly_Lovers" },
  { slug: "tristan-and-isolde", mode: "tarot", culture: "west", titleEn: "Tristan and Isolde", titleZh: "特里斯坦与伊索尔德", sourceTitle: "Tristan and Isolde", sourceUrl: "https://www.britannica.com/topic/Tristan-and-Isolde" },
  { slug: "peony-pavilion", mode: "tarot", culture: "east", titleEn: "The Peony Pavilion", titleZh: "牡丹亭", sourceTitle: "The Peony Pavilion", sourceUrl: "https://en.wikipedia.org/wiki/The_Peony_Pavilion" },
  { slug: "beauty-and-the-beast", mode: "tarot", culture: "west", titleEn: "Beauty and the Beast", titleZh: "美女与野兽", sourceTitle: "Beauty and the Beast", sourceUrl: "https://en.wikipedia.org/wiki/Beauty_and_the_Beast" },
  { slug: "cowherd-and-weaver-girl", mode: "tarot", culture: "east", titleEn: "The Cowherd and the Weaver Girl", titleZh: "牛郎织女", sourceTitle: "Qixi Festival", sourceUrl: "https://en.wikipedia.org/wiki/Qixi_Festival" },
  { slug: "romeo-and-juliet", mode: "tarot", culture: "west", titleEn: "Romeo and Juliet", titleZh: "罗密欧与朱丽叶", sourceTitle: "Romeo and Juliet", sourceUrl: "https://en.wikipedia.org/wiki/Romeo_and_Juliet" },
  { slug: "nie-xiaoqian", mode: "tarot", culture: "east", titleEn: "Nie Xiaoqian", titleZh: "聂小倩", sourceTitle: "Strange Tales from a Chinese Studio", sourceUrl: "https://en.wikipedia.org/wiki/Strange_Tales_from_a_Chinese_Studio" },
  { slug: "swan-lake", mode: "tarot", culture: "west", titleEn: "Swan Lake", titleZh: "天鹅湖", sourceTitle: "Swan Lake", sourceUrl: "https://en.wikipedia.org/wiki/Swan_Lake" },
  { slug: "yue-lao-red-thread", mode: "tarot", culture: "east", titleEn: "Yue Lao and the Red Thread", titleZh: "月老红线", sourceTitle: "Yue Xia Lao Ren", sourceUrl: "https://en.wikipedia.org/wiki/Yue_Xia_Lao_Ren" },
  { slug: "little-mermaid", mode: "tarot", culture: "west", titleEn: "The Little Mermaid", titleZh: "小美人鱼", sourceTitle: "The Little Mermaid", sourceUrl: "https://en.wikipedia.org/wiki/The_Little_Mermaid" },
  { slug: "mulan", mode: "career", culture: "east", titleEn: "Mulan", titleZh: "花木兰", sourceTitle: "Hua Mulan", sourceUrl: "https://www.britannica.com/biography/Hua-Mulan" },
  { slug: "arthur-round-table", mode: "career", culture: "west", titleEn: "King Arthur and the Round Table", titleZh: "亚瑟王与圆桌骑士", sourceTitle: "Arthurian Legend", sourceUrl: "https://www.britannica.com/summary/Arthurian-legend" },
  { slug: "three-visits-cottage", mode: "career", culture: "east", titleEn: "Three Visits to the Thatched Cottage", titleZh: "三顾茅庐", sourceTitle: "Romance of the Three Kingdoms", sourceUrl: "https://en.wikipedia.org/wiki/Romance_of_the_Three_Kingdoms" },
  { slug: "joan-of-arc", mode: "career", culture: "west", titleEn: "Joan of Arc", titleZh: "圣女贞德", sourceTitle: "Joan of Arc", sourceUrl: "https://www.britannica.com/biography/Saint-Joan-of-Arc" },
  { slug: "dayu-controls-flood", mode: "career", culture: "east", titleEn: "Yu the Great Controls the Flood", titleZh: "大禹治水", sourceTitle: "Yu the Great", sourceUrl: "https://en.wikipedia.org/wiki/Yu_the_Great" },
  { slug: "odysseus-journey", mode: "career", culture: "west", titleEn: "Odysseus Returns Home", titleZh: "奥德修斯归航", sourceTitle: "Odysseus", sourceUrl: "https://www.britannica.com/topic/Odyssey-epic-by-Homer" },
  { slug: "fan-li-retreat", mode: "career", culture: "east", titleEn: "Fan Li's Strategic Retreat", titleZh: "范蠡功成身退", sourceTitle: "Fan Li", sourceUrl: "https://en.wikipedia.org/wiki/Fan_Li" },
  { slug: "robin-hood", mode: "career", culture: "west", titleEn: "Robin Hood", titleZh: "罗宾汉", sourceTitle: "Robin Hood", sourceUrl: "https://en.wikipedia.org/wiki/Robin_Hood" },
  { slug: "yue-fei", mode: "career", culture: "east", titleEn: "Yue Fei", titleZh: "岳飞", sourceTitle: "Yue Fei", sourceUrl: "https://en.wikipedia.org/wiki/Yue_Fei" },
  { slug: "king-solomon-judgment", mode: "career", culture: "west", titleEn: "The Judgment of Solomon", titleZh: "所罗门断案", sourceTitle: "Judgment of Solomon", sourceUrl: "https://en.wikipedia.org/wiki/Judgment_of_Solomon" },
  { slug: "bao-zheng", mode: "career", culture: "east", titleEn: "Bao Zheng", titleZh: "包拯", sourceTitle: "Bao Zheng", sourceUrl: "https://en.wikipedia.org/wiki/Bao_Zheng" },
  { slug: "benjamin-franklin", mode: "career", culture: "west", titleEn: "Benjamin Franklin's Self-Discipline", titleZh: "富兰克林的自我管理", sourceTitle: "Benjamin Franklin", sourceUrl: "https://www.britannica.com/biography/Benjamin-Franklin" },
  { slug: "zhuge-liang-borrowed-arrows", mode: "career", culture: "east", titleEn: "Borrowing Arrows with Straw Boats", titleZh: "草船借箭", sourceTitle: "Romance of the Three Kingdoms", sourceUrl: "https://en.wikipedia.org/wiki/Romance_of_the_Three_Kingdoms" },
  { slug: "faust-choice", mode: "career", culture: "west", titleEn: "Faust's Bargain", titleZh: "浮士德的交易", sourceTitle: "Faust", sourceUrl: "https://en.wikipedia.org/wiki/Faust" },
  { slug: "lin-daiyu", mode: "face", culture: "east", titleEn: "Lin Daiyu", titleZh: "林黛玉", sourceTitle: "Dream of the Red Chamber", sourceUrl: "https://en.wikipedia.org/wiki/Dream_of_the_Red_Chamber" },
  { slug: "elizabeth-bennet", mode: "face", culture: "west", titleEn: "Elizabeth Bennet", titleZh: "伊丽莎白·班纳特", sourceTitle: "Pride and Prejudice", sourceUrl: "https://en.wikipedia.org/wiki/Pride_and_Prejudice" },
  { slug: "painted-skin", mode: "face", culture: "east", titleEn: "Painted Skin", titleZh: "画皮", sourceTitle: "Painted Skin", sourceUrl: "https://en.wikipedia.org/wiki/Painted_Skin" },
  { slug: "dorian-gray", mode: "face", culture: "west", titleEn: "The Picture of Dorian Gray", titleZh: "道林·格雷的画像", sourceTitle: "The Picture of Dorian Gray", sourceUrl: "https://en.wikipedia.org/wiki/The_Picture_of_Dorian_Gray" },
  { slug: "sun-wukong", mode: "face", culture: "east", titleEn: "Sun Wukong", titleZh: "孙悟空", sourceTitle: "Journey to the West", sourceUrl: "https://en.wikipedia.org/wiki/Journey_to_the_West" },
  { slug: "don-quixote", mode: "face", culture: "west", titleEn: "Don Quixote", titleZh: "堂吉诃德", sourceTitle: "Don Quixote", sourceUrl: "https://en.wikipedia.org/wiki/Don_Quixote" },
  { slug: "nezha", mode: "face", culture: "east", titleEn: "Nezha", titleZh: "哪吒", sourceTitle: "Nezha", sourceUrl: "https://en.wikipedia.org/wiki/Nezha" },
  { slug: "sherlock-holmes", mode: "face", culture: "west", titleEn: "Sherlock Holmes", titleZh: "夏洛克·福尔摩斯", sourceTitle: "Sherlock Holmes", sourceUrl: "https://en.wikipedia.org/wiki/Sherlock_Holmes" },
  { slug: "wang-xifeng", mode: "face", culture: "east", titleEn: "Wang Xifeng", titleZh: "王熙凤", sourceTitle: "Dream of the Red Chamber", sourceUrl: "https://en.wikipedia.org/wiki/Dream_of_the_Red_Chamber" },
  { slug: "jane-eyre", mode: "face", culture: "west", titleEn: "Jane Eyre", titleZh: "简·爱", sourceTitle: "Jane Eyre", sourceUrl: "https://en.wikipedia.org/wiki/Jane_Eyre" },
  { slug: "xue-baochai", mode: "face", culture: "east", titleEn: "Xue Baochai", titleZh: "薛宝钗", sourceTitle: "Dream of the Red Chamber", sourceUrl: "https://en.wikipedia.org/wiki/Dream_of_the_Red_Chamber" },
  { slug: "cinderella", mode: "face", culture: "west", titleEn: "Cinderella", titleZh: "灰姑娘", sourceTitle: "Cinderella", sourceUrl: "https://en.wikipedia.org/wiki/Cinderella" },
  { slug: "true-and-false-monkey-king", mode: "face", culture: "east", titleEn: "The True and False Monkey King", titleZh: "真假美猴王", sourceTitle: "Journey to the West", sourceUrl: "https://en.wikipedia.org/wiki/Journey_to_the_West" },
  { slug: "phantom-of-the-opera", mode: "face", culture: "west", titleEn: "The Phantom of the Opera", titleZh: "歌剧魅影", sourceTitle: "The Phantom of the Opera", sourceUrl: "https://en.wikipedia.org/wiki/The_Phantom_of_the_Opera" },
  { slug: "nuwa-repairs-sky", mode: "palm", culture: "east", titleEn: "Nuwa Repairs the Sky", titleZh: "女娲补天", sourceTitle: "Nüwa", sourceUrl: "https://en.wikipedia.org/wiki/N%C3%BCwa" },
  { slug: "sleeping-beauty", mode: "palm", culture: "west", titleEn: "Sleeping Beauty", titleZh: "睡美人", sourceTitle: "Sleeping Beauty", sourceUrl: "https://en.wikipedia.org/wiki/Sleeping_Beauty" },
  { slug: "jingwei-fills-sea", mode: "palm", culture: "east", titleEn: "Jingwei Fills the Sea", titleZh: "精卫填海", sourceTitle: "Jingwei", sourceUrl: "https://en.wikipedia.org/wiki/Jingwei" },
  { slug: "persephone-seasons", mode: "palm", culture: "west", titleEn: "Persephone and the Seasons", titleZh: "珀耳塞福涅与四季", sourceTitle: "Persephone", sourceUrl: "https://en.wikipedia.org/wiki/Persephone" },
  { slug: "meng-jiangnu", mode: "palm", culture: "east", titleEn: "Meng Jiangnu", titleZh: "孟姜女", sourceTitle: "Meng Jiangnu", sourceUrl: "https://en.wikipedia.org/wiki/Meng_Jiangn%C3%BC" },
  { slug: "penelope-weaving", mode: "palm", culture: "west", titleEn: "Penelope Weaves by Night", titleZh: "佩涅洛佩的织与拆", sourceTitle: "Penelope", sourceUrl: "https://en.wikipedia.org/wiki/Penelope" },
  { slug: "koi-leaps-dragon-gate", mode: "palm", culture: "east", titleEn: "Koi Leaps the Dragon Gate", titleZh: "鲤鱼跃龙门", sourceTitle: "Dragon Gate", sourceUrl: "https://en.wikipedia.org/wiki/Longmen_(mythology)" },
  { slug: "pinocchio-growth", mode: "palm", culture: "west", titleEn: "Pinocchio", titleZh: "木偶奇遇记", sourceTitle: "Pinocchio", sourceUrl: "https://en.wikipedia.org/wiki/The_Adventures_of_Pinocchio" },
  { slug: "chang-e-moon", mode: "palm", culture: "east", titleEn: "Chang'e on the Moon", titleZh: "嫦娥奔月", sourceTitle: "Chang'e", sourceUrl: "https://en.wikipedia.org/wiki/Chang%27e" },
  { slug: "aladdin-lamp", mode: "palm", culture: "west", titleEn: "Aladdin and the Magic Lamp", titleZh: "阿拉丁神灯", sourceTitle: "Aladdin", sourceUrl: "https://en.wikipedia.org/wiki/Aladdin" },
  { slug: "wukong-seventy-two", mode: "palm", culture: "east", titleEn: "Sun Wukong's 72 Transformations", titleZh: "七十二变", sourceTitle: "Journey to the West", sourceUrl: "https://en.wikipedia.org/wiki/Journey_to_the_West" },
  { slug: "wizard-of-oz", mode: "palm", culture: "west", titleEn: "The Wizard of Oz", titleZh: "绿野仙踪", sourceTitle: "The Wonderful Wizard of Oz", sourceUrl: "https://en.wikipedia.org/wiki/The_Wonderful_Wizard_of_Oz" },
  { slug: "eight-immortals-sea", mode: "palm", culture: "east", titleEn: "The Eight Immortals Crossing the Sea", titleZh: "八仙过海", sourceTitle: "Eight Immortals", sourceUrl: "https://en.wikipedia.org/wiki/Eight_Immortals" },
  { slug: "snow-white", mode: "palm", culture: "west", titleEn: "Snow White", titleZh: "白雪公主", sourceTitle: "Snow White", sourceUrl: "https://en.wikipedia.org/wiki/Snow_White" }
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
    `围绕《{title}》展开的叙事，把“浪漫”写成一场价值排序的考验。`,
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
  `《{title}》最动人的部分，在于角色终于决定“守护什么、放下什么”。`,
  `《{title}》把情感推向行动，让每一步代价都变得清晰可见。`,
  `《{title}》不仅在讲发生了什么，更在讲“为什么会走向这个结局”。`,
  `读《{title}》时你会看到，误解、身份和时间差如何改写命运轨迹。`,
  `《{title}》从情绪走到承担，是非常典型的“成长型故事结构”。`,
  `《{title}》告诉你：真正的选择，总是在代价出现后才成立。`,
  `《{title}》证明一个微小瞬间，也可能引发连锁性的命运变化。`
] as const;

const modeInsightTemplatesEn: Record<Story["mode"], string[]> = {
  tarot: [
    `Tarot AI Divination insight: In "{title}", treat the arc as three cards: emotional trigger, conflict pressure, and mature resolution.`,
    `Tarot AI Divination insight: "{title}" works as a relationship spread where value ranking matters more than temporary emotion.`,
    `Tarot AI Divination insight: Use "{title}" to read how desire, fear, and responsibility compete in one symbolic timeline.`,
    `Tarot AI Divination insight: "{title}" highlights that clarity appears after consequence, not before action.`
  ],
  career: [
    `Career AI Divination insight: "{title}" shows that long-term preparation usually beats short-term brilliance at critical moments.`,
    `Career AI Divination insight: Read "{title}" as a strategy case on role choice, timing, and accountable execution.`,
    `Career AI Divination insight: "{title}" reminds you to align values with incentives before committing to a path.`,
    `Career AI Divination insight: The core lesson in "{title}" is decision ownership under pressure, not perfect conditions.`
  ],
  face: [
    `Face AI Divination insight: In "{title}", identity is revealed through expression, reaction, and social posture more than labels.`,
    `Face AI Divination insight: "{title}" helps you read personality under stress: who masks, who confronts, who adapts.`,
    `Face AI Divination insight: Use "{title}" to observe how communication style predicts relationship outcomes.`,
    `Face AI Divination insight: "{title}" demonstrates that behavioral micro-signals often tell the real emotional story.`
  ],
  palm: [
    `Palm AI Divination insight: "{title}" is a rhythm story; progress appears in waves of effort, pause, and renewed movement.`,
    `Palm AI Divination insight: Read "{title}" as a timing map for when to push forward and when to consolidate.`,
    `Palm AI Divination insight: "{title}" teaches that turning points are prepared long before they become visible.`,
    `Palm AI Divination insight: The pattern in "{title}" supports short-cycle review: observe pace, adjust, then advance.`
  ]
};

const modeInsightTemplatesZh: Record<Story["mode"], string[]> = {
  tarot: [
    `塔罗AI占卜解读：在《{title}》里，可以把主线看成三张牌：情绪起点、冲突阻力、成熟选择。`,
    `塔罗AI占卜解读：《{title}》更像关系牌阵，真正关键是价值排序，而不是一时情绪。`,
    `塔罗AI占卜解读：借《{title}》可以清楚看到欲望、恐惧与责任如何在同一时间线上竞争。`,
    `塔罗AI占卜解读：《{title}》提示你，清晰往往在承担后出现，而不是在行动前出现。`
  ],
  career: [
    `职业AI占卜解读：《{title}》说明关键阶段里，长期准备通常比短期爆发更可靠。`,
    `职业AI占卜解读：可把《{title}》当成策略案例，重点看角色选择、时机判断与执行闭环。`,
    `职业AI占卜解读：《{title}》提醒你在做重大决定前，先对齐“价值观”与“激励机制”。`,
    `职业AI占卜解读：《{title}》的核心不在完美条件，而在压力下的决策承担能力。`
  ],
  face: [
    `面相AI占卜解读：在《{title}》中，身份信息更多通过表情、反应和社会姿态被呈现。`,
    `面相AI占卜解读：《{title}》适合观察压力场景下的人格模式：谁隐藏、谁对抗、谁调整。`,
    `面相AI占卜解读：借《{title}》可训练你识别“沟通风格”如何提前决定关系走向。`,
    `面相AI占卜解读：《{title}》证明微小行为信号，往往比口头立场更接近真实情绪。`
  ],
  palm: [
    `手相AI占卜解读：《{title}》是典型“节奏型叙事”，成长通常以推进、停顿、再推进出现。`,
    `手相AI占卜解读：把《{title}》当成时机地图，判断何时加速、何时稳住、何时转向。`,
    `手相AI占卜解读：《{title}》告诉你关键转折并非偶然，而是前期累积到阈值后的结果。`,
    `手相AI占卜解读：《{title}》适合做短周期复盘模板：看节奏、调步伐、再前进。`
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
            `当你把自己代入后，你会更容易理解：很多“命运感”，其实来自长期累积的处境。`
          ]
        },
        {
          heading: "核心冲突：你会被迫回答的难题",
          body: [
            `剧情推进后，人物不再能“都要”，而必须在忠诚、欲望、责任、体面之间给出排序。`,
            `你会被迫思考：如果你处在同样压力里，你会舍弃什么，又会坚持什么？`,
            modeFocusZh[seed.mode]
          ]
        },
        {
          heading: "关键转折：你看见代价如何发生",
          body: [
            `真正的戏剧张力来自代价：每一次前进都伴随某种失去，每一次守住都要承受外部压力。`,
            `你会看见角色如何在误解、时间差、权力结构与情绪波动中不断修正选择。`,
            `这一步最有启发的是，它让“做决定”从抽象口号变成了可观察的过程。`
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
            `当你下一次面对关系、职业、表达或节奏问题时，可以直接调用这次阅读形成的“判断模板”。`
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
    en: localized(seed, "en")
  }
}));

export function getStoryBySlug(slug: string) {
  return stories.find((item) => item.slug === slug) || null;
}
