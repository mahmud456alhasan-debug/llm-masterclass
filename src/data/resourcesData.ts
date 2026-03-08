export interface LLMModel {
  name: string
  params: string
  context: string
  training: string
  commercial: boolean
  score: string
  github: string
  type: 'text' | 'multimodal'
  description?: string
  features?: string[]
}

export interface DomainApplication {
  domain: string
  models: string[]
  description: string
  useCases: string[]
  keyChallenges?: string[]
  datasets?: string[]
}

export interface Dataset {
  name: string
  size: string
  type: 'pre-training' | 'sft' | 'preference' | 'domain-specific'
  source: string
  description: string
  format?: string
  language?: string
  quality?: 'high' | 'medium' | 'low'
}

export interface Framework {
  name: string
  type: 'training' | 'fine-tuning' | 'inference' | 'deployment' | 'evaluation'
  description: string
  features: string[]
  supportedModels?: string[]
  keyBenefits?: string[]
  github?: string
}

export interface Benchmark {
  name: string
  coverage: string
  questions: string
  focus: string
  description: string
  leaderboard?: string
  metrics?: string[]
  limitations?: string[]
}

export const llmModels: LLMModel[] = [
  {
    name: 'ChatGLM3-6B',
    params: '6B',
    context: '32K',
    training: '1.4T tokens',
    commercial: true,
    score: '52.3',
    github: 'https://github.com/THUDM/ChatGLM3',
    type: 'text',
    description: 'GLM-based conversational model with strong Chinese capabilities',
    features: ['Multi-turn dialogue', 'Tool calling', 'Code execution', '32K context']
  },
  {
    name: 'Qwen2-72B',
    params: '72B',
    context: '32K',
    training: '18T tokens',
    commercial: true,
    score: '83.6',
    github: 'https://github.com/QwenLM/Qwen2',
    type: 'text',
    description: 'Alibaba\'s comprehensive multilingual model series',
    features: ['Multilingual support', 'Mathematical reasoning', 'Coding', 'Tool integration']
  },
  {
    name: 'InternLM2-20B',
    params: '20B',
    context: '200K',
    training: '1.6T tokens',
    commercial: true,
    score: '72.1',
    github: 'https://github.com/InternLM/InternLM',
    type: 'text',
    description: 'Shanghai AI Lab\'s powerful model with ultra-long context',
    features: ['200K context window', 'Strong reasoning', 'Multilingual', 'Efficient inference']
  },
  {
    name: 'Baichuan2-13B',
    params: '13B',
    context: '4K-32K',
    training: '2.6T tokens',
    commercial: true,
    score: '58.1',
    github: 'https://github.com/baichuan-inc/Baichuan2',
    type: 'text',
    description: 'Baichuan Intelligence\'s competitive model with strong performance',
    features: ['High-quality training', 'Balanced capabilities', 'Commercial license', 'Efficient scaling']
  },
  {
    name: 'DeepSeek-67B',
    params: '67B',
    context: '4K-128K',
    training: '2T tokens',
    commercial: true,
    score: '69.4',
    github: 'https://github.com/deepseek-ai/DeepSeek-V2',
    type: 'text',
    description: 'Cost-effective and efficient model from DeepSeek',
    features: ['Economic training', 'Strong coding', 'Multilingual', 'Scalable architecture']
  },
  {
    name: 'GLM-4-9B',
    params: '9B',
    context: '128K',
    training: '1.4T+ tokens',
    commercial: true,
    score: '78.2',
    github: 'https://github.com/THUDM/GLM-4',
    type: 'text',
    description: 'Latest GLM model with enhanced capabilities',
    features: ['Long context', 'Multimodal ready', 'Strong reasoning', 'Web browsing']
  },
  {
    name: 'CogVLM-17B',
    params: '17B',
    context: '2K',
    training: 'Visual + Text',
    commercial: true,
    score: 'N/A',
    github: 'https://github.com/THUDM/CogVLM',
    type: 'multimodal',
    description: 'Vision-language model for understanding images and text',
    features: ['Image understanding', 'Visual QA', 'Multimodal reasoning', 'High-resolution support']
  },
  {
    name: 'MiniCPM-2B',
    params: '2.4B',
    context: '28K',
    training: 'High-quality data',
    commercial: true,
    score: 'TBD',
    github: 'https://github.com/OpenBMB/MiniCPM',
    type: 'multimodal',
    description: 'Efficient multimodal model for edge deployment',
    features: ['Edge deployment', 'Multimodal understanding', 'Low resource usage', 'Fast inference']
  },
  {
    name: 'Yi-34B',
    params: '34B',
    context: '200K',
    training: '3T tokens',
    commercial: true,
    score: '68.5',
    github: 'https://github.com/01-ai/Yi',
    type: 'text',
    description: '01.AI\'s high-performance model with long context',
    features: ['Ultra-long context', 'Strong coding', 'Mathematical reasoning', 'Efficient training']
  },
  {
    name: 'XVERSE-65B',
    params: '65B',
    context: '16K-256K',
    training: '2.6T tokens',
    commercial: true,
    score: '71.2',
    github: 'https://github.com/xverse-ai/XVERSE-65B',
    type: 'text',
    description: 'XVERSE\'s multilingual model with strong capabilities',
    features: ['Multilingual support', 'Long context', 'Efficient inference', 'Scalable architecture']
  }
]

