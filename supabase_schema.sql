CREATE TABLE IF NOT EXISTS products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sku TEXT UNIQUE,
    name TEXT,
    price DECIMAL,
    image_urls TEXT[],
    created_at TIMESTAMP DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS marketplace_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    marketplace TEXT,
    payload JSONB,
    status TEXT DEFAULT 'pending'
);
