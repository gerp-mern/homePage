//<W_Comment>---------={ Book Interface }=----------</W_Comment>
export interface Book {
  id: number;
  title: string;
  description: string;
  highlight: string;
  imageUrl?: string;
  price: number;
  discountPrice?: number;
  isActive: boolean;
  createdAt: string;
  editedAt?: string;
  createdBy: {
    id: number;
    firstName: string;
    lastName?: string;
  };
}

//<W_Comment>---------={ Create Book Interface }=----------</W_Comment>
export interface CreateBookDto {
  title: string;
  description: string;
  highlight: string;
  imageUrl?: string;
  price: number;
  discountPrice?: number;
}

//<W_Comment>---------={ Update Book Interface }=----------</W_Comment>
export interface UpdateBookDto {
  title?: string;
  description?: string;
  highlight?: string;
  imageUrl?: string;
  price?: number;
  discountPrice?: number;
  isActive?: boolean;
}

//<W_Comment>---------={ Search Book Interface }=----------</W_Comment>
export interface BookSearchParams {
  search?: string;
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'ASC' | 'DESC';
  createdBy?: number;
  dateFrom?: string;
  dateTo?: string;
}

//<W_Comment>---------={ Response Book Interface }=----------</W_Comment>
export interface BookResponse {
  books: Book[];
  total: number;
  page: number;
  totalPages: number;
}
