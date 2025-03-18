import { useState, useEffect } from 'react'
import { message } from 'antd';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { usePost } from '@/hooks/useApi';


const ProfileEditDialog = ({ open, handleClose, profile, setUserData }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    email: '',
    phone: '',
    address: '',
    avatar_b64: null
  })

  const { data, loading, success, error, perform_post, reset } = usePost(process.env.NEXT_PUBLIC_API_HOST + 'account/profile/update/', true);

  useEffect(() => {
    if (profile) {
      setFormData({
        first_name: profile.first_name,
        email: profile.email,
        phone: profile.phone,
        address: profile.address,
      })
    }
  }, [profile])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      // check if file is an image
      if (!file.type.startsWith('image')) {
        message.error('Only image files are allowed')
        return
      }
      // check if file size is less than 1MB
      if (file.size > 1024 * 1024) {
        message.error('File size should be less than 1MB')
        return
      }
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          avatar_b64: reader.result
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    perform_post(formData)
  }

  useEffect(() => {
    if (success) {
      message.success('Profile updated successfully')
      const newData = {...formData}
      delete newData.avatar_b64
      newData.avatar = formData.avatar_b64 ? formData.avatar_b64 : profile.avatar
      setUserData(newData)
      reset()
      handleClose()
    }
    if (error) {
      message.error('Failed to update profile')
      reset()
    }
  }, [success, formData, reset, setUserData, handleClose, error])

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2 mt-3">
            <TextField
              id="name"
              name="first_name"
              label="Name"
              value={formData.first_name}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </div>
          <div className="space-y-2">
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </div>
          <div className="space-y-2">
            <TextField
              id="phone"
              name="phone"
              label="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </div>
          <div className="space-y-2">
            <TextField
              id="address"
              name="address"
              label="Address"
              value={formData.address}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </div>
          <div className="space-y-2">
            <TextField
              id="profilePicture"
              name="profilePicture"
              label="Profile Picture"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </div>
          <DialogActions>
            <Button onClick={handleClose} color="primary" variant='outlined' disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" color="primary" variant='contained' disabled={loading}>
              Save Changes
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ProfileEditDialog
