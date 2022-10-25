---
title: Maximum Likelihood Estimation
date: 2022-05-08
math: true
draft: false
---

<h1 align="center">Maximum Likelihood Estimation </h1>


##### Likelihood 
**Likelihood** describes the joint probability of observed data, **y** as a function of the parameters, **$\theta$** of a statistical model. The likelihood is **NOT** a [probability density function](https://en.wikipedia.org/wiki/Probability_density_function) of **the parameters**. An intuitive way to consider the likelihood is as equal to the probability density of the outcome, **y** when the true value of the parameter is **$\theta$**.   
<strong>$\mathcal{L}$ is a probability density over y NOT $\theta$.</strong>

##### Likelihood vs Density Function/Posterior Probability:  
This can become confusing due to similarities in terminology/notation:  

- $ \mathcal{L} (\theta \mid y) $: Computes a density over y when parameters, $\theta$ are fixed, with the aim of maximising the probability.

- $p (\theta \mid y)$: Computes the posterior probability used in Bayesian Inference to find the likely parameters given a specific outcome.

##### Maximum Likelihood Estimation:
What is Maximum Likelihood exactly? ML is the **values of the parameters of the statistical model under which the observed data is most probable.** To find these parameters we maximise the **likelihood function** to obtain:
$$ \hat{\theta} = {argmax}_{\theta \in \Theta} \mathcal{L} (\theta \mid y)$$


##### Likelihood Function:
The joint probability density of the outcomes: $Y_{1}, Y_{2}, ... Y_{n}$ observed, when these outcomes are regarded as a function of model parameters: $\theta_{1}, \theta_{2}, ... \theta_{n}$ is the Likelihood function:

$$ L(\theta_{1}, ... \theta_{m})  = \prod\limits_{i=1}^{n} f (y_{i}; \theta_{1}, ... \theta_{m})$$

This is a product of all the observation probabilities. Each observation is treated as independent and is parameterised by the different "distribution parameters."


##### A Quick Note on Log-Likelihood:

The natural logarithm: $\log(x) / \ln(x)$ is a monotonically increasing function. Maximising the log-likelihood is equivalent to maximising the likelihood.  
**N.B.** The natural $\log$ is typically easier to differentiate and is more convenient to optimise in finding the MLE.