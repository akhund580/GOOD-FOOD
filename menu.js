const menuItems = [{
    imageSrc: "https://th.bing.com/th/id/R.0455d35f0d089df98e9899339525ba16?rik=RMUk6UI0hgWcmA&pid=ImgRaw&r=0",
    name: "Burger",
    description: "Juicy beef patty, lettuce, tomato, and mayo served on a sesame seed bun.",
    price: 5.99
  },
  {
    imageSrc: "https://th.bing.com/th/id/OIP.F_mv7Lb7QGLidPoS7jro4gHaE8?pid=ImgDet&rs=1",
    name: "Pizza",
    description: "Classic pizza with tomato sauce, cheese, and your choice of toppings.",
    price: 7.99
  },
  {
    imageSrc: "https://i.pinimg.com/originals/9d/38/a5/9d38a585f91bcd90df54a426ad4d9c86.jpg",
    name: "Pasta",
    description: "Spaghetti with homemade tomato sauce and meatballs.",
    price: 6.99
  },
  {
    imageSrc: "https://th.bing.com/th/id/OIP.O9_wBXv9aMPs-Vge7tSuJQHaEK?pid=ImgDet&rs=1",
    name: "Cold Drinks",
    description: "Choose from a variety of cold drinks.",
    price: 2.99
  },
  {
    imageSrc: "https://i0.wp.com/mytastycurry.com/wp-content/uploads/2020/04/Cafe-style-cold-coffee-with-icecream.jpg?resize=680%2C1020&ssl=1",
    name: "Cold Coffee",
    description: "A cold coffee that will give you a cool and refreshing feeling.",
    price: 3.99
  },
  {
    imageSrc: "https://th.bing.com/th/id/OIP.TODSnt3J9qXuLqQ7JIqJywHaEu?pid=ImgDet&rs=1",
    name: "Hot Coffee",
    description: "A rich, hot coffee to warm up your day.",
    price: 3.99
  },
  {
    imageSrc: "https://th.bing.com/th/id/OIP.uq2FJMjWR9qoa-8f7r9Y8gHaEd?pid=ImgDet&rs=1",
    name: "Ice Cream",
    description: "A scoop of creamy, delicious ice cream.",
    price: 4.99
  },
  {
    imageSrc: "https://th.bing.com/th/id/OIP.jTzMWBc1IipT52zLxPP5DQHaLG?pid=ImgDet&rs=1",
    name: "Cheesecake",
    description: "A blend of fresh seasonal fruit.",
    price: 3.99
  },
  {
    imageSrc: "https://i.pinimg.com/originals/d4/a1/cc/d4a1cce01f7a43df1b9aa31c381b6e21.jpg",
    name: "Fruit Salad",
    description: "A rich, hot coffee to warm up your day.",
    price: 2.99
  }

];

const menuList = document.querySelector(".menu-list");
const menuItemImage = document.querySelector(".menu-item-img");
const menuItemName = document.querySelector(".menu-item-name");
const menuItemDesc = document.querySelector(".menu-item-desc");
const menuItemPrice = document.querySelector(".menu-item-price");

let activeMenuItem = 0;

function updateMenuItem() {
  menuItemImage.src = menuItems[activeMenuItem].imageSrc;
  menuItemName.textContent = menuItems[activeMenuItem].name;
  menuItemPrice.textContent = menuItems[activeMenuItem].price;
  menuItemDesc.textContent = menuItems[activeMenuItem].description;

}
updateMenuItem();

document.querySelector(".arrow-left").addEventListener("click", () => {
  activeMenuItem = (activeMenuItem - 1 + menuItems.length) % menuItems.length;
  updateMenuItem();
});

document.querySelector(".arrow-right").addEventListener("click", () => {
  activeMenuItem =
    (activeMenuItem + 1) % menuItems.length;
  updateMenuItem();
});

// Add event listeners to menu items
const menuItemsList = document.querySelectorAll(".menu-item");

menuItemsList.forEach((menuItem, index) => {
  menuItem.addEventListener("click", () => {
    activeMenuItem = index;
    updateMenuItem();
  });
});

// Add initial active class to first menu item
menuItemsList[0].classList.add("active");

//cart display
const cartImg = document.createElement("img");
cartImg.src = "https://th.bing.com/th/id/R.ac930a04489930b7cf8c892d0df2a687?rik=7LTZ1ovGAYrdQQ&pid=ImgRaw&r=0 ";

cartImg.width = 50;
const cartSpan = document.createElement("span");
cartSpan.textContent = "0 items in cart ($0.00)";
const cartDiv = document.createElement("div");
cartDiv.classList.add("cart");
cartDiv.appendChild(cartImg);
cartDiv.appendChild(cartSpan);
document.querySelector("#cartList").appendChild(cartDiv);

//for cart code to work


// Add click event listeners to tab links
const tabLinks = document.querySelectorAll('.menu-tabs li a');
for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener('click', function(event) {
    event.preventDefault();
    // Remove active class from all tabs
    for (let j = 0; j < tabLinks.length; j++) {
      tabLinks[j].parentElement.classList.remove('active');
    }
    // Add active class to clicked tab
    this.parentElement.classList.add('active');
    // Hide all sections
    const sections = document.querySelectorAll('.menu-section');
    for (let k = 0; k < sections.length; k++) {
      sections[k].classList.remove('active');
    }
    // Show selected section
    const sectionId = this.getAttribute('href');
    const section = document.querySelector(sectionId);
    section.classList.add('active');
  });
}

//freaky code 




//showbill calculation
function calculateBill() {
  const billWindow = window.open("", "Bill", "width=600, height=400");
  billWindow.document.write("<html><head><title>Bill</title></head><body>");
  billWindow.document.write("<style>table {border-collapse: collapse; width: 100%;} th, td {padding: 8px; text-align: left; border-bottom: 1px solid #ddd;} th {background-color: #4CAF50; color: white;} td {background-color: #C8FAC8; color: black;}</style>");
  billWindow.document.write("<h2>Bill</h2>")
  billWindow.document.write("<p>Company Name: Spoon or Fork</p>")
  billWindow.document.write("<p>Address:Uttara, Dhaka</p>")
  billWindow.document.write("<p>Phone Number: +8801916119008</p>")
  billWindow.document.write("<p>Order Number: #001</p>")
  billWindow.document.write("<hr>")
  billWindow.document.write("<table>")
  billWindow.document.write("<tr><th>Item Name</th><th>Item Price</th><th>Total Price</th></tr>")
  let total = 0;
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].classList.contains("selected")) {
      billWindow.document.write("<tr><td>" + menuItems[i].innerHTML + "</td><td>$" + menuItems[i].dataset.price + "</td><td>$" + (parseFloat(menuItems[i].dataset.price) * 1) + "</td></tr>")
      total += parseFloat(menuItems[i].dataset.price);
    }
  }
  billWindow.document.write("<tr><td></td><td>Subtotal:</td><td>$" + total + "</td></tr>")
  billWindow.document.write("<tr><td></td><td>Service Charge (10%):</td><td>$" + (total * 0.1).toFixed(2) + "</td></tr>")
  billWindow.document.write("<tr><td></td><td>Total:</td><td>$" + (total * 1.1).toFixed(2) + "</td></tr>")
  billWindow.document.write("</table>")

  // Generate QR code image
  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=www.example.com/paybill";
  billWindow.document.write("<img src='" + qrCodeUrl + "' style='display: block; margin-top: 20px;'>");

  billWindow.document.write("</body></html>");
  billWindow.document.close();
}

document.querySelector("#showBill").addEventListener("click", calculateBill);
