import { render, screen } from '@testing-library/react';
import CommentsList from '../components/CommentList';
import { vi } from 'vitest';

vi.mock('../components/SingleComment', () => ({
  default: ({ comment }) => (
    <div style={{ borderBottom: '1px solid gray', padding: '5px' }}>
      <p><strong>Commento:</strong> {comment.comment}</p>
      <p><strong>Voto:</strong> {comment.rate}/5</p>
    </div>
  ),
}));

describe('CommentsList', () => {
  it('renders comments correctly', () => {
    const comments = [{ _id: 1, comment: 'Test comment', rate: 4 }];
    render(<CommentsList comments={comments} />);

    expect(screen.getByText('Test comment')).toBeInTheDocument();

    expect(screen.getByText('Voto:')).toBeInTheDocument();
expect(screen.getByText('4/5')).toBeInTheDocument();

      
  });

  it('shows no comments message when empty', () => {
    render(<CommentsList comments={[]} />);
    expect(screen.getByText('Nessun commento ancora.')).toBeInTheDocument();
  });
});
