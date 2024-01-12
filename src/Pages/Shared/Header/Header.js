import React, { useEffect } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import useAuth from '../../../hooks/useAuth';
import './Header.css';
import { useApp } from '../../../context/AppContext';

const Header = () => {
  const { isInitialLoad, setIsInitialLoad } = useApp();

  const { userInfo, handleLogOut } = useAuth();

  const cart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  useEffect(() => {
    if (!isInitialLoad) return;
    setTimeout(() => {
      setIsInitialLoad(false);
    }, 5000);
  }, [isInitialLoad, setIsInitialLoad]);

  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      className='p-3'
      fixed='top'
    >
      <Container>
        <Link to='/'>
          <motion.div
            initial={isInitialLoad ? { x: '-100vw' } : {}}
            animate={isInitialLoad ? { x: '0' } : {}}
            transition={{
              delay: '0.1',
              type: 'spring',
              stiffness: 101,
            }}
          >
            {' '}
            <Navbar.Brand className='fs-3 fw-bolder fst-italic text-white'>
              <i className='fas fa-plane-slash'></i>&nbsp;FlyXDrone
            </Navbar.Brand>
          </motion.div>
        </Link>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <motion.div
          initial={isInitialLoad ? { x: '100vw' } : {}}
          animate={isInitialLoad ? { x: '0' } : {}}
          transition={{
            delay: '0.1',
            type: 'spring',
            stiffness: 101,
          }}
        >
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
              {userInfo?.displayName && (
                <Nav.Link className='me-2 fw-bold text-white'>
                  Signed in as: {userInfo?.displayName}
                </Nav.Link>
              )}

              <HashLink
                className='me-2 nav-link text-white'
                style={{ fontWeight: 'bold' }}
                to='/explore'
              >
                Store
              </HashLink>

              {userInfo?.email && (
                <Link to='/dashboard'>
                  <Button variant='primary' className='me-3 fw-bold'>
                    Dashboard
                  </Button>
                </Link>
              )}

              {userInfo?.email ? (
                <Link to='/'>
                  <Button
                    variant='warning'
                    className='me-3 mb-1'
                    onClick={() => handleLogOut()}
                  >
                    Logout
                  </Button>
                </Link>
              ) : (
                <Link to='/login'>
                  <Button variant='warning' className='me-3 '>
                    Sign in
                    <i className='fa fa-sign-in ps-2' aria-hidden='true'></i>
                  </Button>
                </Link>
              )}

              {/* {userInfo?.email &&
            <Link to="/">
              <Button
                variant="warning"
                className="me-3 mb-1"
                onClick={() => handleLogOut()}
              >
                Cart
              </Button>
            </Link>} */}

              {/* {
            <Link to="/cart">
              <Button
                variant="btn btn-light"
                className="me-3 mb-1 rounded-circle"
                style={{position: 'relative'}}   
              >
                <i class="fas fa-cart-arrow-down"></i>
                <span style={{position: 'absolute', bottom: '25px', color: 'white', right: '-5px'}}>5</span>
              </Button>
            </Link>} */}
              <Link to='/checkout'>
                <Button
                  variant='btn btn-light'
                  className='me-3 mb-1 rounded-circle '
                  style={{ position: 'relative' }}
                >
                  <i class='fas fa-cart-arrow-down'></i>
                  <Button
                    variant='btn btn-danger'
                    className=' rounded-circle btn-sm'
                    style={{
                      position: 'absolute',
                      bottom: '25px',
                      color: 'white',
                      right: '-10px',
                    }}
                  >
                    {getTotalQuantity() || 0}
                  </Button>
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </motion.div>
      </Container>
    </Navbar>
  );
};

export default Header;
