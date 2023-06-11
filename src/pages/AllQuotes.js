import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTE = [
    { id: 'q1', author: 'Shirshak', text: 'Learning is fun' },
    { id: 'q2', author: 'Laxman', text: 'Console.log() is the best debugger' }
];

const AllQuotes = () => {

    return <QuoteList quotes={DUMMY_QUOTE} />;

}

export default AllQuotes;