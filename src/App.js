import {Button, Alert, Breadcrumb, Card, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import {Img1} from "./images/Image"

function App() {
  return (
      <div className={"container mt-3"}>
          <Card className={"mb-3"}>
              <Card.Header>Alert</Card.Header>
              <Card.Body>
                  <Alert variant={"success"}>aaa</Alert>
              </Card.Body>
          </Card>

          <Card className={"mb-3"}>
              <Card.Header>Button</Card.Header>
              <Card.Body>
                  <Button type={"submit"} variant={"danger"}>test</Button>
              </Card.Body>
          </Card>

          <Card className={"mb-3"}>
              <Card.Header>Breadcrumb</Card.Header>
              <Card.Body>
                  <Breadcrumb>
                      <Breadcrumb.Item>test1</Breadcrumb.Item>
                      <Breadcrumb.Item>test2</Breadcrumb.Item>
                      <Breadcrumb.Item active={true}>test3</Breadcrumb.Item>
                  </Breadcrumb>
              </Card.Body>
          </Card>

          <Card className={"w-25 mb-3 text-center"}>
              <Card.Header>啟英發大財</Card.Header>
              <Card.Body>
                  <Card.Img src={Img1} />
                  <Card.Title>title</Card.Title>
                  <Card.Text>hello</Card.Text>
                  <Button variant={"primary"} className={"me-3"}>test</Button>
                  <Button variant={"danger"}>test</Button>
              </Card.Body>
          </Card>

          <Card>
              <Card.Header>Form</Card.Header>
              <Card.Body>
                  <Form>
                      <Form.Group>
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control type={"email"} placeholder={"Example@gmail.com"}></Form.Control>
                          <Form.Text>test</Form.Text>
                      </Form.Group>
                      <Button variant={"primary"} type={"submit"} className={"me-3"}>submit</Button>
                      <Button variant={"danger"} type={"reset"}>reset</Button>
                  </Form>
              </Card.Body>
          </Card>
      </div>
  );
}

export default App;
