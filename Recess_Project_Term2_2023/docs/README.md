# Campus Guide Project Documentation

## Table of Contents

1. Introduction
2. Setup and Installation
3. Configuration
4. Usage
    - Page 1: Enter Locations
    - Page 2: Display Route and Guidelines
5. Technologies Used
6. Acknowledgments
7. Conclusion

## 1. Introduction

The Campus Guide Project is a web application designed to help users navigate their way around a campus using the Google Maps API.
The project consists of two pages. The first page is where the user enters the details of where they are from and where they are going, the user enters the starting address and the destination and then chooses a mode of transit which could be walking driving or cycling. After this, the user can then click the button which will then take him/her to the second page where he or she is given the step by step guide on how to get to where they are going. The second page consists of a number of components most notably being the map which is where the user is starting from to where they’re going. We also have the table which gives the overview of the whole route i.e; The starting point, destination, duration which is an estimate of how long it will take for the user to get to where they’re going, the distance in Kilometers, then we have the directions which is a step by step guide on how to get to where you’re going.




## 2. Setup and Installation

Follow these steps to set up the Campus Guide Project on your local machine:

1. Clone the repository from GitHub: `git https://github.com/techymaj/CampusGuide.git`
2. Navigate to the project directory: `cd CampusGuide`
3. Create a virtual environment: `python3 -m venv venv`
4. Activate the virtual environment:
    - On Windows: `venv\Scripts\activate`
    - On macOS and Linux: `source venv/bin/activate`
5. Install the required packages: `pip install -r requirements.txt`
6. Create a `.env` file in the project root directory and add your Google Maps API key: `GOOGLE_MAPS_API_KEY=your_api_key_here`

## 3. Configuration

The project configuration is managed through the `settings.py` file in the `CampusGuide` directory. You should customize the following settings:

- `SECRET_KEY`: Django secret key for security purposes.
- `DEBUG`: Set to `True` for development and `False` for production.
- `ALLOWED_HOSTS`: List of allowed hostnames for your application.
- `GOOGLE_MAPS_API_KEY`: Your Google Maps API key (required for map functionality).

## 4. Usage

### Page 1: Enter Locations
1. Start the Django development server: `python manage.py runserver`
2. Open your web browser and navigate to `http://localhost:8000/`.


3. You will be directed to the homepage where you can enter the start and destination locations.
4. Select your mode of transport

5. Click the "Get Directions" button to proceed.

### Page 2: Display Route and Guidelines

	•	After submitting the locations, you will be redirected to the map page.



2. The page will display a map with the route from the start to the destination marked.
3. Simple step-by-step guidelines will be shown below the map to help users navigate the route.


## 5. Technologies Used

The Campus Guide Project utilizes the following technologies:	

- Django: A python framework
- Google Maps API: Provides map and location services.
- HTML, CSS, JavaScript: Front-end technologies for user interface and interactivity.

## 6. Acknowledgments

We would like to express our gratitude to the following resources and communities:

- Django Project and Community
- Google Maps API Documentation
- Stack Overflow and other online developer communities
-Open AI

## 7. Conclusion

The CampusGuide project aims to provide a user friendly solution for navigating the compass ( Makerere university) using the power of Google Maps and the simple and user friendly application with the two main pages, users can easily enter their location visualize their routes and follow the step by step guide to their destination

Thank you for choosing the CampusGuide!
