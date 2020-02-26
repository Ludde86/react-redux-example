import React, { useState } from 'react';
import './AddArticle.css';

const AddArticle = ({ saveArticle }) => {
	const [ article, setArticle ] = useState();
	const handleArticleData = (e) => {
		setArticle({
			...article,
			[e.target.id]: e.target.value
		});
	};
	const addNewArticle = (e) => {
		e.preventDefault();
		saveArticle(article);
	};

	return (
		<form className="form-group add-article" onSubmit={addNewArticle}>
			<input className="form-control" type="text" id="title" placeholder="Title" onChange={handleArticleData} />
			<input className="form-control" type="text" id="body" placeholder="Body" onChange={handleArticleData} />
			<button className="btn btn-secondary btn-lg btn-block" type="submit">
				Add Article
			</button>
		</form>
	);
};

export default AddArticle;
