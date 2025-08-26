# gpt5-mini-enabler

This project is designed to enable the GPT-5 mini feature for clients. It provides a structured approach to manage feature enabling through a set of controllers, services, and configuration settings.

## Project Structure

- **src/index.ts**: Entry point of the application. Initializes the server and sets up middleware and routes.
- **src/controllers/featureController.ts**: Contains the `FeatureController` class which handles the logic for enabling the GPT-5 mini feature.
- **src/services/featureService.ts**: Contains the `FeatureService` class which includes business logic related to enabling features.
- **src/config/default.ts**: Holds configuration settings for the application, including feature flags and environment variables.
- **src/types/index.ts**: Defines interfaces for requests and responses related to feature enabling.

## Installation

To install the project dependencies, run:

```
npm install
```

## Usage

To start the application, use the following command:

```
npm start
```

Ensure that your environment is set up correctly with the necessary configurations in `src/config/default.ts`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.