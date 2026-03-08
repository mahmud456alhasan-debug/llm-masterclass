export interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What does LLM stand for?",
    options: [
      "Large Language Learning",
      "Large Language Model",
      "Linear Logic Model",
      "Language Learning Machine"
    ],
    correctAnswer: 1,
    explanation: "LLM stands for Large Language Model, which is a type of artificial intelligence trained on vast amounts of text data to understand and generate human language.",
    difficulty: "easy",
    category: "Introduction"
  },
  {
    id: 2,
    question: "Which architecture revolutionized LLMs in 2017?",
    options: [
      "Recurrent Neural Networks (RNN)",
      "Long Short-Term Memory (LSTM)",
      "Transformer",
      "Convolutional Neural Network (CNN)"
    ],
    correctAnswer: 2,
    explanation: "The Transformer architecture was introduced in the seminal paper 'Attention Is All You Need' in 2017, and it became the foundation for all modern LLMs.",
    difficulty: "easy",
    category: "Algorithm"
  },
  {
    id: 3,
    question: "What is tokenization in the context of LLMs?",
    options: [
      "A method to encrypt text",
      "The process of breaking text into smaller units called tokens",
      "A technique to compress model size",
      "A way to translate between languages"
    ],
    correctAnswer: 1,
    explanation: "Tokenization is the process of converting raw text into smaller units (tokens) that the model can process. Tokens can be words, subwords, or characters.",
    difficulty: "easy",
    category: "Background"
  },
  {
    id: 4,
    question: "What is the purpose of embeddings in LLMs?",
    options: [
      "To reduce memory usage",
      "To convert text into numerical vector representations",
      "To encrypt sensitive data",
      "To compress the model"
    ],
    correctAnswer: 1,
    explanation: "Embeddings convert text tokens into dense numerical vectors that capture semantic meaning, allowing the model to perform mathematical operations on text.",
    difficulty: "medium",
    category: "Background"
  },
  {
    id: 5,
    question: "What is the softmax function used for in LLMs?",
    options: [
      "To speed up training",
      "To convert model outputs into probability distributions",
      "To reduce overfitting",
      "To compress the model"
    ],
    correctAnswer: 1,
    explanation: "The softmax function converts the model's output logits into probabilities that sum to 1, allowing us to select the most likely next token.",
    difficulty: "medium",
    category: "Math"
  },
  {
    id: 6,
    question: "What is 'attention' mechanism in Transformers?",
    options: [
      "A way to focus on specific parts of input when generating output",
      "A method to reduce model size",
      "A regularization technique",
      "A type of activation function"
    ],
    correctAnswer: 0,
    explanation: "Attention allows the model to weigh the importance of different parts of the input when generating each output, similar to how humans focus on relevant information.",
    difficulty: "medium",
    category: "Algorithm"
  },
  {
    id: 7,
    question: "What are Query, Key, and Value vectors in self-attention?",
    options: [
      "Types of neurons",
      "Different types of tokens",
      "Learned representations used to compute attention weights",
      "Layers in the neural network"
    ],
    correctAnswer: 2,
    explanation: "Query, Key, and Value are learned linear projections of the input embeddings. Attention is computed by comparing Queries to Keys to determine how much 'attention' to pay to each Value.",
    difficulty: "hard",
    category: "Algorithm"
  },
  {
    id: 8,
    question: "What is the context window in LLMs?",
    options: [
      "The size of the model",
      "The maximum number of tokens the model can process at once",
      "The number of layers in the model",
      "The vocabulary size"
    ],
    correctAnswer: 1,
    explanation: "The context window is the maximum number of tokens (words/subwords) that an LLM can consider when making predictions. Modern LLMs have context windows ranging from 2K to 100K+ tokens.",
    difficulty: "easy",
    category: "Background"
  },
  {
    id: 9,
    question: "What is next-token prediction?",
    options: [
      "A technique to predict the next word in a sequence",
      "A method to skip tokens",
      "A type of tokenization",
      "A compression algorithm"
    ],
    correctAnswer: 0,
    explanation: "Next-token prediction is the core training objective where the model learns to predict the most likely next token given the previous tokens in a sequence.",
    difficulty: "easy",
    category: "Math"
  },
  {
    id: 10,
    question: "What is positional encoding in Transformers?",
    options: [
      "A way to encrypt the model",
      "Injecting information about token positions into the model",
      "A type of embedding",
      "A regularization technique"
    ],
    correctAnswer: 1,
    explanation: "Positional encoding adds information about the position of each token in the sequence, since the Transformer architecture doesn't inherently understand order like RNNs do.",
    difficulty: "medium",
    category: "Algorithm"
  },
  {
    id: 11,
    question: "What is cross-entropy loss used for in LLM training?",
    options: [
      "To measure and minimize the difference between predicted and actual token probabilities",
      "To encrypt the model",
      "To speed up inference",
      "To reduce model size"
    ],
    correctAnswer: 0,
    explanation: "Cross-entropy loss measures the difference between the model's predicted probability distribution and the actual distribution (one-hot encoded true token). The model is trained to minimize this loss.",
    difficulty: "medium",
    category: "Math"
  },
  {
    id: 12,
    question: "What is fine-tuning in the context of LLMs?",
    options: [
      "Reducing model size",
      "Training a pre-trained model on a specific task or domain",
      "Encrypting the model",
      "A type of tokenization"
    ],
    correctAnswer: 1,
    explanation: "Fine-tuning is the process of taking a pre-trained LLM and continuing training on a specific dataset or task to adapt its knowledge and capabilities.",
    difficulty: "easy",
    category: "Background"
  },
  {
    id: 13,
    question: "What is temperature in LLM text generation?",
    options: [
      "The processing speed",
      "A parameter that controls randomness in token selection",
      "The model size",
      "The number of layers"
    ],
    correctAnswer: 1,
    explanation: "Temperature controls the randomness of output. Lower temperature (e.g., 0.1) makes output more deterministic, while higher temperature (e.g., 1.0) makes it more creative/random.",
    difficulty: "medium",
    category: "Process"
  },
  {
    id: 14,
    question: "What is 'beam search' in text generation?",
    options: [
      "A type of neural network layer",
      "A decoding strategy that maintains multiple candidate sequences",
      "A tokenization method",
      "A type of embedding"
    ],
    correctAnswer: 1,
    explanation: "Beam search is a decoding strategy that keeps track of multiple (beam width) partial sequences at each step, selecting the most promising ones, rather than just greedy decoding.",
    difficulty: "hard",
    category: "Process"
  },
  {
    id: 15,
    question: "What is the difference between encoder and decoder in Transformers?",
    options: [
      "There is no difference",
      "Encoder processes input, decoder generates output",
      "Decoder processes input, encoder generates output",
      "They are the same thing called differently"
    ],
    correctAnswer: 1,
    explanation: "In the Transformer architecture, the encoder processes and encodes the input sequence, while the decoder generates the output sequence token by token.",
    difficulty: "medium",
    category: "Algorithm"
  },
  {
    id: 16,
    question: "What is a feed-forward network in a Transformer?",
    options: [
      "A type of attention mechanism",
      "A simple neural network layer that processes each position independently",
      "A method to connect to the internet",
      "A way to reduce model size"
    ],
    correctAnswer: 1,
    explanation: "The feed-forward network (FFN) is a simple neural network (usually two linear layers with activation) that processes each position in the sequence independently.",
    difficulty: "medium",
    category: "Algorithm"
  },
  {
    id: 17,
    question: "What is 'inference' in LLMs?",
    options: [
      "The training process",
      "Using a trained model to generate predictions",
      "A type of mathematical operation",
      "A way to compress models"
    ],
    correctAnswer: 1,
    explanation: "Inference is the process of using a trained LLM to generate text or make predictions, as opposed to training which is the learning phase.",
    difficulty: "easy",
    category: "Process"
  },
  {
    id: 18,
    question: "What is 'hallucination' in LLM outputs?",
    options: [
      "When the model generates creative text",
      "When the model generates factually incorrect or nonsensical information",
      "A type of error message",
      "A training technique"
    ],
    correctAnswer: 1,
    explanation: "Hallucination occurs when an LLM generates content that appears confident but is factually incorrect, misleading, or nonsensical. It's a major challenge in LLM development.",
    difficulty: "easy",
    category: "Background"
  },
  {
    id: 19,
    question: "What is 'prompt engineering'?",
    options: [
      "Writing code for LLMs",
      "Crafting input prompts to get better outputs from LLMs",
      "Building LLM models",
      "Training LLMs"
    ],
    correctAnswer: 1,
    explanation: "Prompt engineering is the practice of designing and optimizing input prompts to effectively communicate with LLMs and achieve desired outputs.",
    difficulty: "easy",
    category: "Background"
  },
  {
    id: 20,
    question: "What is 'few-shot learning' in LLMs?",
    options: [
      "Training with very small datasets",
      "Providing a few examples in the prompt to guide the model's response",
      "Reducing the model size",
      "A type of attention mechanism"
    ],
    correctAnswer: 1,
    explanation: "Few-shot learning allows LLMs to perform new tasks by providing a few examples within the prompt, without requiring traditional training on that specific task.",
    difficulty: "medium",
    category: "Background"
  },
  {
    id: 21,
    question: "What is the purpose of the vocabulary in LLMs?",
    options: [
      "To store training data",
      "The set of all possible tokens the model can recognize and generate",
      "To reduce memory usage",
      "To speed up training"
    ],
    correctAnswer: 1,
    explanation: "The vocabulary is the fixed set of unique tokens (words, subwords, or characters) that an LLM can process and generate. Everything outside the vocabulary must be tokenized.",
    difficulty: "easy",
    category: "Background"
  },
  {
    id: 22,
    question: "What is 'greedy decoding' in text generation?",
    options: [
      "A decoding strategy that always picks the highest probability token",
      "A type of training algorithm",
      "A compression technique",
      "A type of attention"
    ],
    correctAnswer: 0,
    explanation: "Greedy decoding is the simplest text generation strategy where at each step, the model selects the token with the highest probability. It's fast but may not produce optimal results.",
    difficulty: "medium",
    category: "Process"
  },
  {
    id: 23,
    question: "What is 'model scaling' in LLM development?",
    options: [
      "Reducing model size for mobile devices",
      "Increasing model size (parameters) to improve capabilities",
      "Changing the model architecture",
      "A type of quantization"
    ],
    correctAnswer: 1,
    explanation: "Model scaling involves increasing the number of parameters, training data, and computation to improve model capabilities, as demonstrated by the scaling laws discovered in LLM research.",
    difficulty: "medium",
    category: "Introduction"
  },
  {
    id: 24,
    question: "What is 'quantization' in LLM optimization?",
    options: [
      "A training technique",
      "Reducing model precision (e.g., from 32-bit to 8-bit) to reduce size and speed up inference",
      "A type of attention mechanism",
      "A data augmentation technique"
    ],
    correctAnswer: 1,
    explanation: "Quantization reduces the numerical precision of model weights (e.g., from float32 to int8), which can significantly reduce model size and improve inference speed with minimal quality loss.",
    difficulty: "hard",
    category: "Process"
  },
  {
    id: 25,
    question: "What is 'RLHF' (Reinforcement Learning from Human Feedback)?",
    options: [
      "A new type of neural network",
      "A technique to align LLMs with human preferences using reinforcement learning",
      "A tokenization method",
      "A type of attention mechanism"
    ],
    correctAnswer: 1,
    explanation: "RLHF is a training technique where human feedback is used to create a reward model that guides the fine-tuning of the LLM to produce more helpful and safe outputs.",
    difficulty: "hard",
    category: "Algorithm"
  },
  {
    id: 26,
    question: "What is the difference between 'training' and 'fine-tuning'?",
    options: [
      "They are the same thing",
      "Training is from scratch, fine-tuning continues training on a pre-trained model",
      "Fine-tuning is faster than training",
      "Training uses less data"
    ],
    correctAnswer: 1,
    explanation: "Training starts from random weights and learns from scratch, while fine-tuning takes a pre-trained model and continues training on a specific dataset to adapt its knowledge.",
    difficulty: "easy",
    category: "Process"
  }
]
