// Your student information
const studentId = "200535888";
const studentName = "Akshit Moudgil";

// Dynamically add student information to the page
const studentInfoElement = document.getElementById("studentInfo");
studentInfoElement.textContent = `Student ID: ${studentId}, Name: ${studentName}`;

function captureOrder(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  // Capture form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const pizzaSize = document.getElementById("pizza-size").value;
  const toppings = Array.from(
    document.querySelectorAll('input[name="toppings[]"]:checked')
  ).map((checkbox) => checkbox.value);
  const instructions = document.getElementById("instructions").value;

  // Create Pizza object
  const pizzaOrder = new Pizza(
    name,
    email,
    phone,
    pizzaSize,
    toppings,
    instructions
  );

  // Display pizza description
  const pizzaDescription = document.getElementById("pizza-description");
  pizzaDescription.innerHTML = `
        <h3>Your Pizza Order:</h3>
        <p>Name: ${pizzaOrder.name}</p>
        <p>Email: ${pizzaOrder.email}</p>
        <p>Phone: ${pizzaOrder.phone}</p>
        <p>Pizza Size: ${pizzaOrder.pizzaSize}</p>
        <p>Toppings: ${pizzaOrder.toppings.join(", ")}</p>
        <p>Special Instructions: ${pizzaOrder.instructions}</p>
    `;
}

class Pizza {
  constructor(name, email, phone, pizzaSize, toppings, instructions) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.pizzaSize = pizzaSize;
    this.toppings = toppings;
    this.instructions = instructions;
  }
}
