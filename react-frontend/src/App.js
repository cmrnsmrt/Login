import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const IndexContent = () => (
<div className="container mt-5">
      <h2 className="mb-4">Welcome</h2>
      <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod euismod malesuada. Donec sit amet facilisis orci. Quisque tincidunt pharetra bibendum. Pellentesque fermentum, turpis eget ullamcorper vulputate, nibh ligula facilisis risus, eu lobortis justo dui eget velit. Sed eu vehicula elit. Nam quis suscipit ante, nec ullamcorper risus. Curabitur venenatis, urna quis imperdiet ultricies, elit dolor fermentum dui, vel congue tellus enim sit amet mauris. Proin in accumsan odio. Nulla facilisi. Nulla facilisi. Integer euismod vestibulum orci, at tincidunt urna malesuada nec. Maecenas id felis vel libero varius cursus. Quisque congue nunc vel turpis fermentum, vitae tincidunt elit pharetra. Duis nec quam nec sapien imperdiet malesuada. Vivamus consectetur metus a facilisis varius. Nulla facilisi. In luctus, erat nec lacinia congue, elit est tincidunt purus, eget eleifend nunc sem vel dolor. Sed bibendum, quam in semper congue, erat justo condimentum libero, at luctus justo metus sit amet metus. Aenean non cursus justo. Maecenas bibendum eleifend tortor, vel blandit risus vehicula eu. Nam tincidunt pulvinar nunc, id consequat sapien luctus non. Vivamus id semper nunc. Sed auctor, ligula quis imperdiet bibendum, tortor libero vestibulum elit, nec fringilla dui neque ac turpis. Duis vitae lacus a nulla fermentum aliquet ac eu justo. Curabitur congue pharetra leo id luctus. Suspendisse nec malesuada nulla, at congue odio. Quisque vestibulum bibendum libero, at auctor nisi consectetur ut. Fusce vehicula ligula eu ante tincidunt, ac tincidunt metus ullamcorper. Ut in metus non dui rhoncus bibendum at id nulla. Nunc pharetra congue metus, non posuere tortor pulvinar sit amet. Integer eget risus eu velit feugiat luctus. Curabitur eu turpis et metus cursus tincidunt. Sed vel erat at purus dignissim lacinia eget in sem. Phasellus vitae tincidunt quam. Nulla facilisi. In hac habitasse platea dictumst. Nulla at sodales quam. Fusce id quam ac quam fermentum sodales. Curabitur at purus in est ullamcorper fringilla a id quam. Integer ut arcu vel mi tristique consequat. Morbi efficitur ex nec arcu malesuada, nec bibendum risus efficitur. Mauris a lacinia dolor. Sed nec nulla euismod, varius mi vel, posuere sem. Vivamus bibendum dui vel neque bibendum, sit amet interdum dolor consequat. Integer ut felis in orci auctor tristique. Vivamus laoreet ligula ac elit cursus, ac congue dolor dapibus.</p>
</div>
);

const App = () => {
  return (
    <Router>
      <div>
        <Navbar className="navbar-dark" bg="dark" expand="lg" style={{padding: "20px"}}>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/register" className="nav-link">
                Register
              </Link>
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/" element={<IndexContent />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
