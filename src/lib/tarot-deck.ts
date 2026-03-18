export type TarotCard = {
  nameZh: string;
  nameEn: string;
};

const MAJORS: TarotCard[] = [
  { nameZh: "愚者", nameEn: "The Fool" },
  { nameZh: "魔术师", nameEn: "The Magician" },
  { nameZh: "女祭司", nameEn: "The High Priestess" },
  { nameZh: "女皇", nameEn: "The Empress" },
  { nameZh: "皇帝", nameEn: "The Emperor" },
  { nameZh: "教皇", nameEn: "The Hierophant" },
  { nameZh: "恋人", nameEn: "The Lovers" },
  { nameZh: "战车", nameEn: "The Chariot" },
  { nameZh: "力量", nameEn: "Strength" },
  { nameZh: "隐者", nameEn: "The Hermit" },
  { nameZh: "命运之轮", nameEn: "Wheel of Fortune" },
  { nameZh: "正义", nameEn: "Justice" },
  { nameZh: "倒吊人", nameEn: "The Hanged Man" },
  { nameZh: "死神", nameEn: "Death" },
  { nameZh: "节制", nameEn: "Temperance" },
  { nameZh: "恶魔", nameEn: "The Devil" },
  { nameZh: "高塔", nameEn: "The Tower" },
  { nameZh: "星星", nameEn: "The Star" },
  { nameZh: "月亮", nameEn: "The Moon" },
  { nameZh: "太阳", nameEn: "The Sun" },
  { nameZh: "审判", nameEn: "Judgement" },
  { nameZh: "世界", nameEn: "The World" }
];

const SUITS = [
  { zh: "权杖", en: "Wands" },
  { zh: "圣杯", en: "Cups" },
  { zh: "宝剑", en: "Swords" },
  { zh: "星币", en: "Pentacles" }
] as const;

const RANKS = [
  { zh: "一", en: "Ace" },
  { zh: "二", en: "Two" },
  { zh: "三", en: "Three" },
  { zh: "四", en: "Four" },
  { zh: "五", en: "Five" },
  { zh: "六", en: "Six" },
  { zh: "七", en: "Seven" },
  { zh: "八", en: "Eight" },
  { zh: "九", en: "Nine" },
  { zh: "十", en: "Ten" },
  { zh: "侍从", en: "Page" },
  { zh: "骑士", en: "Knight" },
  { zh: "皇后", en: "Queen" },
  { zh: "国王", en: "King" }
] as const;

const EXTRAS: TarotCard[] = [
  { nameZh: "守护天使", nameEn: "Guardian Angel" },
  { nameZh: "命运女神", nameEn: "Lady of Fate" },
  { nameZh: "智慧老人", nameEn: "Elder of Wisdom" },
  { nameZh: "白羊座", nameEn: "Aries" },
  { nameZh: "天蝎座", nameEn: "Scorpio" },
  { nameZh: "双鱼座", nameEn: "Pisces" },
  { nameZh: "春之女神", nameEn: "Goddess of Spring" },
  { nameZh: "冬之守护者", nameEn: "Guardian of Winter" }
];

const MINORS: TarotCard[] = SUITS.flatMap((suit) =>
  RANKS.map((rank) => ({
    nameZh: `${suit.zh}${rank.zh}`,
    nameEn: `${rank.en} of ${suit.en}`
  }))
);

const REVERSED: TarotCard[] = [...MAJORS, ...MINORS].map((card) => ({
  nameZh: `${card.nameZh}（逆位）`,
  nameEn: `${card.nameEn} (Reversed)`
}));

export const TAROT_DECK: TarotCard[] = [...MAJORS, ...MINORS, ...REVERSED, ...EXTRAS];

export function randomThreeCards(deck: TarotCard[]) {
  const indexes = new Set<number>();
  while (indexes.size < 3) {
    indexes.add(Math.floor(Math.random() * deck.length));
  }
  return [...indexes].map((index) => deck[index]);
}
