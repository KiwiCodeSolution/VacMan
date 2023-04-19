import Button from "components/ui/button";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Page 404</h1>
      <p>Hey! You try to find something that does not exist!</p>
      <Button variant="black" clickFn={() => navigate(-1)}>
        Go back
      </Button>
    </div>
  );
}
