import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "./contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)



  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError("Échec de la connexion ")
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Connexion à Notepad</h2>
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
            <Link to="notepad">
              <Button disabled={loading}  className="w-100 btn btn-dark" type="submit">
              Connexion
            </Button>
            </Link>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 ">
        Besoin d'un compte? <Link to="/signup">Inscription</Link>
      </div>
    </>
  )
}
