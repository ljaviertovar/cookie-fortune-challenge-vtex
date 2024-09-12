# AdminCookieFortune

`AdminCookieFortune` is an admin component for managing fortune phrases in an e-commerce application using the VTEX IO platform. It allows administrators to add, delete, and view fortune phrases, with support for pagination and state control.

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

## Contributing

If you would like to contribute to this project, please open a pull request with your changes and ensure you follow the project's guidelines.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or support, contact luisjavier_tovar@outlook.com
