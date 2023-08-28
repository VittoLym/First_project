import { Router } from 'express'
import {
  renderTasks,
  renderAbout,
  renderNewPost,
  renderEditPost,
  editPost,
  deletePost,
  changeState
} from '../controllers/tasks.controllers'

const router = Router()

router.get('/', renderTasks)
router.get('/about', renderAbout)

router.post('/tasks/add', renderNewPost)

router.get('/tasks/:id/edit', renderEditPost)

router.post('/tasks/:id/edit', editPost)

router.get('/tasks/:id/delete', deletePost)

router.get('/tasks/:id/toggleDone', changeState)
export default router
