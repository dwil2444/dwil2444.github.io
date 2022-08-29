---
title: Bayesian Inference
date: 2022-05-05
math: true
draft: false
---

<h1 align="center">Bayesian Inference </h1>

**Bayesian Inference** is an approach to statistical inference which utilises Bayes' theorem to provide updates for the probability of an outcome as new information becomes available. The mathematical formulation for Bayes theorem is quite ubiquituous and no doubt you have seen it before, however it is stated here for completeness:  

$$ 
   p (z \mid x) = \frac{p(x \mid z) \cdot p(z)}{p(x)}
$$

Simple right? Perhaps not so much to the unitiated to whom this equation may seem very strange and as such here is a breakdown of what these terms actually mean:  
##### Key Terms  
- <u> Z $\rightarrow$ Hypothesis:</u>  
**Z** represents any hypothesis whose probability may be affected by data.

- <u> X $\rightarrow$ Evidence:</u>  
**X** represents new data that was not used in computing **prior** probability.

- <u> P(z) $\rightarrow$ Prior:</u>  
The **prior** is the estimate of the probability of the hypothesis **z** before the evidence **x** is observed.

- <u> P(x $\mid$ z) $\rightarrow$ Likelihood:</u>  
The likelihood is the [conditional probability](https://en.wikipedia.org/wiki/Conditional_probability) of observing the evidence **x** given the hypothesis **z**.

- <u> P(x) $\rightarrow$ Marginal Likelihood / "Model Evidence":</u>  
This gives the [marginal distribution](https://en.wikipedia.org/wiki/Marginal_distribution) of the evidence, i.e. the probability of the evidence without any hypotheses being considered. As this would be the same for all hypotheses, it does not factor into determining relevant probabilities of different hypotheses. The marginal distribution of a variable that is jointly distributed is the probability distribution of that variable when the values of the other variable are not considered. This is essentially a summaton over the joint probability distribution over all values of the other variable. The converse is also true:  
$$ p_{X} ( x_{i} ) = \sum\limits_{j} p(x_{i} , y_{j}) $$
$$ p_{Y} ( y_{j} ) = \sum\limits_{i} p(x_{i} , y_{j}) $$

- <u> P ( z $\mid$ x) $\rightarrow$ Posterior:</u>  
The **posterior** is the conditional probability of a hypothesis z given evidence, after x is observed. Essentially this tells us how likely a hypothesis is given the observed evidence.  


#### Summary
Bayesian Inference has many applications in science and engineering, especially in the field of [Deep Learning](https://en.wikipedia.org/wiki/Deep_learning). Inference is particularly useful in [Generative models](https://en.wikipedia.org/wiki/Generative_model) such as [Variational Autoencoders](https://en.wikipedia.org/wiki/Variational_autoencoder), where we seek the likelihood of a data point **x** conditioned on a latent representation **z**. First we must use Variational Inference to approximate the underlying distribution of our data given our input, $p(z \mid x)$, we can then sample a latent representation, **z** from our approximation of the distribution and then generate data points by conditioning the probability of our data point, **x** on the sampled latent representation, $p (x \mid z)$. This all seems very abstract for now however, this page only serves as a warmup and reference page as we explore concepts in variational inference in future blog posts.


