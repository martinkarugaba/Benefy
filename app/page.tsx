import LoginForm from '@/components/LoginForm';
import RegisterParticipant from '@/components/RegisterParticipant';

export default function Home() {
  return (
    <main className="bg-accent h-screen flex flex-col items-center justify-center p-24">
      <RegisterParticipant />
    </main>
  );
}
