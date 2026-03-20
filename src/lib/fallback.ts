import { Lang } from "@/lib/i18n";

export function fallbackCareer(name: string, joinDate: string, lang: Lang) {
  if (lang === "zh") {
    return {
      name,
      joinDate,
      keywords: "成长驱动 · 沟通协作 · 执行稳定",
      trends: ["未来 1-2 个月节奏偏快，建议优先处理高杠杆任务。", "你在跨团队协作中的价值会更明显。"],
      strengths: ["信息整合能力强", "推进节奏稳定"],
      weaknesses: ["容易过度承担", "边界感需要加强"],
      careerAdvice: ["每周设定 1 个关键成果目标", "将重复任务模板化，提高复用效率", "在跨团队会议中先给结论再讲证据"],
      advice: ["把 20% 时间投入到长期能力建设", "在会议中更主动表达结论与依据", "每月做一次能力雷达复盘，追踪可见成长"],
      narrativeSummary: "你目前处于“能力外溢”的阶段：过去积累的方法论开始在更复杂场景里发挥作用。短期挑战不是能力不足，而是任务分布和注意力管理。若能主动设置边界，把低价值事务流程化，你会在未来一个季度更容易拿到高可见度项目，并形成稳定的正反馈循环。",
      historicalFigure: {
        name: "诸葛亮",
        title: "政治家与战略家",
        description: "擅长系统性思考与全局筹划，能在复杂环境下保持稳定执行。",
        matchReason: "你的特征更接近“规划+执行”的复合型节奏。",
        story: "诸葛亮并非只依赖天赋，而是长期以严密的计划与节奏化执行建立优势。从隆中对的战略预判，到蜀汉治理中的制度建设，他在资源受限条件下依然通过组织力与复盘能力持续放大团队战力。这种“先谋后动、边做边校准”的路径，与当前你在复杂协作中的成长方式高度相似。",
        achievements: ["隆中对", "北伐布局", "蜀汉治理"],
        period: "三国时期"
      },
      fallback: true
    };
  }
  return {
    name,
    joinDate,
    keywords: "Growth-oriented · Collaborative · Reliable execution",
    trends: ["The next 1-2 months are high-tempo; prioritize high-leverage tasks.", "Your value in cross-team coordination is likely to increase."],
    strengths: ["Strong information synthesis", "Consistent delivery rhythm"],
    weaknesses: ["Tendency to over-commit", "Boundary setting needs improvement"],
    careerAdvice: ["Define one weekly outcome metric", "Template repetitive tasks for better reuse", "Lead cross-team updates with conclusions first, details second"],
    advice: ["Reserve 20% time for long-term skill building", "State conclusions earlier in meetings", "Run a monthly capability radar review to track visible growth"],
    narrativeSummary: "You are entering a leverage phase: past discipline is beginning to compound in higher-complexity work. The bottleneck is not capability, but attention allocation and boundary control. If you systemize low-value repetition and protect focus windows, you are likely to gain higher-visibility opportunities within one quarter and build a durable momentum loop.",
    historicalFigure: {
      name: "Benjamin Franklin",
      title: "Statesman and polymath",
      description: "Known for practical system thinking, disciplined execution, and adaptive communication.",
      matchReason: "Your current pattern aligns with a planner-executor profile.",
      story: "Franklin’s impact came from routines and systems, not occasional brilliance. He translated ideas into institutions, experiments, and public outcomes through iterative action. Across science, diplomacy, and civic design, he repeatedly converted complexity into structured progress. That same pattern mirrors your current arc: thoughtful planning, measurable execution, and steady influence growth.",
      achievements: ["Civic institution building", "Scientific experimentation", "Diplomatic impact"],
      period: "18th century"
    },
    fallback: true
  };
}

