import React from "react";
import "./blog.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Blog = () => {
  return (
    <>
      <div className="b-cont mb-5">
        <div className="b-text-cont">
          <hr className="s-firsthr" />
          <h4>Latest Posts from our Blog</h4>
          <hr className="s-secondhr" />
        </div>
        <div className="b-blogs-cont">
          <div className="b-img-cont">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="img1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className=" b-img-cont">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="img1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className=" b-img-cont">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="img1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog;
