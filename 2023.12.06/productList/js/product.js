window.onload = function () {
  const productList = [];

  //Inputlardaki değerleri yakala
  function GetProductItems() {
    const productName = document.getElementById("ProductName").value;
    const unitPrice = document.getElementById("UnitPrice").value;
    const unitsInStock = document.getElementById("UnitsInStock").value;
    const category = document.getElementById("Category").value;

    const productProps = { productName, unitPrice, unitsInStock, category };
    productList.push(productProps);
  }

  //Inputlardaki değerleri listeye yazdır.
  document.getElementById("CreateButton").onclick = function ListProducts() {
    GetProductItems();
    for (let i = 0; i < productList.length; i++) {
      const product = productList[i];
      document.getElementById(
        "ProductUl"
      ).innerHTML += `<li class='list-group-item mt-2'>${product.productName} ${product.unitPrice}$ ${product.unitsInStock} ${product.category}</li>`;
    }
    productList.pop();
  };
};