export const domainApplications: DomainApplication[] = [
  {
    domain: 'Medical',
    models: ['DoctorGLM', 'HuatuoGPT', 'XrayGLM', 'Med-ChatGLM'],
    description: 'LLMs specialized for healthcare applications including diagnosis, consultation, and medical research',
    useCases: ['Medical consultation', 'Diagnosis assistance', 'Treatment recommendations', 'Medical research', 'Health education'],
    keyChallenges: ['Medical accuracy', 'Privacy compliance', 'Regulatory requirements', 'Clinical validation'],
    datasets: ['Chinese medical dialogues', 'Medical textbooks', 'Clinical guidelines', 'Patient records']
  },
  {
    domain: 'Legal',
    models: ['LaWGPT', 'HanFei', 'ChatLaw', '夫子•明察'],
    description: 'Legal domain LLMs for contract analysis, case research, and legal consultation',
    useCases: ['Contract review', 'Legal research', 'Case analysis', 'Compliance checking', 'Legal drafting'],
    keyChallenges: ['Legal accuracy', 'Jurisdiction awareness', 'Case law integration', 'Ethical considerations'],
    datasets: ['Chinese legal texts', 'Court judgments', 'Legal contracts', 'Regulatory documents']
  },
  {
    domain: 'Financial',
    models: ['XuanYuan', 'FinGPT', 'Tongyi-Finance', 'DISC-FinLLM'],
    description: 'Financial LLMs for market analysis, risk assessment, and investment advice',
    useCases: ['Market analysis', 'Risk assessment', 'Investment advice', 'Financial reporting', 'Regulatory compliance'],
    keyChallenges: ['Market volatility', 'Financial accuracy', 'Regulatory compliance', 'Real-time data integration'],
    datasets: ['Financial reports', 'Market data', 'News articles', 'Economic indicators', 'Trading records']
  },
  {
    domain: 'Education',
    models: ['EduChat', '桃李(Taoli)', 'TuringMM', 'MathGLM'],
    description: 'Educational LLMs for teaching assistance, homework help, and personalized learning',
    useCases: ['Homework help', 'Concept explanation', 'Assessment', 'Personalized learning', 'Educational content creation'],
    keyChallenges: ['Educational accuracy', 'Age-appropriate content', 'Curriculum alignment', 'Learning assessment'],
    datasets: ['Textbooks', 'Educational materials', 'Student assessments', 'Learning analytics', 'Curriculum standards']
  },
  {
    domain: 'Technology',
    models: ['StarGLM', 'TransGPT', 'Mozi', 'ChatRWKV'],
    description: 'Technology-focused LLMs for software development, system analysis, and technical documentation',
    useCases: ['Code generation', 'Technical writing', 'System documentation', 'API development', 'Debugging assistance'],
    keyChallenges: ['Code correctness', 'Security considerations', 'Technology evolution', 'Version compatibility'],
    datasets: ['Code repositories', 'Technical documentation', 'API specifications', 'Bug reports', 'Development logs']
  },
  {
    domain: 'Customer Service',
    models: ['EcomGPT', 'Customer Service LLMs', 'ChatYuan'],
    description: 'Customer service LLMs for automated support, query resolution, and user assistance',
    useCases: ['Query resolution', 'Automated support', 'User guidance', 'Complaint handling', 'Product information'],
    keyChallenges: ['Context understanding', 'Emotional intelligence', 'Multi-turn conversations', 'Escalation handling'],
    datasets: ['Customer interactions', 'Support tickets', 'Product manuals', 'FAQ databases', 'User feedback']
  }
]

