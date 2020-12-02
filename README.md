Math Equation using KaTex
==============

## Usage
Use it for your book, by adding to your `book.json`:

```
{
    "plugins": ["katex-m"]
}
```
Then install the required npm Katex package. 
```
npm install katex
```

finally install the gitbook plugins...
```
gitbook install
```

## Syntax
The syntax is similar to MathJax.

**Inline math:** 
```
$$\int_{-\infty}^\infty g(x) dx$$
```

**Block math:**
```
$$
\int_{-\infty}^\infty g(x) dx
$$
```


## Changelog
This plugin is adapted from <https://github.com/GitbookIO/plugin-katex>. 

I only changed the `package.json` file to use newer Katex library....

```
"dependencies": {
    "katex": ">=0.12.0"
},
``` 