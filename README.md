# DeliveryApp

The application allows users to add products to the cart from selected stores,
place orders, and track their order history. When placing an order, an estimated
delivery time is calculated, and a route to the store is generated and displayed
in a modal window after the order is submitted. Additionally, an email with a
list of ordered items is sent to the customer upon order submission. Email
validation is implemented during registration, and authorization is done using
access and refresh tokens that are refreshed every 2 minutes.

The application is launched with the command "yarn dev."

The Vite framework was used for project building. React, Redux RTK, and RTK
Query were used.

Form handling was done using Formik, validation with Yup, and axios for making
requests.

React Router was used for routing, and styled components for styling. The
project also includes a .jsconfig file.

Responsive design has been implemented with breakpoints at 320, 768, and 1280.

The server-side of the application has been written, and the database has been
deployed using MongoDB Atlas.

The server is deployed on render.com at the following address:
https://delivery-app-backend-siau.onrender.com.
