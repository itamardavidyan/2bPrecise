import { JsonDB, Config } from 'node-json-db';

export const db = new JsonDB(new Config('db', true, true, '/'));

// db.push('/employees', { a: 'aa' }).then(() => {
// 	db.getData('/employees').then(console.log)
// })
