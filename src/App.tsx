import { GlobalProvider } from "./context/GlobalContext";
import AllRoutesProvider from "./routing/AllRoutes";
import AuthProvider from "./context/AuthProvider";

export default function App() {
  return (
      <AuthProvider>
        <GlobalProvider>
          <AllRoutesProvider />
        </GlobalProvider>
      </AuthProvider>
  )
}
