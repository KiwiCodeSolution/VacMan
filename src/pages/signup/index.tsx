import './styles.css';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTA4NTI5ZjFiNjk5YjQyYTdiZTY2NyIsImlhdCI6MTY3NjU1MTAwOX0.e-quTDPC3_tAlXj56KhZ173OraK6M18fYZD8LSfd32c';
export default function SignUpPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl">Sign Up Page</h1>
      <h2 className="mt-20">Имитация письма с сылкой подтверждения..</h2>
      <a className="bg-bg-grey" href={`http://127.0.0.1:5173/confirmEmail?token=${token}`}>
        Подтвердить email
      </a>
    </div>
  );
}
