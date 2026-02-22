from enum import Enum
from pydantic import BaseModel

class ProductCategory(str, Enum):
    ELECTRONICS = "electronics"
    CLOTHING = "clothing"
    HOME = "home"
    SPORTS = "sports"
    BOOKS = "books"
    OTHER = "other"

class Product(BaseModel):
    id: str
    name: str
    description: str
    price: float
    category: ProductCategory
    in_stock: bool
    image_url: str | None = None