export const datasets: Dataset[] = [
  {
    name: 'WuDaoCorporaText',
    size: '570GB',
    type: 'pre-training',
    source: 'Beijing AI Institute',
    description: 'Large-scale high-quality dataset by Beijing AI Institute',
    format: 'Text',
    language: 'Chinese',
    quality: 'high'
  },
  {
    name: 'WanJuan-1.0',
    size: '2TB',
    type: 'pre-training',
    source: 'Shanghai AI Lab',
    description: 'Comprehensive multimodal dataset including text, images, and videos',
    format: 'Multimodal',
    language: 'Multilingual',
    quality: 'high'
  },
  {
    name: 'COIG',
    size: '100K+ samples',
    type: 'sft',
    source: 'BAAI',
    description: 'High-quality Chinese instruction dataset with diverse tasks',
    format: 'Instruction-response pairs',
    language: 'Chinese',
    quality: 'high'
  },
  {
    name: 'Firefly Train 1.1M',
    size: '1.1M samples',
    type: 'sft',
    source: 'YeungNLP',
    description: 'Comprehensive Chinese instruction tuning dataset with 23 categories',
    format: 'Instruction-response pairs',
    language: 'Chinese',
    quality: 'high'
  },
  {
    name: 'Huatuo-26M',
    size: '26M samples',
    type: 'sft',
    source: 'Medical',
    description: 'Large-scale medical Q&A dataset for healthcare applications',
    format: 'Medical Q&A pairs',
    language: 'Chinese',
    quality: 'high'
  },
  {
    name: 'CValues',
    size: '145K samples',
    type: 'preference',
    source: 'X-PLUG',
    description: 'Chinese value alignment dataset for safety and ethics',
    format: 'Preference pairs',
    language: 'Chinese',
    quality: 'high'
  },
  {
    name: 'Chinese Scientific Literature',
    size: '396K papers',
    type: 'domain-specific',
    source: 'CSL Dataset',
    description: 'Comprehensive Chinese scientific literature dataset',
    format: 'Paper metadata',
    language: 'Chinese',
    quality: 'high'
  },
  {
    name: 'Chinese Medical Dialogues',
    size: '792K dialogues',
    type: 'domain-specific',
    source: 'Medical',
    description: 'Large collection of Chinese medical consultation dialogues',
    format: 'Doctor-patient dialogues',
    language: 'Chinese',
    quality: 'high'
  }
]

export const frameworks: Framework[] = [
  {
    name: 'DeepSpeed Chat',
    type: 'training',
    description: 'Efficient RLHF training framework with optimized pipeline',
    features: ['SFT training', 'Reward model fine-tuning', 'RLHF optimization', 'ZeRO optimization', 'Multi-GPU support'],
    supportedModels: ['GPT-style models', 'LLaMA variants', 'Custom architectures'],
    keyBenefits: ['Faster training', 'Memory efficiency', 'Scalability', 'Easy deployment'],
    github: 'https://github.com/microsoft/DeepSpeed'
  },
  {
    name: 'LLaMA Efficient Tuning',
    type: 'fine-tuning',
    description: 'Comprehensive fine-tuning framework with PEFT support',
    features: ['LoRA', 'QLoRA', 'P-Tuning', 'Full parameter tuning', 'Multi-dataset support'],
    supportedModels: ['LLaMA', 'Alpaca', 'Vicuna', 'Custom models'],
    keyBenefits: ['Parameter efficiency', 'Memory savings', 'Fast convergence', 'Easy integration'],
    github: 'https://github.com/hiyouga/LLaMA-Efficient-Tuning'
  },
  {
    name: 'vLLM',
    type: 'inference',
    description: 'High-throughput inference engine for large language models',
    features: ['PagedAttention', 'Continuous batching', 'High throughput', 'Low latency', 'Multi-GPU support'],
    supportedModels: ['LLaMA', 'GPT', 'Custom transformers'],
    keyBenefits: ['Fast inference', 'Memory efficiency', 'Scalability', 'Easy deployment'],
    github: 'https://github.com/vllm-project/vllm'
  },
  {
    name: 'LMDeploy',
    type: 'deployment',
    description: 'Efficient model deployment toolkit with quantization support',
    features: ['Quantization', 'Turbomind engine', 'Multi-platform deployment', 'Performance optimization'],
    supportedModels: ['LLaMA', 'InternLM', 'Custom models'],
    keyBenefits: ['Easy deployment', 'Performance optimization', 'Platform compatibility', 'Resource efficiency'],
    github: 'https://github.com/InternLM/lmdeploy'
  },
  {
    name: 'OpenCompass',
    type: 'evaluation',
    description: 'Comprehensive evaluation platform for large language models',
    features: ['50+ datasets', '30K+ questions', 'Distributed evaluation', 'Custom metrics', 'Leaderboard'],
    supportedModels: ['Most LLM architectures'],
    keyBenefits: ['Comprehensive evaluation', 'Standardized metrics', 'Easy comparison', 'Research insights'],
    github: 'https://github.com/InternLM/opencompass'
  },
  {
    name: 'ChatGLM Efficient Tuning',
    type: 'fine-tuning',
    description: 'Specialized fine-tuning framework for ChatGLM models',
    features: ['LoRA tuning', 'P-Tuning', 'Model merging', 'Dataset preprocessing'],
    supportedModels: ['ChatGLM-6B', 'ChatGLM2-6B', 'ChatGLM3-6B'],
    keyBenefits: ['Optimized for ChatGLM', 'Memory efficient', 'Fast training', 'Easy integration'],
    github: 'https://github.com/hiyouga/ChatGLM-Efficient-Tuning'
  },
  {
    name: 'FastLLM',
    type: 'inference',
    description: 'Cross-platform high-performance LLM inference library',
    features: ['Multi-platform support', 'Quantization', 'CPU/GPU acceleration', 'Model conversion'],
    supportedModels: ['ChatGLM', 'Moss', 'Baichuan', 'Custom models'],
    keyBenefits: ['Cross-platform compatibility', 'High performance', 'Easy integration', 'Resource efficiency'],
    github: 'https://github.com/ztxz16/fastllm'
  }
]

