# AI Interview Champion

A static study app for AI & Data interview preparation: 28 topics across AI, Data and the Microsoft/enterprise tool stack, with 109 interview questions and model answers.

## What's inside

- **AI:** Generative AI, LLMs, AI Agents & A2A/MCP, Knowledge Management, RAG, ML fundamentals, Predictive Analytics, Anomaly Detection, Forecasting, Responsible AI & governance, Use-case identification & industrialization
- **Data:** Data Management, Data Governance, Data Quality, Data Modelling, Analytics & Reporting, KPIs, Data-driven decision-making
- **Tools:** Microsoft 365 Copilot, Copilot Studio, Microsoft Foundry, Azure OpenAI, ADLS Gen2, Azure Data Factory, Azure Databricks, Power BI, ServiceNow, Jira & Clarity

Each topic page has: a plain-language analogy, explanation, key concepts, step-by-step flow, use cases, pitfalls, interview Q&A, related topics and official links.

Also includes a clickable architecture map, a 5-day study plan, an interview flashcard drill, search, progress tracking and dark mode.

## Run locally

```bash
python -m http.server 5173
```

Then open http://localhost:5173.

## Structure

- `index.html`, `styles.css`, `app.js`: the app
- `data/ai.js`, `data/data.js`, `data/tools.js`: topic content (one object per topic)
