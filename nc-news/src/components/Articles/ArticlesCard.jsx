import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function ArticlesCard({ article }) {
  return (
    <section className="cardTest">
      <Container fluid className="gridContainer">
        <Row className="gridRow" xs={1} md={2}>
          <Col sm={7}>
            <div className="card-holder">
              <Card>
                <Card.Img variant="top" src={article.article_img_url} />
                <Card.Body>
                  <time>{article.created_at.substring(0, 10)}</time>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ArticlesCard