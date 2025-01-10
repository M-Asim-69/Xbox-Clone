import Link from "next/link";

export default function Pagination({ page, totalPages }) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex justify-between mt-6">
      {page > 1 && (
        <Link
          href={`/Todo/${page - 1}`}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Previous
        </Link>
      )}
      <span className="text-white">{`Page ${page} of ${totalPages}`}</span>
      {page < totalPages && (
        <Link
          href={`/Todo/${page + 1}`}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Next
        </Link>
      )}
    </div>
  );
}
