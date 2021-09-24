import { Pool } from 'pg';

const connectionString = 'postgres://oeizriva:bhewSfIEBkLC8Fx507QH_93BUoPkhIby@batyr.db.elephantsql.com/oeizriva';

const db = new Pool({ connectionString });

export default db;
