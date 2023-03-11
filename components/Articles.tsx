import { Article } from '../site/app/api/articles/route';

const Articles = (props: { articles: Article[] }) => {
    return (
        <>
            {props.articles.map((article) => (
                <a href={article.link} key={article.link}>
                    {article.name}
                    {article.description}
                </a>
            ))}
        </>
    );
};

export default Articles;