import Link from "next/link"

const NewsList = ({news}) => {
    return (
        <ul className='news-list'>
            {news.map(({ id, slug, title, image }) => {
                return <li key={id}>
                    <Link href={`/news/${slug}`}>
                        <img src={`/images/news/${image}`} alt={title} />
                        <span>{title}</span>
                    </Link>
                </li>
            })}

        </ul>
    )
}

export default NewsList