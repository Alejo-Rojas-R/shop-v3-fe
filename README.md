# 🛒 Online Shop Front End

This is a single-page application developed to serve as the front end of an online grocery store. This app is connected to a backend that I developed using Spring MVC. It can be found in the following link:

🔗 [Spring MVC API RESTful](https://github.com/Alejo-Rojas-R/shop-v3-api)

To successfully use this app the API needs to be running in parallel to the front end. By default, the front end is configured to run in the 3000 port and the API in the 8082 port.

# Pages and Functionalities

### Landing page

- Search bar to check if a particular item is available in the store.
- A summary of items by category that are available in the store.
- "View More" button, which redirects the user to the full list of items available for that category.
- List of categories that are available in the store.

![image](https://github.com/Alejo-Rojas-R/shop-v3-fe/assets/125615397/ecca6775-7bc0-4ea6-9d3a-04f167a575bc)

### Results page

- Search for a keyword, the results will show if an item with that keyword is available in the store.
- Users get redirected to this page if they click on the "More" button to see all the items that belong to a category.

![image](https://github.com/Alejo-Rojas-R/shop-v3-fe/assets/125615397/b81a7e1c-50e5-4f50-82d6-46e93da734a7)

- Add items to the cart and see them in a sidebar. These items get stored in the local storage property.
- The total amount is calculated based on the items that are currently in the cart.
- Order button to set the order, if the user is not authenticated they will get redirected to the login page.

![image](https://github.com/Alejo-Rojas-R/shop-v3-fe/assets/125615397/75994a4e-5959-49c6-bfa6-6ecca5363120)

- Browse through the items to see more details about it.
- Review the product by leaving a comment and score.
- Check reviews that buyers have made about a particular item.

![image](https://github.com/Alejo-Rojas-R/shop-v3-fe/assets/125615397/d93864a0-bcd1-4ef8-ab27-ac1520f9d950)



# Technologies used

To design the functionalities of this SPA, the following technologies were used:

- **React.js:** Core library to build the user interfaces out of individual pieces (components).
- **Redux Toolkit:** Handle a global state of the application to handle the user session by storing the JWT.
- **React Router:** Create routes and have the ability to navigate through different pages.
- **React Bootstrap:** UI foundation for built-in and reusable components making it easier and faster to create the UI.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