export const benchmarks: Benchmark[] = [
  {
    name: 'C-Eval',
    coverage: '52 subjects',
    questions: '13,948',
    focus: 'Chinese knowledge evaluation',
    description: 'Comprehensive Chinese knowledge evaluation covering middle school to PhD level',
    leaderboard: 'Available',
    metrics: ['Accuracy', 'Subject-wise performance', 'Difficulty analysis'],
    limitations: ['Multiple choice format', 'No open-ended questions']
  },
  {
    name: 'CMMLU',
    coverage: '67 subjects',
    questions: '11,617',
    focus: 'China-specific tasks',
    description: 'Chinese Multi-task Language Understanding benchmark',
    leaderboard: 'Available',
    metrics: ['Accuracy', 'Task-specific performance', 'Cultural relevance'],
    limitations: ['Limited to Chinese context', 'Multiple choice format']
  },
  {
    name: 'OpenCompass',
    coverage: '50+ datasets',
    questions: '30,000+',
    focus: 'Comprehensive evaluation',
    description: 'Comprehensive evaluation platform with distributed testing',
    leaderboard: 'Available',
    metrics: ['Multiple metrics', 'Dataset-specific scores', 'Overall ranking'],
    limitations: ['Complex setup required', 'Resource intensive']
  },
  {
    name: 'GAOKAO-Bench',
    coverage: 'Chinese college entrance exam',
    questions: '1,181 questions',
    focus: 'Educational assessment',
    description: 'Based on Chinese college entrance examination questions',
    leaderboard: 'Available',
    metrics: ['Accuracy', 'Subject performance', 'Difficulty analysis'],
    limitations: ['Education-specific', 'Chinese-focused']
  },
  {
    name: 'AGIEval',
    coverage: '20 official exams',
    questions: 'Various',
    focus: 'Professional certifications',
    description: 'Based on professional certification examinations',
    leaderboard: 'Available',
    metrics: ['Pass rates', 'Subject performance', 'Competency levels'],
    limitations: ['Professional focus', 'Limited scope']
  },
  {
    name: 'Xiezhi',
    coverage: '13 academic disciplines',
    questions: '249K questions',
    focus: 'Academic knowledge',
    description: 'Comprehensive academic knowledge assessment across disciplines',
    leaderboard: 'Available',
    metrics: ['Subject accuracy', 'Difficulty levels', 'Knowledge breadth'],
    limitations: ['Academic focus', 'Large scale']
  }
]

// Utility functions
export const getModelsByType = (type: 'text' | 'multimodal' | 'all' = 'all') => {
  return type === 'all' ? llmModels : llmModels.filter(model => model.type === type)
}

export const getModelsBySize = (size: 'small' | 'medium' | 'large' | 'all' = 'all') => {
  const sizeMap = {
    small: (params: string) => parseInt(params.replace('B', '')) <= 7,
    medium: (params: string) => {
      const num = parseInt(params.replace('B', ''))
      return num >= 8 && num <= 34
    },
    large: (params: string) => parseInt(params.replace('B', '')) >= 35
  }

  return size === 'all' ? llmModels : llmModels.filter(model =>
    sizeMap[size](model.params)
  )
}

export const getTopModels = (limit: number = 5, metric: 'score' | 'params' = 'score') => {
  return [...llmModels]
    .filter(model => model.score !== 'N/A' && model.score !== 'TBD')
    .sort((a, b) => {
      if (metric === 'score') {
        return parseFloat(b.score) - parseFloat(a.score)
      } else {
        return parseInt(b.params.replace('B', '')) - parseInt(a.params.replace('B', ''))
      }
    })
    .slice(0, limit)
}

export const getBenchmarksByFocus = (focus: string) => {
  return benchmarks.filter(benchmark =>
    benchmark.focus.toLowerCase().includes(focus.toLowerCase())
  )
}
