# JavaScript Algorithms

**Student Name:** Jadyn  
**Course:** CIS 185   
**Assignment One:** JavaScript Algorithms Homework   
**Date:** 10.22.25   

## Project Overview

This project did not require a Readme, however for personal reflection I will be keeping track of my work for future reference.

## Resources used:

This video, still working through it:   
https://www.youtube.com/watch?v=EerdGm-ehJQ

W3 Schools Javascript:   
https://www.w3schools.com/js/js_syntax.asp

Lectures from...
- Week 4 Tuesday + Thursday

**AI disclaimer:**
Used to aid in figuring out these lines below:

```javascript
function curveGrades(scores, curveAmount) {
    // Add curveAmount to each score
    // Cap all scores at 100 (no score above 100)
    // Return new array, don't modify original
    return scores.map(score => Math.min(score + curveAmount, 100)); // => Math.min
}
```
A portion of problem5.js I learned with help of AI. Specifically:

```javascript
Array.from(new Set(numbers))
```
```javascript
    if (shift === 0) return [...arr]; // THIS CONFUSED ME
    return arr.slice(-shift).concat(arr.slice(0, len - shift)); // COULD NOT GET LINE RIGHT
```
```javascript
        if (!seen.has(item)) {
            seen.add(item);
            result.push(item);
```

## Challenges Encountered

- **Complexity**: Although I prefer javascript over css and html because of familiarity and consistency, a number of times I run into errors that I don't understand the answer to. I forget parentheses, I forget dots or I just don't know what objects/ methods to use. Javascript is more complex than html or css.
