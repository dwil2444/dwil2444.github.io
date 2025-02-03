---
draft: false
date: 2025-02-03T16:28:24-05:00
title: What is Logistic Regression?
authors: []
tags: []
categories: []
externalLink: ""
series: []
math: true
---


<h1 align="center">What is Logistic Regression? </h1>

Logistic Regression is a statistical method used for binary classification tasks where the goal is to predict a binary outcome (1 or 0, True or False). It is one of the
simplest algorithms in Machine Learning, but it is also one of the most widely used for problems like spam detection, disease diagnosis and customer churn prediction.


#### Definition  
Logistic regression models the probability of a binary outcome as a function of independent variables (covariates). Unlike linear regression, which is used for predicting
continuous outcomes, logistic regression is used when the outcome is categorical.  
The model's output is transformed by a logistic function (the sigmoid function), which ensures that the predicted values lies between 0 and 1, and is therefore a valid probability score:

$$
P (y = 1 \mid X) = \frac{1}{1+e^{-z}} \, \text{where} \, \,  z = \beta_{0} + \beta_{1} X_{1} + \ldots + \beta_{n} X_{n}
$$

Where: 
- z is the linear combination of input variables
- $\beta$ is the intercept, and $\Beta_{1}, \ldots \beta_{n}$ are the coefficietns of the features $X_{1} \ldots , X_{n}$. 


##### Coefficients
In logistic regression, the coefficients (or weights) represent the effect of each predictor (covariate) on the outcome. Each coefficient tells you how much the log-oddss
of the outcome (i.e. the probability of y = 1) change when the corresponding predictor increases by one unit.  
A **positive coefficient** indicates that the predictor increases the likelihood of the outcome. Conversely, a **negative coefficient** indicates that the predictor decreases
the likelihood of the outcome. The **magnitude** of the coefficient reflects the strength of the relationship. Assessing the statistical significance of each coefficient helps
determine the relevance of each predictor in the model.


##### When to Use It  
Logistic Regression is suitable when:
- The dependent variable is binary (e.g. Yes/No, 1/0)
- A probabilistic interpretation of predictions is required
- The relationship between independent variables and the log-odds of the outcome is approximately linear.
- Data does not exhibit severe multicollinearity within predictors.

Some concrete real world examples include:  
- Medical Diagnosis
- Email Classification
- Customer Churn Prediction


#### Assessing the Validity of Covariates  
When performing logistic regression, it is crucial to assess the relevance and validity of each covariate (predictor variable). Some ways to evaluate covariates include:

  1. **Correlation Analysis:** Check for multicollinearity between independent variables using correlation matrices or Variance Inflation Factor. High multicollinearity
  can inflate coefficients and destabilize the model.
  2. **P-Values and Confidence Intervals:** Ater fitting the model, review the p-values and confidence intervals for each covariate. A small p-value (typically $< 0.05$) suggests
  the variable significantly contributes to predicting the outcome. If a covariate's confidence interval does not cross zero - it is likely relevant.
  3. **Feature Importance:** Ues techniques like regularization (Ridge or Lasso), or tree-based methods to estimate the importance of each feature in predicting the outcome.
  4. **Domain Knowledge:** Incorporate dowwmin knowledge to judge relevance of covariates.  



#### Optimizing and Fine-Tuning Logistic Regression
To improve performance, we fine-tune hyperparameters and apply regularization to prevent overfitting. Two common regularization techniques are **L1 (Lasso)** and 
**L2 (Ridge)** Regularization.

 - **L1 Regularization:** Also known as Least Absolute Shrinkage and Selection Operator (LASSO), adds a penalty equal to the absolute value of the coefficients:
 
 $$
    J (\beta) = \sum_{i=1}^{n} \log L (\beta) + \lambda \sum_{j=1}^{p} \| B_{j} \|
 $$

where:
- $J (\beta)$ is the cost function
- $\log L(\beta)$ is the log-likelihood of the logistic regression model
- $\lambda$ is the regularization strength (higher values incresase the penalty)
- $| \beta_{j} \|$ is the absolute value of each coefficient.


Lasso Regularization encourages sparsity by forcing some coefficients to become exactly zero, effectively performing feature selection. It is useful for dealing with high-dimensional data where only a few features are important.


- **L2 Regularization:** also known as **Ridge Regression** adds a penalty proportional to the squared magnitude
of the coefficients:

 $$
    J (\beta) = \sum_{i=1}^{n} \log L (\beta) + \lambda \sum_{j=1}^{p} \beta^2_{j}
 $$









**Note:** Logistic regression assumes that the relationship between the predictors and the log-odds of the outcome is linear. Non-linear relationships might require alternative algorithms like decision trees or neural networks.
