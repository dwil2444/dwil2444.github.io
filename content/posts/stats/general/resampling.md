---
draft: false
date: 2025-02-04T18:55:35-05:00
title: ""
description: ""
slug: ""
authors: []
tags: []
math: true
categories: []
externalLink: ""
series: []
---

<h1 align="center"> Resampling Methods: Bootstrap and Cross-Validation </h1>

Resampling methods are powerful statistical techniques used to assess model performance and estimate
uncertainty in datasets. Two widely used resampling techniques are **bootstrap** and **cross-validation.**
These methods help mitigate issues like overfitting and provide robut estimates of model performance.


# Bootstrap
### What is Bootstrap?

The bootstrap is a resampling technique that involves repeatedly drawing samples, with replacement, from
the original dataset to estimate statistical properties (e.g. variance, confidence intervals and standard
errors). It is particularly useful when analytical solutions are diificult to derive.

##### How Bootstrap Works
1. Given a dataset of size n, create multiple new datasets ("bootstrap samples") by randomly sampling n observations
with replacement.
2. Compute the statistic of interest (e.g. mean, median, model paramater) for each bootstrap sample.
3. Use the distribution of the computed statistics to estimate confidence intervals or assesss variability.

###### Key Properties of Bootstrap:
- Helps estimate the sampling distribution of a statistic.
- Works well for sample sizes.
- Does not asssume a specific distribution.

---

# Cross-Validation:

### What is Cross-Validation?

Cross-validation (CV) is a model validation technique used to asssess how well a statistical model
generalizes to unseen data. Instead of using a single train-test split, cross-validation partitionss
data into multiple subsets to provide more reliable performance estimates.

##### Types of Cross-Validation:

a. **k-Fold Cross Validation:**
- The dataset is split into k equally sized subsets ("folds")
- The model is trained on k-1 folds and tested on the remaining fold.
- The process is repeated k times, each time using a different fold as the test set.
- The final performance metrics is the aveerage across all old.s

Example: If k=5, thee dataset is split into five parts and the model is trained/tested five times.

b. **Leave-One-Out Cross-Validation (LOOCV)**:
- A special case of k-fold cv, where k = n (number of samples).
- Each observation is used as a test set exactly once, while the rest are used for training.
- Computationally expensive but useful for small datasets.


c. **Stratified K-Fold Cross-Validation:** 
- Ensures that each fold maintains the same proportion of classes as the original dataset (useful 
for imbalanced datasets)

d. **Time-Series Cross-Validation:**
- Used for time-dependent data.
- Data is split in a way that ensures training only uses past observations.





---

## **Bootstrap vs. Cross-Validation: Key Differences**
| Feature         | Bootstrap | Cross-Validation |
|---------------|------------|-----------------|
| Purpose       | Estimate uncertainty and confidence intervals | Estimate model performance |
| Resampling   | Sampling with replacement | Splitting dataset into training/testing sets |
| Data Usage   | Some observations may be repeated | Each observation used in different folds |
| Use Case     | Estimating confidence intervals, variance | Avoiding overfitting, selecting hyperparameters |

---
