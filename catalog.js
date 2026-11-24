/* ============================================================
   EDIT THIS FILE to run your store. No other file needs changes.
   1. Put each skill's Stripe Payment Link in `stripe`.
      (Stripe Dashboard > Payment Links > create > copy the buy.stripe.com URL)
   2. In each Payment Link set "After payment > redirect" to:
      https://YOUR-SITE-URL/#thanks
   3. Put your delivery/download link in `download` (free skills use it directly).
   ============================================================ */
window.SITE = {
  name: "AH AIOS Skills",
  tagline: "Skills that make your AI do real work.",
  email: "support@example.com",          // <- your support email
  refundDays: 14,                         // <- your refund window
  deliveryNote: "Your download link and install guide were sent to the email you used at checkout. Can't find it? Write to the support email below with your receipt."
};
window.TYPES = {
  skill:    { label: "Claude Skill",     color: "#8a5cff", icon: "book" },
  mcp:      { label: "MCP Package",      color: "#3b8cff", icon: "plug" },
  workflow: { label: "Workflow Pack",    color: "#34d399", icon: "bolt" },
  prompt:   { label: "Prompt Pack",      color: "#ff8a4c", icon: "doc" }
};
const PAY = "https://buy.stripe.com/REPLACE_ME";   // placeholder link
window.SKILLS = [
  { id: "research-analyst", tags: ["Research", "Web", "Summary"], featured: true, type: "skill", name: "Research Analyst", price: 29,
    tagline: "Turns a question into a sourced, structured research brief.",
    about: "A SKILL.md package that teaches your AI to plan a research task, gather evidence, cross-check claims and write a brief with citations and open questions.",
    includes: ["SKILL.md with full instructions", "Brief and source-log templates", "3 worked examples", "Free updates for 12 months"],
    works: ["Claude", "Claude Code", "Cowork"], stripe: PAY, download: "" },
  { id: "code-reviewer", tags: ["Coding", "Review", "GitHub"], featured: true, type: "skill", name: "Code Reviewer", price: 19,
    tagline: "Pull-request reviews that catch bugs, risks and style drift.",
    about: "Consistent, actionable reviews: correctness, security, performance and readability, ranked by severity with suggested fixes.",
    includes: ["SKILL.md + review checklist", "Language-specific rule sets", "PR comment templates"],
    works: ["Claude", "Claude Code"], stripe: PAY, download: "" },
  { id: "contract-summarizer", tags: ["Legal", "Docs", "Risk"], type: "skill", name: "Contract Summarizer", price: 39,
    tagline: "Plain-English summaries with risk flags for any agreement.",
    about: "Extracts parties, dates, obligations, renewal and termination terms, then flags unusual clauses. Not legal advice.",
    includes: ["SKILL.md", "Clause library", "Risk-flag scoring guide"],
    works: ["Claude", "Cowork"], stripe: PAY, download: "" },
  { id: "github-deploy-mcp", tags: ["Deploy", "GitHub", "DevOps"], featured: true, type: "mcp", name: "GitHub Deploy MCP", price: 49,
    tagline: "Let your AI create repos and ship sites to GitHub Pages.",
    about: "A ready-to-run MCP server with tools to create repositories, commit folders and turn on Pages, with setup docs for popular clients.",
    includes: ["MCP server source", "One-page setup guide", "Token-safety checklist", "Free updates for 12 months"],
    works: ["Claude Desktop", "Claude Code", "Any MCP client"], stripe: PAY, download: "" },
  { id: "web-intel-mcp", tags: ["Research", "Playwright", "Web"], type: "mcp", name: "Web Intelligence MCP", price: 59,
    tagline: "Browser-powered discovery: inspect, extract and save web pages.",
    about: "Playwright-based tools that let your AI open sites, find the relevant pages and capture clean, attributed content into a library.",
    includes: ["MCP server source", "Discovery presets", "Setup and troubleshooting guide"],
    works: ["Claude Desktop", "Claude Code", "Any MCP client"], stripe: PAY, download: "" },
  { id: "market-data-mcp", tags: ["Finance", "CoinGecko", "Data"], type: "mcp", name: "Market Data MCP", price: 29,
    tagline: "Live crypto prices and trends through CoinGecko.",
    about: "Give your AI price, volume and trend tools backed by the CoinGecko API, with caching and rate-limit handling.",
    includes: ["MCP server source", "Example prompts", "Rate-limit guide"],
    works: ["Claude Desktop", "Any MCP client"], stripe: PAY, download: "" },
  { id: "seo-content-workflow", tags: ["Marketing", "SEO", "Writing"], type: "workflow", name: "SEO Content Workflow", price: 24,
    tagline: "From keyword to published article in seven repeatable steps.",
    about: "A step-by-step workflow with prompts for research, outline, draft, edit and on-page SEO checks.",
    includes: ["7-step workflow guide", "Prompt for every step", "Editing and QA checklist"],
    works: ["Any AI assistant"], stripe: PAY, download: "" },
  { id: "founder-prompt-pack", tags: ["Startup", "Strategy", "Prompts"], type: "prompt", name: "Founder Prompt Pack", price: 15,
    tagline: "60 prompts for strategy, pitching, hiring and operations.",
    about: "Tested prompts organized by situation, each with inputs to fill in and tips for getting stronger output.",
    includes: ["60 prompts (PDF + text)", "Fill-in templates"],
    works: ["Any AI assistant"], stripe: PAY, download: "" },
  { id: "meeting-notes-skill", tags: ["Productivity", "Notes", "Starter"], featured: true, type: "skill", name: "Starter Meeting Notes", price: 0,
    tagline: "Free: turn messy transcripts into decisions and action items.",
    about: "Our free starter skill. Try the quality of our packages before you buy.",
    includes: ["SKILL.md", "Action-item template"],
    works: ["Claude", "Cowork"], stripe: "", download: "" }
];
