import React from 'react';
import Article from '../components/Article/Article';
import AddArticle from '../components/AddArticle/AddArticle';
import { connect } from 'react-redux';
// import * as actionTypes from '../store/actionTypes';
import { simulateHttpRequest } from '../store/actionCreators';

const Articles = ({ articles, saveArticle }) => {
	/* we got this as props */
	// const [ articles, setArticles ] = useState([
	// 	{ id: 1, title: 'post 1', body: 'Quisque cursus, metus vitae pharetra' },
	// 	{ id: 2, title: 'post 2', body: 'Quisque cursus, metus vitae pharetra' }
	// ]);
	// const saveArticle = (e) => {
	// 	e.preventDefautl();
	// };

	return (
		<div>
			<AddArticle saveArticle={saveArticle} />
			{articles.map((article) => <Article article={article} />)}
		</div>
	);
};

// get our state from the redux store
const mapStateToProps = (state) => {
	return {
		articles: state.articles
	};
};
const mappDispatchToProps = (dispatch) => {
	return {
		/* before implementing an actionCreator */
		// saveArticle: (article) => dispatch({ type: actionTypes.ADD_ARTICLE, articleData: { article } })
		saveArticle: (article) => dispatch(simulateHttpRequest(article))
	};
};

export default connect(mapStateToProps, mappDispatchToProps)(Articles);
