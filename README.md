# Technical Specifications Document

## 1. Title Page

- **Project Name**: Flight Booking App
- **Version**: 1.0
- **Date**: July 17, 2024
- **Author(s)**: 
  - Arnel Sinadhan 
  - Jeswel Gomez 
  - Khryzmiel Dabu 
  - Richmore Jubert Ravina


## 2. Table of Contents

1. [Introduction](#3-introduction)
2. [Overall Description](#4-overall-description)
3. [Visual Mockup Reference](#5-visual-mockup-reference)
4. [Features](#6-features)
5. [Functional Requirements](#7-functional-requirements)
6. [Non-Functional Requirements](#8-non-functional-requirements)
7. [Data Requirements](#9-data-requirements)
8. [External Interface Requirements](#10-external-interface-requirements)
9. [Glossary](#11-glossary)
10. [Appendices](#12-appendices)

## 3. Introduction

- **Purpose**: The purpose of this project is to develop and analyze a robust web-based platform that empowers users to effortlessly navigate the complexities of airline reservations. By integrating advanced technologies and user-centric design principles, the platform aims to enhance the overall booking experience, from flight discovery to payment confirmation.
- **Scope**: The scope of the system encompasses functionalities that enable users to explore available flights, select preferred seats, process secure payments, and receive instant booking confirmations. Emphasis is placed on optimizing the User Interface (UI) and User Experience (UX) to ensure intuitive navigation and efficient task completion. However, it is important to note that the system will not involve backend operations related to airline logistics, such as flight scheduling and maintenance.
- **Definitions, Acronyms, and Abbreviations**: 
  - **API**: Application Programming Interface, facilitating seamless communication between different software applications.
  - **UI**: User Interface, the graphical layout of an application that users interact with.
  - **UX**: User Experience, encompassing users' perceptions and responses resulting from interaction with the system.
  - **Express.js**: A minimal and flexible Node.js web application framework that provides robust features for building web and mobile applications. It simplifies routing, middleware integration, and handling HTTP requests.
  - **MongoDB**: A NoSQL database system that uses JSON-like documents with dynamic schemas. It is well-suited for scalable and high-performance applications, storing data in a format that aligns closely with JavaScript objects.
  - **JavaScript**: A programming language commonly used for creating dynamic and interactive web pages. In the context of web development, JavaScript runs client-side in browsers and server-side with Node.js, enabling full-stack application development.
  - **Backend**: The server-side of a web application responsible for processing requests, managing databases, and executing business logic. Node.js and Express.js are commonly used for developing backend functionalities.
  - **Frontend**: The client-side of a web application that users interact with directly. It comprises HTML, CSS, and JavaScript components rendered in the browser, providing the graphical interface for users.
  - **REST API**: Representational State Transfer Application Programming Interface, a style of software architecture for defining scalable web services. Node.js and Express.js are often used to implement RESTful APIs that adhere to REST principles. 

- **References**:
  - **Express.js Documentation**: Comprehensive guide and reference for using Express.js in the backend development of the application. Available at [Express.js](https://expressjs.com/en/4x/api.html).
  - **MongoDB Documentation**: Official MongoDB documentation for database design, data modeling, and query operations. Available at [MongoDB](https://docs.mongodb.com/manual/).
  - **JavaScript Info**: A detailed resource for learning JavaScript concepts and best practices. Available at [JavaScript.info](https://javascript.info/).
  - **Node.js Documentation**: Official documentation for Node.js, covering modules, API reference, and guides. Available at [Node.js](https://nodejs.org/en/docs/).
  - **OpenAPI Specification**: Standard for defining APIs, helpful in designing and documenting RESTful APIs. Available at [OpenAPI](https://swagger.io/specification/).
  - **Postman Documentation**: Tool for testing APIs, providing resources for API design, testing, and documentation. Available at [Postman](https://learning.postman.com/docs/getting-started/introduction/).
  - **HTML Documentation**: Official W3C documentation and guidelines for HTML. Available at [W3C HTML](https://www.w3.org/TR/html52/).
  - **CSS Documentation**: Official W3C documentation and guidelines for CSS. Available at [W3C CSS](https://www.w3.org/Style/CSS/).
  - **Google Chrome Developers**: Resource for web technologies including HTML, CSS, and JavaScript. Available at [Google Chrome Developers](https://developers.google.com/web).

## 4. Overall Description
- **Product Perspective**: The proposed application serves as an independent system designed to interface with airline databases and external payment gateways. It operates autonomously to facilitate seamless flight booking and management processes for users.
- **Product Functions**: The system offers the following core functionalities:
  - **User Registration and Authentication**: Allows users to create accounts securely and authenticate their identities for accessing booking services.
  - **Flight Search and Selection**: Enables users to search for available flights based on specified criteria such as dates, destinations, and preferences.
  - **Seat Reservation and Booking**: Facilitates the selection and reservation of seats on chosen flights, ensuring a personalized travel experience.
  - **Payment Processing**: Handles secure payment transactions through integration with external payment gateway APIs, ensuring reliability and security.
  - **Booking Confirmation and Itinerary Generation**: Provides users with instant booking confirmations and generates detailed itineraries containing flight details and reservations.
- **User Classes and Characteristics**: The application caters to two main user classes:
  - **Regular Users**: Primarily passengers seeking to book flights for travel purposes. They interact with the system to search, select, and book flights seamlessly.
  - **Admin Users**: System administrators responsible for managing flight schedules, user accounts, and content within the application. They have privileged access to administrative functionalities.

- **Operating Environment**: The system operates within the following environment:
  - **Hardware**: Utilizes standard web server hardware capable of hosting and managing web applications efficiently.
  - **Software**: Relies on web browsers for client-side interactions, server-side scripting implemented with Node.js and JavaScript for backend operations, and MongoDB for data storage and management.
  - **Network**: Requires internet connectivity for users to access the application, ensuring real-time interaction and data exchange.

- **Assumptions and Dependencies**: The functionality and effectiveness of the system are contingent upon the following assumptions and dependencies:
  - **Availability of Reliable Internet Connection**: Users require consistent internet access to utilize the application's online booking services effectively.
  - **Integration with External Payment Gateway APIs**: Seamless integration with external payment gateway APIs ensures secure and efficient payment processing for booking transactions.

## 5. Visual Mockup Reference

- **Link or Screenshot**: Provide a link to the visual mockup or include a screenshot.

## 6. Features

- **User Registration and Login**: Allows users to create accounts and securely log in to access personalized features.
- **Flight Search**: Users can search for flights based on criteria like destination, dates, and number of passengers.
- **Booking Management**: Users can view and manage their bookings, including cancellations and changes
- **Payment Processing**: Secure payment gateway integration for ticket purchases.
- **Booking Confirmation and Itinerary Generation**: Automatically sends booking confirmations and generates detailed itineraries for users after successful bookings.

## 7. Functional Requirements

### Use Cases

- **Use Case 1**: User Registration and Login
  - **Title**: User Registration and Login
  - **Description**: Allows users to create accounts and securely log in to access personalized features.
  - **Actors**: User, System
  - **Preconditions**: User accesses the registration or login page.
  - **Postconditions**: User successfully registers or logs in.
  - **Main Flow**: 
    1. User navigates to the registration or login page.
    2. If new user:
      - User enters registration details (name, email, password).
      - System validates inputs and checks for duplicate accounts.
      - User account is created.
    3. If existing user:
      - User enters login credentials (email/username, password).
      - System verifies credentials.
      - User is authenticated and logged into the system.
  - **Alternate Flows**: 
    - If login credentials are incorrect, notify the user and prompt for correct credentials.
    - Provide options for password recovery/reset if needed.

- **Use Case 2**: Flight Search
  - **Title**: Flight Search
  - **Description**: Users can search for flights based on criteria like destination, dates, and number of passengers.
  - **Actors**: User, System
  - **Preconditions**: User is logged into the system.
  - **Postconditions**: Available flights matching search criteria are displayed.
  - **Main Flow**: 
    1. User enters flight search criteria (origin, destination, dates, number of passengers).
    2. System queries the flight database based on the entered criteria.
    3. System displays a list of available flights that match the search criteria, including flight details (price, duration, layovers).

  - **Alternate Flows**: 
    - If no flights match the entered criteria, notify the user and suggest alternative dates or destinations.

- **Use Case 3**: Booking Management
  - **Title**: Booking Management
  - **Description**: Users can view and manage their bookings, including cancellations and changes.
  - **Actors**: User, System
  - **Preconditions**: User is logged into the system and has bookings.
  - **Postconditions**: Booking changes (cancellations, modifications) are successfully processed.
  - **Main Flow**: 
    1. User accesses their booking management section.
    2. System retrieves and displays the user's current bookings.
    3. User selects a booking to manage (cancel or modify).
    4. System processes the requested action (cancellation or modification).
    5. Confirmation of booking change is sent to the user via email.
  - **Alternate Flows**: 
    - Handle scenarios where cancellations or modifications are not allowed based on booking rules or timing.

- **Use Case 4**: Payment Processing
  - **Title**: Payment Processing
  - **Description**: Secure payment gateway integration for ticket purchases.
  - **Actors**: Payment Gateway, System
  - **Preconditions**: User has selected a flight and confirmed booking details.
  - **Postconditions**: Payment is successfully processed, and booking is confirmed.
  - **Main Flow**: 
    1. User selects payment method (credit/debit card, digital wallet).
    2. User enters payment details securely.
    3. System validates payment information and initiates payment through the selected payment gateway.
    4. Payment gateway processes the payment securely.
    5. System updates booking status to "confirmed" and generates a booking confirmation and itinerary.
    6. Booking confirmation and e-ticket are sent to the user via email.
  - **Alternate Flows**: 
    - If payment fails, notify the user and provide options to retry payment or choose a different payment method.

### System Features

- **Feature 1**: User Registration and Login
  - **Description**: Facilitates user account creation and authentication.
  - **Priority**: High
  - **Inputs**: User details (name, email, password), login credentials.
  - **Processing**: Validate inputs, create user account, authenticate user.
  - **Outputs**: Confirmation message, error notifications.
  - **Error Handling**: Handle duplicate email addresses, incorrect credentials.

- **Feature 2**: Flight Search
  - **Description**: Enables users to search for flights based on specified criteria.
  - **Priority**: High
  - **Inputs**: Flight search criteria (origin, destination, dates, number of passengers).
  - **Processing**: Query flight database, filter results based on criteria.
  - **Outputs**: List of available flights matching criteria, flight details.
  - **Error Handling**: Notify users if no flights match criteria, handle database query errors.

- **Feature 3**: Booking Management
  - **Description**: Allows users to manage their flight bookings, including cancellations and modifications.
  - **Priority**: Medium
  - **Inputs**: User's booking details, action requests (cancel, modify).
  - **Processing**: Retrieve user's bookings, process cancellation or modification requests.
  - **Outputs**: Confirmation of booking changes, email notifications.
  - **Error Handling**:Handle booking change errors, notify users of restrictions or errors in modification.

- **Feature 4**: Payment Processing
  - **Description**: Integrates secure payment gateway for processing ticket purchases.
  - **Priority**: High
  - **Inputs**: Payment details (credit/debit card information, digital wallet details).
  - **Processing**: Validate payment information, process payment through 
  - **Outputs**: Payment confirmation, booking status update, e-ticket generation.
  - **Error Handling**: Handle payment failures, provide alternative payment options, notify users of transaction errors.

## 8. Non-Functional Requirements
- **Performance**:
  - The application should load within 3 seconds under normal usage conditions.
  - Handle at least 1000 concurrent users during peak times without performance degradation.
- **Security**:
  - All user data should be encrypted in transit and at rest.
  - Implement secure authentication mechanisms (e.g., OAuth for social media logins).
  - Regular security audits and vulnerability assessments should be conducted to maintain robust security posture.
- **Usability**:
  - The user interface should be intuitive and responsive, supporting seamless navigation across different devices and screen sizes.
  - Ensure compliance with accessibility standards to accommodate users with disabilities.
- **Reliability**:
  - The system should maintain an uptime of 99.9% or higher.
  - Implement automated backup and recovery procedures to minimize downtime and data loss in case of system failures.
- **Supportability**:
  - Provide comprehensive user documentation and support resources, including FAQs and user guides.
  - Maintain a helpdesk or support ticket system to promptly address and resolve user inquiries 

## 9. Data Requirements

- **Data Models**: 
  - User: { id, firstName, lastName, email, password, isAdmin, mobileNo }
  - Flight: { id, airline, departureCity, destinationCity, departureDatetime, arrivalDatetime, price, availableSeats }
  - Booking: { id, userId, flightIds, totalPrice, status }
  - Payment: { id, bookingId, paymentDatetime, amount, paymentMethod }

- **Database Requirements**: 

    *Database Choice*

    The application utilizes MongoDB for its document-oriented storage, which is well-suited for handling user, flight, booking, and payment data efficiently.

    *Entity-Relationship Diagram (ERD)*

    ```[Users] One ------ Many [Bookings]```<br>
    ```[Flights] Many --- Many [Bookings]```<br>
    ```[Bookings] One ---- One [Payments]```

    *Relationships*

    - **Users and Bookings**
       - Each user can have multiple bookings.
       - Each booking belongs to exactly one user.

    - **Flights and Bookings**
       - Each flight can be booked by multiple users.
       - Each booking can include multiple flights.

    - **Bookings and Payments**
       - Each booking can have exactly one associated payment.
       - Each payment corresponds to exactly one booking.
   
- **Data Storage and Retrieval**

    Data in the flight booking application will be stored and accessed using MongoDB's document-oriented storage model. This approach allows flexibility in schema design and efficient storage of complex data structures

    *Storage*: 
    - **Users**: User data, including details such as name, email, password hash, admin status, and mobile number, will be stored in the `Users` collection.
    - **Flights**: Flight information, such as airline, departure city, destination city, departure and arrival times, price, and available seats, will be stored in the `Flights` collection.
    - **Bookings**: Bookings made by users, linking users to flights they have booked, along with total price and booking status, will be stored in the `Bookings` collection.
    - **Payments**: Payment details associated with bookings, including payment datetime, amount, and payment method, will be stored in the `Payments` collection.

    *Retrieval*: 
    - Data will be accessed using Mongoose, which provides a straightforward interface for MongoDB queries. This allows efficient retrieval based on various criteria such as user ID, booking status, flight details, and payment information.
    - Relationships between entities (e.g., users to bookings, flights to bookings) will be managed through Mongoose's schema definitions and population feature for references, ensuring data integrity and efficient retrieval.

## 10. External Interface Requirements

- **User Interfaces**: Provide sketches or descriptions of the user interface.
- **API Interfaces**: Briefly describe any APIs.
- **Hardware Interfaces**: Mention any required hardware interactions.
- **Software Interfaces**: Note any software interactions.

## 11. Glossary

- **Term 1**: Definition
- **Term 2**: Definition

## 12. Appendices

- **Supporting Information**: Add any additional information here.
- **Revision History**: Record any changes made to the document with dates and descriptions.
