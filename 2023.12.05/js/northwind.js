window.onload = function () {
  const productList = [
    {
      ID: 1,
      Name: "Chai",
      UnitPrice: 18,
      UnitsInStock: 39,
      Category: "Beverages",
    },
    {
      ID: 2,
      Name: "Chang",
      UnitPrice: 19,
      UnitsInStock: 17,
      Category: "Beverages",
    },
    {
      ID: 3,
      Name: "Aniseed Syrup",
      UnitPrice: 10,
      UnitsInStock: 13,
      Category: "Condiments",
    },
    {
      ID: 4,
      Name: "Chef Anton's Cajun Seasoning",
      UnitPrice: 2,
      UnitsInStock: 53,
      Category: "Condiments",
    },
    {
        ID: 5,
        Name: "Chef Anton's Gumbo Mix",
        UnitPrice: 21.35,
        UnitsInStock: 5,
        Category: "Condiments",
      },
      {
        ID: 6,
        Name: "Grandma's Boysenberry Spread",
        UnitPrice: 25,
        UnitsInStock: 120,
        Category: "Condiments",
      },
      {
        ID: 7,
        Name: "Uncle Bob's Organic Dried Pears",
        UnitPrice: 30,
        UnitsInStock: 15,
        Category: "Produce",
      },
      {
        ID: 8,
        Name: "Northwoods Cranberry Sauce",
        UnitPrice: 40,
        UnitsInStock: 6,
        Category: "Condiments",
      },
      {
        ID: 9,
        Name: "Mishi Kobe Niku",
        UnitPrice: 97,
        UnitsInStock: 29,
        Category: "Meat/Poultry",
      },
      {
        ID: 10,
        Name: "Ikura",
        UnitPrice: 21,
        UnitsInStock: 22,
        Category: "Seafood",
      },
  ];

  addProduct();

  function addProduct(product) {
    for (let i = 0; i < productList.length; i++) {
      const element = productList[i];
      console.log(element);
      document.getElementById(
        "ProductTable"
      ).innerHTML += `<td>${element.ID}</td>
        <td>${element.Name}</td>
        <td>${element.UnitPrice}</td>
        <td>${element.UnitsInStock}</td>
        <td>${element.Category}</td>
        <td>
          <button class="btn btn-danger btn-sm">Delete</button>
          <button class="btn btn-warning btn-sm">Update</button>
        </td>`;
    }
  }
};
