import React from 'react'
import { Form, Button } from 'react-bootstrap'

export const FormUser = () => {
    return (
        <>
            <h1 className="text-center">
                Contáctanos
            </h1>
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa nombre y apellido" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="ejemplo@mail.com" />
                </Form.Group>

                <Form.Group controlId="formTelephone">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="text" placeholder="+569 9999 9999" />
                </Form.Group>

                <Form.Group controlId="formInterest">
                    <Form.Label>Área de interés</Form.Label>
                    <Form.Control as="select">
                        <option>Product owner</option>
                        <option>Scrum master</option>
                        <option>UX</option>
                        <option>UI</option>
                        <option>Desarrollador</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formTextArea">
                    <Form.Label>Cuéntanos de ti</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                    <Form.Text className="text-muted">
                        (Ingresar texto)
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.File 
                        id="custom-file"
                        label="Sube tu CV"
                        custom
                    />
                </Form.Group>

                <Button className="mb-3" variant="primary" type="button">
                    Enviar
                </Button>
            </Form>
        </>
    )
}
