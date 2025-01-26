import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link"
export default function Projects() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {

        const fetchRepos = async () => {
            try {
                const response = await fetch("https://api.github.com/users/VictorOnose/repos");
                if (response.ok) {
                    const result = await response.json();
                    const starredRepos = result.filter((repo) => repo.stargazers_count > 0);
                    setRepos(starredRepos);
                } else {
                    console.error("Failed to fetch repositories:", response.statusText);
                }
            } catch (error) {
                console.error("Error fetching repositories:", error);
            }
        };

        fetchRepos();
    }, []);
    return (
        <div className="container mx-auto ">
            {repos.length === 0 ? (
                <p className="text-center text-gray-400">No starred repositories found.</p>
            ) : (
                <div className="mb-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {repos.map((repo) => (
                        <div className="transition transform hover:scale-105 hover:shadow-2xl projects-container flex justify-between h-full" key={repo.id}>
                            <div className="card bg-gray-800 text-gray-200 p-2 rounded shadow-lg">
                                <h3 className="flex-1 text-lg font-bold mb-2">{repo.name}</h3>
                                <p className="flex-1 mb-4">
                                    {repo.description || "No description available"}
                                </p>
                                <div className="flex-1 flex gap-2 justify-center">
                                    <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                        <Button className="flex-1 flex gap-4 justify-center mt-4 bg-blue-500 hover:bg-blue-600 text-white">
                                            Github Repo
                                        </Button>
                                    </Link>
                                    {repo.homepage && (
                                        <Link href={repo.homepage} target="_blank" rel="noopener noreferrer">
                                            <Button className="flex-1 flex gap-4 justify-center mt-4 bg-green-500 hover:bg-green-600 text-white">
                                                Website
                                            </Button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

}
