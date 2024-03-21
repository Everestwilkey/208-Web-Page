import React, { useState, useEffect } from 'react';
import axios, { AxiosInstance, AxiosError } from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
 // Import Bootstrap CSS

interface Post {
  _id: string;
  title: string;
  description: string;
  image?: string;
}

interface ApiResponse {
  posts: Post[];
}

interface PostWithKey extends Post {
  key: number;
}

const PostPage: React.FC = () => {
  const [posts, setPosts] = useState<PostWithKey[]>([]);
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
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await axiosInstance.get<ApiResponse>('/api/v1/posts');
      console.log('API response:', response.data);
      setPosts(response.data.posts.map((post, index): PostWithKey => ({ ...post, key: index })));
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Error fetching posts:', error.message);
        setError('Error fetching posts: ' + error.message);
      } else {
        console.error('Unexpected error:', error);
        setError('An unexpected error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const getPlaceholderImage = () => {
    return 'https://via.placeholder.com/300x200?text=Placeholder';
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Posts</h2>
      <Row>
        {posts.length === 0 ? (
          <Col className="text-center">
            <p>No posts found.</p>
          </Col>
        ) : (
          posts.map((post) => (
            <Col key={post.key} xs={12} md={6} lg={4} className="mb-4">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={post.image || getPlaceholderImage()}
                  alt={post.title}
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.description}</Card.Text>
                  <Button variant="primary" className="mt-auto">
                    View Post
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default PostPage;