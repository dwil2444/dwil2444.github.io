---
title: Variational Inference
date: 2022-05-05
math: true
draft: false
---

<h1 align="center">What is Variational Inference? </h1>

**Variational Inference** is a technique used in Bayesian Statistics to approximate **$p ( z \mid x)$** the conditional density of an unknown variable, **z** given an observed variable, **x** through optimization. To find this approximate density:
- select a family of densities, $\mathscr{D}$ over the latent variables. Each member of the family q(z) $\in \mathscr{D}$ is a candidate approximation to the true density.
- The optimization problem is then to find the member of this family which is closest in **Kullback-Leibler (KL) divergence** to the conditional density of interest.: 
$$
q^{*} (z) = \underset{q(z) \in \mathscr{D}}{\text{arg min}} \quad \text{KL} (q(z) \mid \mid p(z \mid x))
$$


#### Kullback-Leibler Divergence
The **divergence** between two probability distributions is a statistical distance or scoring of how the distributions differ from each other. The **Kullback-Leibler Divergence**: D$_{KL} (P \mid \mid Q)$ [^1] is also known as **relative entropy** and intuitively it is considered as the expected **surprise** from using Q as a model when the true distribution is P..

#### ELBO 
The **Evidence Lower Bound**



#### Citations
<cite> [Variational Inference: A Review for Statisticians](https://arxiv.org/pdf/1601.00670.pdf)

[^1]: $\mid \mid$ indicates divergence