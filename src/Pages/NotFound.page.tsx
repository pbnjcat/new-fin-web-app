import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      404 Page Not Found
      <Link to='/'>Home</Link>
    </div>
  );
}
