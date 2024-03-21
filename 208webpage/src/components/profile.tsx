import React, { useState, useEffect } from 'react';
import axios, { AxiosInstance, AxiosError } from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

interface User {
  _id: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  zipcode?: string;
  city?: string;
}

interface ApiResponse {
  user: User;
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [axiosInstance] = useState<AxiosInstance>(() => {
    const instance = axios.create({
      baseURL: 'http://127.0.0.1:5100',
    });

    instance.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['token'] = token;
      }
      return config;
    });

    return instance;
  });

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await axiosInstance.get<ApiResponse>('/api/v1/users/current-user');
      setUser(response.data.user);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Error fetching user profile:', error.message);
        setError('Error fetching user profile: ' + error.message);
      } else {
        console.error('Unexpected error:', error);
        setError('An unexpected error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>User profile not found.</div>;
  }

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">User Profile</h2>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Card>
            <Card.Body>
              <Card.Title>{user.username}</Card.Title>
              <Card.Text>
                <strong>Email:</strong> {user.email}
              </Card.Text>
              {user.firstName && user.lastName && (
                <Card.Text>
                  <strong>Name:</strong> {`${user.firstName} ${user.lastName}`}
                </Card.Text>
              )}
              {user.zipcode && user.city && (
                <Card.Text>
                  <strong>Location:</strong> {`${user.city}, ${user.zipcode}`}
                </Card.Text>
              )}
              <Button variant="primary">Edit Profile</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;