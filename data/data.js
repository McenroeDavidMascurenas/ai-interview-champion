// Data topics
window.TOPICS = window.TOPICS || [];
window.TOPICS.push(
{
  id: "datamgmt", group: "Data", title: "Data Management", tag: "Data Mgmt",
  tagline: "The end-to-end discipline of collecting, storing, integrating, securing and delivering data as a reliable business asset.",
  analogy: "Running a warehouse: goods (data) arrive, are checked, labelled, stored in the right place, protected, and delivered to whoever needs them — on time and in good condition.",
  summary: "Data management covers the whole data lifecycle. The DAMA-DMBOK framework defines 11 knowledge areas with Data Governance at the centre: Data Architecture, Data Modelling & Design, Storage & Operations, Security, Integration & Interoperability, Document & Content Management, Reference & Master Data, Data Warehousing & BI, Metadata, and Data Quality. Modern architectures: data warehouse (structured, schema-on-write), data lake (all formats, schema-on-read), lakehouse (lake + warehouse features via Delta/Iceberg), and data mesh (domain-owned data products). In the Microsoft world: ADLS Gen2 + Data Factory + Databricks, or Microsoft Fabric with OneLake.",
  concepts: [
    ["DAMA-DMBOK wheel", "11 knowledge areas with Data Governance at the centre — standard reference framework."],
    ["Data lifecycle", "Create/acquire → store → use → share → archive → destroy."],
    ["ETL vs ELT", "Transform before loading (classic warehouse) vs load raw first then transform in the platform (modern lakehouse)."],
    ["Data warehouse", "Structured, modelled data for BI (Synapse, Fabric Warehouse, Snowflake)."],
    ["Data lake", "Cheap storage for any data in raw form (ADLS Gen2)."],
    ["Lakehouse", "Lake storage + ACID tables (Delta Lake) + warehouse performance/governance (Databricks, Fabric)."],
    ["Medallion architecture", "Bronze (raw) → Silver (cleaned, conformed) → Gold (business-ready aggregates)."],
    ["Master Data Management (MDM)", "Single trusted version of key entities: customer, product, supplier, employee."],
    ["Reference data", "Controlled code lists: country codes, currencies, status values."],
    ["Metadata", "Data about data: technical (schema), business (definitions), operational (lineage, refresh)."],
    ["Data mesh", "Decentralised: domains own and publish data products; central platform + federated governance."],
    ["Data product", "A reusable, documented, quality-assured dataset with an owner and SLA."]
  ],
  flow: [
    "Sources: ERP, CRM, ServiceNow, Jira, IoT, files, APIs",
    "Ingest (Data Factory / Fabric pipelines / streaming)",
    "Store raw in the lake (Bronze)",
    "Clean, conform, apply quality rules (Silver) — Databricks/Spark",
    "Model for business (Gold, star schema)",
    "Serve: Power BI, ML, AI/RAG, APIs",
    "Govern throughout: catalog, lineage, security, quality monitoring"
  ],
  useCases: [
    "Unified customer 360 view from CRM + ERP + support",
    "Enterprise data platform for reporting and AI",
    "IT service analytics combining ServiceNow + Jira + Clarity"
  ],
  interview: [
    ["Data lake vs data warehouse vs lakehouse?", "Warehouse: structured, schema-on-write, fast SQL for BI, costly for raw data. Lake: cheap, any format, schema-on-read, but can become a swamp without governance. Lakehouse: open table formats (Delta/Iceberg) on lake storage add ACID transactions, schema enforcement, time travel and warehouse-like performance — one platform for BI and AI."],
    ["Explain the medallion architecture.", "Bronze keeps raw data as ingested (auditability, replay). Silver cleans, deduplicates, standardises and joins. Gold provides business-level aggregates and dimensional models for reporting. Quality improves at each layer."],
    ["What is MDM and why is it needed?", "Different systems hold different versions of the same customer or product. MDM matches, merges and governs a golden record so reports, AI and processes use consistent entities."],
    ["Data mesh — pros and cons?", "Pros: domain ownership, scalability, faster delivery close to business knowledge. Cons: needs mature domains, strong platform and federated governance; risk of duplication and inconsistent standards."]
  ],
  pitfalls: [
    "Data swamp: lake without catalog, owners, quality",
    "Point-to-point integrations everywhere",
    "Platform-first without business use cases"
  ],
  related: ["datagov", "dataquality", "datamodel", "datalake", "adf", "databricks"],
  links: [
    ["DAMA International — DMBOK", "https://www.dama.org/cpages/body-of-knowledge"],
    ["Medallion architecture (Databricks)", "https://www.databricks.com/glossary/medallion-architecture"],
    ["Azure Cloud Adoption Framework — Cloud-scale analytics", "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/cloud-scale-analytics/"]
  ]
},
{
  id: "datagov", group: "Data", title: "Data Governance", tag: "Data Gov",
  tagline: "Who can do what with which data, under which rules — ownership, policies, standards and accountability.",
  analogy: "The constitution and government of your data country: laws (policies), officials (owners and stewards), a land registry (catalog) and police (access control and audits).",
  summary: "Data governance is the exercise of authority and control over data assets. It defines roles (data owner, data steward, data custodian), policies (classification, retention, access, privacy), standards (naming, definitions), and processes (issue management, change control). It is enabled by tooling: data catalog and business glossary, lineage, classification/sensitivity labels, access policies. Microsoft Purview (Unified Catalog, Data Map, Information Protection, DLP) and Databricks Unity Catalog are key tools. Governance also underpins AI: trustworthy AI needs governed, classified and permissioned data. Regulations: GDPR, CCPA, industry rules, EU Data Act, EU AI Act.",
  concepts: [
    ["Data owner", "Accountable senior business role for a data domain; approves access and definitions."],
    ["Data steward", "Day-to-day responsibility: definitions, quality rules, issue resolution."],
    ["Data custodian", "IT role operating storage, security and backups."],
    ["Business glossary", "Agreed definitions of business terms (e.g. 'Active Customer')."],
    ["Data catalog", "Searchable inventory of data assets with metadata, owners, classification (Purview Unified Catalog, Unity Catalog)."],
    ["Data lineage", "Where data came from and how it was transformed — for trust, impact analysis and audits."],
    ["Classification & sensitivity labels", "Public / Internal / Confidential / Highly confidential; PII detection."],
    ["Access control", "RBAC, ABAC, row-level and column-level security, masking."],
    ["Data retention", "How long data is kept and when it's deleted (legal + business)."],
    ["Federated governance", "Central standards, domain execution — typical for data mesh."],
    ["GDPR basics", "Lawful basis, purpose limitation, data minimisation, subject rights, DPIA."]
  ],
  flow: [
    "Set up governance council, charter, operating model (RACI)",
    "Define domains, assign owners and stewards",
    "Build glossary and critical data elements (CDEs)",
    "Catalog and classify data assets; capture lineage",
    "Define and enforce policies: access, retention, quality",
    "Monitor compliance and quality KPIs; manage issues",
    "Continuously improve; extend to AI governance"
  ],
  useCases: [
    "Purview scanning ADLS, SQL, Power BI → catalog + sensitivity labels",
    "Unity Catalog governing all Databricks tables, models and features with lineage",
    "Preparing M365 data for Copilot: labelling and fixing oversharing",
    "GDPR right-to-be-forgotten process"
  ],
  interview: [
    ["Data governance vs data management?", "Governance defines the rules and accountability (the 'what' and 'who'); management executes the activities (the 'how') — integration, storage, quality operations. Governance sets policy; management implements it."],
    ["How would you start a data governance programme?", "Anchor it to business value (e.g. trusted KPIs for executive reporting or AI readiness), start with a few critical domains and critical data elements, appoint owners/stewards, deploy catalog and glossary, define quality rules, show quick wins, then scale. Avoid a big-bang, policy-heavy approach."],
    ["Why does data governance matter for AI?", "AI amplifies data issues: biased or poor data → bad models; unlabelled sensitive data → leakage via Copilot/RAG; unclear lineage → unexplainable decisions. Governance provides classification, permissions, quality and lineage required for Responsible AI and the EU AI Act data requirements."],
    ["What is data lineage used for?", "Impact analysis before changes, root-cause analysis for wrong numbers, regulatory audits, and building trust in reports and models."]
  ],
  pitfalls: [
    "Governance as a documentation exercise with no business value",
    "Roles assigned but no time allocated",
    "Tool bought before operating model defined"
  ],
  related: ["datamgmt", "dataquality", "governance", "kms", "databricks", "powerbi"],
  links: [
    ["Microsoft Purview documentation", "https://learn.microsoft.com/en-us/purview/"],
    ["Databricks Unity Catalog", "https://learn.microsoft.com/en-us/azure/databricks/data-governance/unity-catalog/"],
    ["DAMA — Data Governance", "https://www.dama.org/"]
  ]
},
{
  id: "dataquality", group: "Data", title: "Data Quality", tag: "DQ",
  tagline: "Measuring and improving whether data is fit for its intended use — accurate, complete, consistent, timely, valid, unique.",
  analogy: "Quality control on a production line: you test samples against specifications, reject defects, and fix the machine that caused them.",
  summary: "Data quality is 'fitness for purpose'. It is measured along dimensions, enforced by rules at ingestion and transformation, monitored with scorecards, and improved by fixing root causes at the source (not only cleaning downstream). Modern tooling: expectations in Databricks Lakeflow Declarative Pipelines (stored in Unity Catalog), Great Expectations, dbt tests, Purview Data Quality, and data observability (freshness, volume, schema-change, distribution anomalies). For AI, data quality determines model accuracy and RAG answer quality.",
  concepts: [
    ["Accuracy", "Values reflect reality (correct address)."],
    ["Completeness", "Required values present (no missing emails)."],
    ["Consistency", "Same value across systems (customer status in CRM = ERP)."],
    ["Timeliness / freshness", "Available when needed; up to date."],
    ["Validity", "Conforms to format/domain rules (date format, allowed codes)."],
    ["Uniqueness", "No duplicates."],
    ["Integrity", "Relationships valid (every order has an existing customer)."],
    ["DQ rule / expectation", "Automated check e.g. 'email IS NOT NULL AND matches regex'. Action: warn, drop, quarantine, fail."],
    ["Data profiling", "Analyse distributions, nulls, patterns to discover issues."],
    ["DQ scorecard", "% of records passing rules per dimension, per domain, over time."],
    ["Data observability", "Monitor pipelines for freshness, volume, schema and distribution anomalies."],
    ["Root cause fix", "Correct the source process/system, not just the downstream copy."]
  ],
  flow: [
    "Identify critical data elements with business owners",
    "Profile data to find issues",
    "Define rules per dimension and thresholds",
    "Implement checks in pipelines (Bronze → Silver)",
    "Quarantine or flag failing records; alert stewards",
    "Publish DQ scorecard in Power BI",
    "Fix root causes; track trend"
  ],
  useCases: [
    "Customer master deduplication before CRM migration",
    "CMDB quality in ServiceNow (missing owners, stale CIs)",
    "Jira data hygiene for accurate velocity/lead time KPIs",
    "Training data validation for ML models"
  ],
  interview: [
    ["Name the dimensions of data quality.", "Accuracy, completeness, consistency, timeliness, validity, uniqueness (plus integrity). Choose dimensions per use case — a real-time dashboard cares about timeliness; finance cares about accuracy."],
    ["How would you implement data quality in a lakehouse?", "Profile sources, agree rules with stewards, implement expectations in Silver-layer pipelines (e.g. Lakeflow expectations or Great Expectations), quarantine bad rows, log results to a DQ table, visualise a scorecard in Power BI, and alert owners; track root-cause fixes."],
    ["Who owns data quality?", "The business (data owner) is accountable; stewards define rules and resolve issues; IT/data engineering implements checks. Quality must be fixed where data is created."],
    ["How does poor data quality impact AI?", "Garbage in, garbage out: biased or wrong predictions, drifting models, and RAG assistants citing outdated or conflicting documents."]
  ],
  pitfalls: [
    "Cleaning downstream forever instead of fixing the source",
    "Rules without owners",
    "Measuring quality without business impact"
  ],
  related: ["datagov", "datamgmt", "databricks", "kpi", "anomaly"],
  links: [
    ["Lakeflow pipeline expectations", "https://learn.microsoft.com/en-us/azure/databricks/dlt/expectations"],
    ["Great Expectations", "https://greatexpectations.io/"],
    ["Purview Data Quality", "https://learn.microsoft.com/en-us/purview/unified-catalog-data-quality"]
  ]
},
{
  id: "datamodel", group: "Data", title: "Data Modelling Concepts", tag: "Modelling",
  tagline: "Designing how data is structured — entities, relationships, keys — for transactions, analytics and AI.",
  analogy: "Architectural blueprints for data: conceptual (a sketch of rooms), logical (a detailed floor plan), physical (the construction drawings with pipes and wiring).",
  summary: "Data modelling defines the structure of data at three levels: conceptual (business entities and relations), logical (attributes, keys, normalised relationships, technology-agnostic), and physical (tables, types, indexes, partitions for a specific platform). OLTP systems use normalised models (3NF) to avoid redundancy. Analytics uses dimensional modelling (Kimball): star schemas with fact tables (measures, events) and dimension tables (context). Other approaches: Data Vault 2.0 (hubs, links, satellites — auditable integration layer), One Big Table, and semantic models (Power BI) that add measures and relationships for business users.",
  concepts: [
    ["Conceptual / logical / physical", "Three levels of abstraction from business view to implementation."],
    ["Entity, attribute, relationship", "Things, their properties, and how they relate (1:1, 1:N, N:M)."],
    ["Primary / foreign / surrogate key", "Unique identifier; reference to another table; system-generated key independent of source."],
    ["Normalisation (1NF–3NF)", "Remove redundancy and update anomalies — good for transactions."],
    ["Denormalisation", "Add redundancy for faster reads — good for analytics."],
    ["Star schema", "Central fact table joined to dimension tables. Best practice for Power BI."],
    ["Snowflake schema", "Dimensions normalised into sub-dimensions. More joins, less redundancy."],
    ["Fact types", "Transaction, periodic snapshot, accumulating snapshot; additive / semi-additive / non-additive measures."],
    ["Grain", "What one row in a fact table represents. Define first!"],
    ["Slowly Changing Dimensions", "SCD1 overwrite, SCD2 new row with validity dates (keep history), SCD3 previous-value column."],
    ["Data Vault 2.0", "Hubs (business keys), Links (relationships), Satellites (descriptive history). Agile, auditable."],
    ["Conformed dimension", "Shared dimension (Date, Customer) used across multiple facts for consistent reporting."]
  ],
  flow: [
    "Understand business process and questions",
    "Declare the grain (e.g. one row per ticket per day)",
    "Identify dimensions (who, what, where, when)",
    "Identify facts/measures (count, duration, cost)",
    "Build logical → physical model (Gold layer)",
    "Create Power BI semantic model: relationships, measures, hierarchies"
  ],
  useCases: [
    "Service desk star schema: FactIncident + DimDate, DimAssignmentGroup, DimCategory, DimPriority, DimCI",
    "Project portfolio model from Clarity + Jira: FactTimesheet, FactIssue, DimProject, DimResource",
    "Sales model: FactSales + DimCustomer (SCD2), DimProduct, DimDate"
  ],
  interview: [
    ["Star vs snowflake schema?", "Star: denormalised dimensions directly around the fact — simpler, faster, recommended for Power BI. Snowflake: normalised dimensions — less redundancy but more joins and complexity."],
    ["What is the grain and why does it matter?", "The grain defines what one fact row represents. Mixing grains causes double counting and wrong totals. Declare it before choosing dimensions and facts."],
    ["Explain SCD Type 2.", "When a dimension attribute changes (customer moves region), insert a new row with a new surrogate key and valid-from/valid-to dates, keeping history so past facts report under the old region."],
    ["Normalised vs dimensional modelling — when?", "Normalised (3NF) for transactional systems that need integrity and fast writes. Dimensional for analytics where users need simple, fast queries."],
    ["Design a data model for incident KPIs.", "Fact: one row per incident (grain) with measures resolution time, reopen flag, SLA breached flag. Dimensions: Date (opened/resolved as role-playing), Priority, Category, Assignment Group, Caller/Department, CI/Service. Power BI measures: MTTR, SLA %, backlog, FCR."]
  ],
  pitfalls: [
    "Undefined grain → double counting",
    "Many-to-many and bi-directional relationships everywhere in Power BI",
    "Using source-system keys only (no surrogate keys) → history problems"
  ],
  related: ["datamgmt", "powerbi", "analytics", "kpi", "databricks"],
  links: [
    ["Power BI — Understand star schema", "https://learn.microsoft.com/en-us/power-bi/guidance/star-schema"],
    ["Kimball Group — Dimensional modelling techniques", "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/"],
    ["Data Vault Alliance", "https://datavaultalliance.com/"]
  ]
},
{
  id: "analytics", group: "Data", title: "Data Analytics & Reporting", tag: "Analytics",
  tagline: "Turning data into insight — dashboards, reports, analysis and storytelling that drive decisions.",
  analogy: "A car dashboard: speed, fuel and warnings at a glance, with the ability to open the bonnet (drill-down) when something looks wrong.",
  summary: "Analytics spans descriptive (what happened), diagnostic (why), predictive (what will happen) and prescriptive (what to do). Reporting delivers standard, recurring information (operational and management reports); dashboards give at-a-glance monitoring; self-service analytics lets business users explore governed data. Good practice: one semantic layer / single source of truth, certified datasets, clear visual design (right chart for the question), data storytelling, and embedding insights into workflows (Teams, apps, alerts). GenAI adds natural-language Q&A and automated narratives (Copilot in Power BI).",
  concepts: [
    ["Operational vs analytical reporting", "Operational: day-to-day, detailed, near real-time. Analytical: trends, aggregated, strategic."],
    ["Dashboard vs report", "Dashboard = one-page monitoring of KPIs. Report = detailed, multi-page, interactive analysis."],
    ["Self-service BI", "Business users build their own reports on governed, certified semantic models."],
    ["Semantic layer", "Business-friendly model with definitions and measures (Power BI semantic model)."],
    ["Drill-down / drill-through", "Navigate from summary to detail."],
    ["Chart selection", "Trend → line; comparison → bar; part-to-whole → stacked bar (avoid pies); distribution → histogram; relationship → scatter."],
    ["Data storytelling", "Context + insight + recommendation; lead with the 'so what'."],
    ["Real-time analytics", "Streaming data into dashboards/alerts (Fabric Real-Time Intelligence, Data Activator)."],
    ["Augmented analytics", "AI-generated insights, NL Q&A, anomaly highlights, narratives."]
  ],
  flow: [
    "Understand audience and decisions to support",
    "Define KPIs and questions",
    "Build governed data model",
    "Design report/dashboard (layout, charts, filters)",
    "Validate numbers with business; certify",
    "Publish, share, embed; train users",
    "Monitor usage and iterate"
  ],
  useCases: [
    "Executive IT service dashboard (SLA, MTTR, backlog, CSAT)",
    "Portfolio dashboard from Clarity: budget vs actual, resource utilisation",
    "Agile delivery analytics from Jira: velocity, cycle time, throughput",
    "AI adoption dashboard: Copilot usage and value"
  ],
  interview: [
    ["How do you design a good dashboard?", "Start with the audience and decisions. Show 5–7 KPIs max at top with targets and trends, then supporting breakdowns; use consistent colours (red only for bad), simple charts, clear titles that state the insight, filters for common slices and drill-through for detail. Validate with users."],
    ["What is a single source of truth and how do you achieve it?", "One governed, certified dataset/semantic model per domain that all reports reuse, with glossary definitions and owners — instead of each analyst building their own logic in Excel."],
    ["How do you ensure adoption of reports?", "Co-design with users, keep it simple, embed in their workflow (Teams, apps), provide training and champions, track usage metrics, and retire unused reports."]
  ],
  pitfalls: [
    "Too many visuals, no clear message",
    "Different numbers for the same KPI in different reports",
    "Reports nobody uses (check usage metrics!)"
  ],
  related: ["kpi", "ddd", "powerbi", "datamodel", "predictive"],
  links: [
    ["Power BI guidance documentation", "https://learn.microsoft.com/en-us/power-bi/guidance/"],
    ["Storytelling with Data (blog)", "https://www.storytellingwithdata.com/blog"]
  ]
},
{
  id: "kpi", group: "Data", title: "KPI Definition & Monitoring", tag: "KPIs",
  tagline: "Choosing the few measures that show whether you're achieving your goals — and tracking them reliably.",
  analogy: "A fitness tracker: you pick a goal (run a marathon), a few metrics that matter (weekly km, pace, resting heart rate), targets, and you check them regularly to adjust training.",
  summary: "A KPI (Key Performance Indicator) is a metric tied to a strategic objective, with a clear definition, formula, owner, data source, frequency and target. Use SMART criteria. Distinguish leading indicators (predict future outcomes, actionable now) from lagging indicators (show results after the fact). Frameworks: Balanced Scorecard, OKRs (Objectives & Key Results), North Star Metric. Monitoring means dashboards, thresholds (RAG status), alerts, regular reviews and action plans. KPI definitions should live in a glossary and semantic model so everyone calculates them the same way.",
  concepts: [
    ["KPI vs metric", "All KPIs are metrics, but only the few critical to strategy are KPIs."],
    ["SMART", "Specific, Measurable, Achievable, Relevant, Time-bound."],
    ["Leading vs lagging", "Leading: backlog age, training completion. Lagging: revenue, SLA achieved, CSAT."],
    ["KPI definition card", "Name, purpose, formula, unit, source, grain, owner, frequency, target, thresholds."],
    ["OKR", "Objective (qualitative goal) + 3–5 measurable Key Results."],
    ["Balanced Scorecard", "Financial, Customer, Internal Process, Learning & Growth perspectives."],
    ["RAG status", "Red/Amber/Green thresholds vs target."],
    ["Vanity metric", "Looks good but doesn't drive decisions (e.g. page views)."],
    ["Goodhart's law", "When a measure becomes a target, it ceases to be a good measure — balance KPIs."]
  ],
  flow: [
    "Start with strategic objective",
    "Identify success drivers and select candidate metrics",
    "Define each KPI precisely (definition card) and agree with owner",
    "Check data availability & quality; build in semantic model",
    "Set baseline, target and thresholds",
    "Visualise with trend and target; set alerts (Power BI metrics/scorecards, Data Activator)",
    "Review cadence → actions → refine KPIs"
  ],
  useCases: [
    "IT service: MTTR, SLA compliance %, First Contact Resolution, backlog age, CSAT, change success rate",
    "Delivery (Jira): cycle time, lead time, throughput, sprint predictability, escaped defects",
    "Portfolio (Clarity): budget variance, schedule variance, resource utilisation, benefits realised",
    "AI programme: adoption (active users), time saved, deflection rate, groundedness score, cost per interaction",
    "Data: DQ score, pipeline success rate, data freshness SLA"
  ],
  interview: [
    ["How do you define a good KPI?", "Linked to an objective, SMART, clearly defined formula and data source, has an owner and target, is actionable, and balanced with other KPIs to avoid gaming. I document it in a KPI card and implement it once in the semantic model."],
    ["Leading vs lagging — example?", "For customer satisfaction (lagging: CSAT), leading indicators are first response time and backlog age — you can act on them before CSAT drops."],
    ["Which KPIs would you use to measure an AI assistant?", "Adoption (weekly active users, retention), productivity (time saved per task, tickets deflected), quality (answer acceptance, groundedness, escalation rate), risk (safety incidents), and cost (cost per conversation vs baseline)."],
    ["What would you do if a KPI turns red?", "Validate the data first, drill down to find which segment drives it (diagnostic), involve the owner, agree an action plan with deadline, and track the effect."]
  ],
  pitfalls: [
    "Too many KPIs",
    "Different definitions across teams",
    "KPIs without owners or targets",
    "Optimising one KPI while hurting another (speed vs quality)"
  ],
  related: ["analytics", "ddd", "powerbi", "servicenow", "jira", "usecases"],
  links: [
    ["Power BI Metrics / Scorecards", "https://learn.microsoft.com/en-us/power-bi/create-reports/service-goals-introduction"],
    ["What Matters — OKRs", "https://www.whatmatters.com/faqs/okr-meaning-definition-example"],
    ["DORA metrics", "https://dora.dev/guides/dora-metrics-four-keys/"]
  ]
},
{
  id: "ddd", group: "Data", title: "Data-Driven Decision-Making", tag: "DDDM",
  tagline: "Making decisions based on evidence and analysis rather than intuition alone — and building a culture that does so.",
  analogy: "A pilot uses instruments, not just a view out of the window — especially in fog. Intuition still matters, but instruments keep you honest.",
  summary: "Data-driven decision-making (DDDM) is a process and a culture: frame the decision, gather relevant data, analyse, decide, act, and measure the outcome. Techniques: hypothesis-driven analysis, A/B testing and experiments, root-cause analysis, cost-benefit analysis, scenario/what-if analysis, and decision frameworks. Enablers: data literacy, trusted data (governance, quality), accessible tools (self-service BI, Copilot), and leadership behaviour (asking 'what does the data say?'). Pitfalls include confirmation bias, correlation ≠ causation, and analysis paralysis.",
  concepts: [
    ["Decision framing", "What decision, by whom, when, with which options and criteria?"],
    ["Hypothesis-driven", "Formulate hypotheses first, then test with data — faster than boiling the ocean."],
    ["A/B test / experiment", "Randomised comparison of variants to establish causality."],
    ["Correlation vs causation", "Things moving together doesn't mean one causes the other."],
    ["Root cause analysis", "5 Whys, Fishbone (Ishikawa), Pareto (80/20)."],
    ["Cognitive biases", "Confirmation bias, survivorship bias, anchoring, recency bias."],
    ["Data literacy", "Ability to read, work with, analyse and argue with data — organisational capability."],
    ["DIKW pyramid", "Data → Information → Knowledge → Wisdom."],
    ["Type 1 vs Type 2 decisions", "Irreversible (slow, careful) vs reversible (decide fast, learn)."]
  ],
  flow: [
    "Frame the decision and success criteria",
    "Form hypotheses",
    "Collect & validate relevant data",
    "Analyse (descriptive → diagnostic → predictive)",
    "Communicate insight with recommendation",
    "Decide & act",
    "Measure outcome and learn"
  ],
  useCases: [
    "Prioritising AI use cases by quantified value",
    "Staffing the service desk based on forecasted ticket volume",
    "Deciding which projects to stop in portfolio review using Clarity data",
    "A/B testing a new self-service AI assistant vs old portal"
  ],
  interview: [
    ["Give an example of a data-driven decision you made or would make.", "Structure with STAR: Situation (e.g. rising ticket backlog), Task (reduce MTTR), Action (analysed tickets by category — Pareto showed 30% were password resets; proposed self-service + AI agent; piloted with a control group), Result (deflection 25%, MTTR -18%)."],
    ["How do you build a data-driven culture?", "Leadership role-modelling, trusted and accessible data, data literacy training, embedding KPIs in regular reviews, celebrating decisions informed by data (including stopping things), and making experimentation safe."],
    ["What if the data contradicts a senior stakeholder's intuition?", "Check data quality and assumptions first, present transparently with context and confidence level, explore why the views differ, propose a small experiment to test, and keep the conversation about the goal, not about being right."]
  ],
  pitfalls: [
    "Using data to justify decisions already made",
    "Analysis paralysis",
    "Ignoring uncertainty and data quality"
  ],
  related: ["kpi", "analytics", "predictive", "powerbi", "usecases"],
  links: [
    ["Harvard Business School Online — Data-driven decision making", "https://online.hbs.edu/blog/post/data-driven-decision-making"],
    ["Microsoft — Power BI adoption roadmap (data culture)", "https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap-data-culture"]
  ]
}
);
