# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Product list with cart using vanilla Javascript](https://www.frontendmentor.io/solutions/product-list-with-cart-using-vanilla-javascript-hPJhiB-0ZK)
- Live Site URL: [Github Pages](filipangel.github.io/product-list-with-cart/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla Javascript

### What I learned

This challenge was the most difficult so far and took me about 10 hours in total. I learned a lot about layouts and responsive design, mostly using flexbox to make sure everything is where it should be at all screen sizes. Writing the cart and button logic in vanilla Javascript using DOM manipulation was an interesting experience to say the least - I am definitely going to avoid it in the future. I am hoping to learn React and/or Vue soon so future projects that require a bit more logic like this one will be done using a framework.

Placing the "add to cart" button overlapping the image as well as replacing it with an identically sized element which contains two buttons was also a fun CSS challenge. I was able to solve it mostly identical to the proposed design. Overall this is the project I've had the most difficulty with but also one I've learned the most from. After making this whole thing responsive, I feel like I will soon be able to tackle a whole website design, complete with a header, footer, navigation, multiple pages and all.

One thing I would still like to learn - although I feel it is much more important when creating whole sites rather than just elements like in this case - is accessibility and semantic element naming. The element I've created does seem navigable with only a keyboard, but this isn't something I've done intentionally. Additionally, writing all this CSS manually is both cumbersome and hard to read. On my next projects I hope to give either Tailwind or SASS a try.

### Continued development

I had some trouble making the dessert card image border become highlighted in orange when the specific dessert is in the cart. The border I created was slightly larger than the image itself for a reason that is beyond me. Other than that, I wasn't able to make the plus and minus buttons turn orange with a white background on hover, because the button icons are provided as images and cannot be colored without manually editing the image itself (as far as I'm aware). I believe these are the only things that differ from the design.

I intend to reuse this project as a basis for an actual webshop with items loaded from an API rather than a .json file. The cart logic in particular is something I'm very happy to have created on my own because it seems like a very useful concept to be able to implement.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/filipangel)
