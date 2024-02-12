import AuthProvider from "./auth/context/AuthProvider"
import AppRouter from "./routers/AppRouter"

const HerosApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}

export default HerosApp