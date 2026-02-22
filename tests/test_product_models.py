from app.models.product import Product, ProductCategory

def test_product_model():
    product = Product(
        id="prod_123",
        name="Wireless Headphones",
        description="High-quality wireless headphones",
        price=99.99,
        category=ProductCategory.ELECTRONICS,
        in_stock=True
    )
    assert product.id == "prod_123"
    assert product.price == 99.99

def test_product_category():
    assert ProductCategory.ELECTRONICS.value == "electronics"
    assert ProductCategory.CLOTHING.value == "clothing"
