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
- **Feature 1**: Description
- **Feature 2**: Description
- **Feature 3**: Description
- (Add more features as necessary)

## 7. Functional Requirements
### Use Cases
- **Use Case 1**:
  - **Title**: 
  - **Description**: 
  - **Actors**: 
  - **Preconditions**: 
  - **Postconditions**: 
  - **Main Flow**: 
  - **Alternate Flows**: 

### System Features
- **Feature 1**:
  - **Description**: 
  - **Priority**: 
  - **Inputs**: 
  - **Processing**: 
  - **Outputs**: 
  - **Error Handling**: 

## 8. Non-Functional Requirements
- **Performance**: Describe performance requirements.
- **Security**: Outline security needs.
- **Usability**: Detail user interface and experience considerations.
- **Reliability**: Define reliability and availability requirements.
- **Supportability**: Specify maintenance and support requirements.

## 9. Data Requirements
- **Data Models**: Include simple diagrams if possible.
- **Database Requirements**: Describe tables and relationships.
- **Data Storage and Retrieval**: Explain how data will be stored and accessed.

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
