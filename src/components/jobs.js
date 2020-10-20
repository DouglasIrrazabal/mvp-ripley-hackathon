import React from 'react'
import { Card } from 'react-bootstrap'

export const Jobs = () => {
    return (
        <>
            <h1 className="text-center">
                Puestos disponibles
            </h1>
            <Card>
                <Card.Body>
                    <Card.Title>Product owner</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Región Metropolitana de Santiago</Card.Subtitle>
                    <Card.Text>
                        En Ripley, importante empresa de Retail nos encontramos en búsqueda de un Product owner.
                        Su misión es ser responsable de la visión, estrategia y gestión de proyectos asociados a los...
                    </Card.Text>
                    <Card.Link href="#">Ir a trabajando.com</Card.Link>
              </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Práctica de diseño gráfico</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Región Metropolitana de Santiago</Card.Subtitle>
                    <Card.Text>
                        En Ripley, importante empresa de Retail nos encontramos en búsqueda de un Diseñador gráfico.
                        Sus principales funciones serán apoyar a la subgerencia de TI en desarrollar piezas gráficas de acuerdo a la línea...
                    </Card.Text>
                    <Card.Link href="#">Ir a trabajando.com</Card.Link>
                </Card.Body>
            </Card>
        </>
    )
}
