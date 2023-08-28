import Tasks from '../models/Tasks'

export const renderTasks = async (req, res) => {
  const tasksList = await Tasks.find().lean()
  res.render('index', { tasksList })
}

export const renderAbout = (req, res) => {
  res.render('about')
}

export const renderNewPost = async (req, res) => {
  try {
    const task = Tasks(req.body)
    await task.save()
  } catch (e) {
    console.log(e)
  }
  res.redirect('/')
}

export const renderEditPost = async (req, res) => {
  try {
    const taskSelected = await Tasks.findById(req.params.id).lean()
    res.render('edit', { taskSelected })
  } catch (e) {
    console.error(e.messagge)
  }
}

export const editPost = async (req, res) => {
  const { id } = req.params
  await Tasks.findByIdAndUpdate(id, req.body)
  res.redirect('/')
}

export const deletePost = async (req, res) => {
  const { id } = req.params
  await Tasks.findByIdAndDelete(id)
  res.redirect('/')
}

export const changeState = async (req, res) => {
  const { id } = req.params
  const taskDone = await Tasks.findById(id)
  taskDone.done = !taskDone.done
  await taskDone.save()
  res.redirect('/')
}
