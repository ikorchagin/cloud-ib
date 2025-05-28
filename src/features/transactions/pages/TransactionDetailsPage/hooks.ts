import React from 'react'

export function useEditState(onToggle?: () => void) {
  const [isEditing, setIsEditing] = React.useState(false)

  const toggleEdit = () => {
    onToggle?.()
    setIsEditing(prev => !prev)
  }

  return {
    isEditing,
    toggleEdit,
  }
}
