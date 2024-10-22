import pg from 'pg'
const { Pool } = pg
export const pool = new Pool({
    connectionString: "postgresql://mascot_clinical_pp4h_user:x097KU27wDbDdYQB76D8ciTakP0SfGsc@dpg-csbg1123esus73fpa7q0-a.oregon-postgres.render.com/mascot_clinical_pp4h",
    ssl: {
        rejectUnautorized: false
    }
});

