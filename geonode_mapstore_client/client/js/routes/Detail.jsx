
import { connect } from 'react-redux';
import Home from '@js/routes/Home';


const DetailRoute = connect(() => ({ hideHero: true })
)((Home));

export default DetailRoute;