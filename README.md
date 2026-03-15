# React Dynamic Form

A dynamic form generator built with Next.js, React, Material UI, and React Hook Form. This project demonstrates how to render forms dynamically from a JSON schema, making it easy to build flexible and reusable forms for any use case.

## Features

- **Dynamic Field Rendering**: Fields are generated based on a JSON configuration.
- **Validation**: Required fields and validation handled via React Hook Form.
- **Material UI Components**: Modern, accessible UI with MUI.
- **Easy Customization**: Add new field types or validation rules easily.
- **Persistence**: Submitted form data is saved to local storage (for demo purposes).

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Material UI](https://mui.com/)
- [React Hook Form](https://react-hook-form.com/)
- TypeScript

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:
	 ```bash
	 git clone https://github.com/your-username/react-dynamic-form.git
	 cd react-dynamic-form
	 ```
2. Install dependencies:
	 ```bash
	 npm install
	 # or
	 yarn install
	 ```
3. Run the development server:
	 ```bash
	 npm run dev
	 # or
	 yarn dev
	 ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

The main dynamic form is available at `/singup` route. Fields are defined in `app/data/formFields.json`. To add or modify fields, simply edit this JSON file.

### Example JSON Schema

```
[
	{
		"name": "fullName",
		"label": "Full Name",
		"type": "TEXT",
		"defaultValue": "",
		"required": true
	},
	{
		"name": "email",
		"label": "Email",
		"type": "TEXT",
		"defaultValue": "",
		"required": true
	},
	{
		"name": "gender",
		"label": "Gender",
		"type": "LIST",
		"options": ["Male", "Female", "Other"],
		"defaultValue": "Male",
		"required": true
	}
]
```

## Project Structure

- `app/components/DynamicField.tsx` – Renders individual form fields based on type
- `app/components/FormRenderer.tsx` – (Reserved for future: orchestrates form rendering)
- `app/data/formFields.json` – JSON schema for form fields
- `app/singup/page.tsx` – Signup form page using dynamic fields
- `app/page.tsx` – Home page (placeholder)

## Customization

To add new field types, extend the `DynamicField.tsx` component with new cases in the switch statement.

## License

MIT
