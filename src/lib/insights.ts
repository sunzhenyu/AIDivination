import type { Lang } from "@/lib/i18n";

type LocalizedSection = { heading: string; body: string[] };
type LocalizedInsight = {
  title: string;
  description: string;
  tags: string[];
  sections: LocalizedSection[];
};

export type Insight = {
  slug: string;
  mode: "tarot" | "career" | "face" | "palm";
  publishedAt: string;
  readingMinutes: number;
  content: Record<Lang, LocalizedInsight>;
};

const _insights: Insight[] = [
  {
    slug: "tarot-behind-the-ritual",
    mode: "tarot",
    publishedAt: "2026-03-18",
    readingMinutes: 6,
    content: {
      en: {
        title: "Tarot: The Story Behind the Ritual",
        description: "From playing cards to symbolic reflection, why tarot still works for modern minds.",
        tags: ["tarot", "symbol", "self-reflection"],
        sections: [
          {
            heading: "From card game roots to modern reflection",
            body: [
              "Historically, tarot began as a card game in Europe before later being used for symbolic interpretation. This long transition explains why tarot can feel both playful and meaningful.",
              "In product terms, this dual identity is powerful: users can enter with curiosity, then stay for emotional clarity."
            ]
          },
          {
            heading: "Why symbols make decisions easier",
            body: [
              "A card is a mirror, not a verdict. It gives language to internal tension that users could not articulate before.",
              "That is why our three-card flow focuses on context, present friction, and practical next moves instead of fear-based predictions."
            ]
          },
          {
            heading: "How to use the result well",
            body: [
              "Treat each reading as a weekly check-in. Pick one action, one boundary, and one question to carry into the next 7 days.",
              "When users connect insight with action, tarot becomes a growth tool rather than passive entertainment."
            ]
          }
        ]
      },
      zh: {
        title: "塔罗：仪式感背后的故事逻辑",
        description: "从纸牌游戏到象征化复盘，塔罗为什么在今天仍然有价值。",
        tags: ["塔罗", "象征系统", "自我复盘"],
        sections: [
          {
            heading: "从纸牌玩法到当代解读",
            body: [
              "塔罗最早并不是“神秘学工具”，而是欧洲纸牌体系的一部分，后来才逐步演化出象征解读的用途。",
              "这让塔罗天然具备“双属性”：既轻松好上手，又能承载情绪与决策复盘。"
            ]
          },
          {
            heading: "为什么象征能帮助做决定",
            body: [
              "牌面不是定论，更像镜子。它把用户原本说不清的焦虑、犹豫和期待可视化出来。",
              "所以我们的三张牌结构重点是：背景影响、当前阻力、下一步建议，而不是恐吓式预言。"
            ]
          },
          {
            heading: "如何把解读变成行动",
            body: [
              "每次结果只落地三件事：一个本周动作、一个边界提醒、一个复盘问题。",
              "当“洞察”绑定“行动”，塔罗才会从看热闹变成可持续的成长工具。"
            ]
          }
        ]
      }
    }
  },
  {
    slug: "career-reading-as-growth-narrative",
    mode: "career",
    publishedAt: "2026-03-18",
    readingMinutes: 7,
    content: {
      en: {
        title: "Career Reading as a Growth Narrative",
        description: "Turning destiny language into strengths, momentum, and clear next actions.",
        tags: ["career", "growth", "strategy"],
        sections: [
          {
            heading: "Why career stories matter",
            body: [
              "People do not need abstract labels; they need direction under uncertainty. A useful career reading gives structure to the next 30 to 90 days.",
              "This is aligned with modern career frameworks that prioritize interests, strengths, and environment fit."
            ]
          },
          {
            heading: "What a strong reading includes",
            body: [
              "A premium result should include strengths, hidden friction, collaboration advice, and tactical steps.",
              "Users trust the output more when it feels specific and balanced, not overly optimistic or fatalistic."
            ]
          },
          {
            heading: "How to apply it this week",
            body: [
              "Pick one communication upgrade, one priority reset, and one measurable milestone.",
              "Career guidance becomes useful only when it shortens decision loops in real work."
            ]
          }
        ]
      },
      zh: {
        title: "职业解读：把“命盘感”转成成长叙事",
        description: "把抽象判断改写为优势、节奏与下一步动作，结果页才会更有价值。",
        tags: ["职业", "成长路径", "行动建议"],
        sections: [
          {
            heading: "职业故事为什么重要",
            body: [
              "用户真正需要的不是标签，而是在不确定阶段的方向感：我该先做什么、怎么做、做到什么程度。",
              "因此好的职业解读，应当覆盖未来 30-90 天可执行路线，而不只是宏大判断。"
            ]
          },
          {
            heading: "高质量结果页的组成",
            body: [
              "建议至少包含：优势、短板、协作策略、阶段节奏、行动清单。",
              "当结果既具体又克制，用户会更信任，也更愿意复用和分享。"
            ]
          },
          {
            heading: "本周可落地动作",
            body: [
              "先做三件事：升级一次关键沟通、重排一次优先级、定义一个可量化里程碑。",
              "职业解读的价值，不在“说得玄”，而在“帮你少走弯路”。"
            ]
          }
        ]
      }
    }
  },
  {
    slug: "face-reading-as-observation-story",
    mode: "face",
    publishedAt: "2026-03-18",
    readingMinutes: 6,
    content: {
      en: {
        title: "Face Reading as an Observation Story",
        description: "Moving from fixed judgment to soft signals and personality reflection.",
        tags: ["face", "observation", "personality"],
        sections: [
          {
            heading: "From old physiognomy to modern caution",
            body: [
              "Traditional face-reading exists in many cultures, but modern products should avoid deterministic claims.",
              "A better approach is to frame outputs as observation prompts: communication style, emotional rhythm, and first-impression cues."
            ]
          },
          {
            heading: "Why users still find this meaningful",
            body: [
              "People are naturally curious about how they are perceived. Face mode gives them a low-pressure narrative to reflect on identity and expression.",
              "This becomes especially useful in social and content-creation contexts where first impressions matter."
            ]
          },
          {
            heading: "Responsible product tone",
            body: [
              "Use warm, non-judgmental language. Offer suggestions, not labels.",
              "Good face-reading copy should increase self-awareness without increasing anxiety."
            ]
          }
        ]
      },
      zh: {
        title: "面相模式：从“判断”到“观察故事”",
        description: "用温和表达替代绝对结论，让面相结果更像自我观察工具。",
        tags: ["面相", "观察", "人格表达"],
        sections: [
          {
            heading: "从传统面相到现代产品语境",
            body: [
              "面相在不同文化中都有历史，但在现代产品中不宜做决定性判断。",
              "更适合的方式是输出“观察提示”：表达风格、情绪节奏、社交第一印象。"
            ]
          },
          {
            heading: "为什么用户仍然喜欢这个模式",
            body: [
              "人们天然关心“别人如何看我”。面相模块提供了一个低压力、可对话的镜像入口。",
              "在社交、短视频和个人表达场景里，这类反馈尤其有吸引力。"
            ]
          },
          {
            heading: "负责任的内容风格",
            body: [
              "建议采用温和、非标签化语言，多给可尝试的建议，少下绝对结论。",
              "好的面相文案应该提升自我认知，而不是放大焦虑。"
            ]
          }
        ]
      }
    }
  },
  {
    slug: "palm-reading-and-the-language-of-rhythm",
    mode: "palm",
    publishedAt: "2026-03-18",
    readingMinutes: 6,
    content: {
      en: {
        title: "Palm Reading and the Language of Rhythm",
        description: "Why palm mode works best as a narrative about timing, pace, and energy.",
        tags: ["palm", "rhythm", "narrative"],
        sections: [
          {
            heading: "A long symbolic tradition",
            body: [
              "Palm reading has been practiced for centuries across cultures. Its modern value is less about certainty and more about symbolic storytelling.",
              "Users connect to palm mode when it speaks about timing, cycles, and personal pace."
            ]
          },
          {
            heading: "What makes palm mode different",
            body: [
              "Compared with tarot and career mode, palm mode feels more intimate. The visual of one's own hand creates immediate personal connection.",
              "This mode is ideal for short-term reflection: what to accelerate, what to stabilize, and what to pause."
            ]
          },
          {
            heading: "Practical output pattern",
            body: [
              "A high-quality palm result should end with a 14-day rhythm plan.",
              "That makes the reading tangible and increases repeat usage."
            ]
          }
        ]
      },
      zh: {
        title: "手相模式：把未来感转成“节奏语言”",
        description: "手相最适合输出阶段节奏建议，而不是绝对吉凶判断。",
        tags: ["手相", "节奏", "阶段策略"],
        sections: [
          {
            heading: "一个跨文化的象征传统",
            body: [
              "手相有着长期的文化历史，放到现代产品里更适合作为象征叙事工具。",
              "用户真正需要的不是“准不准”，而是“我接下来该用什么节奏行动”。"
            ]
          },
          {
            heading: "为什么手相体验更有代入感",
            body: [
              "与塔罗不同，手相直接使用用户自己的手部图像，天然更具个人连接感。",
              "因此它非常适合做短周期复盘：哪些要加速、哪些要稳住、哪些先暂停。"
            ]
          },
          {
            heading: "可执行输出模板",
            body: [
              "建议结果页增加 14 天节奏计划，按“推进-观察-调整”三段输出。",
              "当结果可以直接照着做，用户就更容易形成持续使用习惯。"
            ]
          }
        ]
      }
    }
  }
];

const insightsWithFallback: Insight[] = _insights.map((insight) => ({
  ...insight,
  content: {
    ...insight.content,
    fr: insight.content.en,
    ja: insight.content.en
  }
}));

export const insights = insightsWithFallback;

export function getInsightBySlug(slug: string) {
  return insights.find((item) => item.slug === slug) || null;
}
