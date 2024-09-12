# AdminCookieFortune

`AdminCookieFortune` is an admin component for managing fortune phrases in an e-commerce application using the VTEX IO platform. It allows administrators to add, delete, and view fortune phrases, with support for pagination and state control.

![image](https://github.com/user-attachments/assets/03f6290f-a5e3-440a-b8a2-9d68500bb893)


## Requirements

- **Node.js**: Version 14.x or higher.
- **VTEX IO**: Ensure you have VTEX IO configured in your project.
- **Dependencies**: `@vtex/admin-ui`, `react`, `react-intl`.

## Installation

To install and configure the component in your VTEX IO project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone <repository URL>
   cd <repository name>
   ```

2. **Install dependencies**:

   Make sure you have `Yarn` installed and run:

   ```bash
   yarn install
   ```

3. **Configure in VTEX IO**:

   Ensure that `AdminCookieFortune` is registered and configured in your VTEX IO project.

## Usage

To use the `AdminCookieFortune` component, simply import and use the component in your VTEX IO application.

### Example

```jsx
import AdminCookieFortune from './components/AdminCookieFortune'

// Within your component or page:
;<AdminCookieFortune />
```

## Components

### `AdminCookieFortune`

This component manages fortune phrases and provides the following functionalities:

- **Add a new fortune phrase**: Use the input field and "Add Fortune" button to add new phrases.
- **Delete a fortune phrase**: Use the trash icon button to remove specific phrases.
- **Pagination**: Navigate between pages of fortune phrases using the pagination controls.

## Hooks

### `useCookieFortunes`

A custom hook for handling the business logic associated with fortune phrases.

- **`cookieFortunes`**: Array of fortune phrases.
- **`isLoading`**: Loading state for data requests.
- **`isAddLoading`**: Loading state for adding a new phrase.
- **`isDeleteLoading`**: Loading state for deleting a phrase.
- **`isError`**: Indicates if an error occurred during requests.
- **`getCookieFortunePhrase`**: Function to fetch a fortune phrase.
- **`addCookieFortune`**: Function to add a new fortune phrase.
- **`deleteCookieFortune`**: Function to delete a fortune phrase.

## Styles

Styles are defined in `styles/global.css`. You can customize them according to your needs.



# Cookie Fortune Component

The `CookieFortune` component is a storefront feature that provides users with a fun and interactive experience by displaying a fortune cookie phrase and a lucky number. It allows users to open a fortune cookie and try another one if they wish.

![image](https://github.com/user-attachments/assets/8f1b1c63-acf2-404a-bc12-d85c494d6ea7)
![image](https://github.com/user-attachments/assets/1d0a900b-e3cf-4dab-a9cb-dd444868e87b)


## Features

- **Displays a fortune cookie phrase and a lucky number**
- **Interactive button to open a fortune cookie**
- **Retry button to get a new fortune**
- **Loading spinner and error handling**

## Dependencies

- `vtex.styleguide`
- `react`

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository URL>
   cd <repository name>
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Add the component to your VTEX IO store**:

   Make sure to integrate the `CookieFortune` component into your VTEX IO storefront as per your project requirements.

## Usage

To use the `CookieFortune` component in your VTEX store, import and include it in your page or layout as follows:

```jsx
import CookieFortune from "./components/CookieFortune";

// Within your component or page:
<CookieFortune />;
```

## Component Details

### Props

The `CookieFortune` component does not require any props.

### State Management

- **`isOpen`**: Tracks whether the fortune cookie has been opened.
- **`cookieFortunePhrase`**: Holds the current fortune cookie phrase.
- **`luckyNumber`**: Holds the lucky number associated with the current fortune.
- **`isLoading`**: Indicates whether data is being fetched.
- **`isError`**: Indicates whether an error occurred during data fetch.

### Methods

- **`handleClick`**: Triggers the fetching of a new fortune cookie phrase and sets `isOpen` to true.
- **`handleClickAgain`**: Fetches a new fortune cookie phrase when the user wants to try again.

### Rendering

- **Loading State**: Displays a spinner while data is being fetched.
- **Content**: Displays the fortune cookie phrase and lucky number when available.
- **Error State**: Displays an error message if fetching the fortune fails.
- **Buttons**: Allows users to open a fortune cookie or try another one.

## Styles

Styles are defined in `styles/global.css`. Customize them as needed to fit the visual design of your storefront.

## Contributing

If you would like to contribute to this project, please open a pull request with your changes and ensure you follow the project's guidelines.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or support, contact luisjavier_tovar@outlook.com
