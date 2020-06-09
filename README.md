# Hot-Meal

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries](#libraries)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Hot Meal** is a website where you can find multiple dishes and there recipes. You will be able to log in and register on the website and you will be able to edit create and delete a post that was made directly from the website but only accessible to Admins._


<br>

## MVP

_The **Hot Meal** MVP ._

- Have a **RESTful JSON API**.
  - Build a **Ruby on Rails** server, exposing RESTful JSON endpoints.
  - Build a database with at least 3 tables:
    - 1 user table
    - 2 other tables, of your choosing
    - There must be at least 1 association between your tables. (1:m _or_ m:m)
  - Utilize **Rails** to define models for interacting with the database.
  - Implement Authentication using **JWT**.
  - Implement working generic controller actions for full-CRUD (`index`, `show`, `create`, `update`, `delete`) between the 2 non-user tables AND partial-CRUD (`create`, at least) for the user table.

- Have a working, interactive **React** app, built using `npx create-react-app`.
  - Have at least 8 separate, rendered components in an organized and understandable React file structure.
  - Utilize functional and class React components appropriately.
  - Utilize state and props in your components efficiently.
  - Use _only_ React for DOM Manipulation.
- Consume data from your **Ruby on Rails API**, and render that data in your components.
- Utilize **React Router**, for client-side routing.
- Utilize Authentication, permitting the user to:
  - Register, login, and send authenticated requests.
  - Perform `index` or `show` actions, **whether or not they are logged in**.^
  - Perform `create`, `update`, and `delete` actions **when logged in**.
- Be styled with CSS.
- Use flexbox to the layout design.
- Implement 2 media queries for responsive design on 3 screen sizes (including desktop).


<br>

### Goals

- _Make website where you will be able to select a food and have the recipe_
- _Able to Log In and Register._
- _Able to Edit, Create, and Delete any post by the Admin._


<br>

### Libraries


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _The Front End_ |
|   React Router   | _The Front End Route_ |
|    Axios         | _Connect the front end to the back end_ |
|     CSS          | _The Styling part_ |
|  Ruby on Rails   | _The Back End Server_ |
|  Bcrypt          | _Password security_ |
|  JWT             | _The Authentication_ |
|  PostgreSQL      | _The Database_ |

<br>

### Client (Front End)

#### Wireframes

![Dummy Link](https://github.com/Edouard509/Hot-Meal/blob/master/website.jpg)



#### Component Tree

 ![Dummy Link](https://github.com/Edouard509/Hot-Meal/blob/master/circle.jpeg)

#### Component Hierarchy

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Nav.jsx
      |__ Main.jsx
      |__ Header.jsx
  |__ LogIn.jsx
  |__ Register.jsx
  |__ PostCreate.jsx
  |__ PostEdit.jsx
  |__ PostDetail.jsx
  |__ Posts.jsx
  |__ Post.jsx  
|__ services/

```

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    App    | class |   y   |   y   | _The header will contain the navigation and logo._               |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   y   | _The navigation will provide a link to each of the pages._       |
|   Main    |   class    |   y   |   n   | _The main will render the posts using cards in flexbox._      |
| LogIn | functional |   n   |   y   | _LogIn as an existing user._ |
|    Register    | functional |   n   |   y   | _Create a new user._ |
|    Post    | functional |   n   |   n   | _Shows a post's details_               |
|  Posts  | functional |   n   |   n   | _Shows a list of all posts._       |
|   PostCreate    |   function    |   n   |   y   | _Create a new post._      |
| PostDetail | functional |   n   |   y   | _Lets you see the post detail._                 |
|    PostEdit    | functional |   n   |   y   | _Lets you edit a given post._ |

#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Component creation    |    L     |     3 hrs      |     hrs     |    TBD    |
| Database |    H     |     2 hrs      |     hrs     |     TBD     |
| Controllers (CRUD)    |    L     |     3 hrs      |      hrs     |    TBD    |
| Routing (backend) |    H     |     3 hrs      |      hrs     |     TBD     |
| Authentication    |    L     |     2 hrs      |      hrs     |    TBD    |
| Connect rails/react |    H     |     1 hrs      |      hrs     |     TBD     |
| State and methods    |    L     |     2 hrs      |      hrs     |    TBD    |
| React router |    H     |     3 hrs      |      hrs     |     TBD     |
| CSS |    H     |     5 hrs      |     hrs     |     TBD     |
| Seed data    |    L     |     4 hrs      |      hrs     |    TBD    |
| React router |    H     |     3 hrs      |      hrs     |     TBD     |
| TOTAL               |          |     34 hrs      |      hrs     |     TBD     |



<br>

### Server (Back End)


![Dummy Link](https://github.com/Edouard509/Hot-Meal/blob/master/box.jpg)

<br>

***

## Post-MVP


- _Add more CSS_
- _Add a comment section._
- _Add a like button._

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
