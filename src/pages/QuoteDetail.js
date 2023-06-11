import { useParams } from "react-router-dom";
import { Fragment } from "react";
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTE = [
    { id: 'q1', author: 'Shirshak', text: 'Learning is fun' },
    { id: 'q2', author: 'Laxman', text: 'Console.log() is the best debugger' }
];

const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTE.find((quote) => quote.id === params.quoteId);

    if (!quote) {
        return <p>No Quotes found!!!</p>
    }

    return <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author} />
    </Fragment>

}

export default QuoteDetail;