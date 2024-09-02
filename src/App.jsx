import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainComp from "./MainComp";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MainComp></MainComp>
    </QueryClientProvider>
  );
}
export default App;
