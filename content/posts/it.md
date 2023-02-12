---
draft: false
math: true
date: 2023-02-10T21:05:22-05:00
title: "Information Theory"
slug: "" 
---

<h1 align="center">Brief Notes on Information Theory </h1>

###  Surprise:
- Given a stochastic process which generates data $x$, the **surprise** associated with each datapoint is the reciprocal of its probability:
$$ s(x) = \frac{1}{p(x)}; $$.
- The lower the probability of an observation, the more "surprised" we are at seeing it. To capture the surprise of multiple independent events, we make use of the logarithm function:
$$ s(x) = \log \( \frac{1}{p(x)} \)$$
$$ s(xy) = \log \( \frac{1}{p(x) \cdot p(y)} \) = \log \( \frac{1}{p(x)} \) + \log \( \frac{1}{p(y)} \)= s(x) + s(y)  $$

### Average Surprise:
Each observation has an associated probability. To get the amount of information produced by a series of inputs, we can take the **expected value:**. 
**N.B.** The **Expected Surprise** is the surprise for each outcome weighted by its probability:
$$ H = p_{1} \log (\frac{1}{p_{1}}) + p_{2} \log (\frac{1}{p_{2}})  + ... + p_{n} \log (\frac{1}{p_{n}})$$

- given $$ \log \frac{1}{p_{i}} = - \log (p_{i})$$

$$\underbrace{H = - (p_{1} \log p_{1} + ... + p_{n} \log p_{n})}_\text{This is known as ENTROPY. Entropy can be considered as the expected surprise.}$$