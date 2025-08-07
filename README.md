# 🧾 Form Validation (Sign-Up Page)

A simple and responsive **Sign-Up Form** built using **HTML5**, **CSS3**, and **JavaScript (ES6+)**. This project demonstrates real-time **client-side form validation** to ensure that users submit correct and complete data before the form is processed.

---

## 🚀 Features

- ✅ **Field Validation** – Checks if all fields are filled out correctly
- 📧 **Email Format Check** – Ensures email follows valid format using regex
- 🔐 **Password Strength Check** – Requires a minimum password length
- ⚠️ **Inline Error Display** – Shows user-friendly error messages below each field
- 🔄 **Form Reset** – Clears the form after successful submission
- 📱 **Responsive Layout** – Optimized for different screen sizes

---

## 🛠 Technologies Used

- **HTML5** – For form structure and labels
- **CSS3** – For styling and layout (in `style.css`)
- **JavaScript (ES6+)** – For real-time validation and dynamic error handling
- **DOM Manipulation** – To interact with and validate input fields

---

## 📂 Project Structure

```

form-validation-page/
│
├── index.html         # Sign-Up form layout
├── style.css          # Styling for form and error messages
├── script.js          # JavaScript logic for validation
└── README.md          # Project documentation

```

---

## 🔍 How It Works

1. User fills in **Full Name**, **Email Address**, and **Password**.
2. On clicking **Register**:
   - JavaScript validates:
     - Name is not empty
     - Email is not empty and has a valid format
     - Password is at least 6 characters
3. If any validation fails, an error message is shown below the corresponding input.
4. If all fields are valid, a success alert is shown and the form is reset.

---

## 📄 License

This project is open-source and free for educational and personal use.

---

## 🙌 Acknowledgments

Created to practice and demonstrate client-side form validation using vanilla JavaScript.
