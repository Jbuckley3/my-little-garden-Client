import { Link } from "react-router-dom";

export default function PlantSearchResult({ plantList }) {

    return (
        <div>
            {plantList.length && (
                <ul>
                    {plantList.map((p, idx) => (
                        <li key={idx}>
                            <Link to={`/${p.id}`}>{p.common_name}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

}