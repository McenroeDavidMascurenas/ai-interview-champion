// AI topics. Each topic: id, group, title, tag, tagline, analogy, summary,
// concepts [[term, definition]], flow [steps], useCases [], interview [[q, a]],
// pitfalls [], related [ids], links [[label, url]]
window.TOPICS = window.TOPICS || [];
window.TOPICS.push(
{
  id: "genai", group: "AI", title: "Generative AI (GenAI)", tag: "GenAI",
  tagline: "AI that creates new content — text, images, code, audio — instead of only classifying or predicting.",
  analogy: "Traditional AI is a judge that says 'spam / not spam'. Generative AI is an author that writes the email for you.",
  summary: "Generative AI models learn the statistical patterns of huge datasets and then sample new outputs that look like that data. Text models (LLMs) predict the next token; image models (diffusion) learn to turn noise into pictures. In the enterprise, GenAI is used for drafting, summarising, search/Q&A over documents, code generation and conversational assistants. The value comes less from the model itself and more from grounding it in company data, wrapping it in governance, and embedding it in a real workflow.",
  concepts: [
    ["Foundation model", "A large model pre-trained on broad data that can be adapted to many tasks (GPT, Claude, Llama, Phi, Mistral)."],
    ["Modality", "Type of data handled: text, image, audio, video, code. Multimodal models handle several at once."],
    ["Prompt", "The instruction + context you give the model. Prompt engineering = designing prompts for reliable output."],
    ["Grounding", "Supplying trusted facts (documents, database rows) in the prompt so answers are based on data, not memory. RAG is the main pattern."],
    ["Hallucination", "Fluent but false output. Reduced (not eliminated) by grounding, citations, lower temperature and evaluation."],
    ["Fine-tuning", "Further training a model on your examples to change style/format/behaviour. Use after prompting + RAG are exhausted."],
    ["Diffusion model", "Image/video generator that learns to remove noise step by step (DALL·E, Stable Diffusion)."],
    ["Copilot pattern", "GenAI assists a human inside their tool; the human stays in control and approves output."],
    ["Agentic AI", "GenAI that can plan and take actions via tools, not just produce text. See AI Agents."]
  ],
  flow: [
    "Identify a task where content creation / summarisation / Q&A costs time",
    "Choose a model (capability vs cost vs latency vs data residency)",
    "Design the prompt and ground it with enterprise data (RAG)",
    "Add guardrails: content safety filters, PII masking, access control",
    "Evaluate: groundedness, relevance, safety, cost per answer",
    "Deploy into the user's workflow (Teams, Outlook, ServiceNow, portal) and monitor"
  ],
  useCases: [
    "Summarise ServiceNow incidents and suggest resolution notes",
    "Draft RFP / proposal answers from past bids",
    "Ask-the-policy chatbot over HR / IT knowledge base",
    "Generate SQL or DAX from natural language for analysts",
    "Meeting recap and action items (M365 Copilot in Teams)"
  ],
  interview: [
    ["How is GenAI different from traditional ML?", "Traditional ML is mostly discriminative — it maps inputs to a label or number (churn yes/no, sales forecast) and is trained per task on labelled data. GenAI models are generative, pre-trained once on massive unlabelled data, and reused for many tasks through prompting. ML is precise and measurable; GenAI is flexible but needs grounding and evaluation to be trustworthy."],
    ["How would you reduce hallucinations in an enterprise assistant?", "Ground answers with RAG over curated sources, instruct the model to answer only from the context and say 'I don't know' otherwise, require citations, keep temperature low, evaluate groundedness with an automated test set, and keep a human in the loop for high-impact outputs."],
    ["Prompting vs RAG vs fine-tuning — when do you use each?", "Start with prompt engineering (cheapest). Add RAG when the model needs knowledge it does not have or that changes often. Fine-tune only when you need a consistent style/format/behaviour that prompting cannot achieve, or to make a smaller model cheaper for a narrow task. RAG adds knowledge; fine-tuning changes behaviour."],
    ["What are the main risks of GenAI for a company?", "Data leakage (sensitive data in prompts), hallucination, IP/copyright, bias, prompt injection, over-reliance by users, uncontrolled cost, and regulatory exposure (EU AI Act, GDPR). Mitigate via Responsible AI governance, access control, content filters, logging and user training."],
    ["How do you measure the value of a GenAI use case?", "Define a baseline KPI before launch (time per task, tickets resolved, first-contact resolution, CSAT) and measure after: time saved × volume × cost rate, adoption (weekly active users), quality (acceptance rate of suggestions) and cost per interaction."]
  ],
  pitfalls: [
    "Starting with the technology instead of a business problem",
    "No evaluation dataset — you cannot tell if a change made it better or worse",
    "Assuming the model 'knows' company data without grounding",
    "Ignoring token cost at scale",
    "Pilots that never reach production (no owner, no integration, no change management)"
  ],
  related: ["llm", "rag", "agents", "governance", "usecases", "foundry"],
  links: [
    ["Microsoft Learn — Fundamentals of Generative AI", "https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/"],
    ["Microsoft AI-900 learning path", "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/"]
  ]
},
{
  id: "llm", group: "AI", title: "Large Language Models (LLM)", tag: "LLM",
  tagline: "Neural networks (Transformers) trained on massive text to predict the next token — the engine behind ChatGPT, Copilot and Claude.",
  analogy: "An extremely well-read autocomplete: it has read most of the internet and predicts the most sensible next word, one word at a time.",
  summary: "An LLM is a Transformer neural network with billions of parameters. Text is split into tokens, converted to vectors (embeddings), passed through attention layers that let each token 'look at' every other token, and the model outputs a probability for the next token. Pre-training teaches language and world knowledge; instruction tuning and RLHF teach it to follow instructions and be helpful and safe. Key operational knobs are context window, temperature, max tokens, and model size (cost/latency trade-off).",
  concepts: [
    ["Token", "A chunk of text (~4 characters / ~0.75 words in English). Billing, limits and context are measured in tokens."],
    ["Context window", "Maximum tokens (prompt + response) the model can consider in one call, e.g. 128k–1M+."],
    ["Transformer / Attention", "Architecture where self-attention weighs how relevant each token is to every other token — enables long-range understanding."],
    ["Embedding", "A vector of numbers representing meaning. Similar meanings → nearby vectors. Foundation of semantic search and RAG."],
    ["Temperature / top-p", "Randomness controls. Low (0–0.3) = deterministic, factual. High (0.7–1) = creative."],
    ["System prompt", "Hidden instruction defining role, rules and tone for the assistant."],
    ["Few-shot prompting", "Including examples of input→output in the prompt to steer format."],
    ["Chain-of-thought / reasoning models", "Models that think step-by-step before answering (o-series, extended thinking). Better for complex logic, slower and costlier."],
    ["SLM", "Small Language Model (e.g. Phi) — cheaper, faster, can run on-device; good for narrow tasks."],
    ["RLHF", "Reinforcement Learning from Human Feedback — aligns the model's behaviour with human preferences."],
    ["Function / tool calling", "Model outputs a structured call (JSON) to an API you define; basis for agents."]
  ],
  flow: [
    "Input text → tokenizer → token IDs",
    "Token IDs → embeddings + positional information",
    "Stacked Transformer layers apply self-attention and feed-forward networks",
    "Output layer → probability distribution over vocabulary",
    "Sampling (temperature/top-p) picks next token; repeat until stop"
  ],
  useCases: [
    "Summarisation, translation, classification, extraction (e.g. invoice fields to JSON)",
    "Conversational assistants and agents",
    "Code generation and explanation",
    "Natural-language-to-SQL / DAX"
  ],
  interview: [
    ["Explain an LLM to a business stakeholder in 30 seconds.", "It's a model that has read an enormous amount of text and learned to predict the next word very well. That lets it write, summarise, answer questions and follow instructions. It doesn't 'look things up' by default — so for company questions we connect it to our own documents, and we check its answers because it can be confidently wrong."],
    ["What is a token and why does it matter?", "The unit the model reads and writes. It drives cost (priced per 1k/1M tokens), latency, and what fits in the context window. Long documents must be chunked or summarised."],
    ["How do you choose between models?", "Balance quality on your eval set, latency, cost per 1M tokens, context window, modality, data residency/compliance and deployment options (serverless vs provisioned throughput). Often: a large reasoning model for hard tasks, a small/cheap model for routing and simple tasks."],
    ["What limits LLMs?", "Knowledge cut-off, hallucination, no guaranteed determinism, limited context, sensitivity to prompt wording, prompt-injection vulnerability, and cost at scale."],
    ["What's the difference between embeddings models and chat models?", "Embedding models output a vector representing meaning (used for search/similarity/clustering). Chat/completion models output text. RAG uses both: embeddings to find relevant chunks, chat model to write the answer."]
  ],
  pitfalls: [
    "Stuffing the whole context window — quality degrades ('lost in the middle') and cost soars",
    "Using high temperature for factual tasks",
    "Not versioning prompts like code",
    "Treating model output as deterministic in automated pipelines without validation"
  ],
  related: ["genai", "rag", "agents", "azureopenai", "foundry"],
  links: [
    ["Azure OpenAI — Prompt engineering techniques", "https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/prompt-engineering"],
    ["The Illustrated Transformer (Jay Alammar)", "https://jalammar.github.io/illustrated-transformer/"]
  ]
},
{
  id: "agents", group: "AI", title: "AI Agents & Agent-to-Agent (A2A)", tag: "Agents",
  tagline: "LLMs that reason, plan and act through tools — and multi-agent systems where specialised agents collaborate.",
  analogy: "A chatbot answers questions. An agent is a junior employee: given a goal, it plans steps, uses systems (email, ServiceNow, SQL), checks results and reports back. A2A is how several such employees from different teams talk to each other.",
  summary: "An AI agent = LLM (brain) + instructions (role/goal) + tools (APIs, search, code) + memory (conversation and long-term) + an orchestration loop (reason → act → observe → repeat). Multi-agent architectures split work across specialised agents coordinated by an orchestrator/supervisor. Two open protocols matter: MCP (Model Context Protocol, by Anthropic) standardises how an agent connects to tools and data; A2A (Agent2Agent, originally from Google, now under the Linux Foundation) standardises how agents from different vendors discover each other (Agent Cards), delegate tasks and exchange results. Microsoft Copilot Studio and Foundry Agent Service support both.",
  concepts: [
    ["ReAct loop", "Reason → Act (call a tool) → Observe result → repeat until goal met. Core agent pattern."],
    ["Tools / actions", "Functions the agent can call: APIs, connectors, search, code interpreter, other agents."],
    ["Memory", "Short-term (conversation/thread state) and long-term (stored facts, user preferences, vector store)."],
    ["Orchestrator / supervisor", "An agent that routes sub-tasks to specialist agents and composes the final answer."],
    ["MCP", "Model Context Protocol — open standard for plugging tools/data sources into any agent. 'USB-C for AI tools'. Agent ↔ tool."],
    ["A2A protocol", "Agent2Agent — open standard for agents to communicate across platforms: Agent Card (capabilities JSON), tasks, messages, artifacts, streaming. Agent ↔ agent."],
    ["Agent Card", "A JSON document (usually /.well-known/agent.json) describing an agent's skills, endpoint and auth — used for discovery in A2A."],
    ["Patterns", "Sequential, concurrent (fan-out/fan-in), group chat, handoff, magentic/planner. Choose the simplest that works."],
    ["Human-in-the-loop", "Agent pauses for human approval before high-impact actions (payments, closing tickets, emails)."],
    ["Autonomy levels", "Assistive (suggests) → semi-autonomous (acts with approval) → autonomous (acts within guardrails)."]
  ],
  flow: [
    "User goal arrives: 'Onboard new employee Maria'",
    "Orchestrator agent plans: create accounts, order laptop, schedule training",
    "Delegates via A2A: IT agent (ServiceNow), HR agent (Workday), Facilities agent",
    "Each agent calls its tools via MCP/connectors and returns results",
    "Orchestrator verifies, asks human approval where required, reports back",
    "All steps logged for audit; evaluation measures task success rate"
  ],
  useCases: [
    "IT service desk agent that triages, resolves password resets and escalates in ServiceNow",
    "Procurement agent checking contracts, budgets and raising POs",
    "Research agent that searches internal KMS + web, then drafts a brief",
    "Data-analyst agent that writes SQL, runs it on Databricks, and builds a chart"
  ],
  interview: [
    ["What's the difference between a chatbot, a copilot and an agent?", "A chatbot answers from scripts or knowledge. A copilot assists a human inside a tool; the human decides. An agent pursues a goal autonomously — it plans, calls tools and takes actions, with humans supervising or approving critical steps."],
    ["MCP vs A2A?", "Complementary. MCP connects one agent to tools and data (vertical). A2A connects agents to other agents, even across vendors (horizontal) — discovery via Agent Cards, task delegation, and results exchange. A typical enterprise uses MCP for tools and A2A for cross-platform agent collaboration."],
    ["When should you use multiple agents instead of one?", "When tasks need different expertise, tools, security boundaries or owners (e.g. HR vs IT), or a single prompt becomes too large to be reliable. Otherwise keep one agent — multi-agent adds latency, cost and debugging complexity."],
    ["How do you govern agents?", "Agent inventory/registry, identity per agent (least-privilege permissions, e.g. Entra Agent ID), approval for high-risk actions, tracing and logging of every tool call, evaluations for task success and safety, cost budgets, kill-switch, and regular review — e.g. ServiceNow AI Control Tower, Microsoft Agent 365 / Purview."],
    ["What are the main risks of agents?", "Prompt injection through tool outputs, excessive permissions, runaway loops/cost, wrong actions with real side effects, and lack of accountability. Mitigate with least privilege, validation, human approval, rate limits and observability."]
  ],
  pitfalls: [
    "Building multi-agent systems when one agent + good tools would work",
    "Giving agents broad admin permissions",
    "No tracing — impossible to debug why an agent did something",
    "Trusting tool/web content as instructions (indirect prompt injection)"
  ],
  related: ["llm", "copilot", "foundry", "servicenow", "governance", "kms"],
  links: [
    ["A2A protocol specification", "https://a2a-protocol.org/"],
    ["Model Context Protocol", "https://modelcontextprotocol.io/"],
    ["Foundry Agent Service overview", "https://learn.microsoft.com/en-us/azure/foundry/agents/overview"],
    ["AI agent orchestration patterns (Azure Architecture Center)", "https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/ai-agent-design-patterns"]
  ]
},
{
  id: "kms", group: "AI", title: "Knowledge Management Systems (KMS)", tag: "KMS",
  tagline: "How organisations capture, organise, share and reuse knowledge — now the fuel for GenAI and RAG.",
  analogy: "A company library with a librarian. The better the books are curated, labelled and up to date, the better the librarian (now an AI) can answer questions.",
  summary: "A KMS manages explicit knowledge (documents, articles, FAQs, runbooks) and helps capture tacit knowledge (expertise in people's heads). Examples: SharePoint, Confluence, ServiceNow Knowledge Base, Microsoft Viva Topics successor features in M365 Copilot. In the GenAI era, KMS quality directly determines AI answer quality: RAG-based assistants retrieve from the KMS, so ownership, freshness, metadata and permissions matter more than ever.",
  concepts: [
    ["Explicit vs tacit knowledge", "Explicit = written down. Tacit = experience/know-how; captured via interviews, communities of practice, post-mortems."],
    ["Knowledge lifecycle", "Create → Review/approve → Publish → Use → Feedback → Update → Retire."],
    ["Taxonomy & metadata", "Controlled categories/tags (product, region, audience) enabling search, filtering and security trimming."],
    ["Ontology / knowledge graph", "Entities and relationships (Customer —owns→ Contract). Enables GraphRAG and reasoning."],
    ["KCS (Knowledge-Centered Service)", "Service-desk methodology: capture knowledge while solving tickets, reuse and improve it. Used in ServiceNow."],
    ["Content owner & SLA", "Every article has an owner and review date — stale content = wrong AI answers."],
    ["Permission-aware retrieval", "AI must only return content the user is allowed to see (security trimming)."]
  ],
  flow: [
    "Capture knowledge (articles, resolved tickets, documents, expert Q&A)",
    "Structure: templates, taxonomy, metadata, owners",
    "Govern: review workflow, versioning, expiry dates",
    "Index for search and vector retrieval (Azure AI Search, Copilot connectors)",
    "Consume via portal, Teams, chatbot/agent with citations",
    "Measure: search success, article usefulness, deflection rate; feed back"
  ],
  useCases: [
    "Self-service IT/HR portal with AI answers → ticket deflection",
    "Engineering runbooks available to on-call agents",
    "Sales enablement: past proposals and case studies searchable by AI"
  ],
  interview: [
    ["Why is KMS important for GenAI?", "RAG assistants are only as good as the knowledge they retrieve. Duplicate, outdated or conflicting content produces wrong answers. Good KMS = curated sources, metadata, owners, freshness, and permissions — which makes AI accurate and safe."],
    ["What KPIs would you track for a KMS?", "Self-service/deflection rate, search success rate (click or answer accepted), zero-result searches, article reuse, article freshness (% reviewed in last 12 months), time to publish, and AI answer groundedness/user feedback."],
    ["How would you prepare a knowledge base for Copilot?", "Inventory sources, remove duplicates/obsolete content, fix permissions (oversharing!), apply sensitivity labels, add metadata, assign owners, and set up review cycles before enabling Copilot or RAG."]
  ],
  pitfalls: [
    "Oversharing: AI surfaces documents users technically had access to but shouldn't",
    "No ownership → knowledge decays",
    "Migrating everything instead of curating"
  ],
  related: ["rag", "copilot", "servicenow", "datagov", "dataquality"],
  links: [
    ["Consortium for Service Innovation — KCS", "https://www.serviceinnovation.org/kcs/"],
    ["Microsoft 365 Copilot — data readiness / oversharing", "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-ai-security"]
  ]
},
{
  id: "rag", group: "AI", title: "Retrieval Augmented Generation (RAG)", tag: "RAG",
  tagline: "Retrieve relevant company content first, then let the LLM answer using only that content — with citations.",
  analogy: "An open-book exam: instead of answering from memory, the student first finds the right pages, then writes the answer and cites them.",
  summary: "RAG combines a retriever (search engine over your data) with a generator (LLM). Documents are split into chunks, converted to embeddings and stored in a vector index (e.g. Azure AI Search). At question time, the query is embedded, similar chunks are retrieved (often hybrid: keyword + vector + semantic re-ranking), and passed to the LLM with instructions to answer only from them and cite sources. It keeps knowledge up to date without retraining and enforces permissions at retrieval time. Advanced variants: agentic RAG (the agent decides what/when to search, multiple queries), GraphRAG (knowledge graph), and query rewriting.",
  concepts: [
    ["Ingestion", "Load → clean → chunk → embed → index. Runs as a pipeline (e.g. Data Factory/Databricks → AI Search)."],
    ["Chunking", "Splitting documents into passages (e.g. 300–1000 tokens with overlap). Structure-aware chunking (by heading) usually wins."],
    ["Embeddings", "Vector representation of each chunk and the query (e.g. text-embedding-3-large)."],
    ["Vector database / index", "Stores vectors for similarity search: Azure AI Search, Cosmos DB, Databricks Vector Search, pgvector."],
    ["Hybrid search", "Keyword (BM25) + vector search merged (RRF). Better recall for names, codes, acronyms."],
    ["Semantic re-ranker", "Second-stage model that re-orders top results by relevance."],
    ["Security trimming", "Filter results by user's permissions (ACL metadata) before sending to the LLM."],
    ["Groundedness", "Is the answer supported by retrieved context? Key RAG evaluation metric along with relevance and retrieval recall."],
    ["Agentic RAG", "An agent decomposes a question into sub-queries, searches iteratively, and reasons over results."],
    ["GraphRAG", "Builds a knowledge graph of entities/relations for questions needing connections across documents."]
  ],
  flow: [
    "INGEST: Collect documents (SharePoint, PDFs, KB articles, DB rows)",
    "Chunk + enrich (metadata, OCR, tables) and create embeddings",
    "Store in vector/hybrid index with ACL metadata",
    "QUERY: user asks → rewrite/expand query → embed",
    "Retrieve top-k chunks (hybrid + re-rank + security filter)",
    "Build prompt: system rules + retrieved chunks + question",
    "LLM generates answer with citations → evaluate & log"
  ],
  useCases: [
    "Policy / HR / IT knowledge assistant",
    "Contract Q&A for legal teams",
    "Engineering assistant over manuals and incident history",
    "Customer support copilot over product documentation"
  ],
  interview: [
    ["Why RAG instead of fine-tuning to add company knowledge?", "RAG keeps knowledge current (just re-index), gives citations for trust, respects per-user permissions, and is cheaper. Fine-tuning bakes knowledge into weights — hard to update, no citations, no access control, and still hallucinates."],
    ["Your RAG bot gives wrong answers. How do you debug?", "Separate retrieval from generation. First check retrieval: were the right chunks in the top-k? If not — fix chunking, add hybrid search/re-ranker, metadata filters, query rewriting. If chunks were right but answer wrong — improve prompt, model choice, or context order. Measure with an eval set: retrieval recall, groundedness, relevance."],
    ["How do you evaluate RAG?", "Golden Q&A dataset; metrics: context recall/precision, groundedness (faithfulness), answer relevance, citation accuracy, latency and cost. Tools: Foundry evaluations, RAGAS, human review sample."],
    ["How do you handle permissions in RAG?", "Store ACLs/group IDs as metadata on each chunk, filter at query time by the user's identity (Entra ID groups), never rely on the LLM to hide content."],
    ["What is chunk overlap and why?", "Adjacent chunks share some tokens so a sentence split across a boundary isn't lost. Typical 10–20%."]
  ],
  pitfalls: [
    "Poor source quality (garbage in → confident garbage out)",
    "Chunks too small (no context) or too large (noise, cost)",
    "Vector-only search missing exact terms like product codes",
    "No evaluation set; tuning by gut feeling",
    "Ignoring tables, images and scanned PDFs during ingestion"
  ],
  related: ["llm", "kms", "azureopenai", "foundry", "datalake", "databricks"],
  links: [
    ["RAG in Azure AI Search", "https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview"],
    ["Design and develop a RAG solution (Azure Architecture Center)", "https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/rag/rag-solution-design-and-evaluation-guide"],
    ["Microsoft GraphRAG", "https://microsoft.github.io/graphrag/"]
  ]
},
{
  id: "ml", group: "AI", title: "Machine Learning Fundamentals", tag: "ML",
  tagline: "Algorithms that learn patterns from historical data to make predictions or decisions on new data.",
  analogy: "Instead of writing rules ('if income < X then risky'), you show the computer thousands of past loans with outcomes and it learns the rules itself.",
  summary: "Machine learning trains a model on data. Supervised learning uses labelled examples (classification: categories; regression: numbers). Unsupervised learning finds structure without labels (clustering, dimensionality reduction, anomaly detection). Reinforcement learning learns by reward. The ML lifecycle: define problem → collect/prepare data → feature engineering → train → evaluate on unseen data → deploy → monitor for drift → retrain. MLOps applies DevOps practices to this lifecycle (MLflow, Azure ML, Databricks).",
  concepts: [
    ["Supervised learning", "Learn from labelled data. Classification (churn yes/no) and regression (price)."],
    ["Unsupervised learning", "No labels. Clustering (customer segments, k-means), PCA, anomaly detection."],
    ["Features & label", "Features = input variables; label = what you predict."],
    ["Train / validation / test split", "Train the model, tune on validation, report final performance on untouched test data."],
    ["Overfitting / underfitting", "Overfit = memorises training data, fails on new data. Underfit = too simple. Fix with regularisation, more data, cross-validation."],
    ["Bias–variance trade-off", "Simple models: high bias. Complex models: high variance. Aim for the sweet spot."],
    ["Classification metrics", "Accuracy, precision (of predicted positives, how many correct), recall (of actual positives, how many found), F1, ROC-AUC, confusion matrix."],
    ["Regression metrics", "MAE, RMSE, MAPE, R²."],
    ["Common algorithms", "Linear/logistic regression, decision trees, random forest, gradient boosting (XGBoost, LightGBM), k-means, neural networks."],
    ["Data drift / model drift", "Input data or relationships change over time → performance decays → monitor and retrain."],
    ["MLOps", "Versioning data/models, automated training pipelines, model registry, CI/CD, monitoring (MLflow, Azure ML)."]
  ],
  flow: [
    "Frame the business problem and success metric",
    "Collect and explore data (EDA), check quality",
    "Feature engineering and train/test split",
    "Train candidate models, tune hyperparameters",
    "Evaluate on test set with business-relevant metric",
    "Deploy (batch scoring or real-time endpoint)",
    "Monitor accuracy, drift, fairness → retrain"
  ],
  useCases: [
    "Customer churn prediction",
    "Credit risk scoring",
    "Demand forecasting",
    "Predictive maintenance",
    "Customer segmentation"
  ],
  interview: [
    ["Precision vs recall — give a business example.", "Fraud detection: recall = share of real frauds we caught; precision = share of flagged transactions that were really fraud. Missing fraud is costly → favour recall, but too many false alarms annoy customers → balance via threshold and F1 or cost-based metric."],
    ["How do you detect overfitting?", "Large gap between training and validation performance. Use cross-validation, simpler models, regularisation, more data, early stopping."],
    ["Why can't we just use accuracy?", "With imbalanced data (1% fraud), predicting 'no fraud' always gives 99% accuracy but is useless. Use precision/recall, F1, PR-AUC."],
    ["What is MLOps and why does it matter?", "Practices to reliably move models to production and keep them healthy: reproducible pipelines, model registry, automated deployment, monitoring for drift, governance and lineage. Without it models stay in notebooks and decay silently."],
    ["When would you NOT use ML?", "When simple rules work, when there's not enough quality data, when decisions must be fully explainable and deterministic by regulation, or when the cost of errors is unacceptable without a robust fallback."]
  ],
  pitfalls: [
    "Data leakage — using information in training that won't be available at prediction time",
    "Optimising a technical metric unrelated to business value",
    "No monitoring after deployment",
    "Ignoring bias in training data"
  ],
  related: ["predictive", "anomaly", "forecasting", "databricks", "governance"],
  links: [
    ["Google — Machine Learning Crash Course", "https://developers.google.com/machine-learning/crash-course"],
    ["Microsoft Learn — Fundamentals of machine learning", "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"],
    ["MLflow docs", "https://mlflow.org/docs/latest/index.html"]
  ]
},
{
  id: "predictive", group: "AI", title: "Predictive Analytics", tag: "Predictive",
  tagline: "Using historical data, statistics and ML to estimate what is likely to happen next — and act on it.",
  analogy: "A weather forecast for your business: 'there is a 70% chance this customer leaves next month' so you can bring an umbrella (a retention offer).",
  summary: "Predictive analytics sits in the analytics maturity ladder: Descriptive (what happened?) → Diagnostic (why?) → Predictive (what will happen?) → Prescriptive (what should we do?). It uses regression, classification, time-series and ML to produce scores or probabilities that are embedded in business processes — e.g. a churn score in the CRM, a failure risk in maintenance planning. Success depends on actionability: a prediction is only valuable if someone acts on it.",
  concepts: [
    ["Analytics maturity", "Descriptive → Diagnostic → Predictive → Prescriptive → (Cognitive/Autonomous)."],
    ["Propensity / risk score", "Probability of an event (buy, churn, default, fail) for each entity."],
    ["Lead time", "How far ahead the prediction must be to allow action."],
    ["Threshold & cost matrix", "Choose where to act based on cost of false positives vs false negatives."],
    ["Explainability", "SHAP / feature importance show why a prediction was made — builds trust."],
    ["Operationalisation", "Scores written back to CRM/ERP/Power BI; triggers workflow."],
    ["Uplift modelling", "Predicts who changes behaviour because of an action — targets persuadable customers."]
  ],
  flow: [
    "Define decision to support and the action that follows",
    "Define target event and prediction horizon",
    "Build feature dataset from history (Lakehouse)",
    "Train and validate model",
    "Score regularly; publish to business apps and dashboards",
    "Track business KPI impact (A/B or control group)"
  ],
  useCases: [
    "Churn prediction → retention campaigns",
    "Predictive maintenance → schedule repair before failure",
    "Ticket volume prediction → service desk staffing",
    "Project delay risk prediction from Jira/Clarity data"
  ],
  interview: [
    ["Descriptive vs predictive vs prescriptive?", "Descriptive: dashboards of what happened. Predictive: probability of what will happen. Prescriptive: recommended action (optimisation, next best action)."],
    ["How do you prove a predictive model created value?", "Run a controlled experiment: act on predictions for a treatment group vs control group and compare the business KPI (retention rate, downtime). Report incremental value, not just model accuracy."],
    ["How would you get business users to trust predictions?", "Involve them in design, explain drivers (SHAP), start with decision support not automation, show back-testing results, and monitor accuracy transparently in Power BI."]
  ],
  pitfalls: [
    "Predictions without an owner or action",
    "Horizon too short to act",
    "Measuring accuracy only, never business impact"
  ],
  related: ["ml", "forecasting", "anomaly", "powerbi", "kpi", "ddd"],
  links: [
    ["Azure Machine Learning documentation", "https://learn.microsoft.com/en-us/azure/machine-learning/"],
    ["SHAP documentation", "https://shap.readthedocs.io/"]
  ]
},
{
  id: "anomaly", group: "AI", title: "Anomaly Detection", tag: "Anomaly",
  tagline: "Automatically spotting data points or patterns that deviate from normal behaviour — fraud, failures, outages, data errors.",
  analogy: "A smoke detector for data: it learns what 'normal air' looks like and alarms when something is off.",
  summary: "Anomaly detection identifies outliers — point anomalies (a single strange value), contextual anomalies (normal value at an abnormal time, e.g. high sales at 3am) and collective anomalies (a sequence that is unusual). Approaches range from statistics (z-score, IQR, moving averages) to ML (Isolation Forest, One-Class SVM, autoencoders) and time-series decomposition. Labels are usually rare, so it is mostly unsupervised. In Azure, the standalone Anomaly Detector service is being retired (Oct 2026); the recommended paths are Microsoft Fabric Real-Time Intelligence anomaly detection, KQL functions (series_decompose_anomalies) in Azure Data Explorer/Fabric, or custom models in Databricks/Azure ML.",
  concepts: [
    ["Point / contextual / collective", "Three anomaly types: single outlier, outlier given context (time/season), unusual sequence."],
    ["Z-score / IQR", "Simple statistical rules: flag values > 3 standard deviations or outside 1.5×IQR."],
    ["Isolation Forest", "Tree-based unsupervised algorithm: anomalies are easier to isolate (shorter paths)."],
    ["Autoencoder", "Neural net that reconstructs normal data; high reconstruction error = anomaly."],
    ["Seasonality & trend", "Remove them (decomposition) before detecting, otherwise normal peaks look anomalous."],
    ["Sensitivity / threshold", "Trade-off between catching issues and alert fatigue."],
    ["Root cause analysis", "After detection, identify which dimension (region, product, server) drives the anomaly."]
  ],
  flow: [
    "Define 'normal' and the business cost of misses vs false alarms",
    "Collect streaming or batch data (IoT, logs, transactions)",
    "Model baseline (statistical, seasonal decomposition, ML)",
    "Score new data; apply threshold",
    "Alert (Teams, ServiceNow incident, Data Activator) with context",
    "Human feedback labels alerts → tune model"
  ],
  useCases: [
    "Fraud detection in payments / expenses",
    "IT operations (AIOps): CPU, latency, error-rate spikes → auto ServiceNow incident",
    "Manufacturing sensor readings → predictive maintenance",
    "Data quality monitoring: sudden drop in row counts or null spikes",
    "KPI monitoring: unexpected revenue dip in Power BI"
  ],
  interview: [
    ["Why is anomaly detection usually unsupervised?", "Anomalies are rare and often new types, so there are few labels. We model normal behaviour and flag deviations; later, analyst feedback can make it semi-supervised."],
    ["How do you avoid alert fatigue?", "Account for seasonality, tune thresholds with business owners, group related alerts, rank by impact, add suppression windows, and measure precision of alerts over time."],
    ["Give an example connecting anomaly detection with ServiceNow.", "Azure Monitor/Fabric detects an abnormal error-rate spike on an API → creates an incident in ServiceNow via integration with severity and affected CI → AIOps correlates related alerts → agent suggests probable root cause from past incidents."]
  ],
  pitfalls: [
    "Ignoring seasonality (every Monday flagged)",
    "Static thresholds in a changing environment",
    "Alerts without owners or runbooks"
  ],
  related: ["ml", "forecasting", "dataquality", "servicenow", "kpi"],
  links: [
    ["Anomaly detection in Fabric Real-Time Intelligence", "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/anomaly-detection"],
    ["scikit-learn — Novelty and outlier detection", "https://scikit-learn.org/stable/modules/outlier_detection.html"]
  ]
},
{
  id: "forecasting", group: "AI", title: "Prediction & Forecasting", tag: "Forecast",
  tagline: "Estimating future values over time — demand, revenue, ticket volumes, capacity — with uncertainty ranges.",
  analogy: "Planning how many umbrellas to stock next month based on past sales, the season and the weather forecast.",
  summary: "Forecasting is prediction over time (time-series). A series is decomposed into trend, seasonality, cycles and noise. Methods: naive/seasonal naive (baselines), moving average and exponential smoothing (ETS/Holt-Winters), ARIMA/SARIMA, Prophet, ML models with lag features (LightGBM), deep learning (N-BEATS, TFT) and newer time-series foundation models. Good forecasts are probabilistic (prediction intervals), back-tested, and tied to decisions (inventory, staffing, budget). Note: 'prediction' in general = any unknown value; 'forecasting' = future values over time.",
  concepts: [
    ["Trend / seasonality / noise", "Long-term direction, repeating patterns (weekly, yearly), random variation."],
    ["Stationarity", "Statistical properties constant over time; required by ARIMA (use differencing)."],
    ["Horizon & granularity", "How far ahead (e.g. 12 weeks) and at what level (daily, per store/SKU)."],
    ["Baseline model", "Naive forecast to beat. If your fancy model doesn't beat it, don't ship it."],
    ["Back-testing", "Rolling-origin evaluation on history — train on past, test on the following period, repeat."],
    ["Metrics", "MAE, RMSE, MAPE (bad near zero), sMAPE, WAPE (good for business)."],
    ["Prediction interval", "Range with probability (e.g. 80%) — communicates uncertainty."],
    ["Exogenous variables", "External drivers: promotions, holidays, weather, price."],
    ["Hierarchical forecasting", "Forecasts that add up across levels (SKU → category → total)."]
  ],
  flow: [
    "Define decision, horizon, granularity",
    "Prepare clean time-series; handle missing, outliers, holidays",
    "Build baselines, then candidate models",
    "Back-test and compare with WAPE/MAPE",
    "Produce forecasts with intervals",
    "Publish to Power BI / planning tools; monitor forecast accuracy"
  ],
  useCases: [
    "Sales and demand forecasting",
    "Service desk ticket volume → staffing",
    "Cloud cost and capacity forecasting",
    "Cash-flow forecasting",
    "Power BI built-in forecast on line charts (exponential smoothing)"
  ],
  interview: [
    ["How would you forecast ServiceNow ticket volumes?", "Aggregate tickets per day/category, add calendar features (weekday, holidays, releases), start with seasonal naive baseline, then ETS/Prophet/LightGBM; back-test on last 6–12 months; publish forecast + interval to Power BI for staffing decisions; monitor accuracy weekly."],
    ["Why use prediction intervals?", "A single number hides uncertainty. Planners need ranges to size safety stock or buffer staffing."],
    ["What's wrong with MAPE?", "Undefined or explodes when actuals are near zero, and penalises over-forecasts differently than under-forecasts. WAPE or MAE are often better for business."]
  ],
  pitfalls: [
    "No baseline comparison",
    "Random train/test split on time-series (future leaks into training)",
    "Ignoring structural breaks (COVID, reorganisation)"
  ],
  related: ["predictive", "ml", "anomaly", "powerbi", "kpi"],
  links: [
    ["Forecasting: Principles and Practice (free book, Hyndman)", "https://otexts.com/fpp3/"],
    ["Azure Databricks — AutoML forecasting", "https://learn.microsoft.com/en-us/azure/databricks/machine-learning/automl/"]
  ]
},
{
  id: "governance", group: "AI", title: "AI Governance & Responsible AI", tag: "RAI",
  tagline: "Policies, processes and controls that make AI fair, safe, transparent, compliant and accountable.",
  analogy: "Traffic rules and a driving licence for AI: you can drive fast, but only with seatbelts, rules, a registered car and someone accountable.",
  summary: "Responsible AI translates principles into practice. Microsoft's six principles: Fairness, Reliability & Safety, Privacy & Security, Inclusiveness, Transparency, Accountability. Frameworks: NIST AI RMF (Govern, Map, Measure, Manage), ISO/IEC 42001 (AI management system). Regulation: the EU AI Act classifies AI by risk — unacceptable (banned since Feb 2025), high-risk (strict requirements; after the 2026 Digital Omnibus, Annex III obligations apply from 2 Dec 2027 and Annex I product-embedded AI from 2 Aug 2028), limited risk (transparency — Article 50 still applies from Aug 2026), minimal risk. General-purpose AI model obligations have applied since Aug 2025. In practice: an AI use case inventory, risk assessment/impact assessment, approval gates, evaluations, monitoring and incident management.",
  concepts: [
    ["Microsoft RAI principles", "Fairness, Reliability & Safety, Privacy & Security, Inclusiveness, Transparency, Accountability."],
    ["EU AI Act risk tiers", "Unacceptable (prohibited) → High-risk → Limited (transparency) → Minimal."],
    ["NIST AI RMF", "Govern · Map · Measure · Manage — US voluntary risk management framework."],
    ["ISO/IEC 42001", "Certifiable AI management system standard (like ISO 27001 for AI)."],
    ["AI impact assessment", "Documents purpose, stakeholders, harms, mitigations before build/launch."],
    ["Model / system card", "Documentation of intended use, limits, data, performance, evaluation results."],
    ["Content safety & guardrails", "Filters for hate, violence, self-harm, sexual content; prompt shields for jailbreak/injection; groundedness detection."],
    ["Human oversight", "Humans can review, override or stop AI decisions (required for high-risk)."],
    ["AI inventory / registry", "Catalogue of all AI systems and agents with owner, risk level, status."],
    ["Red teaming", "Adversarial testing to find harmful behaviour before release."]
  ],
  flow: [
    "Establish AI policy, principles and governance board (RACI)",
    "Register use case in AI inventory; classify risk",
    "Impact assessment: data, fairness, privacy, security, legal",
    "Build with guardrails; evaluate (quality, safety, bias); red team",
    "Approval gate → deploy with transparency notice",
    "Monitor: performance, drift, incidents, user feedback; periodic review"
  ],
  useCases: [
    "Governance board approving a GenAI HR assistant",
    "Azure AI Content Safety in front of a public chatbot",
    "ServiceNow AI Control Tower / Microsoft Purview for agent inventory and compliance",
    "Bias testing on a credit scoring model"
  ],
  interview: [
    ["How would you set up AI governance in a company starting with GenAI?", "Define principles and an acceptable-use policy; create a cross-functional AI council (IT, legal, security, data, business); an intake process with risk tiering; lightweight path for low-risk and stricter review for high-risk; standard guardrails (approved models, content safety, data classification); inventory; monitoring and training for users. Govern to enable, not to block."],
    ["Explain the EU AI Act in one minute.", "Risk-based regulation. Some uses are banned (social scoring, manipulative AI). High-risk systems (HR screening, credit, critical infrastructure) need risk management, data governance, documentation, logging, human oversight, accuracy and conformity assessment — deadlines moved by the 2026 Digital Omnibus to Dec 2027 / Aug 2028. Chatbots and generated content need transparency. General-purpose AI providers have documentation and copyright duties."],
    ["How do you make a model fair?", "Define fairness metric with stakeholders (demographic parity, equal opportunity), analyse data representation, measure metrics per group (Fairlearn), mitigate (re-weighting, threshold adjustment), document trade-offs and monitor in production."],
    ["What is prompt injection and how do you mitigate it?", "Malicious instructions hidden in user input or retrieved content that hijack the model. Mitigate with prompt shields, separating instructions from data, least-privilege tools, output validation, and human approval for sensitive actions."]
  ],
  pitfalls: [
    "Governance as a blocker — slow approvals push people to shadow AI",
    "Principles without operational controls",
    "Treating it as one-off approval instead of lifecycle monitoring"
  ],
  related: ["genai", "agents", "usecases", "datagov", "foundry", "servicenow"],
  links: [
    ["Microsoft Responsible AI", "https://www.microsoft.com/en-us/ai/responsible-ai"],
    ["NIST AI Risk Management Framework", "https://www.nist.gov/itl/ai-risk-management-framework"],
    ["EU AI Act Explorer", "https://artificialintelligenceact.eu/"],
    ["Gibson Dunn — EU AI Act Omnibus changes (2026)", "https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/"]
  ]
},
{
  id: "usecases", group: "AI", title: "AI Use Case Identification & Industrialization", tag: "Use cases",
  tagline: "Finding the right AI opportunities, proving value fast, and scaling them from PoC to production.",
  analogy: "A venture portfolio: collect many ideas, fund the promising ones with small bets, then invest heavily only in those that prove value and can scale.",
  summary: "Use case identification starts from business pain points and KPIs, not technology. Ideas are collected (workshops, process mining, ticket analysis), described in a canvas, then prioritised on value vs feasibility (data availability, technical complexity, risk, adoption). Industrialisation means moving from PoC → pilot → production → scale with: MLOps/LLMOps, security, integration, support model, cost management (FinOps), change management and value tracking. Many AI initiatives stall in 'pilot purgatory' — industrialisation is what separates experiments from impact. An AI Center of Excellence (CoE) often owns the framework, reusable platform and patterns.",
  concepts: [
    ["Use case canvas", "Problem, users, KPI, data needed, AI approach, risks, value, owner."],
    ["Value vs feasibility matrix", "Quick wins (high/high), strategic bets, nice-to-haves, avoid."],
    ["Stage gates", "Ideation → PoC (can it work?) → MVP/Pilot (does it help users?) → Production → Scale."],
    ["Business case / ROI", "Benefits (time saved, revenue, risk reduced) vs costs (build, run, tokens, licences, change)."],
    ["LLMOps / MLOps", "Pipelines for prompt/model versioning, evaluation, deployment, monitoring."],
    ["AI CoE / platform", "Central team providing standards, reusable components (RAG accelerator, agent templates), governance."],
    ["Build vs buy vs configure", "Copilot out-of-box → Copilot Studio low-code → Foundry pro-code. Choose the lowest effort that meets the need."],
    ["Adoption & change management", "Training, champions, communication, measuring usage — often the biggest success factor."]
  ],
  flow: [
    "Discover: workshops with business, pain points, KPIs",
    "Document in canvas; estimate value and feasibility",
    "Prioritise portfolio; check risk tier with governance",
    "PoC in 2–6 weeks with success criteria",
    "Pilot with real users; measure KPI vs baseline",
    "Industrialise: security, integration, support, monitoring, FinOps",
    "Scale & reuse; track realised benefits; retire what doesn't deliver"
  ],
  useCases: [
    "Service desk: auto-categorisation, summarisation, KB suggestion (ServiceNow Now Assist)",
    "Finance: invoice extraction, anomaly detection in expenses",
    "HR: policy assistant, job description drafting",
    "Operations: forecasting and predictive maintenance",
    "PMO: project risk prediction from Jira/Clarity data"
  ],
  interview: [
    ["How do you identify good AI use cases?", "Start from business goals and pain points: high-volume, repetitive, text-heavy or prediction-heavy tasks with measurable KPIs and available data. Score on value (impact, frequency, strategic fit) and feasibility (data, complexity, risk, readiness). Prioritise quick wins to build credibility plus a few strategic bets."],
    ["Why do AI pilots fail to reach production?", "No clear business owner or KPI, data not production-ready, security/compliance addressed too late, no integration into workflow, underestimated run cost, and no change management. Fix by defining production criteria at PoC start."],
    ["What does 'industrialisation' include?", "Reusable platform, CI/CD and LLMOps, automated evaluation, monitoring and alerting, support model (ServiceNow), cost controls, security and access, documentation, training, and benefits tracking."],
    ["How do you choose between M365 Copilot, Copilot Studio and Foundry?", "M365 Copilot for general productivity with no build. Copilot Studio for low-code agents inside M365/Teams with connectors. Foundry for pro-code, custom models, complex RAG/agents, fine-tuning, and full control over evaluation and deployment."]
  ],
  pitfalls: [
    "Technology looking for a problem",
    "No baseline measured before the pilot",
    "Too many parallel PoCs, none scaled",
    "Ignoring run costs and ownership"
  ],
  related: ["genai", "governance", "kpi", "ddd", "copilot", "foundry", "jira"],
  links: [
    ["Microsoft Cloud Adoption Framework — AI", "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/ai/"],
    ["Microsoft — Identify AI use cases (strategy)", "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/ai/strategy"]
  ]
}
);
