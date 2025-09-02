import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',     // ton utilisateur PostgreSQL
  host: 'localhost',    // ou l’URL de Supabase/Railway
  database: 'taskmanager',
  password: 'motdepasse', // change selon ta config
  port: 5432,           // port par défaut PostgreSQL
});

export default pool;
