import { Button } from "./ui/button";
import { Input } from "./ui/input"
import { Label } from "./ui/label"

const LoginForm = () => {
  return (
    <form>
      <div>
        <Label htmlFor="email">Username</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="Password" />
      </div>
      <Button>Login</Button>
    </form>
  );
}
export default LoginForm