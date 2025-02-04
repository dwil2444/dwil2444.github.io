---
draft: false
math: true
date: 2025-02-04T17:11:41-05:00
title: ""
description: ""
slug: ""
authors: []
tags: []
categories: []
externalLink: ""
---




<h1 align="center"> Hypothesis Testing: An Overview </h1>

Hypothesis Testing is a fundamental statistical method used to make inferences or draw conclusions about a population
based on sample data. It is commonly used to test if a claim about a population is supported by data or if the observed effect is
**statistically significant.**  


# Key Concepts in Hypothesis Testing  
---

### 1. Null Hypothesis $H_0$ and Alternative Hypothesis ($H_1$)  
- Null Hypothesis ($H_0$): A statement or assumption about the population that we seek to test. It is typically a statement of "no effect" or "no difference".

- Alternative Hypothesis: ($H_1$): The statement that contradicts the null hypothesis, representing the claim or effect you are testing for.


For example: 
- Null Hypothesis ($H_0$): There is no difference in heights between men and women.
- Alternative Hypothesis: ($H_1$): There is a significant difference in heights between men and women.

---

### 2. Type I and Type II Errors:  
- Type I Error (False Positive): Rejecting the null hypothesis, when it is actually true. This error occurs when we incorrectly conclude there is an effect or difference when there isn't one.
    - Probability of Type I Error = **$\alpha$ (alpha)**, often called the **significance level** (typically 0.05).

- Type II Error (False Negative): Failing to reject the null hypothesis when it is actually false. This occurs when we miss a true
effect or difference.
    - Probability of Type II Error = **$\beta$ (beta)**

---

### 3. Significance Level ($\alpha$): 
The **significance level** ($\alpha$) is the threshold used to decide whether the null hypothesis can be rejected. It represents
the probability of committing a Type I error. Common values for $\alpha$ are 0.05, 0.01 and 0.10.
- If $p$-value $\leq \alpha$, we reject the null hypothesis.
- If $p$-value $> \alpha$, we fail to reject the null hypothesis.

---

### 4. Test Statistic: 
A **test statistic** is a value calculated from the sample data that is used to determine whether to reject the null hypothesis. It measures the difference between the sample statistic and the population parameter under the null hypothesis, expressed in terms of the standard error. For example in a t-test, the test statistic is given by:

$$
  t = \frac{\bar{x} - \mu_{0}}{\frac{s}{\sqrt{n}}}
$$

where: 
- $\bar{x}$ = sample mean
- $\mu_{0}$ = population mean under the null hypothesis
- $s$ = standard deviation
- $n$ = sample size

---

### 5. Confidence Intervals (CI):
A confidence interval is a range of values within which the true population paramter is likely to fall, with a certain levle of confidence (typically 95%).  It offers more information thana simple hypothesis test, as it not only shows if a result is statistically significant but also gives the range of plausible values.

It is typically expressed as:  

$$
 \hat{\theta} \pm z_{\alpha /2} \cdot SE(\hat{\theta})
$$
where:  
- $\hat{\theta}$ is the sample estimate of the parameter
- $z_{\alpha / 2}$ is the critical value from the standard normal distribution (e.g 1.96 for a 95% CI)
- $SE (\hat{\theta})$ is the standard error of the estimate

---

### 6. Common Hypothesis Tests:    

- **One-Sample t-test:** Test whether the mean of a single sample is equal to a known value (population mean)  
    - Example: is the average weight of apples in a batch equal to 200g?

- **Two-Sample t-test:** Compares the means of two independent groups to see if they are significantly different.
    - Example: Is there a significant difference in test scores between two groups of students?


- **Paired t-test:** Compares the means of two related groups (e.g before and after treatment on the same subjects).
    - Example: Does a drug lead to a significant change in blood pressure before and after treatment?

- **Chi-Square t-test:** Compares the observed frequence of categorical data to expected frequencies.
    - Example: Are the frequencies of different types of fruits in a market different from expected proportions?
    
- **ANOVA(Analysis of Variance):** Compares the means of three or more groups to determine if at least one group mean is
significantly different from the others.
    - Example: Do the test scores differ between students from different schools?

- **z-test**: A test for the population mean when the sample size is large and the population standard deviation is unknown
    - Example: Is the average height of a population significantly different from a hypothesized value?


### 7. Assumptions in Hypothesis Testing: 
Each hypothesis test has certain assumptions that must be met for the test results to be valid:  
- **Normality:** Many tests (e.g t-tests) assume that the data follows a normal distribution, especially for small sample size.
- **Independence:** The observations should be independent of each other (e.g. in a two-sample t-test)
- **Homogeneity of Variance**: For some tests (e.g. two-sample t-tests) the variability within each group should be similar.

If these assumptions are violated, alternative tests or data transformations might be needed.


### 8. Power of a Test:  
The **power** of a statistical test is the probability that the test correctly rejects the null hypothesis when it is false
(i.e. avoiding a Type II error). It depends on:

- Sample Size: Larger samples increase power
- Effect Size: Larger differences between groups or stronger effects increase power
- Significance Level: A higher $\alpha$  like (0.1) increases power but also increases the risk of a Type I Error.

### 9. Common Pitfalls in Hypothesis Testing:
- **p-hacking**: manipulating the analysis (e.g. trying different tests or adjusting data) to achieve a significant p-value. This is
considered unethical.

- **Over reliance on p-values**: A p-value alone does not provide all the information. Confidence intervals, effect size, and
context should also be considered.

- **Multiple Comparisons**: When conducting many tests, the likelihood of obtaining a false positive increases. Techniques like the
Bonferroni correction help address this.


### 9. Practical Applications of Hypothesis Testing:
In practice hypothesis testing us used to:

- Determine if a new drug or treatment is effective.
- Evaluate whether an advertisement campaign increases sales.
- Test if a production process is working within specified limits


### Conclusion:

Hypotehsis testing provides a systematic way to evaluate claims about populations using sample data. Understanding the
underlying concepts such as the null and alternative hypotheses, significance level, test statistics, p-values and errors
(Type I and Type II) is crucial for performing accurate and meaningful tests.

