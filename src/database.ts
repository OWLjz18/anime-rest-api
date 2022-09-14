import config from 'config';
import { Pool, PoolConfig } from 'pg';

const poolConfig: PoolConfig = config.get<PoolConfig>('dbConfig');

const pool: Pool = new Pool (poolConfig);

export default pool;