export function fallbackTarot(cards: string[], lang: Lang) {
  const names = cards.length ? cards : lang === "zh" ? ["愚者", "魔术师", "星星"] : ["The Fool", "The Magician", "The Star"];
  if (lang === "zh") {
    return {
      cards: names.map((name) => ({ name, meaning: "这张牌提示你保持开放、聚焦当下可执行的下一步。" })),
      overview: ["整体趋势偏积极，关键在于保持稳定行动节奏。", "你正在进入一个适合主动争取机会的阶段。"],
      career: ["优先处理最能体现价值的任务。", "把目标拆成可验证的小里程碑。"],
      wealth: ["短期避免冲动决策，先做信息校验。", "适合稳健型投入。"],
      relationship: ["沟通上更直接会带来更高效率。", "主动表达需求比被动等待更有效。"],
      advice: ["每天做一次复盘", "每周做一次优先级重排", "给自己留出恢复窗口"],
      predictions: ["未来两周会出现一个值得尝试的新机会。", "一个延迟事项将重新启动，带来新的选择空间。", "你在人际协作中的影响力会明显提升。"],
      historicalFigure: {
        name: "达芬奇",
        title: "艺术家与发明家",
        description: "跨学科思维与直觉探索并行，擅长把灵感转化为可见成果。",
        matchReason: "你当前牌面呈现“好奇心 + 行动力”的组合特征。",
        story: "达芬奇的人生并不是线性成功，而是长期在“观察-试验-修正”中前进。他将艺术直觉与工程思维结合，把看似分散的兴趣转化为稳定产出。从绘画到解剖手稿再到机械草图，他持续证明：真正的优势来自跨领域整合与长期耐心，这与你当下牌面展示的探索路径高度一致。",
        achievements: ["《蒙娜丽莎》", "人体解剖手稿", "多领域发明草图"],
        period: "文艺复兴时期"
      },
      fallback: true
    };
  }
  return {
    cards: names.map((name) => ({ name, meaning: "This card suggests openness and focused execution on the next concrete step." })),
    overview: ["Overall momentum is positive if you keep execution stable.", "You are entering a phase where proactive action pays off."],
    career: ["Prioritize tasks with visible impact.", "Break goals into verifiable milestones."],
    wealth: ["Avoid impulse decisions and validate information first.", "A steady strategy works better than aggressive moves."],
    relationship: ["More direct communication improves outcomes.", "Expressing needs early is more effective than waiting."],
    advice: ["Do a quick daily reflection", "Re-prioritize weekly", "Protect recovery time"],
    predictions: ["A delayed opportunity may return within two weeks.", "A collaboration conversation can unlock a new direction.", "Your confidence curve is likely to rise after one clear decision."],
    historicalFigure: {
      name: "Leonardo da Vinci",
      title: "Artist and inventor",
      description: "A rare blend of curiosity and execution, turning ideas into visible creations.",
      matchReason: "Your spread reflects curiosity paired with action-ready momentum.",
      story: "Da Vinci’s path was not a straight line of certainty, but a disciplined cycle of observation, experiments, and refinement. He moved between art, science, and engineering while preserving a coherent personal method: learn deeply, test quickly, and document relentlessly. That narrative matches your current spread, where curiosity is strongest when paired with concrete execution.",
      achievements: ["Mona Lisa", "Anatomical studies", "Cross-domain invention sketches"],
      period: "Renaissance"
    },
    fallback: true
  };
}

