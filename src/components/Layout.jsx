import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Layout() {
  /*
  It probably is the case that using redux for our API calls is the best option, but here was the idea that I saw some other people using (in pseudocode):

  Give the search button an "onClick" attribute that points to this function:

  const handleSearch = async (value) => {
    // Perform axios API search (again, pseudocode):
    try {
      const response = await axios.get(`${rootURL}/${value});
      // Parse the response in whatever way you see fit
      dispatch(dispatchResponseToReducer(response)); // At this point, since the API call has been performed already and the results are back, we should just be able to 
                                                        pass the results to our regular, non-asynchronous reducer. If you find it's easier to just use createAsyncThunk, feel 
                                                        free to do that 🙂
    } catch (error) {
      // handle error...
    }
  }

  */

  return (
    <>
      <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to="/">OnThisDay</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 mt-2"
                aria-label="Search"
              />
              <Button variant="outline-primary mt-2">Search</Button>
            </Form>
            <Nav className="me-auto">
              <NavDropdown title="Filters" id="search-filter-options">
                Filter by Type:
                <NavDropdown.Item>[ ] All</NavDropdown.Item>
                <NavDropdown.Item>[ ] Events</NavDropdown.Item>
                <NavDropdown.Item>[ ] Deaths</NavDropdown.Item>
                <NavDropdown.Item>[ ] Births</NavDropdown.Item>
                Filter by Years:
                <NavDropdown.Item>From [ input field here ]</NavDropdown.Item>
                <NavDropdown.Item>To [ input field here ]</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-3">
        <Outlet />
        {/* Footer element goes here */}
      </Container>
    </>
  );
}
