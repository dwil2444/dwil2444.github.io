---
draft: false
math: true
date: 2023-02-10T21:05:22-05:00
title: "Information Theory"
slug: "entropy"
---

<h1 align="center">Brief Notes on Information Theory</h1>

### Surprise:
Surprise quantifies how unexpected an observation $x$ is, based on its probability $p(x)$. Rare events (low $p(x)$) are more surprising. Mathematically, the surprise (sometimes called self-information) is defined as the logarithm of the inverse of the probability of an event:

$$
s(x) = \log \left( \frac{1}{p(x)} \right) = -\log(p(x))
$$

This means that less probable (or rarer) events produce more surprise because the logarithm of a smaller probability results in a larger value (after negation).

For two independent events $ x $ and $y$, surprise is additive:

$$
s(xy) = \log \left( \frac{1}{p(x)p(y)} \right) = \log \left( \frac{1}{p(x)} \right) + \log \left( \frac{1}{p(y)} \right) = s(x) + s(y).
$$

---

### Average Surprise (Entropy):
If data is generated by a stochastic process, the **expected value of surprise** gives the **average information content**, also known as **entropy**. The formula for entropy is:

$$
H = \sum_{i=1}^n p_i \log \left( \frac{1}{p_i} \right),
$$

where $ p_i$ is the probability of the $i$-th outcome.

Simplifying using $ \log \frac{1}{p_i} = -\log(p_i) $, we get:

$$
H = - \sum_{i=1}^n p_i \log(p_i).
$$

- Essentially, we can interpret the entropy, $H$ as the expected value of surprise across all possible outcomes. Each outcomes suprise is weighted by its probability. This is why Entropy is a measure of uncertainty - higher entropy means more unpredictability or surprise in a system.

---

### Intuitive Example of Entropy:

Consider a fair coin flip, where there are two possible outcomes: heads or tails. The probability of each outcome is:

- $ p(\text{heads}) = 0.5 $
- $ p(\text{tails}) = 0.5 $

The entropy $H$ of this system can be calculated as:

$$
H = \sum_{i=1}^2 p_i \log \left( \frac{1}{p_i} \right)
$$

For the fair coin flip, we have:

$$
H = (0.5 \cdot \log \left( \frac{1}{0.5} \right)) + (0.5 \cdot \log \left( \frac{1}{0.5} \right))
$$

Since $ \log \left( \frac{1}{0.5} \right) = 1 $, this simplifies to:

$$
H = (0.5 \cdot 1) + (0.5 \cdot 1) = 1 \text{ bit}
$$

This result of 1 bit makes sense because, in this case, there is equal surprise for both heads and tails. The system is perfectly balanced and unpredictable, meaning there is maximum uncertainty.

---

Now, consider a biased coin where one outcome is more likely than the other. For instance:

- $ p(\text{heads}) = 0.8 $
- $ p(\text{tails}) = 0.2 $

The entropy for this biased coin would be:

$$
H = (0.8 \cdot \log \left( \frac{1}{0.8} \right)) + (0.2 \cdot \log \left( \frac{1}{0.2} \right))
$$

This would result in a lower entropy, reflecting less uncertainty because the outcome is more predictable.

In summary, entropy represents the **average surprise** or uncertainty of a system. A fair coin flip has higher entropy (more unpredictability) than a biased coin flip.



### Key Insights:
1. Entropy is the **expected surprise**, measuring the uncertainty or unpredictability of a process.
2. Higher entropy implies more uncertainty, while lower entropy implies more predictable outcomes.