export function fallbackFace(lang: Lang) {
  if (lang === "zh") {
    return {
      features: {
        forehead: "思路整体偏理性，适合结构化决策。",
        eyes: "观察细节能力较强，沟通时有共情基础。",
        nose: "执行意愿稳定，做事强调可落地性。",
        mouth: "表达上偏克制，适合结论先行。",
        chin: "耐心较好，面对长周期任务更有优势。"
      },
      career: ["近期适合以稳健推进为主。", "在协作场景中你会更有影响力。"],
      future: ["未来 1-3 个月会出现新的项目机会。", "建议提前准备可复用材料。"],
      advice: ["减少信息噪音输入", "把目标写成可执行清单"],
      narrativeSummary: "你的特征信息显示出明显的“观察-判断-执行”链路：先看清场景，再做稳妥推进。短期内更适合用小步快跑的方式验证方向，而不是一次性押注。只要保持节奏和边界，你的影响力会在合作场景中自然放大。",
      historicalFigure: {
        name: "王阳明",
        title: "思想家与实践者",
        description: "强调知行合一，在洞察内心后快速落地行动。",
        matchReason: "你的面部特征更接近“内省 + 执行”并重的节奏。",
        story: "王阳明的关键能力在于把抽象认知转成现实行动。他在复杂处境中并未停留在理念层，而是持续通过实践验证判断，并不断修正路径。这种“先澄清内在，再稳定输出”的方式，与你当前呈现出的性格节奏高度一致。",
        achievements: ["心学体系", "平定宁王之乱", "教育实践"],
        period: "明代"
      },
      confidence: 0.78,
      fallback: true
    };
  }
  return {
    features: {
      forehead: "Reasoning style looks structured and analytical.",
      eyes: "Detail observation is strong with good empathy potential.",
      nose: "Execution intent appears stable and practical.",
      mouth: "Communication is concise and outcome-oriented.",
      chin: "Patience and long-cycle consistency are notable strengths."
    },
    career: ["A steady delivery strategy is favored in the near term.", "Your influence is likely to rise in collaborative contexts."],
    future: ["New project opportunities may appear in 1-3 months.", "Prepare reusable assets in advance."],
    advice: ["Reduce noise-heavy inputs", "Turn goals into concrete checklists"],
    narrativeSummary: "Your feature profile suggests a clear observe-decide-execute rhythm. In the near term, small iterative moves will outperform one high-risk bet. If you keep boundaries clear and maintain consistency, your influence in collaborative settings is likely to grow in a natural, sustainable way.",
    historicalFigure: {
      name: "Eleanor Roosevelt",
      title: "Diplomat and public advocate",
      description: "Balanced emotional intelligence with practical advocacy and decisive action.",
      matchReason: "Your profile suggests calm empathy supported by strong execution habits.",
      story: "Eleanor Roosevelt built influence through consistency, not spectacle. She translated empathy into practical public action, sustaining long-term pressure on meaningful issues while staying composed under criticism. Her path illustrates how emotional intelligence and disciplined execution can coexist, which maps closely to your current profile.",
      achievements: ["UN Human Rights advocacy", "Public policy leadership", "Influential public communication"],
      period: "20th century"
    },
    confidence: 0.78,
    fallback: true
  };
}

export function fallbackPalm(lang: Lang) {
  if (lang === "zh") {
    return {
      lines: {
        life: "生命线节奏平稳，适合长期主义推进。",
        head: "智慧线显示你偏策略型思考。",
        heart: "感情线强调关系中的边界与稳定。",
        career: "事业线提示阶段性跃迁机会正在出现。"
      },
      career: ["下一阶段适合打磨核心技能。", "对外协作会带来新的成长曲线。"],
      future: ["1-2 个季度内可能出现角色升级机会。", "建议提前准备成果展示材料。"],
      advice: ["建立固定复盘机制", "把阶段目标量化"],
      narrativeSummary: "你的掌纹信息显示“稳态积累 + 阶段突破”的组合路径。短期不一定剧烈变化，但会持续抬高能力底盘。若你能把阶段成果可视化，并在关键节点主动争取机会，未来一个季度更容易实现角色和影响力升级。",
      historicalFigure: {
        name: "曾国藩",
        title: "晚清政治家",
        description: "以长期主义与持续精进见长，强调节奏管理与系统积累。",
        matchReason: "你的掌纹信息显示稳健成长与阶段跃迁并存。",
        story: "曾国藩并非以爆发式天赋著称，而是通过长期自律、持续复盘和系统建设逐步形成影响力。他擅长在复杂局势中稳住节奏，并在关键节点完成战略推进。这种“慢变量驱动大结果”的路径，与当前你手相呈现的成长节律十分接近。",
        achievements: ["湘军建设", "洋务推动", "家书修身体系"],
        period: "清代"
      },
      confidence: 0.76,
      fallback: true
    };
  }
  return {
    lines: {
      life: "The life line suggests a steady long-term rhythm.",
      head: "The head line reflects strategic thinking.",
      heart: "The heart line highlights stability and boundaries in relationships.",
      career: "The career line points to a possible stage transition."
    },
    career: ["The next stage favors deepening core skills.", "External collaboration can unlock a new growth curve."],
    future: ["A role upgrade opportunity may appear within 1-2 quarters.", "Prepare clear evidence of impact in advance."],
    advice: ["Maintain a fixed review cadence", "Quantify stage goals"],
    narrativeSummary: "Your palm pattern suggests a steady-build plus stage-breakthrough trajectory. Short-term change may feel gradual, but your base capability is rising. If you visualize outcomes and actively step into key moments, the next quarter can convert quiet momentum into role and influence upgrades.",
    historicalFigure: {
      name: "Nelson Mandela",
      title: "Statesman",
      description: "Known for resilience, long-term perspective, and disciplined leadership.",
      matchReason: "Your palm pattern points to steady resilience with meaningful phase breakthroughs.",
      story: "Mandela’s legacy was built through patience, resilience, and disciplined long-horizon thinking. He transformed personal endurance into institutional change by choosing timing carefully and sustaining moral clarity under pressure. That pattern resonates with your current palm reading: durable inner strength that can unlock meaningful phase shifts.",
      achievements: ["National reconciliation", "Institutional rebuilding", "Global moral leadership"],
      period: "20th century"
    },
    confidence: 0.76,
    fallback: true
  };
}

