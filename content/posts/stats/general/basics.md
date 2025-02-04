---
title: "Basic Probability Review"
date: 2025-02-04T13:52:07-05:00
math: true
draft: false
---

<h1 align="center"> Probability Fundamentals </h1>

## Introduction  
Probability is the branch of mathematics that deals with the chance of events occuring. It is essential for understanding
data patterns, making predictions, and modeling uncertain events. In this post, we explore key concepts of probability,
including basic rules, Bayes' Theorem, random variables, probability distributions and more.


#### 1. Basic Probablity Rules

- Probability of an Event:  

The probability of an event, A denoted as **P(A)**, is a measure of the likelihood that event A will occur. The value of $P(A) \in \( 0, 1 \) $, where:  
* $P(A)  = 0$ means the event cannot occur
* $P(A)  = 1$ means the event will certainly occur.

##### Addition Rule  
The addition rule is used to find the probabiltiy of the Union of two events. For two events A and B, the probability
that either A or B occurs is :

$$
    P( A \cup B) = P(A) + P(B) - P (A \cap B)
$$

This rule adjusts for the possibility that both events might occur at the same time (i.e., the intersection)  

##### Multiplication Rule:  
The multiplication rule gives the probability that two events A and B occur together, (i.e, the interesection of two events). If A and B are independent the rule simplifies to:

$$
    P(A \cap B)  = P(A) \cdot P(B)
$$

If the events are dependent, the formula becomes:

$$
P(A \cap B) = P(A) \cdot P(B \mid A)
$$

where $P(B \mid A)$ is the conditional probability of event B occuriing given that A has occurred.


#### 2. Conditional Probability  
The conditional probability is the probability of an event occuring given that another event has already occurred.
It is denoted as $P( A \mid B)$, the probability of A given B. The formula for conditional probability is:

$$
P(A \mid B) = \frac{ P(A \cap B)}{P (B)}
$$

Where:
- $P( A \mid B)$ is the probability of event A occuring given that B has occurred.
- $P(A \cap B)$ is the probability of both A and B occuring.
- $P(B)$ is the probability of event B.  


#### 3. Bayes' Theorem  
Bayes theorem is a powerful tool in probability theory for updating belieffs based on new evidence. It is especially
useful in machine learning and decision-making processes.  
The formula for Bayes' Theorem is:

$$
P A( \mid B) = \frac{P (B \mid A) \cdot P(A)}{P(B)}
$$

where:
- $P(A \mid B)$ is the posterior probability (probability of A given B)
- $P(B \mid A)$ is the likelihood (probability of B given A)
- $P(A)$ is the prior probability (probability of A)
- $P(B)$ is the evidence (probability of B)


#### 4. Random Variables  
A random variable takes on different values based on the outcome of a random event. There are two main types:
- Discrete Random Variables: Take on countable values (e.g. number of heads when flipping a coin)
- Continuous Random Variables: Take on any value within a range (e.g. height, weight)


##### Expected Value (Mean): 
The expected value of a random variable, $X$ is the long-term average value of $X$ if the experiment
were repeated many times. It is denonted as $\mathbb{E} (X)$ and calculated as:

For discrete variables:
$$
 \mathbb{E}(x) = \sum x \cdot P(x) 
$$  

For continuous variables:

$$
 \mathbb{E}(x) = \int x \cdot f(x) dx
$$

Where $f(x)$ is the probability density function.


#### 5. Common Probability Distributions: 

###### Bernoulli Distribution: 
The Bernoulli Distribution models a single trial with two possible outucomes, typically "success" or "failure".
It is represented by a random variable $X$, where:  

- $P(X=1)$ = $p (\text{success})$

- $P(X=0)$ = $1 - p (\text{failure})$


###### Binomial Distribution: 
The Binomial Distribution models the number of successes in a fixed number of independent Bernoulli trials. For n trials
and success probability, $p$, the probability of exactly $k$ successes is:

$$
P (X=k) = \binom{n}{k} p^{k} (1-p)^{n-k}
$$


###### Normal Distribution: 
The Normal Distribution, also known as the Gaussian Distribution, is a continuous probability distribution that is 
symmetric around the mean. It is used in natural phenomena and machine learning applications. The Probability Density Function (pdf) of a normal distribution is:

$$
f(x) = \frac{1}{\sigma \sqrt{2 \pi}} e^{-\frac{(x-\mu)^{2}}{2 \sigma^{2}}}
$$

where $\mu$ is the mean and $\sigma$ is the variance.



#### 6. Law of Total Probability:
The law of total probability states that the total probability of an event can be found by conditioning on 
all possible eventss in a partition of the sample space.  

For an event A and a partition of the sample space $\{ B_1, B_2, \ldots, B_n \}$, the law of total probability is:  

$$
 P(A) = \sum_{i} P(A \mid B_{i}) \cdot P(B_i)
$$


#### Conclusion:  
Understanding the fundamentals of probability is essential for analyzing uncertainty and making informed decisions in data science, machine learning, and beyond. By mastering the basic rules, distributions, and key concepts like Bayes' Theorem, you’ll be better equipped to tackle real-world problems that involve uncertainty and randomness.


