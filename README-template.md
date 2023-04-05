# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.
- **Bonus**: Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.

### Screenshot

![mobile](./screenshots/Screen%20Shot%202023-03-29%20at%2019.51.20-fullpage.png)
![desktop preview](./screenshots/Screen%20Shot%202023-03-29%20at%2019.52.42-fullpage.png)
![desktop active](./screenshots/Screen%20Shot%202023-03-29%20at%2019.53.53-fullpage.png)
![modal desktop](./screenshots/Screenshot%20from%202023-03-29%2020-00-16.png)
![modal mobile](./screenshots/Screenshot%20from%202023-03-29%2020-00-43.png)

### Links

- Solution URL: [Github code](https://github.com/lawrence-yoon/...)
- Live Site URL: [Interactive Comments Section Live](https://interactive-comments-section-murex.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite.js](https://vitejs.dev/) - Frontend development environment

### What I learned

I had underestimated this challenge. This challenge turned out to be an entire CRUD application, with a supplied data file that has an existing structure. It took me a couple days to set up the components and styling, and the majority of my time went into the algorithms for the CRUD handlers, and ended up being a good exercise in data/state manipulation. Working with the nested arrays within the objects within the arrays was a challenge for sure. I've actually learned a lot from this, and wasn't sure if I would finish it. At the time that I am writing this, I have already finished the code. So I will be recapping my learnings.

HTML
-autoFocus, cols, and rows tags for textarea

CSS
-Grid (grid was used for styling the post component and changing per screen size)
-widths (child needs to have a set width of 100% to fill parent)
-position (for the modal, using position fixed, top/left, transform: translate...)
-media breakouts (@media only screen and (min-width: 768px), and min-width is not the same as min-screen-width, which I had and was wrong.)

JS
-modal logic
-recursion (render replies as post component within post/comment component)
-algorithms for data and using reduce to achieve a combo of map and filter(reduce (using it with an array as accumulator, looks kind of like useEffect code "reduce((acc, val)=>{acc.push("something with val")},[])" ) for Create / Delete)
-avoiding passing the entire app data and app data setter into child components, by passing down functions as props where the the parameters will be piped through from the child to the parent, then to the setter.

e.g.

```
  function submitComment(text) {
    setAppData({
      comments: [
        ...comments,
        {
          id: commentCounter,
          content: text,
          createdAt: "just now",
          score: 0,
          user: currentUser,
          replies: [],
        },
      ],
      currentUser: currentUser,
    });
    setCommentCounter((prev) => prev + 1);
  }

  // then in the child
    function handleSubmit() {
    handleSubmitButton(text);
    setText(initialTextState);
  }
```

Misc.
-import svgs from fs using vite-plugin-svgr
import { ReactComponent as DeleteIcon } from "/public/icon-delete.svg";

### Continued development

-I've come to realize that I am not as good with algorithms as I had thought. If this project had a backend, it would have been easier due to just applying changes through the endpoints, and rendering out the new list from the updated data.
-Take some more time in the beginning to lay down the foundations for the project. Component structures, passing props, styling components.
-learn to create robust dynamically styled components from the beginning. it feels like I am creating new class selectors on the fly sometimes.
-find a nice way to encapsulate some functions, declutter the main app.jsx file. need to look into making all the handler functions reusable, and importing them into the app.jsx.

### Useful resources

- [Reduce array method](https://code.kylebaker.io/2018/03/16/stack-overflow/#In-a-Nutshell) - This helped me for filtering data out using Array.reduce method. Very good writeup, and helped for a lot of the CRUD algorithms.

## Author

- Website - [Lawrence Yoon](https://www.larr.dev)
- Frontend Mentor - [@lawrence-yoon](https://www.frontendmentor.io/profile/lawrence-yoon)
