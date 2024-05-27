# Task Management Application

This is a React-based Task Management application that uses Tailwind CSS for styling and Axios for API requests. The application allows users to create tasks, view them in categorized columns based on their status ("To Do", "In Progress", "Done"), and change the status of each task using dropdown menus.

## Features

- **Task Creation**: Users can create tasks with a title, description, status, and assignee.
- **Task Viewing**: Tasks are displayed in three columns based on their status.
- **Status Updating**: Users can update the status of each task using a dropdown menu.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Axios**: A promise-based HTTP client for the browser and Node.js.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1. **Clone the repository**:

    ```sh
    git clone https://github.com/your-username/task-management-app.git
    cd task-management-app
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Start the development server**:

    ```sh
    npm start
    ```

The application will be available at `http://localhost:5000`.

## Code Overview

### Components

- **TaskForm.jsx**: This component includes the form for creating new tasks and displays the tasks in categorized columns with status update dropdowns.

### API

The application uses a mock API provided by MockAPI:

- **Base URL**: `https://664cf463ede9a2b556523307.mockapi.io/api/v1/todos`


## Usage

### Creating a Task

1. Fill in the **Title**, **Description**, **Status**, and **Assignee** fields in the task form.
2. Click the **Submit** button to create the task.

### Viewing Tasks

Tasks are displayed in three columns:

- **To Do**: Tasks that need to be done.
- **In Progress**: Tasks that are currently being worked on.
- **Done**: Tasks that have been completed.

### Updating Task Status

1. Locate the task you want to update.
2. Use the dropdown menu next to the task to select a new status.
3. The task will move to the appropriate column based on the selected status.

## Contributing

1. **Fork the repository**.
2. **Create a new branch**:

    ```sh
    git checkout -b feature/your-feature-name
    ```

3. **Make your changes**.
4. **Commit your changes**:

    ```sh
    git commit -m 'Add some feature'
    ```

5. **Push to the branch**:

    ```sh
    git push origin feature/your-feature-name
    ```

6. **Open a pull request**.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)


