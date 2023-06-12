import { useParams } from "react-router-dom";
import { Fragment, useEffect } from "react";
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetail = () => {
    const params = useParams();
    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);
    const { quoteId } = params;
    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);



    if (status === "pending") {
        return <div className="centered">
            <LoadingSpinner />
        </div>
    }

    if (error) {
        return <p className="centered">{error}</p>
    }

    if (!loadedQuote) {
        return <p>No Quotes found!!!</p>
    }


    return <Fragment>
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
    </Fragment>

}

export default QuoteDetail;