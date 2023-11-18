# Angular Photo Gallery App

This Angular application allows users to browse a photo gallery from a public REST API and set images as the application's background.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Components](#components)
- [Contributing](#contributing)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/xNickolas/image-gallery.git
   cd image-gallery-main


### Install Dependencies:
- npm install

### Run the Application:
- ng serve
Open your browser and navigate to http://localhost:4200/.


## Usage

### Login:

1. Access the application by navigating to [http://localhost:4200/].
2. Provide any login and password to access the photo gallery.

### Photo Gallery:

1. View a paginated list of images from the public REST API.
2. Navigate through pages using the "Previous" and "Next" buttons.
3. Set an image as the application's background.

### Logout:

- Click the "Logout" button to log out of the application.

## Features

### Authentication:

- Users must provide any login and password to access the application.
- Logout functionality is available.

### Photo Gallery:

- Paginated list of images from a public REST API.
- Navigation between pages with "Previous" and "Next" buttons.
- Set an image as the application's background.

## Components

1. **Login Component:**

   - Handles user authentication.
   - Allows users to log in to the application.

2. **Photo List Component:**

   - Displays a paginated list of images.
   - Provides navigation between pages.
   - Allows setting an image as the application's background.
   - Handles user logout.

3. **Background Service:**

   - Manages the application's background image.

4. **Auth Service:**

   - Handles user authentication and login state.

5. **Photo Service:**

   - Retrieves images from the public REST API.


## Contributing

Contributions are welcome! Please follow the Contributing Guidelines.