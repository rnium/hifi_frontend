import React from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'

const ProfileEditDialog = ({ open, handleClose, profile, handleInputChange, handleFileChange, handleSubmit }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2 mt-3">
            <TextField
              id="name"
              name="name"
              label="Name"
              value={profile.name}
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
              value={profile.email}
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
              value={profile.phone}
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
              value={profile.address}
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
            <Button onClick={handleClose} color="primary" variant='outlined'>
              Cancel
            </Button>
            <Button type="submit" color="primary" variant='contained'>
              Save Changes
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ProfileEditDialog
