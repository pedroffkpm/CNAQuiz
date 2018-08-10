
import findProfile from '../components/help/findProfile';
import Head from '../components/head';

const Share = (props) => {
    const {id} = props;
    const profile = findProfile(id);
    const { title, img, text } = profile;

    return(
        <div>
            <Head title="Travel Quiz" ogTitle={title} description={text} appId='2050302261854131' url='https://travelquiz.herokuapp.com' ogImage={`https://travelquiz.herokuapp.com/static/images/${img}`} /> 
        </div>
    )
}

Share.getInitialProps = async (context) => {
    console.log(context)
    const { id } = context.query
    return { id }
}

export default Share