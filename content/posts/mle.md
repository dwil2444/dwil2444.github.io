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