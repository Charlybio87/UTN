import Workspace from '../models/Workspace.model.js'

export const createWorkspaceController = async (req, res) => {
  try {
    const {name} = req.body
    const {id} = req.user
    const new_workspace = new Workspace({
      name,
      owner: id,
      members: [id] // Determino que ele creador del workspace sea miembro de el workspace
    })
    res.json ({
      ok: true,
      status: 201,
      data:{
        new_workspace
      }
    })
  } catch (error) {
    console.error(error)
    return res.json({
      ok: false,
      status: 500,
      message: 'Internal Server Error'
    })
  }
}

const inviteUserToWorkspace = async (req, res) => {
  try {
    const {id} = req.user
    const {workspace_id} = req.params
    const {email} = req.body

    const workspace_selected = await Workspace.findById(workspace_id)

    if (!workspace_selected) {
      return res.json({
        ok: false,
        status: 404,
        message: 'Workspace not found'
      })
    }
    if(!workspace_selected.owner.equals(id)){
      return res.json({
        ok: false,
        status: 403,
        message: 'Forbidden'
      })
    }

    const user_invited = await User.findOne({email})
    if (!user_invited) {
      return res.json({
        ok: false,
        status: 404,
        message: 'User not found'
      })
    }

    if(!workspace_selected.members.includes(user_invited._id)){
      return res.json({
        ok: false,
        status: 200,
        message: 'User already is a member of the workspace'
      })
    }

    workspace_selected.members.push(user_invited._id)
    await workspace_selected.save()
    return res.json({
      ok: true,
      status: 200,
      message: 'User invited to workspace'
    })

  } catch (error) {
    console.error(error)
    return res.json({
      ok: false,
      status: 500,
      message: 'Internal Server Error'
    })
  }
}