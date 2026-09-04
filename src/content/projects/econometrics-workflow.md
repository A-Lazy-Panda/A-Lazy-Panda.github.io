---
title: Reproducible treatment-effect workflow (Stata + R)
date: 2024-01-26
description: A parallel Stata and R implementation of AIPW estimation with randomisation inference and a step-down multiple-testing correction, written up as a guide.
tags: [Stata, R, causal-inference, reproducibility]
status: live
order: 30
---

A worked pipeline for estimating average treatment effects and doing the inference honestly. Every step is written twice, once in Stata and once in R, so the two can be checked against each other.

It covers augmented inverse-probability-weighting by strata for the ATE; building the null by re-randomising treatment and comparing that to the bootstrap, rather than leaning on asymptotics; and a Romano-Wolf-style step-down correction so that "significant" still means something once you have tested a handful of outcomes at once. A LaTeX guide documents the master scripts, the simulations and the output tables so the whole thing reruns end to end.

The reason for building it was less any single result than the discipline of it: a clean split between simulation, estimation and output, and inference that does not quietly assume the thing it is meant to be testing.
