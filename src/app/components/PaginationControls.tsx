import { FC } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalPosts: number;
  currentPage: number;
  postsPerPage: number;
}

const PaginationControls: FC<PaginationControlsProps> = ({ hasNextPage, hasPrevPage, totalPosts, currentPage, postsPerPage }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams as unknown as string);
    params.set('page', newPage.toString());
    router.replace(`/blog?${params.toString()}`);
  };

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${!hasPrevPage ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} disabled={!hasPrevPage}>
            Anterior
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => (
          <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </button>
          </li>
        ))}
        <li className={`page-item ${!hasNextPage ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} disabled={!hasNextPage}>
            Próximo
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationControls;
