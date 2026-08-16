from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="React + FastAPI Fullstack Demo")

origins = [
    "http://localhost:5173",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Product(BaseModel):
    id: int
    name: str
    category: str
    price: float
    description: Optional[str] = None

class Service(BaseModel):
    id: int
    title: str
    summary: str
    details: Optional[str] = None

class ContactPayload(BaseModel):
    name: str
    email: str
    message: str

# Sample data
PRODUCTS = [
    {"id": 1, "name": "Aurora Phone", "category": "Mobiles", "price": 699.0, "description": "Sleek phone with long battery life."},
    {"id": 2, "name": "Orion Laptop", "category": "Laptops", "price": 1199.0, "description": "Powerful laptop for professionals."},
    {"id": 3, "name": "Nebula Headphones", "category": "Accessories", "price": 199.0, "description": "Noise-cancelling over-ear headphones."},
    {"id": 4, "name": "Lumen Tablet", "category": "Tablets", "price": 499.0, "description": "Portable tablet for work and play."},
]

SERVICES = [
    {"id": 1, "title": "Consulting", "summary": "Expert product consulting services.", "details": "We help businesses choose the right devices and setup."},
    {"id": 2, "title": "Repair", "summary": "Fast repair service for devices.", "details": "Certified technicians handle hardware and software repairs."},
    {"id": 3, "title": "Customization", "summary": "Tailored setups for companies.", "details": "Custom firmware, provisioning and bulk setup available."},
]

@app.get("/api/products", response_model=List[Product])
async def list_products(search: Optional[str] = None, category: Optional[str] = None):
    results = PRODUCTS
    if search:
        q = search.lower()
        results = [p for p in results if q in p["name"].lower() or (p.get("description") and q in p["description"].lower())]
    if category:
        results = [p for p in results if p["category"].lower() == category.lower()]
    return results

@app.get("/api/products/{product_id}", response_model=Product)
async def get_product(product_id: int):
    for p in PRODUCTS:
        if p["id"] == product_id:
            return p
    raise HTTPException(status_code=404, detail="Product not found")

@app.get("/api/services", response_model=List[Service])
async def list_services():
    return SERVICES

@app.get("/api/services/{service_id}", response_model=Service)
async def get_service(service_id: int):
    for s in SERVICES:
        if s["id"] == service_id:
            return s
    raise HTTPException(status_code=404, detail="Service not found")

@app.post("/api/contact")
async def contact(payload: ContactPayload):
    # In a real app you'd save or email this. Here we just echo back.
    return {"status": "ok", "message": "Thank you for contacting us, we'll be in touch.", "data": payload}
