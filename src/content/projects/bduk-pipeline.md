---
title: BDUK broadband evaluation pipeline
date: 2026-01-15
description: The R codebase behind my dissertation, from raw Ofcom data through matching and difference-in-differences to the final figures.
tags: [R, causal-inference, panel-data, data-engineering]
status: live
order: 20
---

The engine behind [the broadband dissertation](/dissertations). It takes raw administrative and physical-measurement data and produces the paper's estimates and every figure in it.

It builds an exchange-level panel out of Ofcom data, BDUK allocations, ONS postcode and demographic files and ThinkBroadband speed measurements; matches treated and untreated areas with genetic matching; and runs a heterogeneity-robust difference-in-differences as the main estimator, with event-study pre-trend checks, a Goodman-Bacon decomposition and placebo and Monte Carlo robustness. The figures (event studies, love plots, common-support and density diagnostics) are generated straight from the scripts.

It is written in R with a staged structure, inputs to cleaning to matching to estimation to exports, so the results regenerate from source rather than from whatever happened to be in memory.
