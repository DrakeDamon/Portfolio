# **DAVID DAMON**

**Tampa, FL • (316) 609-8566 • dddamon06@gmail.com • [LinkedIn](https://www.linkedin.com/in/drakedamon/) | [GitHub](https://github.com/DrakeDamon) | [Portfolio](https://github.com/DrakeDamon/Portfolio)**

## **DATA ENGINEER | GCP \+ DATABRICKS | BIGQUERY | MLflow | dbt | Terraform**

**Cloud‑first, AI‑accelerated data engineer who builds production ETL/ELT on GCP and Databricks, tracks models with MLflow, and surfaces results via APIs and UIs. I optimize reliability, observability, and cost.**

---

## **CORE SKILLS**

* **Languages: Python, SQL, JavaScript/TypeScript**

* **Data Engineering: PySpark/Spark; Databricks (SQL Warehouse, Unity Catalog, Delta); Data Lakehouse patterns; Pandas**

* **GCP: BigQuery (partition/cluster), Cloud Run Jobs, Cloud Scheduler, GCS, Secret Manager, Cloud Logging**

* **Ops & Orchestration: Docker; GitHub Actions CI/CD; dbt (Core); Terraform; Makefile workflows; health checks; anomaly alerts**

* **MLOps: MLflow (registry, aliases), XGBoost, scikit‑learn pipelines, feature engineering & calibration**

* **APIs & Frontend: Node/Express REST; Next.js/React for data entry & results**

* **AI‑Assisted Development: ChatGPT/Claude for scaffolding/refactors/test templates/runbooks with guardrails (linters, CI tests, schema checks)**

---

## **PROJECTS**

### **SEC EDGAR Financials Warehouse — GCP, BigQuery, dbt, Great Expectations, Looker Studio**

**Stack: GCP (BigQuery, GCS), dbt (Core), Great Expectations, GitHub Actions (service‑account auth), optional Cloud Run Job, Looker Studio**

* **Built a production‑style lakehouse: `sec_raw → sec_curated_* → sec_viz`; rate‑limited SEC API → GCS (NDJSON) → batch loads to BigQuery raw with schema checks.**

* **Authored dbt models (staging → intermediate → marts) including `fct_financials_quarterly` (partitioned on `period_end_date`, clustered on `cik`) and `dim_company`; created `kpi_company_latest` (latest period with revenue, margins) and `kpi_ttm_revenue` (rolling 4‑quarter sum with ticker backfill).**

* **Enforced data quality gates: 14/14 dbt tests \+ 100% GE validations (row counts, non‑nulls, units/USD filters) with a Bash smoke\_check; results logged to BigQuery.**

* **Automation: Daily refresh at 06:00 UTC via GitHub Actions (service‑account JSON secret); reproducible builds.**

* **Performance & cost: Partition pruning \+ `cik` clustering cut scanned bytes \~80–90% on TTM trend queries; Looker Studio stays snappy.**

* **BI: Delivered a Looker Studio dashboard (Overview KPIs \+ TTM revenue trends) powered by `sec_viz` tables.**

### **Cloud‑Native Crypto ETL — GCP, dbt, Terraform, Great Expectations, Looker Studio**

**Stack: Python 3.11, Docker, Cloud Run Jobs, Cloud Scheduler, BigQuery, GCS, Secret Manager, Cloud Logging, dbt (Core), Terraform, Great Expectations, Looker Studio**

* **Automated extractor (Cloud Run Jobs) to ingest CoinGecko; raw JSON \+ normalized CSV in GCS with lifecycle policies.**

* **Modeled partitioned & clustered `stg_prices`/`fact_prices` in BigQuery; computed 7/30/90‑day MAs, returns, volatility, golden‑cross.**

* **Built dbt models (`stg_prices`, `fact_prices_curated`, `dim_asset`) with tests/docs; enforced Great Expectations checks and logged results to BigQuery.**

* **Provisioned infra via Terraform (GCS, BigQuery, least‑privilege IAM); automated daily/6‑hourly jobs with Cloud Scheduler → Cloud Run Jobs and Makefile flows.**

* **Impact: serverless ETL → Transform → Validate → Visualize; partition/cluster holds query spend \~$2.36/mo; Looker Studio dashboard for multi‑asset trends.**

### **Recruit Reveal — Low‑Latency Model Serving on Databricks**

**Stack: Databricks (Spark, SQL Warehouse, Unity Catalog), Python, XGBoost, MLflow, Node/Express, Next.js**

* **Engineered reproducible features (z‑scores, OOF‑smoothed `State` encoding, missing flags) and trained XGBoost multi‑class models with MLflow tracking and `@production` aliasing.**

* **Deployed Python SQL UDFs (e.g., `rr_predict_qb/rb/wr`) that return JSON probabilities from SQL Warehouse; exposed via Node/Express API and Next.js wizard.**

* **Hardened with numeric‑only matrix guards, dtype sanitizers, and `/meta` diagnostics for rapid validation.**

---

## **EXPERIENCE**

**React Engineer (Contract) — DevSoft, Tampa, FL | Jun 2022 – Present**  
 **Built and maintained React apps for 1,000+ users with performance optimizations (code‑splitting, lazy‑loading) and REST integrations; reduced median load time \~40%.**

**Biology Teacher — Freedom High School (HCPS), Tampa, FL | Aug 2023 – Present**  
 **Analyzed performance data for 150+ students; used visualization/statistical summaries to guide instruction with an 8‑member team.**

**CDL Driver — FedEx Freight, Tampa, FL | 2021 – 2023**  
 **Maintained 99.9% on‑time delivery with rigorous documentation.**

---

## **CERTIFICATIONS**

**AWS Certified Cloud Practitioner • Databricks Certified Data Engineer Associate**

---

## **EDUCATION**

**Flatiron School — Full‑Stack Web Development (Python/Flask & JavaScript), 2025 — Tampa, FL**  
 **Friends University — B.S., Biology, 2021 — Wichita, KS**

---

## **SELECTED KEYWORDS (ATS)**

**Python; SQL; BigQuery; GCS; Cloud Run Jobs; Cloud Scheduler; Secret Manager; Cloud Logging; dbt; Terraform; Great Expectations; Docker; GitHub Actions; ETL; ELT; Lakehouse; Delta Lake; Databricks; SQL Warehouse; Unity Catalog; PySpark; Spark; MLflow; XGBoost; scikit‑learn; Data Quality; Monitoring; Anomaly Detection; Looker Studio; SEC EDGAR; Financial KPIs; TTM Revenue; Window Functions; Cost Optimization; REST API; Next.js; React; LLMs; prompt engineering**

