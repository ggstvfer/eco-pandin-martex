import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://ulebkbupsuzqzghibuva.supabase.co', 'sb_publishable_goEML_p298IblTmR8X1LsA_DU4I05h1');

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    supabase.from('products').select('*').then(({data}) => setProducts(data || []));
  }, []);
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Loja Oficial Pandin-Martex</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map(p => (
          <div key={p.id} className="border p-4 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="font-bold text-lg">{p.name}</h2>
            <p className="text-green-700 font-bold mt-2">R$ {p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
