
# Calculator with Electron.js

This project is a simple calculator built using **Electron.js**. The calculator includes basic operations such as addition, subtraction, multiplication, and division. It is styled using **Tailwind CSS** for a clean and modern user interface.

## Features

- Perform basic mathematical operations (addition, subtraction, multiplication, division)
- Supports keyboard and button input
- Displays an error message if the input is invalid or the calculation fails

## Installation and Setup

To get started with the project, follow these steps:

### 1. Clone the repository

Clone the repository to your local machine:

```bash
git clone https://github.com/Amink11/calculator-electronjs.git
cd calculator-electronjs
```

### 2. Install dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### 3. Build Tailwind CSS

To generate the `output.css` file, run the following command to build Tailwind CSS:

```bash
npx tailwindcss build src/styles.css -o output.css
```

This command will generate the `output.css` file from the `src/styles.css` file. Make sure you have the necessary configuration for Tailwind CSS in your project.

### 4. Run the application

After setting up the project and generating the `output.css` file, you can start the application with:

```bash
npm start
```

This will launch the Electron app with the calculator interface.

## File Structure

- `src/styles.css` - Tailwind CSS file where you define your custom styles.
- `output.css` - The generated CSS file from Tailwind.
- `index.html` - The HTML structure of the calculator.
- `index.js` - The main Electron.js script to initialize and display the app window.
- `calculator.js` - The JavaScript logic for the calculator operations.

## Contributing

Feel free to fork this project and create a pull request if you have suggestions or improvements. 

## License

This project is licensed under the MIT License.
