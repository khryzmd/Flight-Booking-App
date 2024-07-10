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

- **Purpose**: Explain the purpose of the application.
- **Scope**: Define what the application will and will not do.
- **Definitions, Acronyms, and Abbreviations**: List any terms or acronyms used.
- **References**: List any documents or sources referenced.

## 4. Overall Description

- **Product Perspective**: Describe how this application fits into a larger system or context.
- **Product Functions**: Provide a high-level overview of the main functionalities.
- **User Classes and Characteristics**: Describe the different types of users.
- **Operating Environment**: Specify the hardware, software, and network environment.
- **Assumptions and Dependencies**: List any assumptions made and dependencies on other projects or technologies.

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

- **Data Models**: 
  - User: { id, firstName, lastName, email, password, isAdmin, mobileNo }
  - Flight: { id, airline, departureCity, destinationCity, departureDatetime, arrivalDatetime, price, availableSeats }
  - Booking: { id, userId, flightIds, totalPrice, status }
  - Payment: { id, bookingId, paymentDatetime, amount, paymentMethod }

- **Database Requirements**: 

    *Database Choice*

    The application utilizes MongoDB for its document-oriented storage, which is well-suited for handling user, flight, booking, and payment data efficiently.

    *Entity-Relationship Diagram (ERD)*

    ```
    [Users] One --- Many [Bookings]
    [Flights] Many --- Many [Bookings]
    [Bookings] One --- One [Payments]
    ```

    *Relationships*

    1. **Users and Bookings**
       - Each user can have multiple bookings.
       - Each booking belongs to exactly one user.

    2. **Flights and Bookings**
       - Each flight can be booked by multiple users.
       - Each booking can include multiple flights.

    3. **Bookings and Payments**
       - Each booking can have exactly one associated payment.
       - Each payment corresponds to exactly one booking.
   
- **Data Storage and Retrieval**

    Data in the flight booking application will be stored and accessed using MongoDB's document-oriented storage model. This approach allows flexibility in schema design and efficient storage of complex data structures

    - **Storage**: 
      - **Users**: User data, including details such as name, email, password hash, admin status, and mobile number, will be stored in the `Users` collection.
      - **Flights**: Flight information, such as airline, departure city, destination city, departure and arrival times, price, and available seats, will be stored in the `Flights` collection.
      - **Bookings**: Bookings made by users, linking users to flights they have booked, along with total price and booking status, will be stored in the `Bookings` collection.
      - **Payments**: Payment details associated with bookings, including payment datetime, amount, and payment method, will be stored in the `Payments` collection.

  - **Retrieval**: 
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
