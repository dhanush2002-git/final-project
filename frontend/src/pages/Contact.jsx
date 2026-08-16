import React, { useState, useRef, useId, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = { name: '', email: '', message: '' }

function formReducer(state, action) {
  switch (action.type) {
    case 'change':
      return { ...state, [action.field]: action.value }
    case 'reset':
      return initialState
    default:
      return state
  }
}

export default function Contact() {
  const id = useId()
  const nameRef = useRef(null)
  const navigate = useNavigate()
  const [state, dispatch] = useReducer(formReducer, initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  React.useEffect(() => {
    nameRef.current?.focus()
  }, [])

  function validate() {
    const nextErrors = {}

    if (!state.name.trim()) {
      nextErrors.name = 'Name is required.'
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(state.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (state.message.trim().length < 12) {
      nextErrors.message = 'Message should be at least 12 characters long.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (!validate()) {
      return
    }

    setStatus('loading')

    try {
      await new Promise((resolve) => setTimeout(resolve, 800))
      setStatus('success')
      dispatch({ type: 'reset' })
      navigate('/', { state: { successMessage: 'Thanks for reaching out. I will get back to you soon.' } })
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section className="container section">
      <h2 className="section-title">Let’s build something meaningful</h2>
      <p className="section-copy">Share your project goals, timeline, and the kind of experience you want to create.</p>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor={`name-${id}`}>Name</label>
          <input
            id={`name-${id}`}
            ref={nameRef}
            value={state.name}
            onChange={(event) => dispatch({ type: 'change', field: 'name', value: event.target.value })}
          />
          {errors.name && <small className="error">{errors.name}</small>}
        </div>

        <div className="field">
          <label htmlFor={`email-${id}`}>Email</label>
          <input
            id={`email-${id}`}
            type="email"
            value={state.email}
            onChange={(event) => dispatch({ type: 'change', field: 'email', value: event.target.value })}
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </div>

        <div className="field">
          <label htmlFor={`message-${id}`}>Project brief</label>
          <textarea
            id={`message-${id}`}
            rows="6"
            value={state.message}
            onChange={(event) => dispatch({ type: 'change', field: 'message', value: event.target.value })}
          />
          {errors.message && <small className="error">{errors.message}</small>}
        </div>

        <div className="form-actions">
          <button className="btn btn-primary" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : 'Send message'}
          </button>
          <button className="btn btn-secondary" type="button" onClick={() => dispatch({ type: 'reset' })}>
            Reset
          </button>
        </div>

        {status === 'success' && <p className="success">Thanks! Your message was sent successfully.</p>}
        {status === 'error' && <p className="error">Something went wrong. Please try again later.</p>}
      </form>
    </section>
  )
}
