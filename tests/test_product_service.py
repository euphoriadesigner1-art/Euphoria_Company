from app.services.product_service import ProductService
from app.models.product import ProductCategory

def test_search_products():
    service = ProductService()
    products = service.search("headphones")
    assert len(products) > 0
    assert "headphone" in products[0].name.lower()

def test_get_product():
    service = ProductService()
    product = service.get_product("prod_1")
    assert product is not None
    assert product.id == "prod_1"

def test_get_by_category():
    service = ProductService()
    products = service.get_by_category(ProductCategory.ELECTRONICS)
    assert len(products) > 0
