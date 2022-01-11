const connection = require('./connectionSql');

const states = async () => {
  const query = 'select * from estados';

  const [rows] = await connection.execute(query);
  return rows;
};

const create = async (name) => {
  const query = 'insert into estados (nome) values (?)';

  const [rows] = await connection.execute(query, [name]);
  // console.log(rows);
  return rows.insertId;
};

const del = async (id) => {
  const query = 'delete from estados where id = ?';

  await connection.execute(query, [id]);
};

const verifyName = async (name) => {
  const query = 'select * from estados where nome = ?';
  const [rows] = await connection.execute(query, [name]);
  return rows.length !== 0;
};

module.exports = {states, create, del, verifyName};

