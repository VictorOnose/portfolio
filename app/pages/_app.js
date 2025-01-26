import "../styles/globals.css";
import Layout from "../components/Layout";
export default function App({ Component, pageProps }) {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    return (<Layout>
        <Component {...pageProps} />
    </Layout>);
}