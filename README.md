# CME Futures Fundamentals

<---- NEW INFO STARTS 09/06 ---->

https://www.futuresfundamentals.org/

Staging url: http://static.ff.cme.vsadev.com/

This is for Jekyll build only. The compiled static files are located in the `master` branch.

The public dns is: ec2-52-90-137-85.compute-1.amazonaws.com

### Installation

```
npm install
bundle install
```

- Make changes to html files in `_pages` folder. Add images and PDFs into appropriate folders inside `assets`.
- Style changes go into `_sass`.
- Run these commands:

```
// prepare .scss files
gulp

// compile everything
bundle exec jekyll serve

// go to server address http://127.0.0.1:4000
```
<---- NEW INFO ENDS ---->

Freelancer Jekyll theme  [![Build Status](https://api.travis-ci.org/jeromelachaud/freelancer-theme.svg?branch=master)](https://travis-ci.org/jeromelachaud/freelancer-theme/)
=========================

Jekyll theme based on [Freelancer bootstrap theme ](http://startbootstrap.com/template-overviews/freelancer/)

## How to use
 - Place a image in `/img/portfolio/`
 - Replace `your-email@domain.com` in `_config.yml` with your email address. Refer to [formspree](http://formspree.io/) for more information.
 - Create posts to display your projects. Use the follow as an example:
```txt
---
layout: default
modal-id: 1
date: 2014-07-18
img: cabin.png
alt: image-alt
project-date: July 2014
client: The Client
category: Web Development
description: The description of the project

---
```

## Demo
View this jekyll theme in action [here](https://jeromelachaud.github.io/freelancer-theme)

## Screenshot
![screenshot](https://raw.githubusercontent.com/jeromelachaud/freelancer-theme/master/screenshot.png)

---------
For more details, read the [documentation](http://jekyllrb.com/)
