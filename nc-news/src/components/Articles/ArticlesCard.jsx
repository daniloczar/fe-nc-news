import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";

function ArticlesCard({ article }) {
console.log(article)
  return (
    <section className="cardMain">
      <div className="card-holder">
        <Card>
          <Card.Img
            variant="top"
            src={article.article_img_url}
            style={{ maxHeight: "200px" }}
          />
          <Card.Body style={{ minHeight: "230px", paddingBottom: "0px" }}>
            <time>{moment(article.created_at).format("D MMMM YYYY")}</time>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Body
              style={{
                padding: "0px",
                display: "flex",
                justifyContent: "end",
                marginTop: "10%",
              }}
            >
              <Button variant="danger">Read More</Button>
            </Card.Body>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

export default ArticlesCard