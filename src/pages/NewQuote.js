import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuoteForm from "../components/quotes/QuoteForm"
import { addQuote } from '../lib/api';
import useHttp from '../hooks/use-http';
const NewQuote = () => {

    const { sendRequest, status } = useHttp(addQuote);

    const navigate = useNavigate();

    useEffect(() => {
        if (status === "completed") {
            navigate("/quotes")
        }
    }, [status,navigate])


    const addQuoteHandler = (quoteData) => {
        sendRequest(quoteData);
        navigate("/quotes");

    }
    return <QuoteForm isLoading = {status === "pending"} onAddQuote={addQuoteHandler} />
}

export default NewQuote;