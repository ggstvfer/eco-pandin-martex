import os, json
from supabase import create_client
url = "https://ulebkbupsuzqzghibuva.supabase.co"
key = os.environ.get("SUPABASE_KEY")
supabase = create_client(url, key)

def import_products(json_file):
    with open(json_file, 'r') as f:
        products = json.load(f)
        for p in products:
            supabase.table("products").upsert({
                "sku": p.get('sku', 'NS'),
                "name": p.get('name', 'P'),
                "price": float(p.get('price', 0)),
                "image_urls": p.get('images', [])
            }).execute()
if __name__ == "__main__":
    import_products('/home/hermes/pandin_scraping/pandin_catalogue.json')
