'use client'

import { useContext } from 'react'
import { types } from 'react-bricks/rsc'

import Container from '../../shared/components/Container'
import { FormBuilderContext } from './FormBuilderProvider'

export interface FormBuilderClientProps {
  buttonPosition: string
  formElements: types.RepeaterItems
  formButtons: types.RepeaterItems
  children: any
}

const FormBuilderClient: React.FC<FormBuilderClientProps> = ({ children }) => {
  const { register, handleSubmit } = useContext(FormBuilderContext)

  if (!register || !handleSubmit) {
    return null
  }

  const onSubmit = () => {
    console.log('submit')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-2 gap-4 p-6"
    >
      {children}
    </form>
  )
}

export default FormBuilderClient
