import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin123') {
            setErrorMessage('');
            setShowMessage(true);
        } else {
            setErrorMessage('Thông tin đăng nhập không đúng');
            setShowMessage(true);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    };

    return (
        <Container>
            <Row >
                <Col xs={12} md={6}>
                    <h2 className="text-center mb-4">Đăng nhập</h2>
                    <Form>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                            {!username && showMessage && (
                                <Alert variant="danger" className="mt-2">
                                    Vui lòng nhập username
                                </Alert>
                            )}
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            {!password && showMessage && (
                                <Alert variant="danger" className="mt-2">
                                    Vui lòng nhập mật khẩu
                                </Alert>
                            )}
                        </Form.Group>

                        <Button variant="primary" onClick={handleLogin}>
                            Login
                        </Button>

                        {errorMessage && showMessage && (
                            <Alert variant="danger" className="mt-2">
                                {errorMessage}
                            </Alert>
                        )}

                        {username === 'admin' && showMessage && (
                            <Alert variant="success" className="mt-2">
                                Xin chào Admin
                            </Alert>
                        )}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginForm;