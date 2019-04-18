# Bamazon

<p>An Amazon-esque application that allows a user to view all products available to them, decide whether or not they want to purchase an item, and then decide on the quantity they would like to purchase.
</p>

<p>This application utilizes a MySQL Database in order to store product information. It is a node based application.</p>

## Technologies Used
<ul>
  <li>JavaScript</li>
  <li>MySQL</li>
  <li>Node.js</li>
<ul>
 
## How it Works
<p>When the user prompts the application to run, they are shown the list of items available to purchase. They are then asked to enter the ID of the item they wish to order.
</p>

![Image description](https://github.com/benderb64/Bamazon/blob/master/images/Item_Prompt.PNG)

<p>The application will then ask the user how many items they need. If the amount the user needs is still in stock then the order will be placed.
</p>

![Image description](https://github.com/benderb64/Bamazon/blob/master/images/Order_Acceptance.PNG)

<p>The quantity of each item is tracked in the MySQL Database so if the customer orders more than available, then their request is denied.
</p>

![Image description](https://github.com/benderb64/Bamazon/blob/master/images/Request_Denied.PNG)





