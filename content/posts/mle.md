---
title: Maximum Likelihood Estimation
date: 2022-05-08
math: true
draft: false
---

<h1 align="center">Maximum Likelihood Estimation</h1>

##### Likelihood
**Likelihood** describes the joint probability of observed data, **y**, as a function of the parameters, **$\theta$**, of a statistical model. The likelihood is **NOT** a [probability density function](https://en.wikipedia.org/wiki/Probability_density_function) of the parameters themselves. Instead, it is a function that measures how likely the observed data is for different parameter values. An intuitive way to think about likelihood is that it represents how "believable" the data is under different model parameters. For example, in a normal distribution, the likelihood tells you how probable it is to observe a specific dataset given the mean and variance values of the distribution.

**$\mathcal{L}$ is a probability density over $ y$, not $ \theta $.**

##### Likelihood vs Density Function/Posterior Probability:
This terminology can be confusing due to similarities with other concepts:

- $\mathcal{L} (\theta \mid y) $: Computes a density over $ y $ when parameters $ \theta $ are fixed, with the goal of maximizing the probability of observing $ y $. It represents the **likelihood** of the observed data given the parameters.
  
- $ p (\theta \mid y) $: Computes the **posterior probability** in Bayesian inference, giving the likelihood of the parameters $ \theta $ given the observed outcome $ y $. This is found using **Bayes' Theorem**, which incorporates prior knowledge of the parameters along with the likelihood of the data.

##### Maximum Likelihood Estimation:
Maximum Likelihood Estimation (MLE) aims to find the **values of the parameters** of the statistical model under which the observed data is most probable. In other words, MLE adjusts the model parameters until the model most "believes" the data could have occurred. We do this by maximizing the **likelihood function**. The resulting parameters are the ones that maximize the probability of observing the given data:
$$ \hat{\theta} = \arg \max_{\theta \in \Theta} \mathcal{L} (\theta \mid y) $$

##### Intuition behind MLE:
Consider a simple example where you are trying to fit a normal distribution to a dataset. The parameters of the normal distribution are the mean, $ \mu $, and the variance, $ \sigma^2 $. MLE helps find the values of $ \mu $ and $ \sigma^2 $ that maximize the probability of the observed data given the model. For instance, if you have a dataset of test scores, MLE will estimate the mean and variance that make those scores most likely, according to the normal distribution.

##### Likelihood Function:
The likelihood function is the joint probability density of the outcomes $ Y_1, Y_2, \dots, Y_n $, observed under the assumption that these outcomes are independent and parameterized by the model parameters $ \theta_1, \theta_2, \dots, \theta_m $. It is defined as:
$$ L(\theta_1, \dots, \theta_m)  = \prod_{i=1}^{n} f(y_i; \theta_1, \dots, \theta_m) $$

This is a product of the probabilities of each observation, under the assumption that the observations are independent. Each observation is treated as being parameterized by different model parameters. If we assume that each observation follows the same distribution, we multiply the individual likelihoods to get the overall likelihood.

##### A Quick Note on Log-Likelihood:
The **log-likelihood** is the natural logarithm of the likelihood function. Since the logarithm is a monotonically increasing function, maximizing the log-likelihood is equivalent to maximizing the likelihood. Taking the logarithm has two key advantages:
1. It converts the product of probabilities into a sum, making the math easier to handle:
$$ \log \left( \prod_{i=1}^{n} f(y_i; \theta_1, \dots, \theta_m) \right) = \sum_{i=1}^{n} \log f(y_i; \theta_1, \dots, \theta_m) $$

2. The natural logarithm ($\ln$) is easier to differentiate, making it more convenient for optimization.

Thus, the **log-likelihood** is commonly used in practice to simplify the calculation and make optimization more efficient.

### Intuitive Example: Estimating the Mean of a Normal Distribution

Let’s consider a simple example: suppose you have a dataset of test scores $ y_1, y_2, \dots, y_n $, and you want to estimate the mean $ \mu $ of the underlying normal distribution. The likelihood function for the mean, assuming a normal distribution, is given by:
$$ \mathcal{L} (\mu \mid y) = \prod_{i=1}^{n} \frac{1}{\sqrt{2\pi \sigma^2}} \exp \left( -\frac{(y_i - \mu)^2}{2\sigma^2} \right) $$

To make this easier to work with, we take the logarithm:
$$ \log \mathcal{L} (\mu \mid y) = \sum_{i=1}^{n} \left( -\frac{(y_i - \mu)^2}{2\sigma^2} - \frac{1}{2} \log(2\pi \sigma^2) \right) $$


##### Maximizing the Log-Likelihood

After we've taken the logarithm of the likelihood function, we have a much easier expression to work with:

$$
\log \mathcal{L} (\mu \mid y) = \sum_{i=1}^{n} \left( -\frac{(y_i - \mu)^2}{2\sigma^2} - \frac{1}{2} \log(2\pi \sigma^2) \right)
$$

Here, the first term represents the likelihood of observing the data, given the mean $ \mu $, and the second term is constant with respect to $ \mu $, as it only involves $ \sigma^2 $, the variance.

Now, let's break down the steps to find the **Maximum Likelihood Estimator (MLE)** for the mean $ \mu $.

1. **Differentiate the Log-Likelihood:**
   To find the maximum of the log-likelihood, we take the derivative of $ \log \mathcal{L} (\mu \mid y) $ with respect to $ \mu $. The derivative tells us how the log-likelihood changes as $ \mu $ changes, and we want to find the value of $ \mu $ that maximizes this function.

   $$ 
   \frac{\partial}{\partial\mu} \left[ \sum_{i=1}^{n} \left( -\frac{(y_i - \mu)^2}{2\sigma^2} - \frac{1}{2} \log(2\pi \sigma^2) \right) \right]
   $$

2. **Simplify the Expression:**
   The second term involving the logarithm $ \log(2\pi \sigma^2) $ doesn't depend on $ \mu $, so its derivative will be zero. The only part we need to focus on is:

   $$
   \frac{\partial}{\partial \mu} \left( -\frac{(y_i - \mu)^2}{2\sigma^2} \right)
   $$

   The derivative of $ (y_i - \mu)^2 $ with respect to $ \mu $ is $ -2(y_i - \mu) $, so we get:

   $$
   \frac{\partial}{\partial \mu} \log \mathcal{L} (\mu \mid y) = \sum_{i=1}^{n} \frac{(y_i - \mu)}{\sigma^2}
   $$

3. **Set the Derivative Equal to Zero:**
   To find the maximum of the log-likelihood, we set the derivative equal to zero:

   $$
   \sum_{i=1}^{n} \frac{(y_i - \mu)}{\sigma^2} = 0
   $$

4. **Solve for $ \mu $:**
   Now, we solve for $ \mu $. We can factor out $ \frac{1}{\sigma^2} $ since it's a constant, and then simplify:

   $$
   \sum_{i=1}^{n} (y_i - \mu) = 0
   $$

   we can distribute the sum, since $\mu$ is not dependent on the index, $i$, the second sum simplifies as follows: $\sum\limits_{i=1}^{n} \mu = n \mu $

   $$
   \sum_{i=1}^{n} y_i - n\mu = 0
   $$

   $$
   n\mu = \sum_{i=1}^{n} y_i
   $$

   $$
   \hat{\mu} = \frac{1}{n} \sum_{i=1}^{n} y_i
   $$

### Interpretation of the MLE for the Mean

- The **MLE for the mean** $ \hat{\mu} $ is simply the **sample average** of the observed data. This makes intuitive sense because the value of $ \mu $ that maximizes the likelihood is the one that best represents the "center" of the data, which is the sample mean.
- In other words, the best estimate for the true mean, $ \mu $, of the population is the average of the observed data points.

Thus, the Maximum Likelihood Estimator (MLE) for the mean in this case is the sample mean, which is a well-known result in statistics.

##### Why Use MLE?
- **Consistency**: MLE provides estimates that are consistent, meaning that as the sample size grows, the estimated parameters converge to the true values.
- **Efficiency**: Under certain regularity conditions, MLE estimators achieve the lowest possible variance, making them efficient.
- **Flexibility**: MLE can be used with a wide variety of statistical models, from simple distributions to complex models with many parameters.

---
