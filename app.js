// Import Supabase ESM langsung dari CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Konfigurasi Supabase
const SUPABASE_URL = 'https://jpxtbdawajjyrvqrgijd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpweHRiZGF3YWpqeXJ2cXJnaWpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzMTI4OTgsImV4cCI6MjA3MTg4ODg5OH0.vEqCzHYBByFZEXeLIBqx6b40x6-tjSYa3Il_b2mI9NE';

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
