import { connect } from 'mongoose'
import { MDB } from './config'
;(async () => {
  try {
    const db = await connect(MDB)
    console.log('DB conected to', db.connection.name)
  } catch (e) {
    console.log(e)
  }
})()
