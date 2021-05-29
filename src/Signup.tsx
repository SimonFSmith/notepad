import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from "./contexts/AuthContext";
import { Link,  } from 'react-router-dom'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)


  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Le mot de passe est inccorecte")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)

    } catch {
      setError("Le mot de passe doit contenir au moins 6 caractères (lettres et chiffres)")
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Inscription à Notepad</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Courriel</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Confirmer mot de passe</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 btn btn-dark " type="submit">
              Inscription
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 ">
       Déjà un compte? <Link to="/login" >Connexion</Link>
      </div>
    </>
  )
}
