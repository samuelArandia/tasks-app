import { connect } from '../database'

export const getTasks = async (req, res) => {
  const connection = await connect()
  const [rows] = await connection.execute('SELECT * FROM tareas')
  res.json(rows)
}
export const getTask = async (req, res) => {
  const connection = await connect()
  const [rows] = await connection.execute('SELECT * FROM tareas WHERE id = ?', [req.params.id])
  res.json(rows[0])
}
export const getCount = async (req, res) => {
  const connection = await connect()
  const [rows] = await connection.execute('SELECT COUNT(*) FROM tareas')
  res.json(rows[0]['COUNT(*)'])
}
export const deleteTasks = async (req, res) => {  
  const connection = await connect()
  await connection.query('DELETE FROM tareas WHERE id = ?', [req.params.id])
  res.sendStatus(204)
}
export const updateTask = async (req, res) => {
  const connection = await connect();
  const results = await connection.query("UPDATE tareas SET ? WHERE id = ?", [req.body, req.params.id]);
  res.json({
    message: 'Task updated',
  })

}
export const saveTask = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query("INSERT INTO tareas(title, description) VALUES (?, ?)", [req.body.title, req.body.description])
  res.json({
    id: results.insertId,
    ...req.body
  })
}