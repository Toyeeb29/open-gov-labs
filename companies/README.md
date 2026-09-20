# Companies

Fictional organizations users operate inside. Labs point here. Users should browse these files the way they would browse a company intranet, GRC tool, and ticket queue.

```
companies/
├── acme-cloud/    SaaS
├── healthtech/    Healthcare
├── fintech/       Financial services
└── retail/        Retail / e-commerce
```

Each company should eventually contain discoverable records, not a single answer sheet:

```
company.yml
org/
policies/
controls/
risks/
assets/
vendors/
contracts/
evidence/
audits/
incidents/
tickets/
ai-systems/
security/
privacy/
```

Leave gaps. Conflicting or stale files are a feature.

Do not model these on a real company's internal documents. Schema: [docs/company-schema.md](../docs/company-schema.md). Template: [docs/templates/company.yml](../docs/templates/company.yml).