export function fallbackDream(dream: string, lang: Lang) {
  if (lang === "zh") {
    return {
      dreamTitle: "夜行桥影",
      coreTheme: "过渡、选择与安全感重建",
      summary:
        "这个梦反复出现“路、桥、追赶、错过”这类元素，通常不是预言，而是内在压力在提醒你：你正在从旧节奏切换到新阶段。梦里的不确定感，往往对应现实中的决策焦虑与控制感下降。",
      symbols: [
        { symbol: "桥或岔路", meaning: "表示你正处于关键过渡点，需要做阶段性取舍。" },
        { symbol: "迷路或追赶", meaning: "常见于目标过多、优先级混乱时，反映注意力被分散。" },
        { symbol: "黑夜与微光", meaning: "说明你并非没有方向，而是需要更小步的验证路径。" }
      ],
      emotionalSignals: [
        "你最近可能在“想做对”与“害怕做错”之间拉扯。",
        "对外在评价较敏感，导致行动节奏被压慢。",
        "内在其实有答案，但仍缺少一个明确的启动动作。"
      ],
      practicalAdvice: [
        "把当前问题拆成 3 个可执行动作，先完成最小闭环。",
        "未来 7 天只追踪一个关键结果，减少多线并行。",
        "睡前写 3 行“今天已完成”，帮助大脑从焦虑切换到完成感。"
      ],
      oneQuestion: "如果只允许你做一个最小决定来恢复掌控感，这个决定是什么？",
      disclaimer: "本解读用于自我反思与情绪整理，不替代医疗、法律或专业心理建议。",
      fallback: true,
      sourceDream: dream
    };
  }

  return {
    dreamTitle: "Bridge at Midnight",
    coreTheme: "Transition, choice, and rebuilding safety",
    summary:
      "Dream patterns like roads, bridges, being late, or getting chased usually signal a transition state rather than prediction. Your mind may be processing pressure around control, timing, and decision clarity while moving from an old rhythm into a new one.",
    symbols: [
      { symbol: "Bridge or crossroads", meaning: "You are near a meaningful transition and need phased choices." },
      { symbol: "Getting lost or chased", meaning: "Often reflects scattered priorities and cognitive overload." },
      { symbol: "Night with distant light", meaning: "Direction exists, but confidence needs smaller proof steps." }
    ],
    emotionalSignals: [
      "You may be caught between doing it right and fearing mistakes.",
      "External judgment may be slowing your momentum.",
      "Part of you already knows the next move but has not committed yet."
    ],
    practicalAdvice: [
      "Break your current challenge into three executable actions and close one loop first.",
      "Track one key outcome for the next seven days; avoid parallel over-planning.",
      "Write three lines of completion before sleep to shift from anxiety to closure."
    ],
    oneQuestion: "If you could make one small decision to regain control this week, what would it be?",
    disclaimer: "This interpretation is for reflection and does not replace medical, legal, or mental-health advice.",
    fallback: true,
    sourceDream: dream
  };
}
