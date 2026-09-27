// Tool topics
window.TOPICS = window.TOPICS || [];
window.TOPICS.push(
{
  id: "copilot", group: "Tools", title: "Microsoft 365 Copilot", tag: "M365 Copilot",
  tagline: "GenAI assistant embedded in Word, Excel, PowerPoint, Outlook, Teams — grounded in your work data via Microsoft Graph.",
  analogy: "A personal assistant who has (permission-limited) access to your mailbox, calendar, chats and files, and helps you write, summarise and find things.",
  summary: "Microsoft 365 Copilot combines LLMs (hosted by Microsoft in the Microsoft 365 service boundary) with your organisational data through Microsoft Graph (emails, files, meetings, chats) and the semantic index — now surfaced via Work IQ. It respects existing permissions: users only get content they already have access to, which makes permission hygiene (oversharing) the #1 readiness task. Copilot Chat (web-grounded, free with Entra ID) differs from the licensed M365 Copilot (work-grounded). Extensibility: Copilot connectors (formerly Graph connectors) bring external data (ServiceNow, Jira, Confluence) in; agents built in Copilot Studio or with the Agents SDK/Toolkit extend it; Researcher and Analyst are built-in reasoning agents. Governance: Purview sensitivity labels, DLP for Copilot, audit logs, Copilot Dashboard in Viva Insights for adoption and impact.",
  concepts: [
    ["Microsoft Graph grounding", "Copilot retrieves relevant user data via Graph before prompting the LLM (RAG built-in)."],
    ["Semantic index / Work IQ", "Index and intelligence layer over M365 content and signals that improve relevance."],
    ["Copilot Chat vs M365 Copilot", "Chat: web-grounded, included for Entra users, can use pay-as-you-go agents. M365 Copilot: paid licence, work-grounded, in-app."],
    ["Permissions & oversharing", "Copilot honours existing permissions — so bad SharePoint permissions become visible. Use SharePoint Advanced Management, Restricted Content Discovery."],
    ["Copilot connectors", "Bring external data (ServiceNow KB, Jira, Confluence, file shares) into Graph for Copilot."],
    ["Agents in M365", "Declarative agents (instructions + knowledge + actions) and custom engine agents surfaced in Copilot/Teams."],
    ["Researcher / Analyst", "Built-in reasoning agents for multi-step research and data analysis (Python)."],
    ["Enterprise data protection", "Prompts/responses not used to train foundation models; stays within M365 service boundary."],
    ["Adoption measurement", "Copilot Dashboard (Viva Insights), usage reports in Admin Center."]
  ],
  flow: [
    "User prompts in Word/Teams/Outlook",
    "Copilot orchestrator pre-processes; retrieves via Graph and semantic index (permission trimmed)",
    "Grounded prompt sent to LLM",
    "Response post-processed (responsible AI checks, citations)",
    "Returned into the app; actions (e.g. draft email) remain user-approved"
  ],
  useCases: [
    "Teams meeting recap and action items",
    "Draft documents from existing files",
    "Summarise long email threads in Outlook",
    "Excel analysis with Python via Analyst",
    "Ask Copilot about ServiceNow tickets via connector"
  ],
  interview: [
    ["How does M365 Copilot keep data secure?", "It uses the user's identity and existing permissions via Graph — it cannot access what the user can't. Data stays in the M365 service boundary, isn't used to train foundation models, respects sensitivity labels and DLP, and interactions are auditable in Purview."],
    ["How would you prepare an organisation for Copilot rollout?", "Data readiness (fix oversharing, sensitivity labels, retire stale content), licensing and pilot groups, governance policies, training and champions, prompt libraries per role, success KPIs (adoption, time saved) via Copilot Dashboard, and a feedback loop."],
    ["How do you extend Copilot with company data from ServiceNow?", "Use a Copilot connector to index ServiceNow knowledge articles/tickets into Graph, or build an agent in Copilot Studio with the ServiceNow connector/MCP for live actions (create ticket, check status)."]
  ],
  pitfalls: [
    "Rolling out before fixing oversharing",
    "No training — users write poor prompts and conclude it 'doesn't work'",
    "Measuring licences assigned, not value delivered"
  ],
  related: ["copilotstudio", "genai", "rag", "kms", "governance"],
  links: [
    ["Microsoft 365 Copilot overview", "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-overview"],
    ["Copilot data, privacy & security", "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy"],
    ["Copilot connectors", "https://learn.microsoft.com/en-us/microsoftsearch/connectors-overview"]
  ]
},
{
  id: "copilotstudio", group: "Tools", title: "Copilot Studio", tag: "Copilot Studio",
  tagline: "Low-code platform to build, test and publish agents — for Teams, M365 Copilot, websites and more.",
  analogy: "A workshop where business-savvy makers assemble custom assistants from building blocks: knowledge, topics, actions and connectors.",
  summary: "Copilot Studio (formerly Power Virtual Agents) is part of the Power Platform. Makers create agents with instructions, knowledge sources (SharePoint, websites, Dataverse, files, Copilot connectors), tools/actions (1,000+ Power Platform connectors, Power Automate flows, REST APIs, MCP servers, prompts), and topics (scripted dialogs). Generative orchestration lets the LLM choose which knowledge/tool/topic to use. Autonomous agents can be triggered by events (new email, new record). Multi-agent: child/connected agents, plus A2A connections (GA April 2026) to agents on other platforms and connections to Foundry agents. Publish to Teams, M365 Copilot, web, and other channels. Governance via Power Platform admin center (environments, DLP policies), Purview, and agent inventory.",
  concepts: [
    ["Agent", "Instructions + knowledge + tools + topics + triggers."],
    ["Generative orchestration", "LLM plans which tools/knowledge/topics to use rather than fixed trigger phrases."],
    ["Topics", "Deterministic conversation flows for things that must follow a script."],
    ["Knowledge sources", "SharePoint, Dataverse, websites, uploaded files, Azure AI Search, Copilot connectors."],
    ["Tools / actions", "Connectors, Power Automate flows, custom REST, MCP servers, prompt tools, computer use."],
    ["Autonomous triggers", "Agent reacts to events (e.g. new ServiceNow ticket) without a user chat."],
    ["Child & connected agents / A2A", "Compose multi-agent solutions; call Foundry agents or external agents over A2A."],
    ["Environments & DLP", "Power Platform environments (dev/test/prod) and data-loss-prevention policies on connectors."],
    ["ALM", "Solutions, pipelines for moving agents between environments."],
    ["Analytics", "Session outcomes, resolution rate, escalation, CSAT, knowledge gaps."]
  ],
  flow: [
    "Define agent purpose, audience and success KPI",
    "Write instructions; add knowledge sources",
    "Add tools (connectors, flows, MCP) and required topics",
    "Test in test pane; evaluate with test sets",
    "Configure auth, DLP, environment; publish to Teams/M365 Copilot",
    "Monitor analytics; improve knowledge and tools"
  ],
  useCases: [
    "IT helpdesk agent: answers from KB, resets passwords, creates ServiceNow incidents",
    "HR policy agent in Teams",
    "Autonomous agent triaging a shared mailbox",
    "Project status agent reading Jira and Clarity via connectors"
  ],
  interview: [
    ["When would you use Copilot Studio vs Microsoft Foundry?", "Copilot Studio: low-code, fast, business makers, rich M365/Power Platform connectors, publish to Teams/Copilot. Foundry: pro-code, custom models, fine-tuning, advanced RAG, code-first multi-agent orchestration, deep evaluation and observability. They interoperate — Copilot Studio can call Foundry agents."],
    ["How do you govern Copilot Studio agents at scale?", "Environment strategy (dev/test/prod), DLP policies on connectors, maker training, managed environments, ALM with solutions/pipelines, agent inventory and monitoring, sharing limits, and Purview auditing."],
    ["Generative orchestration vs classic topics?", "Classic: trigger phrases route to hand-written dialogs — predictable but rigid. Generative: LLM decides which tools/knowledge/topics to combine — flexible and less authoring, but needs good descriptions, testing, and guardrails."]
  ],
  pitfalls: [
    "Vague tool/knowledge descriptions → orchestrator picks wrong tools",
    "Building in the default environment without ALM",
    "No DLP → agents connected to unapproved services"
  ],
  related: ["copilot", "agents", "foundry", "servicenow", "usecases"],
  links: [
    ["Copilot Studio documentation", "https://learn.microsoft.com/en-us/microsoft-copilot-studio/"],
    ["What's new in Copilot Studio", "https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new"],
    ["Microsoft Copilot Blog — multi-agent orchestration", "https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/new-and-improved-multi-agent-orchestration-connected-experiences-and-faster-prompt-iteration/"]
  ]
},
{
  id: "foundry", group: "Tools", title: "Microsoft Foundry (Azure AI Foundry)", tag: "Foundry",
  tagline: "Azure's unified platform to build, evaluate, deploy and govern AI apps and agents — renamed from Azure AI Foundry in Nov 2025.",
  analogy: "An AI factory floor: a catalog of engines (models), assembly lines (agents, RAG), quality control (evaluations, safety) and a control room (monitoring, governance).",
  summary: "Microsoft Foundry (formerly Azure AI Foundry, before that Azure AI Studio) brings together a model catalog (OpenAI GPT and reasoning models, plus Llama, Mistral, DeepSeek, Phi, Cohere, and others — 'Foundry Models'), Foundry Agent Service (managed runtime for agents with tools, memory, threads, multi-agent workflows, MCP and A2A), Foundry IQ / Azure AI Search for knowledge retrieval, evaluations (quality, groundedness, safety), content safety, tracing & observability, and governance (Foundry Control Plane). Organisation: a Foundry resource contains projects; developers use the portal, SDKs (Python/C#/JS), and the Microsoft Agent Framework (successor to Semantic Kernel + AutoGen).",
  concepts: [
    ["Foundry resource & project", "Top-level Azure resource with projects that group models, agents, data, evaluations and access."],
    ["Model catalog / Foundry Models", "1,000s of models; deploy as serverless (pay-per-token) or provisioned throughput."],
    ["Foundry Agent Service", "Managed agent runtime: instructions, tools (search, code interpreter, functions, MCP, OpenAPI), threads/memory, multi-agent workflows."],
    ["Microsoft Agent Framework", "Open-source SDK for building agents and multi-agent workflows (converges Semantic Kernel and AutoGen)."],
    ["Foundry IQ / Azure AI Search", "Knowledge layer for RAG and agentic retrieval."],
    ["Evaluations", "Built-in evaluators: groundedness, relevance, coherence, fluency, similarity, safety, agent task adherence; custom evaluators."],
    ["Azure AI Content Safety", "Filters (hate, sexual, violence, self-harm), Prompt Shields (jailbreak/injection), groundedness detection, protected material."],
    ["Tracing / observability", "OpenTelemetry traces of prompts, tool calls and costs in Application Insights."],
    ["Model router", "Routes each request to the best-fit model for cost/quality."],
    ["Fine-tuning", "Supervised, preference (DPO) and reinforcement fine-tuning for supported models."]
  ],
  flow: [
    "Create Foundry resource + project (RBAC, networking)",
    "Pick and deploy model(s) from catalog; compare with benchmarks",
    "Build: prompt flow / agent with tools and knowledge (AI Search)",
    "Evaluate with test dataset (quality + safety); red-team",
    "Apply content filters and guardrails",
    "Deploy (endpoint / agent / publish to Teams & M365 via Copilot Studio)",
    "Monitor with tracing, evaluations in production, cost and usage"
  ],
  useCases: [
    "Enterprise RAG assistant over policies with citations",
    "Multi-agent claims-processing workflow",
    "Fine-tuned small model for ticket classification",
    "Document intelligence + LLM for contract extraction"
  ],
  interview: [
    ["What is Microsoft Foundry and why use it?", "Azure's end-to-end AI platform. One place to choose models, build agents and RAG, evaluate quality and safety, deploy securely inside Azure (private networking, Entra ID, RBAC), and monitor/govern in production — rather than stitching separate services together."],
    ["Foundry vs Azure OpenAI?", "Azure OpenAI is the OpenAI model family offered as an Azure service — now one of the model providers inside Foundry. Foundry is the broader platform: many model providers, agents, evaluation, safety, observability, governance."],
    ["How would you evaluate a GenAI app in Foundry?", "Create a test dataset of questions (and expected answers/context), run built-in evaluators (groundedness, relevance, coherence, safety), compare prompt/model variants, integrate evaluations into CI/CD, and continuously evaluate sampled production traffic."],
    ["Serverless vs provisioned throughput?", "Serverless/standard: pay per token, shared capacity, good for variable or low volume. Provisioned (PTU): reserved capacity with predictable latency and cost for high, steady workloads."]
  ],
  pitfalls: [
    "Skipping evaluation before production",
    "Public endpoints without private networking in regulated environments",
    "Not tracking token cost per use case"
  ],
  related: ["azureopenai", "agents", "rag", "governance", "copilotstudio"],
  links: [
    ["What is Microsoft Foundry?", "https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-azure-ai-foundry"],
    ["Foundry Agent Service overview", "https://learn.microsoft.com/en-us/azure/foundry/agents/overview"],
    ["Microsoft Agent Framework", "https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview"],
    ["Evaluation in Foundry", "https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/observability"]
  ]
},
{
  id: "azureopenai", group: "Tools", title: "Azure OpenAI", tag: "Azure OpenAI",
  tagline: "OpenAI's models (GPT, reasoning o-series, embeddings, image, audio) running in Azure with enterprise security, compliance and SLAs.",
  analogy: "The same engine as ChatGPT, but installed in your company's own secure garage with your locks, alarms and insurance.",
  summary: "Azure OpenAI (now delivered as part of Foundry Models) provides OpenAI models via Azure: chat/reasoning models (GPT-4.1, GPT-5 family, o-series), embeddings (text-embedding-3), image (gpt-image / DALL·E), speech (Whisper, realtime audio). Benefits over the public OpenAI API: Entra ID authentication, private endpoints/VNet, regional data residency options, content filtering, abuse monitoring controls, Microsoft enterprise commitments (your data isn't used to train models), and Azure SLAs. Key concepts: deployments (you deploy a model version under a name), deployment types (Global, Data Zone, Regional; Standard vs Provisioned vs Batch), quotas (tokens per minute), and APIs (Chat Completions, Responses API, Assistants→Agents, Batch).",
  concepts: [
    ["Deployment", "An instance of a model version with a name and capacity; your code calls the deployment."],
    ["Deployment types", "Global / Data Zone (EU/US) / Regional × Standard (pay-as-you-go), Provisioned (PTU), Batch (50% cheaper, async)."],
    ["TPM / RPM quota", "Tokens-per-minute and requests-per-minute limits per deployment/region."],
    ["Responses API", "Newer stateful API combining chat, tools, file search and computer use."],
    ["Embeddings", "Vectors for search/RAG/clustering (text-embedding-3-small/large)."],
    ["Content filtering", "Default Azure AI Content Safety filters on input and output; configurable."],
    ["On Your Data", "Quick RAG connecting to AI Search / Blob — for prototypes; production usually custom RAG or agents."],
    ["Structured outputs", "Force model output to match a JSON schema."],
    ["Data privacy", "Prompts/completions not used to train OpenAI models; not shared with OpenAI."],
    ["Managed identity & private endpoint", "Keyless auth and network isolation for enterprise deployments."]
  ],
  flow: [
    "Create Foundry/Azure OpenAI resource in approved region",
    "Deploy model (choose type & capacity)",
    "Secure: managed identity, private endpoint, RBAC",
    "Call API from app (SDK) with system prompt + grounding",
    "Apply content filters; log & trace",
    "Monitor tokens, latency, throttling (429s); scale with PTU or load balancing via API Management"
  ],
  useCases: [
    "Chatbots and RAG assistants",
    "Summarisation of incidents, calls, documents",
    "Classification/extraction to JSON (structured outputs)",
    "Embeddings for semantic search",
    "Batch processing of thousands of documents overnight"
  ],
  interview: [
    ["Why Azure OpenAI instead of OpenAI directly?", "Enterprise security and compliance: Entra ID, private networking, data residency, content filtering, Microsoft data commitments, Azure SLAs, integration with Azure services and governance, and consolidated Azure billing."],
    ["How do you handle 429 throttling?", "Retry with exponential backoff, increase quota or use provisioned throughput, spread across deployments/regions with Azure API Management as an AI gateway, cache responses, and use Batch for non-urgent jobs."],
    ["How do you control cost?", "Right-size model (smaller models for simple tasks, model router), limit max tokens, trim context, cache, batch API for offline work, set budgets and per-use-case token monitoring via API Management."]
  ],
  pitfalls: [
    "Using the biggest model for everything",
    "API keys hard-coded instead of managed identity",
    "Ignoring regional model availability and quotas in planning"
  ],
  related: ["foundry", "llm", "rag", "genai"],
  links: [
    ["Azure OpenAI in Foundry Models", "https://learn.microsoft.com/en-us/azure/ai-foundry/openai/overview"],
    ["Deployment types", "https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/deployment-types"],
    ["Data, privacy and security for Azure OpenAI", "https://learn.microsoft.com/en-us/azure/ai-foundry/responsible-ai/openai/data-privacy"]
  ]
},
{
  id: "datalake", group: "Tools", title: "Azure Data Lake Storage (ADLS Gen2)", tag: "ADLS",
  tagline: "Massively scalable, low-cost storage for all data — the foundation of an Azure lakehouse.",
  analogy: "A giant, well-organised storage warehouse with folders, locks on each room, and loading docks for any kind of goods.",
  summary: "ADLS Gen2 is Azure Blob Storage with a hierarchical namespace (real folders, atomic renames, POSIX-like ACLs), optimised for analytics engines (Spark, Databricks, Synapse, Fabric). Data is stored as files — typically Parquet and Delta Lake tables — organised into zones/containers such as raw/bronze, curated/silver, and gold. Security combines Azure RBAC and ACLs, private endpoints, encryption at rest (Microsoft- or customer-managed keys). Cost tiers: hot, cool, cold, archive with lifecycle policies. Microsoft Fabric's OneLake is built on ADLS Gen2 and can reference existing ADLS data via shortcuts.",
  concepts: [
    ["Hierarchical namespace", "Directory structure enabling fast rename/delete and ACLs — what makes it a 'Data Lake'."],
    ["Storage account → container → folder → file", "Organisational hierarchy."],
    ["File formats", "CSV/JSON (raw), Parquet (columnar, compressed), Delta Lake (Parquet + transaction log = ACID)."],
    ["Zones / medallion", "Landing/raw (bronze), enriched (silver), curated (gold), sandbox."],
    ["RBAC vs ACL", "RBAC: coarse, account/container level. ACL: fine-grained folder/file permissions."],
    ["Access tiers & lifecycle", "Hot/cool/cold/archive; policies move or delete data automatically."],
    ["Redundancy", "LRS, ZRS, GRS, GZRS for durability and DR."],
    ["OneLake shortcuts", "Fabric can reference ADLS data without copying."],
    ["Partitioning", "Folder structure by date/region for query pruning (year=2026/month=09)."]
  ],
  flow: [
    "Design storage accounts and zones per environment/domain",
    "Secure: private endpoints, Entra ID, RBAC + ACLs, encryption",
    "Ingest raw data (ADF, Event Hubs, APIs) into bronze",
    "Transform with Databricks/Spark into Delta silver/gold",
    "Serve to Power BI, ML, AI Search",
    "Govern with Purview/Unity Catalog; apply lifecycle policies"
  ],
  useCases: [
    "Central enterprise data lake for all source systems",
    "Storing documents for RAG ingestion",
    "Long-term, low-cost archive of logs and IoT data"
  ],
  interview: [
    ["What's the difference between Blob Storage and ADLS Gen2?", "ADLS Gen2 is Blob Storage with hierarchical namespace enabled: true directories, atomic operations, POSIX ACLs, and optimised analytics performance. Same underlying service and pricing tiers."],
    ["Why Parquet/Delta instead of CSV?", "Columnar compression reduces storage and IO; schema embedded; predicate pushdown for speed. Delta adds ACID transactions, schema enforcement, time travel, MERGE/upserts and small-file optimisation."],
    ["How do you secure a data lake?", "Private endpoints, disable public access, Entra ID with managed identities, RBAC for coarse and ACLs or Unity Catalog for fine-grained access, encryption with CMK if required, Purview classification, logging/monitoring."]
  ],
  pitfalls: [
    "Too many small files → slow queries (compact/optimize)",
    "Flat folder design without zones or partitions",
    "Account keys shared instead of identity-based access"
  ],
  related: ["datamgmt", "adf", "databricks", "datagov", "powerbi"],
  links: [
    ["Introduction to ADLS Gen2", "https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction"],
    ["Best practices for ADLS", "https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-best-practices"],
    ["OneLake shortcuts", "https://learn.microsoft.com/en-us/fabric/onelake/onelake-shortcuts"]
  ]
},
{
  id: "adf", group: "Tools", title: "Azure Data Factory (ADF)", tag: "ADF",
  tagline: "Cloud ETL/ELT and orchestration service — moves and transforms data between 90+ sources on a schedule or trigger.",
  analogy: "A logistics company: trucks (copy activities) pick up goods from many suppliers, drivers follow routes (pipelines) on schedules (triggers), and the control tower (monitoring) tracks every delivery.",
  summary: "Azure Data Factory is a serverless data integration service. You build pipelines of activities (Copy, Data Flow, Databricks notebook, stored procedure, web call, ForEach, If) that connect via linked services to data stores and run on integration runtimes (Azure IR, Self-hosted IR for on-prem, Azure-SSIS IR). Triggers schedule or react to events (file arrival). Mapping Data Flows provide visual Spark-based transformations. Typical role in modern architectures: orchestration and ingestion, with heavy transformation delegated to Databricks. In Microsoft Fabric, 'Data Factory' continues as pipelines and Dataflow Gen2 — the strategic direction for new Fabric-based projects.",
  concepts: [
    ["Pipeline", "Logical group of activities performing a task."],
    ["Activity", "A step: Copy, Data Flow, Notebook, Lookup, ForEach, If Condition, Web, Stored Procedure."],
    ["Linked service", "Connection info (like a connection string) to a data store or compute."],
    ["Dataset", "Named reference to data within a linked service (table, folder)."],
    ["Integration Runtime", "Compute: Azure IR (cloud), Self-hosted IR (on-prem/private network), Azure-SSIS IR (lift SSIS packages)."],
    ["Triggers", "Schedule, tumbling window (time slices with backfill), storage event, custom event."],
    ["Mapping Data Flows", "Visual, code-free Spark transformations."],
    ["Parameters & metadata-driven pipelines", "One generic pipeline reads a control table to load hundreds of tables."],
    ["Incremental load / CDC", "Load only new/changed data using watermarks or change data capture."],
    ["CI/CD", "Git integration + ARM/Bicep templates deployed via Azure DevOps/GitHub."]
  ],
  flow: [
    "Create linked services (ServiceNow, SQL, SAP, REST, ADLS)",
    "Build metadata-driven copy pipeline to Bronze (ADLS)",
    "Call Databricks notebooks for Silver/Gold transforms",
    "Trigger on schedule or file arrival",
    "Monitor runs, alert on failure (Azure Monitor → ServiceNow incident)",
    "Promote via Git + CI/CD dev → test → prod"
  ],
  useCases: [
    "Nightly load of ServiceNow incidents and Jira issues into the lake",
    "On-prem SQL Server to cloud migration via Self-hosted IR",
    "Orchestrating an end-to-end lakehouse pipeline including Databricks and Power BI refresh"
  ],
  interview: [
    ["ADF vs Databricks — which does what?", "ADF is best for orchestration and data movement with many connectors, low-code. Databricks is best for heavy, complex transformations, ML and large-scale Spark. Common pattern: ADF ingests and orchestrates, Databricks transforms."],
    ["How do you implement incremental loading?", "Store a watermark (last modified date/ID) in a control table, Lookup it, copy only rows greater than it, then update the watermark. Or use CDC from the source."],
    ["What is a Self-hosted Integration Runtime?", "An agent installed on a machine inside the private/on-prem network to allow ADF to securely access data behind the firewall."],
    ["ADF vs Fabric Data Factory?", "Same concepts (pipelines, activities, connectors); Fabric adds Dataflow Gen2, native OneLake integration and SaaS capacity model. New Fabric-centric projects typically use Fabric Data Factory; ADF remains for Azure-PaaS architectures."]
  ],
  pitfalls: [
    "Hard-coded pipelines per table instead of metadata-driven",
    "No retry/alerting strategy",
    "Doing heavy transformations in Copy activity instead of proper compute"
  ],
  related: ["datalake", "databricks", "datamgmt", "dataquality", "servicenow"],
  links: [
    ["Introduction to Azure Data Factory", "https://learn.microsoft.com/en-us/azure/data-factory/introduction"],
    ["Data Factory in Microsoft Fabric", "https://learn.microsoft.com/en-us/fabric/data-factory/data-factory-overview"],
    ["Metadata-driven copy", "https://learn.microsoft.com/en-us/azure/data-factory/copy-data-tool-metadata-driven"]
  ]
},
{
  id: "databricks", group: "Tools", title: "Azure Databricks", tag: "Databricks",
  tagline: "Apache Spark–based Data Intelligence Platform (lakehouse) for data engineering, SQL analytics, ML and GenAI — with Unity Catalog governance.",
  analogy: "A high-performance kitchen where many chefs (engineers, analysts, data scientists) cook from the same pantry (lakehouse) under one head chef's rules (Unity Catalog).",
  summary: "Azure Databricks is a first-party Azure service built on Apache Spark and Delta Lake. Core components: workspaces and notebooks (Python, SQL, Scala, R); compute (all-purpose clusters, job clusters, serverless); Delta Lake tables; Unity Catalog (catalog.schema.table namespace, access control, lineage, audit, data quality expectations, ML models, volumes); Lakeflow (Connect for ingestion, Spark Declarative Pipelines — formerly Delta Live Tables — for declarative ETL, Jobs for orchestration); Databricks SQL warehouses for BI; Mosaic AI / Agent Bricks for ML, model serving, vector search, and agents; MLflow for experiment tracking and model registry; Delta Sharing for secure data sharing; Lakebase (Postgres OLTP).",
  concepts: [
    ["Apache Spark", "Distributed compute engine: DataFrames, SQL, streaming, lazy evaluation, partitions."],
    ["Delta Lake", "Open table format: ACID, schema enforcement/evolution, time travel, MERGE, OPTIMIZE, Z-order / liquid clustering."],
    ["Unity Catalog", "Unified governance: three-level namespace, grants, row/column filters, lineage, audit, tags, quality."],
    ["Lakeflow Declarative Pipelines", "Declare tables and expectations; Databricks manages dependencies, retries, streaming/batch (ex-DLT)."],
    ["Auto Loader", "Incrementally ingest new files from cloud storage."],
    ["Jobs / Lakeflow Jobs", "Orchestrate notebooks, pipelines, SQL, dbt as workflows."],
    ["Databricks SQL", "SQL warehouses (serverless) for BI tools like Power BI; AI/BI dashboards and Genie (NL questions)."],
    ["MLflow", "Track experiments, register models, deploy — in Unity Catalog."],
    ["Mosaic AI / Agent Bricks", "Model serving, Vector Search, AI Functions (ai_query in SQL), agent building and evaluation."],
    ["Photon", "Vectorised query engine for fast SQL/DataFrame performance."],
    ["Delta Sharing", "Open protocol to share live data securely across organisations/platforms."]
  ],
  flow: [
    "Ingest with Auto Loader / Lakeflow Connect / ADF into Bronze Delta",
    "Transform via Declarative Pipelines with expectations into Silver",
    "Build Gold star schema / aggregates",
    "Govern everything in Unity Catalog (grants, lineage)",
    "Serve: Databricks SQL → Power BI; ML models via MLflow; vector search for RAG",
    "Orchestrate with Jobs; monitor cost and quality"
  ],
  useCases: [
    "Enterprise lakehouse for BI and AI",
    "Streaming IoT anomaly detection",
    "Training and serving churn/forecast models",
    "Chunking + embedding documents for RAG with Vector Search",
    "ai_query() in SQL to classify tickets with an LLM at scale"
  ],
  interview: [
    ["What is a lakehouse and how does Databricks implement it?", "Lakehouse combines cheap open lake storage with warehouse reliability/performance. Databricks implements it with Delta Lake on ADLS (ACID, schema, time travel), Photon/SQL warehouses for performance, and Unity Catalog for governance — one copy of data for BI, data science and AI."],
    ["What does Unity Catalog provide?", "Central governance across workspaces: catalog.schema.table namespace, fine-grained permissions (incl. row filters/column masks), automated lineage, auditing, discovery, and governance of models, functions, volumes and AI assets."],
    ["Explain Delta Lake time travel and MERGE.", "Every change is a versioned transaction in the Delta log, so you can query or restore previous versions (VERSION AS OF). MERGE performs upserts — insert new rows, update changed, delete if needed — essential for CDC and SCD2."],
    ["How do you optimise Databricks cost?", "Job clusters or serverless instead of always-on all-purpose clusters, auto-termination, autoscaling, right-sized instances, Photon, OPTIMIZE/liquid clustering, cluster policies, and cost monitoring via system tables."]
  ],
  pitfalls: [
    "Long-running all-purpose clusters → high cost",
    "Small-file problem without OPTIMIZE",
    "Workspace-level (legacy Hive metastore) permissions instead of Unity Catalog"
  ],
  related: ["datalake", "adf", "ml", "dataquality", "datagov", "rag", "powerbi"],
  links: [
    ["Azure Databricks documentation", "https://learn.microsoft.com/en-us/azure/databricks/"],
    ["Unity Catalog", "https://learn.microsoft.com/en-us/azure/databricks/data-governance/unity-catalog/"],
    ["Lakeflow Declarative Pipelines", "https://learn.microsoft.com/en-us/azure/databricks/dlt/"],
    ["Databricks Academy (free courses)", "https://www.databricks.com/learn/training/home"]
  ]
},
{
  id: "powerbi", group: "Tools", title: "Power BI", tag: "Power BI",
  tagline: "Microsoft's BI platform for data models, interactive reports, dashboards and sharing — now part of Microsoft Fabric.",
  analogy: "Excel pivot tables on steroids, connected to live company data, published on the web and shared securely with thousands of people.",
  summary: "Power BI flow: connect & transform data with Power Query (M), model it in a semantic model (star schema, relationships, DAX measures), visualise in reports (Power BI Desktop), publish to the Power BI service (workspaces, apps), and share securely. Storage modes: Import (in-memory VertiPaq, fastest), DirectQuery (live to source), Composite, and Direct Lake (reads Delta tables in OneLake directly — near-import speed without refresh). Security: row-level security (RLS), object-level security, sensitivity labels. Governance: workspaces, deployment pipelines, certified/endorsed datasets, usage metrics. Copilot in Power BI generates reports, DAX and narrative summaries and answers questions against semantic models.",
  concepts: [
    ["Power Query (M)", "ETL layer: connect, clean, shape data."],
    ["Semantic model (dataset)", "Tables, relationships, measures, hierarchies — the single source of truth for reports."],
    ["DAX", "Formula language for measures: CALCULATE, FILTER, SUMX, time intelligence (TOTALYTD, SAMEPERIODLASTYEAR)."],
    ["Measure vs calculated column", "Measures: computed at query time in filter context (preferred). Columns: stored per row at refresh."],
    ["Filter context vs row context", "Core DAX concept; CALCULATE modifies filter context."],
    ["Storage modes", "Import, DirectQuery, Composite, Direct Lake."],
    ["RLS", "Row-level security: users only see rows for their region/department."],
    ["Workspaces & apps", "Collaboration containers; apps distribute content to consumers."],
    ["Deployment pipelines", "Dev → Test → Prod promotion; plus Git integration (PBIP/PBIR formats)."],
    ["Endorsement", "Promoted / Certified semantic models signal trusted data."],
    ["Metrics / scorecards", "Track KPIs against targets with owners and check-ins."],
    ["Copilot in Power BI", "NL report creation, DAX suggestions, summaries, Q&A on semantic models."]
  ],
  flow: [
    "Get data (Databricks SQL, Lakehouse, SQL, SharePoint, ServiceNow…)",
    "Transform in Power Query",
    "Model: star schema, relationships, DAX measures",
    "Build report visuals; add RLS",
    "Publish to workspace; schedule refresh (gateway for on-prem)",
    "Share via app; endorse; monitor usage; iterate"
  ],
  useCases: [
    "IT service management dashboard from ServiceNow data",
    "Portfolio & resource dashboards from Clarity",
    "Agile metrics from Jira",
    "Executive KPI scorecard",
    "AI adoption & value dashboard"
  ],
  interview: [
    ["Import vs DirectQuery vs Direct Lake?", "Import copies data into memory: fastest, full DAX, but needs refresh and has size limits. DirectQuery queries the source live: always current, but slower and source-dependent. Direct Lake (Fabric) reads Delta/Parquet in OneLake directly: near-import speed, no heavy refresh."],
    ["Explain CALCULATE.", "CALCULATE evaluates an expression in a modified filter context — e.g. CALCULATE([Sales], Region = \"EU\") or removing filters with ALL. It's the most important DAX function; it also performs context transition from row to filter context."],
    ["How do you implement row-level security?", "Define roles with DAX filters (e.g. [Region] = USERPRINCIPALNAME()-mapped region via a security table), assign Entra groups to roles in the service, and test with 'View as role'."],
    ["How do you improve report performance?", "Star schema, remove unused columns, reduce cardinality, use measures not calculated columns, avoid bi-directional relationships, aggregations, Performance Analyzer and DAX Studio to find slow visuals, limit visuals per page."],
    ["Write a DAX measure for MTTR.", "MTTR (hrs) = AVERAGEX( FILTER(Incidents, NOT ISBLANK(Incidents[ResolvedAt])), DATEDIFF(Incidents[OpenedAt], Incidents[ResolvedAt], MINUTE) ) / 60"]
  ],
  pitfalls: [
    "One flat wide table instead of star schema",
    "Every analyst builds their own dataset → multiple truths",
    "Complex logic in Power Query per report instead of upstream in the lakehouse"
  ],
  related: ["analytics", "kpi", "datamodel", "databricks", "ddd"],
  links: [
    ["Power BI documentation", "https://learn.microsoft.com/en-us/power-bi/"],
    ["Direct Lake overview", "https://learn.microsoft.com/en-us/fabric/fundamentals/direct-lake-overview"],
    ["DAX Guide", "https://dax.guide/"],
    ["SQLBI — DAX & modelling articles", "https://www.sqlbi.com/articles/"]
  ]
},
{
  id: "servicenow", group: "Tools", title: "ServiceNow", tag: "ServiceNow",
  tagline: "Cloud platform for digital workflows — ITSM, ITOM, HR, customer service — now with Now Assist GenAI, AI Agents and AI Control Tower.",
  analogy: "The company's central nervous system for requests and issues: every problem, request and change flows through it, with rules, owners and SLAs.",
  summary: "ServiceNow (Now Platform) is best known for IT Service Management aligned to ITIL: Incident, Problem, Change, Request (Service Catalog), Knowledge, and the CMDB (Configuration Management Database). It extends to ITOM (discovery, event management, AIOps), HRSD, CSM, SecOps, SPM (strategic portfolio), and more. Platform features: tables, workflows (Flow Designer), Integration Hub, Service Portal/Employee Center, Performance Analytics (KPIs). AI: Predictive Intelligence (classification, similarity, clustering), Now Assist (GenAI summarisation, resolution notes, chat, code), AI Agents and AI Agent Orchestrator for agentic workflows, and AI Control Tower (expanded at Knowledge 2026) to discover, govern, secure and measure AI and agents across the enterprise — including non-ServiceNow ones.",
  concepts: [
    ["Incident", "Unplanned interruption — restore service ASAP. KPIs: MTTR, SLA %, FCR."],
    ["Problem", "Root cause of one or more incidents; known errors and workarounds."],
    ["Change", "Controlled modification — standard, normal, emergency; CAB approval; change success rate."],
    ["Request / Service Catalog", "Standard requests (laptop, access) fulfilled via workflows."],
    ["CMDB & CSDM", "Configuration items (servers, apps, services) and relationships; CSDM = Common Service Data Model standard."],
    ["SLA / OLA", "Service level targets with customers / internal teams."],
    ["Knowledge (KCS)", "Knowledge base linked to tickets; feeds AI answers."],
    ["Flow Designer & Integration Hub", "Low-code workflows and connectors (spokes) to other systems."],
    ["Performance Analytics", "KPI indicators, breakdowns, trends, targets inside ServiceNow."],
    ["Predictive Intelligence", "ML: auto-categorise and route tickets, find similar incidents, cluster problems."],
    ["Now Assist", "GenAI skills: summarise case, generate resolution notes, virtual agent, KB generation."],
    ["AI Agents & AI Control Tower", "Agentic workflows plus central governance: inventory, runtime monitoring, kill switch, value measurement."]
  ],
  flow: [
    "User raises issue (portal, email, Virtual Agent, Teams)",
    "Predictive Intelligence categorises & routes; Now Assist summarises",
    "Agent/AI Agent resolves using KB and similar incidents",
    "Link to CI in CMDB; escalate / major incident if needed",
    "Resolve, capture knowledge (KCS), close; survey CSAT",
    "Problem management for recurring issues; Performance Analytics on KPIs"
  ],
  useCases: [
    "AI-driven ticket triage and summarisation",
    "Self-service with Virtual Agent / Copilot integration (ticket deflection)",
    "AIOps: event correlation → auto incident",
    "Export ServiceNow data via ADF to lakehouse for Power BI and forecasting",
    "Govern enterprise AI agents via AI Control Tower"
  ],
  interview: [
    ["Incident vs problem vs change?", "Incident: restore service quickly. Problem: find and remove the root cause of recurring incidents. Change: controlled implementation of modifications to minimise risk. Example: email down (incident) → root cause is expired certificate (problem) → implement certificate automation (change)."],
    ["Why is the CMDB important for AI and operations?", "It maps services to infrastructure, enabling impact analysis, routing, change risk assessment and AIOps correlation. Poor CMDB quality undermines automation and AI accuracy."],
    ["How would you use AI in ServiceNow?", "Predictive Intelligence for categorisation/assignment, Now Assist for summarisation and resolution notes, AI search and Virtual Agent for self-service, AI Agents for autonomous tasks like password resets — measured through KPIs like MTTR, FCR, deflection, and governed via AI Control Tower."],
    ["Name key ITSM KPIs.", "MTTR, SLA compliance, first-contact resolution, backlog and aging, reopen rate, CSAT, change success rate, incidents per CI/service, self-service deflection."]
  ],
  pitfalls: [
    "Over-customisation making upgrades painful",
    "Poor CMDB data quality",
    "Bad categorisation data → poor ML routing"
  ],
  related: ["kms", "agents", "anomaly", "kpi", "governance", "adf"],
  links: [
    ["ServiceNow Product Documentation", "https://www.servicenow.com/docs/"],
    ["ServiceNow AI Agents", "https://www.servicenow.com/products/ai-agents.html"],
    ["AI Control Tower — Knowledge 2026 announcement", "https://newsroom.servicenow.com/press-releases/details/2026/ServiceNow-expands-AI-Control-Tower-to-discover-observe-govern-secure-and-measure-AI-deployed-across-any-system-in-the-enterprise/default.aspx"],
    ["ServiceNow Now Learning (free)", "https://learning.servicenow.com/"]
  ]
},
{
  id: "jira", group: "Tools", title: "Jira & Clarity (PPM)", tag: "Jira / Clarity",
  tagline: "Jira = agile work & issue tracking for teams. Clarity (Broadcom) = portfolio & project management for investments, resources and financials.",
  analogy: "Clarity is the city planner deciding which buildings to fund and staff; Jira is the construction site board tracking each brick laid.",
  summary: "Jira (Atlassian) manages issues in projects with boards (Scrum/Kanban), backlogs, sprints, workflows and reports (velocity, burndown, cumulative flow, control chart). Hierarchy: Epic → Story/Task/Bug → Sub-task; plans across teams with Jira Plans (Advanced Roadmaps). JQL (Jira Query Language) filters issues. Atlassian Intelligence / Rovo adds AI search, summarisation and agents. Clarity (Broadcom, formerly CA PPM) manages the portfolio: ideas/demand → investments (projects, products), resource capacity & allocation, timesheets, costs/budgets, financials, roadmaps and status reporting. Clarity integrates with Jira (Clarity-Jira integration) so strategic plans in Clarity connect to team execution in Jira. Both are common data sources for PMO analytics and project-risk AI.",
  concepts: [
    ["Jira issue types", "Epic, Story, Task, Bug, Sub-task (customisable)."],
    ["Scrum vs Kanban", "Scrum: time-boxed sprints, velocity. Kanban: continuous flow, WIP limits, cycle time."],
    ["Workflow", "Statuses and transitions (To Do → In Progress → Done) with rules/automation."],
    ["JQL", "Query language: project = OPS AND status != Done AND priority = High ORDER BY created."],
    ["Agile metrics", "Velocity, burndown, cycle time, lead time, throughput, cumulative flow."],
    ["Jira Plans / Advanced Roadmaps", "Cross-team planning, dependencies, capacity."],
    ["Atlassian Rovo", "AI search, chat and agents across Atlassian tools."],
    ["Clarity investments", "Projects, ideas, products, custom investments with lifecycles and stage gates."],
    ["Resource management", "Capacity vs allocation vs actuals; utilisation; role-based planning."],
    ["Financial management", "Budgets, forecasts, actual costs, cost plans, chargebacks."],
    ["Portfolio management", "Prioritise and balance investments against strategy and capacity (scenario planning)."],
    ["Timesheets", "Actual effort captured for cost and utilisation tracking."]
  ],
  flow: [
    "Idea / demand captured in Clarity; business case & approval",
    "Investment funded and staffed (resource plan, budget)",
    "Epics created and synced to Jira for delivery",
    "Teams execute in sprints; progress & effort flow back to Clarity",
    "Portfolio reviews: budget vs actual, schedule, benefits",
    "Data extracted to lakehouse → Power BI dashboards & AI (delay prediction)"
  ],
  useCases: [
    "Tracking AI use case portfolio from idea to production in Clarity",
    "Running AI/data team delivery in Jira sprints",
    "Predicting project delay risk from Jira velocity and Clarity financials",
    "Rovo / Copilot agent answering 'what's blocking release X?'"
  ],
  interview: [
    ["Jira vs Clarity — how do they fit together?", "Clarity is strategic/portfolio (what to fund, resource capacity, financials, benefits); Jira is team-level execution (backlogs, sprints, issues). Integration links Clarity investments to Jira epics so leadership sees real progress without double entry."],
    ["Which agile metrics matter and why?", "Cycle time and lead time (speed/predictability), throughput (output), WIP (flow health), sprint predictability (committed vs delivered), escaped defects (quality). Velocity is for team planning, not cross-team comparison."],
    ["Write a JQL query for high-priority open bugs created in the last 7 days.", "project = AI AND issuetype = Bug AND priority in (Highest, High) AND statusCategory != Done AND created >= -7d ORDER BY priority DESC"],
    ["How would you manage an AI use case portfolio?", "Capture ideas in Clarity with a standard canvas, score value/feasibility, stage gates (PoC → pilot → production), resource and budget tracking, Jira for delivery, and a Power BI dashboard showing pipeline, spend and realised benefits."]
  ],
  pitfalls: [
    "Inconsistent Jira hygiene (statuses, estimates) → misleading metrics",
    "Double entry between Clarity and Jira",
    "Using velocity to compare teams"
  ],
  related: ["usecases", "kpi", "analytics", "predictive", "powerbi"],
  links: [
    ["Jira Software guides (Atlassian)", "https://www.atlassian.com/software/jira/guides"],
    ["JQL — Atlassian docs", "https://support.atlassian.com/jira-service-management-cloud/docs/use-advanced-search-with-jira-query-language-jql/"],
    ["Clarity (Broadcom) documentation", "https://techdocs.broadcom.com/us/en/ca-enterprise-software/business-management/clarity-project-and-portfolio-management-ppm-on-premise.html"],
    ["Atlassian Rovo", "https://www.atlassian.com/software/rovo"]
  ]
}
);
