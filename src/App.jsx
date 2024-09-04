import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Student from "./features/Student"

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Student/>
    </QueryClientProvider>
  );
}
export default App;
