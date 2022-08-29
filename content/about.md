---
title: "About Me"
math: true
hide_title: true
---

I am a Computer Science PhD student at the University of Virginia, co-advised by [Matthew Dwyer](https://matthewbdwyer.github.io/) and [Yangfeng Ji](https://yangfengji.net/).
I am a member of both the [LESS Lab](https://less-lab-uva.github.io/)  and [ILP-Lab](https://uvanlp.org/) . 

#### Research Interests
My research interests lie in the areas of Software Engineering, Natural Language Processing, Computer Vision and Interpretable Machine Learning. My work is focused on:
- Using unsupervised learning techniques such as dimensionality reduction and clustering to interpret the latent representation space of large language models such as [BERT](https://arxiv.org/pdf/1810.04805.pdf) and Convolutional Models such as [ResNet](https://arxiv.org/pdf/1512.03385.pdf).
- Developing Saliency Oracles to align the regions of interest to image classifiers with human intuition.
- Formal Verification of robustness properties of Deep Learning models using verifier frameworks such as [DNNV](https://github.com/dlshriver/dnnv).

#### Other Academic Interests
I am interested in making the stae of the art developments in deep learning accessible to the general public. Sifting through technical jargon is a major deterrent to the unitiated and I hope to bridge the gap through my work.


<!--

Before I began my Ph.D. in September 2018, I studied physics at the Karlsruhe Institute of Technology, earning both a Bachelor's and a Master's degree with distinction. During my studies, I was generously supported by the Studienstiftung des deutschen Volkes.


Research interests
In my research, I am interested in studying the potential of machine learning as a driving force for scientific discovery, especially in astrophysics. Most of my recent and current work revolves around the detection and characterization of extrasolar planets, with a clear focus on method development. One aspect that is of particular interest to me is the role of scientific domain knowledge and how we can combine it with machine learning techniques to build better models and get the most out of our data.

Other academic interests
Besides my core research, I am also passionate about reproducibility in science. For instance, I am a strong advocate for making research code publicly available. Maybe as a consequence of this, I always try to keep educating myself about best practices of software development :-)

Finally, I also have a great interest in science communication and public outreach. I truly enjoy giving talks about my work, both for scientific and non-scientific audiences, and I have already successfully presented my research in multiple science slams. -->

<!-- 
To make sure everything works as expected and looks pretty, on this page, we will explore how different types of content are displayed by this theme.


## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1
## H2
### H3
#### H4
##### H5
###### H6



---



## Paragraph

### Just a normal paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur?

### How about some diacritics?

Âçčèñtëd characters are important, too!

### Or some non-Latin alphabets?

Может быть, кириллические буквы?

日本人はどうですか？

或者是中国人？

### Finally: emojis!

Sometimes ⏳ an emoji 😂 says 💬 more than a thousand 💯 words! 🤯🎉


---


## Images

Of course, we also need support for images.
You can either simply use Markdown:

![Monte Altissimo di Nago](/posts/2021/08/31/monte-altissimo-di-nago.jpg)

Or you go with HTML and place it inside a `<figure>` enviroment:

<figure>
    <a href="https://unsplash.com/photos/RiM-wOomC6w"><img src="/hummingbirds.jpg" alt="Hummingbirds"></a>
    <figcaption>
        Fun fact: Did you know that in Portuguese, hummingbirds are called <em>beija-flor</em>, which means "flower kisser"? 
        Personally, I think that is super cute! 🌸
    </figcaption>
</figure>

Of course, with HTML, you can also control the width of the images, or turn them into hyperlinks.
Just choose whatever works best for you!


---


## Footnotes

This text[^1] even has proper *footnotes*. 
Isn't it great?[^2]
The footnotes even have backlinks that allow you to jump back to where you left the main text!

[^1]: Yes, the very text that you are reading right now.
[^2]: Well, I think so 🤷🏻‍♂️



---



## Blockquotes

Let's test how well blockquotes look:

> Some random quote.

And another one, this time with a source:

> Man, I swear, I never said that!
> <cite>— Some guy who totally did say that</cite>


---



## Tables

The tables use a style inspired by the `booktabs` package in LaTeX.
And just like in LaTeX, tables in Markdown are always a little annoying to type manually:

   Name | Age
--------|------
    Bob | 27
  Alice | 23

And it does not really get easier when a lot of formatting is involved:

| Inline&nbsp;&nbsp;&nbsp;     | Markdown&nbsp;&nbsp;&nbsp;  | In&nbsp;&nbsp;&nbsp;                | Table      |
| ---------- | --------- | ----------------- | ---------- |
| *italics*  | **bold**  | ~~strikethrough~~&nbsp;&nbsp;&nbsp; | `code`     |

Fortunately, you can also just use HTML:

<figure>
    <figcaption>
        <strong>Table 1:</strong> Maybe some people don't know this, but the caption of a table (unlike the caption of an image) should always go <em>above</em> the table!
    </figcaption>
    <table>
    <tr>
        <th>Index</th>
        <th>Value</th>
    </tr>
    <tr>
        <td>1</td>
        <td>42</td>
    </tr>
    <tr>
        <td>2</td>
        <td>NaN</td>
    </tr>
</table>
</figure>

In this case, you can also use "advanced" features like `<figcaption>`! 🥳


---



## Code Blocks

Sometimes you might want to present some code. 
This could simply look like:

```
print("Hello, World!")
```

However, Hugo also supports [syntax highlighting](https://gohugo.io/content-management/syntax-highlighting/) for a large number of languages!
You can customize the theme in the `config.toml` file.
By default, the popular **darcula** theme is used, which contrasts well with our default colors:

```python
def greet(name: str = "World") -> None:
    print('Hello', name)
```



---



## List Types

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

* List item
    - Subitem
* Another item
* And another item

#### Nested list

* Item
    1. First Sub-item
    2. Second Sub-item


---


## Other elements

There are a couple of more elements that might come in handy from time to time:

* `<abbr>` allows you to define abbreviations, for example: "<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format that can also encode short videos. Also, people like to argue about the correct pronunciation."
* `<sub>` produces subscript text, like this: H<sub>2</sub>O.
* `<sup>` will give superscript text, as in: X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>.
* `<kbd>` might come in handy when talking about which buttons on a keyboard one should press. Example: "On macOS, pressing <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>esc</kbd> opens a little dialogue that allows you to force quit applications."
* `<mark>` can be used to <mark>highlight</mark> single words, <mark>or even entire passages, if you really think that all of it is important.</mark>

In all likelihood, there are many more elements about which I am forgetting here.



---



## Finally: $\LaTeX$ support!

Lo and behold, we can even typeset LaTeX!
Like, just in case you wanted to remind people of **Maxwell's equations** in CGS units:

$$
\begin{align}
    \nabla \cdot \mathbf {E}  &= 4 \pi \rho \newline
    \nabla \cdot \mathbf {B}  &= 0 \newline
    \nabla \times \mathbf {E} &=-{\frac {1}{c}}{\frac {\partial \mathbf {B} }{\partial t}} \newline
    \nabla \times \mathbf {B} &={\frac {1}{c}}\left(4\pi \mathbf {J} +{\frac {\partial \mathbf {E} }{\partial t}}\right)
\end{align}
$$

Or how about the Einstein field equations from general relativity?

$$
    G_{\mu\nu} + \Lambda g_{\mu\nu} = \kappa T^{\mu\nu}
$$

Of course, all letters of the Greek alphabet, from $\Alpha$ to $\Omega$, are also available inline.
Just like everything else, for example, this sum here: $\sum_{n=1}^{\infty} \frac{1}{n^2}$, which converges to 2. -->
