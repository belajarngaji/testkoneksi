// Import Supabase ESM langsung dari CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Konfigurasi Supabase
const SUPABASE_URL = 'https://gmmhsbmlqbomtrhdoxxo.supabase.co';
const SUPABASE_KEY = 'sb_publishable_r0gMojctdN1aftj_PVuhAQ_R0s__keH';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Coba fetch dari tabel `materials`
async function testConnection() {
  const output = document.getElementById('output');

  const { data, error } = await supabase
    .from('materials')
    .select('*')
    .limit(1);

  if (error) {
    console.error('❌ Supabase error:', error);
    output.textContent = '❌ Gagal konek ke Supabase: ' + error.message;
  } else {
    console.log('✅ Supabase data:', data);
    output.textContent = '✅ Berhasil konek ke Supabase. Data: ' + JSON.stringify(data);
  }
}

testConnection();
