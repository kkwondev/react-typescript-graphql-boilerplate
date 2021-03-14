export default function useLogout() {
    const handleLogout = () => {
        localStorage.removeItem('Authorization');
        window.location.href="/signin"
    }
    return{
        handleLogout
    }
}