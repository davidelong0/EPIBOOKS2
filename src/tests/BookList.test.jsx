import { render, screen, fireEvent } from '@testing-library/react';
import BookList from '../components/BookList';
import { vi } from 'vitest';

vi.mock('../components/SingleBook', () => ({
  default: ({ book, isSelected, onBookSelect }) => (
    <div
      data-testid={`book-${book.asin}`}
      className={`book ${isSelected ? 'selected' : ''}`}
      onClick={onBookSelect}
    >
      {book.title}
    </div>
  ),
}));

vi.mock('../components/CommentArea', () => ({
  default: ({ asin }) => <div>Commenti per il libro con asin: {asin}</div>,
}));

describe('BookList', () => {
  const mockBooks = [
    { asin: '1', title: 'Harry Potter' },
    { asin: '2', title: 'Lord of the Rings' },
  ];

  it('renders the BookList component and search input', () => {
    render(<BookList arrayOfBooks={mockBooks} />);
    
    expect(screen.getByPlaceholderText('Cerca un libro')).toBeInTheDocument();

    expect(screen.getByText('Harry Potter')).toBeInTheDocument();
    expect(screen.getByText('Lord of the Rings')).toBeInTheDocument();
  });

  it('filters books based on search input', () => {
    render(<BookList arrayOfBooks={mockBooks} />);
    
    fireEvent.change(screen.getByPlaceholderText('Cerca un libro'), {
      target: { value: 'Harry' },
    });

    expect(screen.getByText('Harry Potter')).toBeInTheDocument();
    expect(screen.queryByText('Lord of the Rings')).not.toBeInTheDocument();
  });

  it('selects a book and shows CommentArea', () => {
    render(<BookList arrayOfBooks={mockBooks} />);
    
    fireEvent.click(screen.getByTestId('book-1'));
    
    expect(screen.getByTestId('book-1')).toHaveClass('selected');
    
    expect(screen.getByText('Commenti per il libro con asin: 1')).toBeInTheDocument();
  });

  it('does not show CommentArea when no book is selected', () => {
    render(<BookList arrayOfBooks={mockBooks} />);
    
    expect(screen.getByText('Seleziona un libro per vedere i commenti')).toBeInTheDocument();
  });

  it('resets the border of the first book when the second book is selected', () => {
    render(<BookList arrayOfBooks={mockBooks} />);
    
    fireEvent.click(screen.getByTestId('book-1'));
    
    expect(screen.getByTestId('book-1')).toHaveClass('selected');
  
    fireEvent.click(screen.getByTestId('book-2'));
    
    expect(screen.getByTestId('book-2')).toHaveClass('selected');
    expect(screen.getByTestId('book-1')).not.toHaveClass('selected');
  });

  it('does not render SingleComment before a book is selected', () => {
    render(<BookList arrayOfBooks={mockBooks} />);
    
    expect(screen.queryByText('Commenti per il libro con asin: 1')).not.toBeInTheDocument();
  });
});

