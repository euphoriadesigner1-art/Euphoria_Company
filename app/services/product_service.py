from app.models.product import Product, ProductCategory

class ProductService:
    def __init__(self):
        self.products = [
            Product(id="prod_1", name="Wireless Headphones", description="High-quality wireless headphones with noise cancellation", price=99.99, category=ProductCategory.ELECTRONICS, in_stock=True),
            Product(id="prod_2", name="Running Shoes", description="Comfortable running shoes for daily jog", price=79.99, category=ProductCategory.SPORTS, in_stock=True),
            Product(id="prod_3", name="Cotton T-Shirt", description="Soft cotton t-shirt in multiple colors", price=24.99, category=ProductCategory.CLOTHING, in_stock=True),
            Product(id="prod_4", name="Coffee Maker", description="Automatic coffee maker with timer", price=49.99, category=ProductCategory.HOME, in_stock=True),
            Product(id="prod_5", name="Bluetooth Speaker", description="Portable bluetooth speaker with bass", price=59.99, category=ProductCategory.ELECTRONICS, in_stock=True),
        ]

    def search(self, query: str) -> list[Product]:
        query_lower = query.lower()
        return [p for p in self.products if query_lower in p.name.lower() or query_lower in p.description.lower()]

    def get_product(self, product_id: str) -> Product | None:
        for p in self.products:
            if p.id == product_id:
                return p
        return None

    def get_by_category(self, category: ProductCategory) -> list[Product]:
        return [p for p in self.products if p.category == category]
